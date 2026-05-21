window.currentPlanData = null;
window.placesMap = null;
window.itineraryMap = null;
window.currentLang = 'vi';

const translations = {
    vi: {
        pageTitle: "Coca Planner - Chuyên Gia Lên Kế Hoạch Du Lịch",
        heroSubtitle: "Chuyên gia AI giúp bạn lên kế hoạch du lịch hoàn chỉnh, thực tế và tối ưu nhất.",
        btnStart: "Bắt Đầu Lên Kế Hoạch",
        formTitle: "Cung cấp thông tin chuyến đi",
        qDestination: "Bạn muốn đi đâu?",
        pDestination: "VD: Đà Lạt, Nha Trang, Tokyo...",
        qDeparture: "Bạn xuất phát từ đâu?",
        pDeparture: "VD: TP.HCM, Hà Nội...",
        qDuration: "Thời gian chuyến đi?",
        lStartDate: "Ngày đi",
        lEndDate: "Ngày về",
        qPeople: "Có bao nhiêu người đi?",
        lAdults: "Người lớn",
        pAdults: "Từ 12 tuổi",
        lChildren: "Trẻ em",
        pChildren: "Dưới 12 tuổi",
        qBudget: "Ngân sách dự kiến / người (VNĐ)?",
        pBudget: "VD: 5,000,000",
        hBudget: "Nhập số tiền ước tính cho 1 người (đã bao gồm vé xe/máy bay).",
        qPurpose: "Mục đích chuyến đi?",
        optPurposeDefault: "Chọn mục đích",
        optPurpose1: "Công tác",
        optPurpose2: "Nghỉ dưỡng",
        optPurpose3: "Tham quan",
        optPurpose4: "Khám phá",
        qPreferences: "Sở thích hoặc lưu ý đặc biệt?",
        pPreferences: "VD: Thích ăn hải sản, không leo núi, bị say xe...",
        btnBack: "Quay lại",
        btnNext: "Tiếp theo",
        btnSubmit: "Tạo Kế Hoạch",
        loadingTitle: "Đang phân tích dữ liệu...",
        loadingSub: "Đang lên kế hoạch chuyến đi...",
        explorePrefix: "Khám Phá",
        btnICS: "Xuất Lịch",
        btnPDF: "Tải PDF",
        btnRestart: "Làm lại",
        daysLabel: "ngày",
        peopleLabel: "người",
        perPersonLabel: "người",
        btnSkyscanner: "Skyscanner",
        btnTrip: "Trip.com",
        btnBooking: "Booking.com",
        btnKlook: "Klook",
        tabOverview: "Tổng Quan & Thời Tiết",
        tabVisa: "Tư Vấn Visa / Giấy Tờ",
        tabItinerary: "Lịch Trình Chi Tiết",
        tabPlaces: "Lưu Trú & Ẩm Thực",
        tabCost: "Dự Toán Chi Phí",
        tabHandbook: "Sổ Tay",
        titleOverview: "Tổng Quan Điểm Đến",
        titleWeather: "Thời Điểm & Thời Tiết",
        titleEvents: "Sự Kiện Nổi Bật",
        titleVisa: "Thông Tin Visa & Giấy Tờ",
        titleHotels: "Gợi Ý Lưu Trú",
        titleFoods: "Gợi Ý Ẩm Thực",
        titleCost: "Bảng Dự Toán Chi Phí Tối Ưu",
        liveRateTitle: "Tỷ giá tham khảo (Live):",
        thItem: "Hạng Mục",
        thDetail: "Chi Tiết",
        thPrice: "Chi Phí / Người",
        thTotal: "Tổng Cộng Ước Tính",
        titleHandbook: "SỔ TAY DU LỊCH",
        modalTitle: "Thêm Hoạt Động Mới",
        modalTitleInput: "Tiêu đề / Địa điểm",
        pModalTitle: "VD: Tham quan bảo tàng Louvre",
        modalSession: "Buổi",
        sessMorning: "Sáng",
        sessNoon: "Trưa",
        sessAfternoon: "Chiều",
        sessEvening: "Tối",
        modalTime: "Thời gian",
        btnCancel: "Hủy",
        btnSave: "Lưu (AI Tự Động Mô Tả)"
    },
    en: {
        pageTitle: "Coca Planner - AI Travel Expert",
        heroSubtitle: "Your AI expert for creating complete, practical, and optimized travel itineraries.",
        btnStart: "Start Planning",
        formTitle: "Provide your trip details",
        qDestination: "Where do you want to go?",
        pDestination: "E.g: Da Lat, Nha Trang, Tokyo...",
        qDeparture: "Where are you departing from?",
        pDeparture: "E.g: HCMC, Hanoi...",
        qDuration: "Trip duration?",
        lStartDate: "Start Date",
        lEndDate: "End Date",
        qPeople: "How many people are going?",
        lAdults: "Adults",
        pAdults: "12+ years",
        lChildren: "Children",
        pChildren: "Under 12",
        qBudget: "Estimated Budget / Person (VND)?",
        pBudget: "E.g: 5,000,000",
        hBudget: "Enter estimated amount for 1 person (including transport).",
        qPurpose: "Purpose of the trip?",
        optPurposeDefault: "Select purpose",
        optPurpose1: "Business",
        optPurpose2: "Relaxation",
        optPurpose3: "Sightseeing",
        optPurpose4: "Exploration",
        qPreferences: "Preferences or special notes?",
        pPreferences: "E.g: Love seafood, no hiking, motion sickness...",
        btnBack: "Back",
        btnNext: "Next",
        btnSubmit: "Generate Plan",
        loadingTitle: "Analyzing data...",
        loadingSub: "Creating your travel plan...",
        explorePrefix: "Explore",
        btnICS: "Export ICS",
        btnPDF: "Download PDF",
        btnRestart: "Start Over",
        daysLabel: "days",
        peopleLabel: "people",
        perPersonLabel: "person",
        btnSkyscanner: "Skyscanner",
        btnTrip: "Trip.com",
        btnBooking: "Booking.com",
        btnKlook: "Klook",
        tabOverview: "Overview & Weather",
        tabVisa: "Visa & Docs",
        tabItinerary: "Detailed Itinerary",
        tabPlaces: "Stays & Food",
        tabCost: "Estimated Cost",
        tabHandbook: "Handbook",
        titleOverview: "Destination Overview",
        titleWeather: "Best Time & Weather",
        titleEvents: "Notable Events",
        titleVisa: "Visa & Document Info",
        titleHotels: "Accommodation Suggestions",
        titleFoods: "Culinary Suggestions",
        titleCost: "Cost Estimation Table",
        liveRateTitle: "Live Exchange Rate:",
        thItem: "Category",
        thDetail: "Details",
        thPrice: "Cost / Person",
        thTotal: "Total Estimated",
        titleHandbook: "TRAVEL HANDBOOK",
        modalTitle: "Add New Activity",
        modalTitleInput: "Title / Location",
        pModalTitle: "E.g: Visit Louvre Museum",
        modalSession: "Session",
        sessMorning: "Morning",
        sessNoon: "Noon",
        sessAfternoon: "Afternoon",
        sessEvening: "Evening",
        modalTime: "Time",
        btnCancel: "Cancel",
        btnSave: "Save (AI Description)"
    }
};

function updateLanguage(lang) {
    window.currentLang = lang;
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', async (e) => {
            const newLang = e.target.value;
            const oldLang = window.currentLang;
            
            // Nếu đang ở màn hình kết quả, cần AI dịch lại
            if (window.currentPlanData && document.getElementById('result-page').classList.contains('active')) {
                const confirmMsg = newLang === 'en' 
                    ? "Changing language requires the AI to translate your entire itinerary. Do you want to proceed?" 
                    : "Đổi ngôn ngữ yêu cầu AI phải dịch lại toàn bộ lịch trình. Bạn có muốn tiếp tục không?";
                if (confirm(confirmMsg)) {
                    // Show loading UI
                    updateLanguage(newLang);
                    initDatePickers(newLang);
                    views.result.classList.remove('active');
                    views.loading.classList.add('active');
                    
                    try {
                        const res = await fetch('/api/translate-plan', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ 
                                planData: window.currentPlanData, 
                                targetLanguage: newLang 
                            })
                        });
                        const data = await res.json();
                        
                        if (data.error) throw new Error(data.error);
                        
                        // Cập nhật lại dữ liệu và render
                        window.currentPlanData = data;
                        renderDashboard(window.currentPlanData);
                        
                        views.loading.classList.remove('active');
                        views.result.classList.add('active');
                    } catch(err) {
                        alert("Lỗi khi dịch: " + err.message);
                        views.loading.classList.remove('active');
                        views.result.classList.add('active');
                        // Hoàn tác
                        langSelect.value = oldLang;
                        updateLanguage(oldLang);
                        initDatePickers(oldLang);
                    }
                } else {
                    // Hoàn tác
                    e.target.value = oldLang;
                }
            } else {
                updateLanguage(newLang);
                initDatePickers(newLang);
            }
        });
    }

    // Init Date Pickers
    function initDatePickers(lang) {
        flatpickr("#start-date", {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "d/m/Y",
            minDate: "today",
            locale: lang === 'vi' ? "vn" : "default"
        });
        flatpickr("#end-date", {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "d/m/Y",
            minDate: "today",
            locale: lang === 'vi' ? "vn" : "default"
        });
    }
    initDatePickers(window.currentLang);

    // DOM Elements
    const views = {
        landing: document.getElementById('landing-page'),
        form: document.getElementById('form-page'),
        loading: document.getElementById('loading-page'),
        result: document.getElementById('result-page')
    };

    // Format budget input with commas
    const budgetInput = document.getElementById('budget');
    if (budgetInput) {
        budgetInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            if(value !== '') {
                this.value = parseInt(value, 10).toLocaleString('en-US');
            } else {
                this.value = '';
            }
        });
    }

    // Navigation logic
    const switchView = (viewName) => {
        Object.values(views).forEach(v => v.classList.remove('active'));
        views[viewName].classList.add('active');
        window.scrollTo(0, 0);
    };

    document.getElementById('start-btn').addEventListener('click', () => switchView('form'));
    document.getElementById('restart-btn').addEventListener('click', () => {
        document.getElementById('travel-form').reset();
        currentStep = 1;
        updateFormView();
        switchView('form');
    });

    // Form Logic
    const formGroups = document.querySelectorAll('.form-group');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.getElementById('form-progress');
    let currentStep = 1;
    const totalSteps = formGroups.length;

    const updateFormView = () => {
        formGroups.forEach(group => {
            if (parseInt(group.dataset.step) === currentStep) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });

        progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

        if (currentStep === 1) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        if (currentStep === totalSteps) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    };

    nextBtn.addEventListener('click', () => {
        // Simple validation
        const currentInput = document.querySelector(`.form-group[data-step="${currentStep}"]`).querySelector('input, select, textarea');
        if (currentInput && currentInput.hasAttribute('required') && !currentInput.value) {
            alert('Vui lòng điền thông tin trước khi tiếp tục!');
            return;
        }
        if (currentStep < totalSteps) {
            currentStep++;
            updateFormView();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateFormView();
        }
    });

    // Form Submit & Generate Plan
    document.getElementById('travel-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Collect Data
        const startDateStr = document.getElementById('start-date').value;
        const endDateStr = document.getElementById('end-date').value;
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

        if (days <= 0) {
            alert('Lỗi: Ngày về phải sau hoặc cùng ngày với Ngày đi. Vui lòng chọn lại!');
            return;
        }

        const formData = {
            language: window.currentLang,
            destination: document.getElementById('destination').value,
            departure: document.getElementById('departure').value,
            days: days,
            startDate: startDateStr,
            endDate: endDateStr,
            adults: parseInt(document.getElementById('adults').value),
            children: parseInt(document.getElementById('children').value) || 0,
            budget: parseInt(document.getElementById('budget').value.replace(/,/g, '')),
            purpose: document.getElementById('purpose').value,
            preferences: document.getElementById('preferences').value
        };

        switchView('loading');

        // Call Backend AI
        try {
            const response = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error('API Error');
            const planData = await response.json();
            
            // Đảm bảo dữ liệu form đầu vào được giữ lại để render
            planData.input = formData; 
            window.currentPlanData = planData;
            
            renderDashboard(planData);
            switchView('result');
        } catch (error) {
            console.error(error);
            alert("Lỗi khi kết nối với AI. Vui lòng kiểm tra lại server Node.js hoặc API Key.");
            switchView('form');
        }
    });

    // --- Mock Data Generator Removed (Moved to Backend) ---


    // --- Render Logic ---
    const formatMoney = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const formatPriceString = (str) => {
        if (!str) return '';
        if (!isNaN(str)) return formatMoney(Number(str));
        return str.replace(/\d{4,}/g, match => {
            return new Intl.NumberFormat('vi-VN').format(match);
        });
    };

    const renderDashboard = (data) => {
        // Banner info
        document.getElementById('res-destination').textContent = data.input.destination;
        document.getElementById('res-date').textContent = data.input.startDate || 'Thời gian sắp tới';
        document.getElementById('res-days').textContent = data.input.days;
        document.getElementById('res-people').textContent = data.input.adults + data.input.children;
        document.getElementById('res-budget').textContent = formatMoney(data.input.budget);
        document.getElementById('res-purpose').textContent = data.input.purpose;

        // Overview
        document.getElementById('overview-text').textContent = data.overview.description;
        document.getElementById('weather-text').textContent = data.overview.weather;
        document.getElementById('events-list').innerHTML = data.overview.events.map(e => `<li>${e}</li>`).join('');

        // Setup Affiliate Links
        const destQuery = encodeURIComponent(data.input.destination);
        const sd = data.input.startDate || '';
        const ed = data.input.endDate || '';
        
        document.getElementById('link-skyscanner').href = `https://www.skyscanner.com/transport/flights-from/vn/?destination=${destQuery}&depart=${sd}&return=${ed}`;
        document.getElementById('link-tripcom').href = `https://vn.trip.com/hotels/list?city=1&cityName=${destQuery}&checkin=${sd}&checkout=${ed}`;
        document.getElementById('link-booking').href = `https://www.booking.com/searchresults.html?ss=${destQuery}&checkin=${sd}&checkout=${ed}`;
        document.getElementById('link-klook').href = `https://klook.tpx.lv/Z2t2ILK7`;

        // Tab: Visa
        document.getElementById('visa-content').innerHTML = `
            <h4 style="color: var(--primary-color); margin-bottom: 10px;">Trạng thái: ${data.visa.status}</h4>
            <div style="font-size: 0.95rem;">${data.visa.details}</div>
        `;

        // Itinerary Timeline
        window.renderItinerary();

        // Places (Hotels & Food)
        const hotelImgs = [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&auto=format&fit=crop'
        ];
        document.getElementById('hotel-content').innerHTML = data.places.hotels.map((h, i) => {
            const img = h.img || hotelImgs[i % hotelImgs.length];
            return `
            <div class="place-card">
                <div class="place-img"><img src="${img}" alt="${h.name}"> <span class="place-badge">${h.rating}</span></div>
                <div class="place-info">
                    <h4>${h.name}</h4>
                    <p>${h.desc}</p>
                    <div class="place-price">${formatPriceString(h.price)}</div>
                </div>
            </div>
        `}).join('');

        const foodImgs = [
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop'
        ];
        document.getElementById('food-content').innerHTML = data.places.foods.map((f, i) => {
            const img = f.img || foodImgs[i % foodImgs.length];
            return `
            <div class="place-card">
                <div class="place-img"><img src="${img}" alt="${f.name}"> <span class="place-badge">${f.type}</span></div>
                <div class="place-info">
                    <h4>${f.name}</h4>
                    <p>${f.desc}</p>
                    <div class="place-price">${formatPriceString(f.price)}</div>
                </div>
            </div>
        `}).join('');

        // Khởi tạo bản đồ
        if (window.placesMap) {
            window.placesMap.remove();
        }
        window.placesMap = L.map('places-map').setView([16.047079, 108.206230], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(window.placesMap);

        const bounds = [];
        data.places.hotels.forEach(h => {
            if(h.lat && h.lng) {
                L.marker([h.lat, h.lng]).addTo(window.placesMap)
                    .bindPopup(`<b>${h.name}</b><br>${h.rating}<br>${formatPriceString(h.price)}`);
                bounds.push([h.lat, h.lng]);
            }
        });
        data.places.foods.forEach(f => {
            if(f.lat && f.lng) {
                L.marker([f.lat, f.lng]).addTo(window.placesMap)
                    .bindPopup(`<b>${f.name}</b><br>${f.type}<br>${formatPriceString(f.price)}`);
                bounds.push([f.lat, f.lng]);
            }
        });
        if (bounds.length > 0) {
            window.placesMap.fitBounds(bounds, { padding: [20, 20] });
        }

        // Cost Table
        let totalSum = 0;
        document.getElementById('cost-table-body').innerHTML = data.cost.map(c => {
            totalSum += c.price;
            return `
            <tr>
                <td><strong>${c.item}</strong></td>
                <td>${c.detail}</td>
                <td>${formatMoney(c.price)}</td>
            </tr>
        `}).join('');
        let overBudgetHtml = '';
        if (totalSum > data.input.budget) {
            overBudgetHtml = ` <span style="background-color: var(--danger, #ff4757); color: white; font-size: 0.8rem; padding: 4px 8px; border-radius: 20px; vertical-align: text-bottom; margin-left: 8px; white-space: nowrap; display: inline-block;">Vượt hạn mức</span>`;
        }
        document.getElementById('total-cost').innerHTML = formatMoney(totalSum) + overBudgetHtml;

        // Currency logic
        const targetCurrency = data.currencyCode ? data.currencyCode.toLowerCase() : '';
        const currencyContainer = document.getElementById('currency-exchange');
        if (targetCurrency && targetCurrency !== 'vnd') {
            currencyContainer.style.display = 'block';
            document.getElementById('live-rate').textContent = `Đang tải tỷ giá ${targetCurrency.toUpperCase()}...`;
            fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/vnd.json')
                .then(res => res.json())
                .then(json => {
                    if (json.vnd && json.vnd[targetCurrency]) {
                        const rate = json.vnd[targetCurrency];
                        const foreignTotal = totalSum * rate;
                        document.getElementById('live-rate').textContent = `1 VND = ${rate.toFixed(6)} ${targetCurrency.toUpperCase()} | Tổng: ~${new Intl.NumberFormat('en-US', { style: 'currency', currency: targetCurrency.toUpperCase() }).format(foreignTotal)}`;
                    } else {
                        currencyContainer.style.display = 'none';
                    }
                })
                .catch(() => {
                    currencyContainer.style.display = 'none';
                });
        } else {
            currencyContainer.style.display = 'none';
        }

        // Handbook (Step 8)
        document.getElementById('hb-destination').textContent = data.input.destination.toUpperCase();
        document.getElementById('hb-date-people').textContent = `${data.input.days} Ngày | ${data.input.adults + data.input.children} Người | Từ: ${data.input.departure}`;
        
        document.getElementById('handbook-content').innerHTML = data.itinerary.map(day => {
            let mapLink = '';
            if (day.activities.length > 0) {
                const dest = data.input.destination;
                if (day.activities.length === 1) {
                    mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.activities[0].title + ' ' + dest)}`;
                } else {
                    const origin = encodeURIComponent(day.activities[0].title + ' ' + dest);
                    const destination = encodeURIComponent(day.activities[day.activities.length - 1].title + ' ' + dest);
                    const waypoints = day.activities.slice(1, -1).map(a => encodeURIComponent(a.title + ' ' + dest)).join('|');
                    mapLink = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints ? '&waypoints=' + waypoints : ''}`;
                }
            }
            return `
            <div class="handbook-page">
                <h3 class="hb-day-title">NGÀY ${day.day}: ${day.title.toUpperCase()}</h3>
                ${day.activities.map(act => `
                    <div class="hb-row">
                        <div class="hb-time">${act.time || act.timeRange || ''}</div>
                        <div class="hb-action">
                            <strong>${act.title}</strong><br>
                            <span style="color: #666">${act.desc}</span>
                        </div>
                    </div>
                `).join('')}
                ${mapLink ? `<div style="margin-top: 15px; text-align: center;"><a href="${mapLink}" target="_blank" class="secondary-btn no-print" style="display: inline-block; text-decoration: none; font-size: 0.9rem; padding: 8px 15px;"><i class="fa-solid fa-map-location-dot"></i> Mở lộ trình trên Google Maps</a></div>` : ''}
                <div style="margin-top: 15px; border-top: 1px dashed #ccc; padding-top: 10px;">
                    <em>Chi phí dự kiến hôm nay: ~${formatMoney(data.input.budget / data.input.days)}</em>
                </div>
            </div>
            `;
        }).join('') + `
            <div class="hb-important">
                <h3 style="color: var(--danger); margin-bottom: 10px;">THÔNG TIN QUAN TRỌNG</h3>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 5px;"><strong>Ngân sách tổng:</strong> ${formatMoney(totalSum)} / người</li>
                    <li style="margin-bottom: 5px;"><strong>Khách sạn:</strong> Vui lòng check-in lúc 14:00</li>
                    <li style="margin-bottom: 5px;"><strong>Khẩn cấp:</strong> 113 (Cảnh sát), 115 (Cấp cứu)</li>
                </ul>
            </div>
        `;
    };

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
            
            if(btn.dataset.tab === 'tab-places' && window.placesMap) {
                setTimeout(() => { window.placesMap.invalidateSize(); }, 100);
            }
            if(btn.dataset.tab === 'tab-itinerary' && window.itineraryMap) {
                setTimeout(() => { window.itineraryMap.invalidateSize(); }, 100);
            }
        });
    });

    // Download PDF
    document.getElementById('download-pdf-btn').addEventListener('click', () => {
        // Switch to handbook tab before printing for best view, or print entire container
        const element = document.getElementById('pdf-content');
        
        // Hide tabs buttons for printing
        const tabs = document.querySelector('.tabs');
        tabs.style.display = 'none';

        // Ensure all contents are visible for PDF, temporarily override tab-content logic
        const allTabs = document.querySelectorAll('.tab-content');
        allTabs.forEach(t => {
            t.style.display = 'block';
            t.style.pageBreakBefore = 'always';
            t.style.animation = 'none'; // Tắt animation fadeIn để không bị mờ
            t.style.opacity = '1';
        });

        const opt = {
            margin:       10,
            filename:     'Ke_Hoach_Du_Lich.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            // Restore styles
            tabs.style.display = 'flex';
            allTabs.forEach(t => {
                t.style.display = '';
                t.style.pageBreakBefore = '';
                t.style.animation = '';
                t.style.opacity = '';
            });
            // trigger click on active tab to reset view
            document.querySelector('.tab-btn.active').click();
        });
    });

    // Download ICS (Google/Apple Calendar)
    document.getElementById('download-ics-btn').addEventListener('click', () => {
        if (!window.currentPlanData) return;
        const data = window.currentPlanData;
        let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Coca Planner//Travel Itinerary//VI\n";
        
        let currentStartDate = new Date(data.input.startDate);
        if (isNaN(currentStartDate.getTime())) {
            currentStartDate = new Date(); // fallback
        }
        
        const formatDateICS = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };

        data.itinerary.forEach((day, dIdx) => {
            const dayDate = new Date(currentStartDate);
            dayDate.setDate(dayDate.getDate() + day.day - 1);
            
            day.activities.forEach((act, aIdx) => {
                let startHour = 9;
                let endHour = 10;
                let sm = 0;
                let em = 0;
                
                // Parse timeRange e.g. "09:00 - 11:00"
                const timeMatch = act.timeRange ? act.timeRange.match(/(\d{1,2}):(\d{2})/g) : null;
                if (timeMatch && timeMatch.length >= 1) {
                    const [sh, sMin] = timeMatch[0].split(':').map(Number);
                    startHour = sh;
                    sm = sMin;
                    endHour = startHour + 1;
                    if (timeMatch.length >= 2) {
                        const [ehh, emm] = timeMatch[1].split(':').map(Number);
                        endHour = ehh;
                        em = emm;
                    }
                }
                
                const startDate = new Date(dayDate);
                startDate.setHours(startHour, sm, 0);
                const endDate = new Date(dayDate);
                endDate.setHours(endHour, em, 0);
                
                icsContent += "BEGIN:VEVENT\n";
                icsContent += `DTSTART:${formatDateICS(startDate)}\n`;
                icsContent += `DTEND:${formatDateICS(endDate)}\n`;
                icsContent += `SUMMARY:${act.title}\n`;
                icsContent += `DESCRIPTION:${act.desc}\n`;
                icsContent += `LOCATION:${data.input.destination}\n`;
                icsContent += "END:VEVENT\n";
            });
        });
        
        icsContent += "END:VCALENDAR";
        
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'LichTrinh_DuLich.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- Lịch Trình Editing Logic ---
    window.renderItinerary = () => {
        if (!window.currentPlanData) return;
        const data = window.currentPlanData;
        document.getElementById('itinerary-content').innerHTML = data.itinerary.map((day, dIdx) => `
            <div class="day-block">
                <div class="day-header">Ngày ${day.day}: ${day.title}</div>
                ${day.activities.map((act, aIdx) => `
                    <div class="time-slot">
                        <div class="edit-controls no-print" style="z-index: 100;">
                            <button class="act-btn edit-btn" data-didx="${dIdx}" data-aidx="${aIdx}" title="Sửa"><i class="fa-solid fa-pen"></i></button>
                            <button class="act-btn delete-btn" data-didx="${dIdx}" data-aidx="${aIdx}" title="Xóa"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div class="time-label">
                            <strong>${act.session}</strong><br>
                            <small style="color:#666;">${act.timeRange}</small>
                        </div>
                        <div class="time-content">
                            <h5>${act.title}</h5>
                            <p>${act.desc}</p>
                        </div>
                    </div>
                `).join('')}
                <button class="add-act-btn no-print" data-didx="${dIdx}"><i class="fa-solid fa-plus"></i> Thêm hoạt động</button>
            </div>
        `).join('');

        // Cập nhật Bản đồ lộ trình
        if (window.itineraryMap) {
            window.itineraryMap.remove();
        }
        window.itineraryMap = L.map('itinerary-map').setView([16.047079, 108.206230], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(window.itineraryMap);

        const itBounds = [];
        const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6'];
        
        data.itinerary.forEach((day, dIdx) => {
            const dayColor = colors[dIdx % colors.length];
            const latlngs = [];
            
            day.activities.forEach((act, aIdx) => {
                if (act.lat && act.lng) {
                    latlngs.push([act.lat, act.lng]);
                    itBounds.push([act.lat, act.lng]);
                    
                    const icon = L.divIcon({
                        className: 'custom-div-icon',
                        html: `<div style="background-color: ${dayColor}; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">${aIdx + 1}</div>`,
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    });
                    
                    L.marker([act.lat, act.lng], { icon: icon }).addTo(window.itineraryMap)
                        .bindPopup(`<b>Ngày ${day.day}: ${act.title}</b><br>${act.timeRange}<br>${act.desc}`);
                }
            });
            
            if (latlngs.length > 1) {
                L.polyline(latlngs, { color: dayColor, weight: 3, dashArray: '5, 10' }).addTo(window.itineraryMap);
            }
        });
        
        if (itBounds.length > 0) {
            window.itineraryMap.fitBounds(itBounds, { padding: [30, 30] });
        }
        
        // Re-render Handbook too
        const hbImportant = document.getElementById('handbook-content').innerHTML.substring(document.getElementById('handbook-content').innerHTML.lastIndexOf('<div class="hb-important">'));
        document.getElementById('handbook-content').innerHTML = data.itinerary.map(day => {
            let mapLink = '';
            if (day.activities.length > 0) {
                const dest = data.input.destination;
                if (day.activities.length === 1) {
                    mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.activities[0].title + ' ' + dest)}`;
                } else {
                    const origin = encodeURIComponent(day.activities[0].title + ' ' + dest);
                    const destination = encodeURIComponent(day.activities[day.activities.length - 1].title + ' ' + dest);
                    const waypoints = day.activities.slice(1, -1).map(a => encodeURIComponent(a.title + ' ' + dest)).join('|');
                    mapLink = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints ? '&waypoints=' + waypoints : ''}`;
                }
            }
            return `
            <div class="handbook-page">
                <h3 class="hb-day-title">NGÀY ${day.day}: ${day.title.toUpperCase()}</h3>
                ${day.activities.map(act => `
                    <div class="hb-row">
                        <div class="hb-time" style="width: 80px;">${act.timeRange}</div>
                        <div class="hb-action">
                            <strong>${act.title}</strong><br>
                            <span style="color: #666">${act.desc}</span>
                        </div>
                    </div>
                `).join('')}
                ${mapLink ? `<div style="margin-top: 15px; text-align: center;"><a href="${mapLink}" target="_blank" class="secondary-btn no-print" style="display: inline-block; text-decoration: none; font-size: 0.9rem; padding: 8px 15px;"><i class="fa-solid fa-map-location-dot"></i> Mở lộ trình trên Google Maps</a></div>` : ''}
            </div>
            `;
        }).join('') + hbImportant;
    };

    const modal = document.getElementById('activity-modal');
    
    // Sử dụng Event Delegation cho các nút trong Lịch trình
    document.getElementById('itinerary-content').addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const dIdx = parseInt(target.getAttribute('data-didx'));
        const aIdx = target.getAttribute('data-aidx') !== null ? parseInt(target.getAttribute('data-aidx')) : null;

        if (target.classList.contains('delete-btn')) {
            if(confirm('Bạn có chắc muốn xóa hoạt động này?')) {
                window.currentPlanData.itinerary[dIdx].activities.splice(aIdx, 1);
                window.renderItinerary();
            }
        } else if (target.classList.contains('edit-btn')) {
            const act = window.currentPlanData.itinerary[dIdx].activities[aIdx];
            document.getElementById('modal-title').textContent = "Chỉnh Sửa Hoạt Động";
            document.getElementById('modal-day-index').value = dIdx;
            document.getElementById('modal-act-index').value = aIdx;
            document.getElementById('modal-act-title').value = act.title;
            document.getElementById('modal-act-session').value = act.session;
            document.getElementById('modal-act-time').value = act.timeRange;
            modal.classList.add('active');
        } else if (target.classList.contains('add-act-btn')) {
            document.getElementById('modal-title').textContent = "Thêm Hoạt Động Mới";
            document.getElementById('modal-day-index').value = dIdx;
            document.getElementById('modal-act-index').value = "";
            document.getElementById('activity-form').reset();
            modal.classList.add('active');
        }
    });

    document.getElementById('modal-cancel-btn').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    document.getElementById('activity-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const dIdx = document.getElementById('modal-day-index').value;
        const aIdx = document.getElementById('modal-act-index').value;
        const title = document.getElementById('modal-act-title').value;
        const session = document.getElementById('modal-act-session').value;
        const timeRange = document.getElementById('modal-act-time').value;
        const submitBtn = document.getElementById('modal-save-btn');
        const destination = window.currentPlanData.input.destination;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang Research...';

        try {
            const res = await fetch('/api/research-activity', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ destination, session, timeRange, title, language: window.currentLang })
            });
            const data = await res.json();
            
            if (aIdx !== "") {
                window.currentPlanData.itinerary[dIdx].activities[aIdx] = {
                    session: session,
                    timeRange: timeRange,
                    title: title,
                    desc: data.desc || "Không tìm thấy mô tả."
                };
            } else {
                window.currentPlanData.itinerary[dIdx].activities.push({
                    session: session,
                    timeRange: timeRange,
                    title: title,
                    desc: data.desc || "Không tìm thấy mô tả."
                });
            }
            
            // Xếp lại theo thời gian đơn giản (Sáng -> Trưa -> Chiều -> Tối)
            const order = { "Sáng": 1, "Trưa": 2, "Chiều": 3, "Tối": 4 };
            window.currentPlanData.itinerary[dIdx].activities.sort((a, b) => order[a.session] - order[b.session]);
            
            window.renderItinerary();
            modal.classList.remove('active');
        } catch (error) {
            alert('Lỗi khi lấy thông tin AI: ' + error.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Lưu (AI Tự Động Mô Tả)';
        }
    });

});
