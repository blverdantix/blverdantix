/* ═══════════════════════════════════════════════════════════
   B.L VERDANTIX — script.js
   All JavaScript logic for the website
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   FOOTER INJECTION
───────────────────────────────────────── */
function injectFooters() {
    const template = document.getElementById('footerTemplate');
    const slots = ['footer-home', 'footer-about', 'footer-contact', 'footer-services', 'footer-press'];
    slots.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.appendChild(template.content.cloneNode(true));
    });
}

/* ─────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────── */
function subscribeNewsletter() {
    const inputs = document.querySelectorAll('#newsletterEmail');
    inputs.forEach(input => {
        if (input.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            showGlobalToast('Subscribed successfully!', 'success');
            input.value = '';
        } else {
            showGlobalToast('Please enter a valid email', 'error');
        }
    });
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */
const PAGES = ['home', 'about', 'contact', 'services', 'press', 'profile'];
let currentPage = 'home';

function navigateTo(page) {
    PAGES.forEach(p => {
        document.getElementById('page-' + p).classList.toggle('active', p === page);
    });
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'services' && !mapInitialized) setTimeout(initMap, 300);
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

/* ─────────────────────────────────────────
   STICKY HEADER
───────────────────────────────────────── */
const header = document.getElementById('mainHeader');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});

/* ─────────────────────────────────────────
   PRESS CARDS
───────────────────────────────────────── */
const pressArticles = [
    {
        url: 'https://agriculture.buzz/qa/how-technology-can-improve-efficiency-productivity-and-sustainability-on-farms/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67f4dd0201cd9ac0487f0e99_Image.webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/677eb0239be0785517cadb86_Agriculture-buzz.webp',
        lang: 'En',
        title: 'How Technology Can Improve Efficiency, Productivity, and Sustainability On Farms',
        date: 'April 1, 2025',
        source: 'agriculture.buzz'
    },
    {
        url: 'https://www.fertilizerdaily.com/20250317-cropler-launched-ai-based-plantpilot-that-provides-hyperlocal-field-specific-crop-recommendations/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67e2d35a4cb45ada7e32c835_Image%20(1).webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/679a4c5c93f44f3996f9a214_fertilizer-daily.svg',
        lang: 'En',
        title: 'Cropler launched AI-based PlantPilot that provides hyperlocal crop recommendations',
        date: 'March 21, 2025',
        source: 'fertilizerdaily.com'
    },
    {
        url: 'https://agronomymagazine.com/qa/6-tips-for-determining-the-optimal-time-to-harvest-crops/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67d94b9ea1f0ba6cb1a2ad95_Image.webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/672a32a4628f213eaa141cee_Group%2033634%20(1).svg',
        lang: 'En',
        title: '6 Tips for Determining the Optimal Time to Harvest Crops',
        date: 'March 13, 2025',
        source: 'Agronomymagazine'
    },
    {
        url: 'https://fineeng.eu/cropler-ai-powered-digital-agronomical-assistant/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67b448aa6d3d47eaa35ef290_press29.webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67b448add69c4b6a18492f37_fine-engineering-magazine.webp',
        lang: 'En',
        title: 'Cropler – AI-powered digital agronomical assistant',
        date: 'February 5, 2025',
        source: 'fineeng.eu'
    },
    {
        url: 'https://www.fertilizerdaily.com/20250129-cropler-provides-farmers-with-a-24-7-ai-powered-digital-agronomist/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/679cc6e48db307583cb27cd6_Image%20(5).webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/679a4c5c93f44f3996f9a214_fertilizer-daily.svg',
        lang: 'En',
        title: 'Cropler provides farmers with a 24/7 AI-powered digital agronomist',
        date: 'January 29, 2025',
        source: 'fertilizerdaily.com'
    },
    {
        url: 'https://hackernoon.com/meet-cropler-connectech-and-doubleshift-hackernoon-startups-of-the-week',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/679a4a42fb5f254edddbfe80_press-21.png',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/679a4aeeb70fcc93026a0a1f_hackernon.webp',
        lang: 'En',
        title: 'Meet Cropler, Connectech & DoubleShift: HackerNoon Startups of the Week',
        date: 'December 30, 2024',
        source: 'Hackernoon.com'
    },
    {
        url: 'https://www.freshfruitportal.com/news/2024/05/30/cropler-becomes-a-game-changer-in-agtech/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67190e24e4cdde5fa5582abd_cropler-press-2.webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67190fba9ab4e753852c009a_logo-portalfruticola.png',
        lang: 'En',
        title: 'Cropler becomes a game-changer in AgTech',
        date: 'May 30, 2024',
        source: 'Portalfruticola'
    },
    {
        url: 'https://softwarehouse.au/blog/what-innovative-types-of-ai-are-transforming-agriculture-today/',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/679cbd80f4b571bd0fe7bb8a_Image%20(1).webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/677eafbc3b3788e2df7743a1_Software-House-White.webp',
        lang: 'En',
        title: 'What Innovative Types of AI Are Transforming Agriculture Today?',
        date: 'January 25, 2025',
        source: 'Softwarehouse.au'
    },
    {
        url: 'https://geofem.com/post/soil-moisture-retention-in-different-types-of-soil',
        img: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67d29dddac89b1f40a8e8e54_press-30.webp',
        logo: 'https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/67d29e22ac89b1f40a8eca87_geofem.webp',
        lang: 'En',
        title: 'Soil Moisture Retention in Different Types of Soil: Insights from Remote Sensing and AI',
        date: 'February 21, 2025',
        source: 'geofem.com'
    }
];

(function buildPress() {
    const grid = document.getElementById('pressGrid');
    pressArticles.forEach(a => {
        grid.innerHTML += `
      <a href="${a.url}" class="press-card" target="_blank" rel="noopener">
        <div class="press-image-container">
          <img src="${a.img}" alt="${a.source}" class="press-image" loading="lazy">
          <div class="language-badge">${a.lang}</div>
          <img src="${a.logo}" alt="${a.source} logo" class="source-logo">
        </div>
        <div class="press-content">
          <h3 class="press-title">${a.title}</h3>
          <div class="press-meta">
            <span>${a.date}</span>
            <span class="press-source">${a.source}</span>
          </div>
        </div>
      </a>`;
    });
})();

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
async function submitContact() {
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const msg = document.getElementById('cMsg').value.trim();
    const succEl = document.getElementById('contactSuccess');
    const errEl = document.getElementById('contactError');
    const btn = document.getElementById('contactSubmitBtn');

    if (!name || !email || !msg) {
        errEl.textContent = '❌ Please fill all fields!';
        errEl.classList.add('show');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
        const fd = new FormData();
        fd.append('access_key', '73c88023-d817-45a3-89fe-5ddc155e42ac');
        fd.append('subject', 'New Contact Message');
        fd.append('from_name', name);
        fd.append('Name', name);
        fd.append('Email', email);
        fd.append('Message', msg);

        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();

        if (data.success) {
            succEl.classList.add('show');
            errEl.classList.remove('show');
            document.getElementById('cName').value = '';
            document.getElementById('cEmail').value = '';
            document.getElementById('cMsg').value = '';
            setTimeout(() => succEl.classList.remove('show'), 5000);
        } else {
            throw new Error('Failed');
        }
    } catch {
        errEl.textContent = '❌ Something went wrong. Try again.';
        errEl.classList.add('show');
    }

    btn.disabled = false;
    btn.textContent = 'Send Message 📤';
}

/* ─────────────────────────────────────────
   GPS MAP (Leaflet + Turf.js)
───────────────────────────────────────── */
let map, drawnItems, drawControl;
let mapInitialized = false;

function initMap() {
    if (mapInitialized) return;

    map = L.map('map').setView([20.5937, 78.9629], 5);

    L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { attribution: 'Tiles © Esri', maxZoom: 19 }
    ).addTo(map);

    L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png',
        { maxZoom: 19, subdomains: 'abcd' }
    ).addTo(map);

    drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    map.on(L.Draw.Event.CREATED, e => {
        drawnItems.addLayer(e.layer);
        calculateGPSArea(e.layer);
        document.getElementById('polygonInfo').classList.remove('show');
    });

    map.on(L.Draw.Event.EDITED, e => {
        e.layers.eachLayer(l => calculateGPSArea(l));
    });

    mapInitialized = true;
}

function getCurrentLocation() {
    document.getElementById('gpsLoading').classList.add('show');
    if (!navigator.geolocation) { alert('GPS not supported'); return; }

    navigator.geolocation.getCurrentPosition(
        pos => {
            map.setView([pos.coords.latitude, pos.coords.longitude], 16);
            L.marker(
                [pos.coords.latitude, pos.coords.longitude],
                { icon: L.divIcon({ className: '', html: '📍', iconSize: [30, 30] }) }
            ).addTo(map).bindPopup('आपकी स्थिति').openPopup();
            document.getElementById('gpsLoading').classList.remove('show');
        },
        () => {
            alert('Location not found');
            document.getElementById('gpsLoading').classList.remove('show');
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

async function searchLocation() {
    const q = document.getElementById('searchLocation').value;
    if (!q) { alert('कृपया स्थान का नाम डालें'); return; }

    document.getElementById('gpsLoading').classList.add('show');
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q + ', India')}&limit=1`);
        const data = await res.json();
        if (data && data.length) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            map.setView([lat, lon], 15);
            L.marker(
                [lat, lon],
                { icon: L.divIcon({ className: '', html: '📍', iconSize: [30, 30] }) }
            ).addTo(map).bindPopup(data[0].display_name).openPopup();
        } else {
            alert('स्थान नहीं मिला');
        }
    } catch {
        alert('खोज में समस्या');
    }
    document.getElementById('gpsLoading').classList.remove('show');
}

function startDrawing() {
    document.getElementById('polygonInfo').classList.add('show');
    if (drawControl) map.removeControl(drawControl);

    drawControl = new L.Control.Draw({
        draw: {
            polygon: {
                allowIntersection: false,
                showArea: true,
                metric: true,
                shapeOptions: { color: '#FF6B6B', fillColor: '#4ECDC4', fillOpacity: .4, weight: 3 }
            },
            polyline: false,
            rectangle: false,
            circle: false,
            marker: false,
            circlemarker: false
        },
        edit: { featureGroup: drawnItems, remove: true }
    });

    map.addControl(drawControl);
    new L.Draw.Polygon(map, drawControl.options.draw.polygon).enable();
}

function calculateGPSArea(layer) {
    const ll = layer.getLatLngs()[0];
    const coords = ll.map(x => [x.lng, x.lat]);
    coords.push(coords[0]);

    const poly = turf.polygon([coords]);
    const area = turf.area(poly);
    const peri = turf.length(poly, { units: 'meters' }) * 1000;

    document.getElementById('areaSqM').textContent = area.toFixed(2);
    document.getElementById('areaAcre').textContent = (area / 4046.86).toFixed(4);
    document.getElementById('areaHectare').textContent = (area / 10000).toFixed(4);
    document.getElementById('areaBigha').textContent = (area / 2529.29).toFixed(4);
    document.getElementById('perimeter').textContent = peri.toFixed(2);
    document.getElementById('resultCard').classList.add('show');

    layer.bindPopup(
        `<strong>क्षेत्रफल:</strong><br>${area.toFixed(2)} वर्ग मीटर<br>${(area / 4046.86).toFixed(4)} एकड़`
    ).openPopup();
}

function clearAll() {
    drawnItems.clearLayers();
    document.getElementById('resultCard').classList.remove('show');
    document.getElementById('polygonInfo').classList.remove('show');
    if (drawControl) map.removeControl(drawControl);
}

/* ─────────────────────────────────────────
   SERVICE TAB SWITCHER
───────────────────────────────────────── */
function switchService(id) {
    document.querySelectorAll('.service-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
    if (id === 'gps' && !mapInitialized) setTimeout(initMap, 300);
}

function openAgriTab(name, btn) {
    document.querySelectorAll('.agri-tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.agri-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(name).classList.add('active');
    btn.classList.add('active');
}

/* ─────────────────────────────────────────
   AGRI DATA
───────────────────────────────────────── */
const agriData = {
    states: {
        "Uttar Pradesh": ["Meerut", "Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Prayagraj", "Bareilly", "Moradabad", "Aligarh", "Gorakhpur", "Saharanpur", "Noida", "Mathura", "Bijnor", "Muzaffarnagar", "Amroha", "Bulandshahr"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Gurdaspur", "Ferozepur", "Sangrur"],
        "Haryana": ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Sonipat", "Yamunanagar", "Ambala", "Kurukshetra"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Ahmednagar", "Jalgaon", "Satara"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Begusarai", "Katihar", "Munger", "Saharsa"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Udaipur", "Ajmer", "Bikaner", "Alwar", "Bharatpur", "Sikar", "Pali"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Mehsana"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Nainital", "Haldwani", "Rishikesh", "Pauri", "Almora", "Rudrapur", "Kashipur"]
    },
    crops: {
        "Wheat": { urea: 260, dap: 130, npk: 50 },
        "Rice": { urea: 220, dap: 110, npk: 60 },
        "Cotton": { urea: 325, dap: 130, npk: 75 },
        "Sugarcane": { urea: 435, dap: 175, npk: 100 },
        "Maize": { urea: 260, dap: 130, npk: 50 },
        "Soybean": { urea: 65, dap: 175, npk: 50 },
        "Potato": { urea: 325, dap: 175, npk: 125 },
        "Tomato": { urea: 260, dap: 130, npk: 100 }
    },
    soilTypes: {
        "Loamy": 1.0,
        "Clay": 1.15,
        "Sandy": 1.25,
        "Silt": 1.1,
        "Red Soil": 1.2,
        "Black Soil": 0.95,
        "Alluvial": 1.0
    },
    prices: { urea: 6.5, dap: 27, npk: 18, pesticide: 350 },
    trees: [
        { name: "Mango", icon: "🥭" }, { name: "Apple", icon: "🍎" },
        { name: "Orange", icon: "🍊" }, { name: "Banana", icon: "🍌" },
        { name: "Guava", icon: "🍐" }, { name: "Papaya", icon: "🍈" },
        { name: "Coconut", icon: "🥥" }, { name: "Lemon", icon: "🍋" },
        { name: "Pomegranate", icon: "🍒" }, { name: "Grapes", icon: "🍇" },
        { name: "Litchi", icon: "🍑" }, { name: "Jackfruit", icon: "🥝" },
        { name: "Neem", icon: "🌿" }, { name: "Teak", icon: "🌳" },
        { name: "Bamboo", icon: "🎋" }, { name: "Cashew", icon: "🌰" },
        { name: "Amla", icon: "🍈" }, { name: "Moringa", icon: "🌿" },
        { name: "Sandalwood", icon: "🌲" }, { name: "Eucalyptus", icon: "🌲" }
    ]
};

let selectedTree = null;

/* ─────────────────────────────────────────
   INIT AGRI DROPDOWNS & TREE GRID
───────────────────────────────────────── */
(function initAgri() {
    // States
    const stateEl = document.getElementById('state');
    for (let s in agriData.states) stateEl.innerHTML += `<option value="${s}">${s}</option>`;

    // Crops
    const cropEl = document.getElementById('crop');
    for (let c in agriData.crops) cropEl.innerHTML += `<option value="${c}">${c}</option>`;

    // Soil
    const soilEl = document.getElementById('soil');
    for (let s in agriData.soilTypes) soilEl.innerHTML += `<option value="${s}">${s}</option>`;

    // Tree grid
    const grid = document.getElementById('treeGrid');
    agriData.trees.forEach((t, i) => {
        grid.innerHTML += `
      <div class="tree-card" onclick="selectTree(${i}, this)">
        <div class="t-icon">${t.icon}</div>
        <div class="t-name">${t.name}</div>
      </div>`;
    });
})();

function loadDistricts() {
    const state = document.getElementById('state').value;
    const sel = document.getElementById('district');
    sel.innerHTML = '<option value="">-- Choose District --</option>';
    if (state && agriData.states[state]) {
        agriData.states[state].forEach(d => sel.innerHTML += `<option value="${d}">${d}</option>`);
    }
}

function selectTree(i, el) {
    document.querySelectorAll('.tree-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedTree = agriData.trees[i];
}

/* ─────────────────────────────────────────
   AREA SYNC (Fertilizer Tab)
───────────────────────────────────────── */
function convertArea(from) {
    const a = parseFloat(document.getElementById('acres').value) || 0;
    const h = parseFloat(document.getElementById('hectares').value) || 0;
    const b = parseFloat(document.getElementById('bigha').value) || 0;

    if (from === 'acres') {
        document.getElementById('hectares').value = (a * 0.404686).toFixed(4);
        document.getElementById('bigha').value = (a * 1.613).toFixed(4);
    }
    if (from === 'hectares') {
        document.getElementById('acres').value = (h * 2.47105).toFixed(4);
        document.getElementById('bigha').value = (h * 3.986).toFixed(4);
    }
    if (from === 'bigha') {
        document.getElementById('acres').value = (b * 0.62).toFixed(4);
        document.getElementById('hectares').value = (b * 0.2508).toFixed(4);
    }
}

/* ─────────────────────────────────────────
   FERTILIZER CALCULATOR
───────────────────────────────────────── */
function calculateFertilizer() {
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const crop = document.getElementById('crop').value;
    const soil = document.getElementById('soil').value;
    const acres = parseFloat(document.getElementById('acres').value) || 0;

    if (!state || !district || !crop || !soil || acres <= 0) {
        alert('Please fill all required fields!');
        return;
    }

    const cd = agriData.crops[crop];
    const sa = agriData.soilTypes[soil];
    const p = agriData.prices;

    const uK = (cd.urea * acres * sa).toFixed(2);
    const dK = (cd.dap * acres * sa).toFixed(2);
    const nK = (cd.npk * acres * sa).toFixed(2);
    const pC = (p.pesticide * acres).toFixed(2);
    const uC = (uK * p.urea).toFixed(2);
    const dC = (dK * p.dap).toFixed(2);
    const nC = (nK * p.npk).toFixed(2);
    const total = (+uC + +dC + +nC + +pC).toFixed(2);

    const box = document.getElementById('fertilizerResult');
    box.innerHTML = `
    <h3>📋 Fertilizer for ${crop}</h3>
    <div class="result-item"><span class="result-label">Location</span><span class="result-value">${district}, ${state}</span></div>
    <div class="result-item"><span class="result-label">Soil</span><span class="result-value">${soil}</span></div>
    <div class="result-item"><span class="result-label">Field Area</span><span class="result-value">${acres} Acres</span></div>
    <div class="result-item"><span class="result-label">🌾 Urea</span><span class="result-value">${uK} kg @ ₹${uC}</span></div>
    <div class="result-item"><span class="result-label">💎 DAP</span><span class="result-value">${dK} kg @ ₹${dC}</span></div>
    <div class="result-item"><span class="result-label">🧪 NPK</span><span class="result-value">${nK} kg @ ₹${nC}</span></div>
    <div class="result-item"><span class="result-label">🐛 Pesticide</span><span class="result-value">₹${pC}</span></div>
    <div class="total-cost">💰 Total Cost: ₹${total}</div>
    <div class="info-note"><strong>Note:</strong> Approximate values. Actual requirements may vary based on soil tests.</div>`;
    box.classList.add('show');
}

/* ─────────────────────────────────────────
   IRRIGATION CALCULATOR
───────────────────────────────────────── */
function calculateIrrigation() {
    const crop = document.getElementById('irrigCrop').value;
    const method = document.getElementById('irrigMethod').value;
    const area = parseFloat(document.getElementById('irrigArea').value) || 0;
    const soilType = document.getElementById('soilType').value;

    if (!crop || !method || area <= 0) { alert('Fill all fields!'); return; }

    const iD = {
        wheat: { drip: 400, sprinkler: 500, flood: 800, furrow: 750 },
        rice: { drip: 1200, sprinkler: 1400, flood: 1800, furrow: 1600 },
        cotton: { drip: 600, sprinkler: 750, flood: 1000, furrow: 900 },
        sugarcane: { drip: 1500, sprinkler: 1800, flood: 2500, furrow: 2200 },
        maize: { drip: 500, sprinkler: 600, flood: 900, furrow: 800 },
        vegetables: { drip: 400, sprinkler: 500, flood: 700, furrow: 650 }
    };
    const sF = { sandy: 1.2, loamy: 1.0, clay: 0.9 };
    const total = (iD[crop][method] * area * sF[soilType]).toFixed(2);
    const freq = method === 'drip' ? 'Daily' : method === 'sprinkler' ? '2-3 days' : '7-10 days';
    const eff = method === 'drip' ? '90-95%' : method === 'sprinkler' ? '75-85%' : '40-60%';

    const box = document.getElementById('irrigationResult');
    box.innerHTML = `
    <h3>💧 Irrigation Requirement</h3>
    <div class="result-item"><span class="result-label">Crop</span><span class="result-value">${crop}</span></div>
    <div class="result-item"><span class="result-label">Method</span><span class="result-value">${method}</span></div>
    <div class="result-item"><span class="result-label">Area</span><span class="result-value">${area} Acres</span></div>
    <div class="result-item"><span class="result-label">💦 Water/Season</span><span class="result-value">${total} mm</span></div>
    <div class="result-item"><span class="result-label">⏰ Frequency</span><span class="result-value">${freq}</span></div>
    <div class="result-item"><span class="result-label">⚡ Efficiency</span><span class="result-value">${eff}</span></div>`;
    box.classList.add('show');
}

/* ─────────────────────────────────────────
   BULK DENSITY CALCULATOR
───────────────────────────────────────── */
function calculateBulkDensity() {
    const w = parseFloat(document.getElementById('soilWeight').value) || 0;
    const v = parseFloat(document.getElementById('soilVolume').value) || 0;
    if (w <= 0 || v <= 0) { alert('Enter valid values!'); return; }

    const bd = (w / v).toFixed(3);
    let q = '', r = '';

    if (bd < 1.0) { q = 'Very Loose (Excellent)'; r = 'Ideal for most crops.'; }
    else if (bd < 1.4) { q = 'Loose to Medium (Good)'; r = 'Suitable with good drainage.'; }
    else if (bd < 1.6) { q = 'Medium to Compact'; r = 'May need organic matter.'; }
    else { q = 'Compacted (Poor)'; r = 'Requires deep tillage.'; }

    const box = document.getElementById('bulkDensityResult');
    box.innerHTML = `
    <h3>📊 Bulk Density Analysis</h3>
    <div class="result-item"><span class="result-label">Weight</span><span class="result-value">${w} g</span></div>
    <div class="result-item"><span class="result-label">Volume</span><span class="result-value">${v} cm³</span></div>
    <div class="result-item"><span class="result-label">🎯 Bulk Density</span><span class="result-value">${bd} g/cm³</span></div>
    <div class="result-item"><span class="result-label">Quality</span><span class="result-value">${q}</span></div>
    <div class="info-note"><strong>Recommendation:</strong> ${r}</div>`;
    box.classList.add('show');
}

/* ─────────────────────────────────────────
   TREE DOSE CALCULATOR
───────────────────────────────────────── */
function calculateTreeDose() {
    if (!selectedTree) { alert('Please select a tree!'); return; }

    const age = parseInt(document.getElementById('treeAge').value) || 0;
    const cnt = parseInt(document.getElementById('treeCount').value) || 1;
    if (age <= 0) { alert('Enter valid age!'); return; }

    let stage = '', N = 0, P = 0, K = 0, M = 0, wR = '', cI = '';

    if (age < 30) { stage = 'Seedling (0-30d)'; N = 10; P = 15; K = 10; M = 2; wR = '200-300 ml daily'; cI = 'Keep in shade.'; }
    else if (age < 180) { stage = 'Early (1-6m)'; N = 50; P = 40; K = 30; M = 5; wR = '2-3L every 2 days'; cI = 'Apply NPK 10:26:26.'; }
    else if (age < 365) { stage = 'Vegetative (6-12m)'; N = 100; P = 75; K = 75; M = 10; wR = '5-7L twice weekly'; cI = 'Apply NPK 19:19:19.'; }
    else if (age < 730) { stage = 'Juvenile (1-2yr)'; N = 200; P = 150; K = 150; M = 20; wR = '10-15L weekly'; cI = 'Full NPK.'; }
    else if (age < 1825) { stage = 'Young Tree (2-5yr)'; N = 400; P = 300; K = 300; M = 40; wR = '20-30L weekly'; cI = 'Full dose + zinc, boron.'; }
    else { stage = 'Mature (5+yr)'; N = 600; P = 450; K = 450; M = 60; wR = '40-60L weekly'; cI = 'Split application.'; }

    const box = document.getElementById('treeDoseResult');
    box.innerHTML = `
    <h3>🌳 ${selectedTree.name} Dose</h3>
    <div class="result-item"><span class="result-label">Stage</span><span class="result-value">${stage}</span></div>
    <div class="result-item"><span class="result-label">Trees</span><span class="result-value">${cnt}</span></div>
    <div class="result-item"><span class="result-label">🌿 Nitrogen</span><span class="result-value">${N * cnt} g</span></div>
    <div class="result-item"><span class="result-label">💎 Phosphorus</span><span class="result-value">${P * cnt} g</span></div>
    <div class="result-item"><span class="result-label">🧪 Potassium</span><span class="result-value">${K * cnt} g</span></div>
    <div class="result-item"><span class="result-label">🍂 Manure</span><span class="result-value">${M * cnt} kg</span></div>
    <div class="result-item"><span class="result-label">💧 Water</span><span class="result-value">${wR}</span></div>
    <div class="info-note"><strong>Care:</strong> ${cI}</div>`;
    box.classList.add('show');
}

/* ─────────────────────────────────────────
   AREA CONVERTER
───────────────────────────────────────── */
function convertAllAreas() {
    const val = parseFloat(document.getElementById('areaValue').value) || 0;
    const from = document.getElementById('fromUnit').value;

    if (val <= 0) {
        document.getElementById('areaResult').classList.remove('show');
        return;
    }

    const toSqM = {
        acre: 4046.86, hectare: 10000, bigha: 1008.38,
        sqmeter: 1, sqfoot: 0.092903,
        katha: 126.45, guntha: 101.17, biswa: 50.42
    };

    const sqM = val * toSqM[from];
    const res = {
        'Acre': (sqM / 4046.86).toFixed(4),
        'Hectare': (sqM / 10000).toFixed(4),
        'Bigha': (sqM / 1008.38).toFixed(4),
        'Sq. Meter': sqM.toFixed(2),
        'Sq. Feet': (sqM / 0.092903).toFixed(2),
        'Katha': (sqM / 126.45).toFixed(4),
        'Guntha': (sqM / 101.17).toFixed(4),
        'Biswa': (sqM / 50.42).toFixed(4)
    };

    let html = '<h3>📏 Area Results</h3>';
    for (let u in res) {
        html += `<div class="result-item"><span class="result-label">${u}</span><span class="result-value">${res[u]}</span></div>`;
    }

    const box = document.getElementById('areaResult');
    box.innerHTML = html;
    box.classList.add('show');
}

/* ─────────────────────────────────────────
   PROFILE FORM
───────────────────────────────────────── */
const profileLang = {
    en: {
        topLabel: "Profile Setup",
        h_title: "Create Your <em>Profile</em>",
        h_sub: "Fill in your details • नीचे जानकारी भरें",
        a_title: "Your Photo",
        a_sub: "JPG, PNG • Max 5MB",
        a_btn: "Upload Photo",
        sec1: "Basic Info",
        sec2: "Contact Info",
        lbl_name: "Full Name",
        lbl_age: "Age",
        lbl_phone: "Phone",
        lbl_gmail: "Gmail",
        lbl_address: "Address",
        btnText: "Submit Profile | प्रोफाइल जमा करें",
        btnArrow: "→",
        s_title: "Profile <em>Submitted!</em>",
        s_desc: "Your data has been sent to the admin.",
        s_btn: "+ New Profile | नई प्रोफाइल"
    },
    hi: {
        topLabel: "प्रोफाइल सेटअप",
        h_title: "अपनी <em>प्रोफाइल</em> बनाएं",
        h_sub: "नीचे जानकारी भरें",
        a_title: "आपकी फ़ोटो",
        a_sub: "JPG, PNG • 5MB",
        a_btn: "फ़ोटो अपलोड करें",
        sec1: "बुनियादी जानकारी",
        sec2: "संपर्क जानकारी",
        lbl_name: "पूरा नाम",
        lbl_age: "उम्र",
        lbl_phone: "फ़ोन नंबर",
        lbl_gmail: "जीमेल",
        lbl_address: "पता",
        btnText: "प्रोफाइल जमा करें",
        btnArrow: "✓",
        s_title: "प्रोफाइल <em>जमा हो गई!</em>",
        s_desc: "जानकारी एडमिन के पास पहुंच गई।",
        s_btn: "+ नई प्रोफाइल"
    }
};

let pLang = 'en';
let photoB64 = null;

function setLang(l) {
    pLang = l;
    const c = profileLang[l];
    document.getElementById('topLabel').textContent = c.topLabel;
    document.getElementById('h_title').innerHTML = c.h_title;
    document.getElementById('h_sub').textContent = c.h_sub;
    document.getElementById('a_title').textContent = c.a_title;
    document.getElementById('a_sub').textContent = c.a_sub;
    document.getElementById('a_btn').textContent = c.a_btn;
    document.getElementById('sec1').textContent = c.sec1;
    document.getElementById('sec2').textContent = c.sec2;
    document.getElementById('lbl_name').textContent = c.lbl_name;
    document.getElementById('lbl_age').textContent = c.lbl_age;
    document.getElementById('lbl_phone').textContent = c.lbl_phone;
    document.getElementById('lbl_gmail').textContent = c.lbl_gmail;
    document.getElementById('lbl_address').textContent = c.lbl_address;
    document.getElementById('btnText').textContent = c.btnText;
    document.getElementById('btnArrow').textContent = c.btnArrow;
    document.getElementById('s_title').innerHTML = c.s_title;
    document.getElementById('s_desc').textContent = c.s_desc;
    document.getElementById('s_btn').textContent = c.s_btn;
    document.getElementById('btnEn').classList.toggle('active', l === 'en');
    document.getElementById('btnHi').classList.toggle('active', l === 'hi');
}

function previewPhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        photoB64 = ev.target.result;
        document.getElementById('avatarImg').src = photoB64;
        document.getElementById('avatarImg').style.display = 'block';
        document.getElementById('avatarPlaceholder').style.display = 'none';
        dotP(1);
    };
    reader.readAsDataURL(file);
}

function dotP(n) {
    ['pd1', 'pd2', 'pd3'].forEach((id, i) => {
        document.getElementById(id).classList.toggle('active', i <= n);
    });
}

async function submitProfileForm() {
    const name = document.getElementById('inp_name').value.trim();
    const age = document.getElementById('inp_age').value.trim();
    const phone = document.getElementById('inp_phone').value.trim();
    const email = document.getElementById('inp_email').value.trim();
    const address = document.getElementById('inp_address').value.trim();

    if (!name || !age || !phone || !email || !address) {
        showGlobalToast(pLang === 'hi' ? 'सभी जानकारी भरें!' : 'Fill all fields!', 'error');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showGlobalToast(pLang === 'hi' ? 'सही Gmail डालें!' : 'Enter valid email!', 'error');
        return;
    }

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    document.getElementById('pSpinner').style.display = 'block';
    document.getElementById('btnText').textContent = pLang === 'hi' ? 'भेज रहे हैं...' : 'Sending...';
    document.getElementById('btnArrow').textContent = '';

    try {
        const fd = new FormData();
        fd.append('access_key', '73c88023-d817-45a3-89fe-5ddc155e42ac');
        fd.append('subject', `New Profile: ${name}`);
        fd.append('from_name', 'Profile Form');
        fd.append('Name', name);
        fd.append('Age', age);
        fd.append('Phone', phone);
        fd.append('Email', email);
        fd.append('Address', address);

        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();

        if (data.success) {
            document.getElementById('previewName').textContent = name;
            document.getElementById('previewEmail').textContent = email;
            if (photoB64) document.getElementById('previewPic').src = photoB64;
            else document.getElementById('previewBox').style.display = 'none';

            document.getElementById('profileFormArea').style.display = 'none';
            document.getElementById('successScreen').classList.add('show');
            dotP(2);
        } else {
            throw new Error('Submit failed');
        }
    } catch {
        showGlobalToast(pLang === 'hi' ? 'कुछ गड़बड़। दोबारा कोशिश करें।' : 'Something went wrong.', 'error');
        btn.disabled = false;
        document.getElementById('pSpinner').style.display = 'none';
        document.getElementById('btnText').textContent = profileLang[pLang].btnText;
        document.getElementById('btnArrow').textContent = profileLang[pLang].btnArrow;
    }
}

function resetProfileForm() {
    ['inp_name', 'inp_age', 'inp_phone', 'inp_email', 'inp_address'].forEach(id => {
        document.getElementById(id).value = '';
    });
    photoB64 = null;
    document.getElementById('avatarImg').style.display = 'none';
    document.getElementById('avatarPlaceholder').style.display = 'flex';
    document.getElementById('photoInput').value = '';
    document.getElementById('previewBox').style.display = 'flex';
    document.getElementById('profileFormArea').style.display = 'block';
    document.getElementById('successScreen').classList.remove('show');

    const btn = document.getElementById('submitBtn');
    btn.disabled = false;
    document.getElementById('pSpinner').style.display = 'none';
    document.getElementById('btnText').textContent = profileLang[pLang].btnText;
    document.getElementById('btnArrow').textContent = profileLang[pLang].btnArrow;
    dotP(0);
}

/* ─────────────────────────────────────────
   AI CHATBOT
───────────────────────────────────────── */
const AI_RESPONSE = `
  <div class="ai-contact-info">
    <strong>📞 संपर्क करें:</strong>
    <strong>फोन:</strong> 9058545076<br>
    <strong>📧 ईमेल:</strong> b.l.verdantix2026@gmail.com<br><br>
    हमारी टीम जल्द ही आपकी सहायता करेगी! 🌱
  </div>`;

document.getElementById('aiChatButton').addEventListener('click', () => {
    const win = document.getElementById('aiChatWindow');
    win.classList.toggle('active');
    if (win.classList.contains('active')) document.getElementById('aiChatInput').focus();
});

document.getElementById('aiCloseChat').addEventListener('click', () => {
    document.getElementById('aiChatWindow').classList.remove('active');
});

function sendAIMessage() {
    const msg = document.getElementById('aiChatInput').value.trim();
    if (!msg) return;

    addAIMsg(msg, 'user');
    document.getElementById('aiChatInput').value = '';
    document.getElementById('aiTypingIndicator').style.display = 'block';
    scrollBot();

    setTimeout(() => {
        document.getElementById('aiTypingIndicator').style.display = 'none';
        addAIMsg(AI_RESPONSE, 'bot');
        scrollBot();
    }, 1200);
}

function addAIMsg(text, sender) {
    const d = document.createElement('div');
    d.className = `ai-message ${sender}`;
    const b = document.createElement('div');
    b.className = 'ai-message-bubble';
    b.innerHTML = text;
    d.appendChild(b);
    document.getElementById('aiChatMessages').appendChild(d);
}

function scrollBot() {
    const m = document.getElementById('aiChatMessages');
    m.scrollTop = m.scrollHeight;
}

document.getElementById('aiSendBtn').addEventListener('click', sendAIMessage);
document.getElementById('aiChatInput').addEventListener('keypress', e => {
    if (e.key === 'Enter') sendAIMessage();
});

/* ─────────────────────────────────────────
   GLOBAL TOAST
───────────────────────────────────────── */
function showGlobalToast(msg, type = 'success') {
    const t = document.getElementById('globalToast');
    t.textContent = (type === 'success' ? '✅ ' : '❌ ') + msg;
    t.className = `toast-global ${type} show`;
    setTimeout(() => t.className = 'toast-global', 4000);
}

/* ─────────────────────────────────────────
   INIT ON DOM READY
───────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
    injectFooters();
});

function navigateTo(page) {
    // Prevent default href behavior
    event.preventDefault();

    pages.forEach(p => {
        document.getElementById('page-' + p).classList.toggle('active', p === page);
    });
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'services' && !mapInitialized) {
        setTimeout(initMap, 300);
    }
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}