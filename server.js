const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();

// Kết nối MongoDB Atlas
const mongoURI = "mongodb+srv://admin:Daibang%4095@cocaplanner.i0px7ya.mongodb.net/CocaPlannerDB?retryWrites=true&w=majority&appName=CocaPlanner";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Schema cho Lịch trình
const planSchema = new mongoose.Schema({
    planData: { type: Object, required: true },
    createdAt: { type: Date, default: Date.now, expires: '30d' } // Tự động xóa sau 30 ngày để tiết kiệm dung lượng
});
const Plan = mongoose.model('Plan', planSchema);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public', {
    etag: false,
    maxAge: 0,
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
    }
}));

// Khởi tạo Gemini AI Client
// Sẽ tự động lấy API key từ file .env (GEMINI_API_KEY)
const ai = new GoogleGenAI({});

app.post('/api/generate-plan', async (req, res) => {
    try {
        const data = req.body;
        
        // Tạo Prompt chuyên gia
        const langStr = data.language === 'en' ? 'ENGLISH (All content MUST be in English)' : 'VIETNAMESE (Tất cả kết quả phải bằng Tiếng Việt)';
        const prompt = `Bạn là một chuyên gia thiết kế tour du lịch cao cấp.
Ngôn ngữ trả về bắt buộc: ${langStr}.
Hãy lập một kế hoạch du lịch cực kỳ chi tiết tới: ${data.destination}.
Thông tin chuyến đi:
- Mục đích: ${data.purpose}
- Số người lớn: ${data.adults}, Trẻ em: ${data.children || 0}
- Ngân sách mỗi người: ${data.budget} VND
- Ngày đi: ${data.startDate || 'Không rõ'}
- Độ dài chuyến đi: ${data.days || 3} ngày
        
YÊU CẦU QUAN TRỌNG: 
1. TRẢ VỀ DUY NHẤT 1 ĐỐI TƯỢNG JSON THEO FORMAT BÊN DƯỚI.
2. KHÔNG BAO GỒM BẤT KỲ VĂN BẢN NÀO KHÁC NGOÀI JSON. KHÔNG DÙNG MARKDOWN BLOCK (\`\`\`json).
3. ĐẢM BẢO JSON HỢP LỆ VÀ CÁC THUỘC TÍNH SỐ PHẢI LÀ SỐ NGUYÊN (KHÔNG CÓ DẤU PHẨY).

{
  "overview": {
    "description": "Đoạn văn khoảng 250 từ giới thiệu về điểm đến, trải nghiệm tổng quan phù hợp với mục đích chuyến đi...",
    "weather": "Thông tin thời tiết và lời khuyên trang phục...",
    "events": ["Sự kiện/lễ hội 1", "Sự kiện/lễ hội 2"]
  },
  "visa": {
    "status": "Cần Visa / Miễn Visa / Cần Giấy tờ tùy thân",
    "details": "Giải thích chi tiết về thủ tục, hồ sơ cần chuẩn bị (có thể dùng HTML cơ bản như <strong>, <p>, <ul>, <li> để format)."
  },
  "itinerary": [
    {
      "day": 1,
      "title": "Tên chủ đề của ngày",
      "activities": [
        { "session": "Sáng/Trưa/Chiều/Tối", "timeRange": "09:00 - 11:00", "title": "Tên hoạt động", "desc": "Mô tả chi tiết...", "lat": 21.028511, "lng": 105.804817 }
      ]
    }
  ],
  "places": {
    "hotels": [
      { "name": "Tên Khách sạn/Resort", "rating": "4 sao / Gia đình / Tiết kiệm", "price": "1.500.000đ/đêm", "desc": "Lý do chọn, view, tiện ích...", "lat": 21.028511, "lng": 105.804817 }
    ], // Yêu cầu trả về ít nhất 4 lựa chọn lưu trú ở các phân khúc khác nhau. BẮT BUỘC có tọa độ lat, lng.
    "foods": [
      { "name": "Tên Quán ăn/Nhà hàng", "type": "Ăn sáng/Trưa/Tối/Cafe", "price": "150.000đ", "desc": "Mô tả hương vị, địa chỉ...", "lat": 21.028511, "lng": 105.804817 }
    ] // Yêu cầu trả về ít nhất 8 lựa chọn ăn uống đa dạng. BẮT BUỘC có tọa độ lat, lng.
  },
  "cost": [
    { "item": "Vé máy bay khứ hồi (Bắt buộc nếu đi xa)", "detail": "Hãng bay dự kiến", "price": 5000000 },
    { "item": "Phí xin Visa (Bắt buộc nếu có)", "detail": "Lệ phí ĐSQ / Dịch vụ", "price": 1000000 },
    { "item": "Lưu trú", "detail": "X đêm", "price": 1500000 },
    { "item": "Ăn uống", "detail": "Y ngày", "price": 1000000 },
    { "item": "Di chuyển tại điểm đến", "detail": "Ưu tiên phương tiện công cộng (MRT, Tàu điện, Bus) để tiết kiệm", "price": 500000 },
    { "item": "Vé tham quan & Vui chơi", "detail": "Các điểm đến nổi bật", "price": 1000000 }
  ],
  "currencyCode": "Mã tiền tệ của điểm đến (Ví dụ: JPY, THB, USD, SGD, VND... Bắt buộc phải là mã 3 chữ cái chuẩn ISO)"
}
Chú ý: 
1. Các mức giá (price) trong mảng 'cost' BẮT BUỘC phải là SỐ NGUYÊN (number), tính trên 1 người. VD: 2000000. Không dùng chuỗi string.
2. BẮT BUỘC phải đưa chi phí vé máy bay khứ hồi và phí Visa (nếu điểm đến yêu cầu) vào dự toán.
3. Khi di chuyển tại điểm đến, luôn ưu tiên các phương tiện công cộng giá rẻ như MRT, tàu điện ngầm, hoặc xe buýt thay vì taxi hay xe đưa đón riêng để tiết kiệm chi phí.
4. TÍCH HỢP TÌM KIẾM: Hãy tìm kiếm thông tin trên Internet để lấy thông tin giá phòng khách sạn và giá nhà hàng/quán ăn thực tế, sát với thời điểm hiện tại nhất (không tự bịa giá).`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }]
            }
        });

        // Xử lý dữ liệu trả về để parse JSON
        let text = response.text || '';
        // Làm sạch Markdown JSON block nếu AI cố tình trả về
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const planData = JSON.parse(text);

        res.json(planData);

    } catch (error) {
        console.error("Lỗi khi tạo lịch trình AI:", error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại.' });
    }
});

// Endpoint dùng cho việc User tự insert lịch trình (AI research mô tả)
app.post('/api/research-activity', async (req, res) => {
    try {
        const { destination, session, timeRange, title, language } = req.body;
        const langStr = language === 'en' ? 'ENGLISH (Must be in English)' : 'VIETNAMESE (Bắt buộc bằng Tiếng Việt)';
        
        const prompt = `Viết một đoạn mô tả cực kỳ hấp dẫn, chân thực và súc tích (tối đa 3 câu) cho hoạt động tham quan/ăn uống tại: "${title}".
Ngôn ngữ bắt buộc: ${langStr}.
Điểm đến: ${destination}.
Thời gian dự kiến: ${session} (${timeRange}).
YÊU CẦU QUAN TRỌNG:
1. TRẢ VỀ DUY NHẤT 1 ĐỐI TƯỢNG JSON CÓ TRƯỜNG "desc", "lat" và "lng" (tọa độ của địa điểm).
2. KHÔNG DÙNG MARKDOWN BLOCK (\`\`\`json).
VD: { "desc": "Thưởng thức ly cà phê ấm nóng và ngắm nhìn...", "lat": 21.028511, "lng": 105.804817 }`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }]
            }
        });

        let text = response.text || '';
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(text);
        
        res.json(data);
    } catch (error) {
        console.error("Lỗi khi research activity:", error);
        res.status(500).json({ error: 'Không thể phân tích hoạt động này.' });
    }
});

// Endpoint dùng để dịch nguyên xi một bản kế hoạch đang có sang ngôn ngữ mới
app.post('/api/translate-plan', async (req, res) => {
    try {
        const { planData, targetLanguage } = req.body;
        const langStr = targetLanguage === 'en' ? 'ENGLISH' : 'VIETNAMESE';
        
        const prompt = `Dưới đây là một kế hoạch du lịch bằng định dạng JSON.
Hãy dịch TOÀN BỘ các giá trị văn bản (string) trong JSON này sang ngôn ngữ: ${langStr}.
YÊU CẦU QUAN TRỌNG:
1. GIỮ NGUYÊN 100% cấu trúc JSON, giữ nguyên các mảng, các khóa (keys).
2. GIỮ NGUYÊN các giá trị số (như tọa độ lat, lng, day, ngân sách).
3. KHÔNG THAY ĐỔI nội dung địa điểm, không bịa thêm lịch trình. Trình tự từ A sang B phải y hệt như cũ, chỉ dịch chữ.
4. TRẢ VỀ DUY NHẤT 1 ĐỐI TƯỢNG JSON HỢP LỆ, KHÔNG BAO GỒM MARKDOWN BLOCK (\`\`\`json).

JSON GỐC:
${JSON.stringify(planData)}
`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        let text = response.text || '';
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const translatedData = JSON.parse(text);
        
        res.json(translatedData);
    } catch (error) {
        console.error("Lỗi khi dịch bản kế hoạch:", error);
        res.status(500).json({ error: 'Lỗi khi dịch bản kế hoạch.' });
    }
});

// Endpoint dùng để kéo ảnh từ Unsplash
app.post('/api/image', async (req, res) => {
    try {
        const { query } = req.body;
        // Unsplash API Key từ user
        const unsplashKey = "1fP-nn2pZ4hUUnQEUjZAcGW-DPf57G0J37qv9iIJzBg";
        const url = `https://api.unsplash.com/search/photos?page=1&per_page=1&query=${encodeURIComponent(query)}&orientation=landscape&client_id=${unsplashKey}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            res.json({ imageUrl: data.results[0].urls.regular });
        } else {
            res.json({ imageUrl: "" });
        }
    } catch (error) {
        console.error("Lỗi khi kéo ảnh Unsplash:", error);
        res.json({ imageUrl: "" });
    }
});

// Endpoint kéo thời tiết từ OpenWeatherMap
app.post('/api/weather', async (req, res) => {
    try {
        const { city, lang } = req.body;
        const weatherKey = "f006aa73a0d6d53bf76f72cf9f6d34d8";
        const langCode = lang === 'en' ? 'en' : 'vi';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${weatherKey}&units=metric&lang=${langCode}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.main && data.weather) {
            res.json({
                temp: Math.round(data.main.temp),
                description: data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            });
        } else {
            res.json({ error: "No data" });
        }
    } catch (error) {
        console.error("Lỗi thời tiết:", error);
        res.json({ error: error.message });
    }
});

// Endpoint lưu kế hoạch vào MongoDB
app.post('/api/save-plan', async (req, res) => {
    try {
        const { planData } = req.body;
        const newPlan = new Plan({ planData });
        const savedPlan = await newPlan.save();
        res.json({ id: savedPlan._id });
    } catch (err) {
        console.error("Lỗi khi lưu kế hoạch:", err);
        res.status(500).json({ error: "Không thể lưu kế hoạch" });
    }
});

// Endpoint lấy kế hoạch từ MongoDB
app.get('/api/plan/:id', async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (plan) {
            res.json({ planData: plan.planData });
        } else {
            res.status(404).json({ error: "Không tìm thấy kế hoạch" });
        }
    } catch (err) {
        console.error("Lỗi khi lấy kế hoạch:", err);
        res.status(500).json({ error: "Lỗi hệ thống" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running beautifully on http://localhost:${PORT}`);
});
