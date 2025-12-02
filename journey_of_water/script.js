// State
const state = {
    mode: 'pro', // 'pro' or 'student'
    indigenousVisible: false
};

// Data Content
const contentData = {
    source: {
        pro: {
            label: "Watershed Source",
            title: "The Watershed Source",
            text: "High-altitude precipitation collects in catchment areas, initiating the hydrological cycle. This pristine water is critical for downstream ecosystem health."
        },
        student: {
            label: "The Mountains",
            title: "The Mountains",
            text: "Rain falls on the high mountains! This is where our water journey begins. The water is clean and cold here."
        },
        indigenous: "The Dreamtime: Local Aboriginal history teaches that the Reef and the Wetlands are one. Ancient stories tell of the Rainbow Serpent carving the rivers that feed the reef, reminding us that if we poison the water here, we poison the spirit of the sea."
    },
    runoff: {
        pro: {
            label: "Agricultural Runoff",
            title: "Agricultural Runoff",
            text: "Nutrient loading from fertilizers can enter waterways here. Best management practices are required to mitigate eutrophication risks."
        },
        student: {
            label: "On the Farm",
            title: "The Farm",
            text: "Farms need water to grow food! But sometimes, dirt and stuff from the farm washes into the river. We have to be careful!"
        },
        indigenous: "The Dreamtime: Local Aboriginal history teaches that the Reef and the Wetlands are one. Ancient stories tell of the Rainbow Serpent carving the rivers that feed the reef, reminding us that if we poison the water here, we poison the spirit of the sea."
    },
    reef: {
        pro: {
            label: "Estuary Output",
            title: "Estuary Output",
            text: "Freshwater mixes with saltwater in the estuary. Sediment and pollutants from upstream can severely impact coral reef biodiversity."
        },
        student: {
            label: "The Ocean",
            title: "The Ocean",
            text: "The river meets the sea! Many fish live here. If the water is dirty, the coral reefs get sick."
        },
        indigenous: "The Dreamtime: Local Aboriginal history teaches that the Reef and the Wetlands are one. Ancient stories tell of the Rainbow Serpent carving the rivers that feed the reef, reminding us that if we poison the water here, we poison the spirit of the sea."
    }
};

// DOM Elements
const attractScreen = document.getElementById('attract-screen');
const startBtn = document.getElementById('start-btn');
const mainInterface = document.getElementById('main-interface');
const modeToggle = document.getElementById('mode-toggle');
const indigenousToggle = document.getElementById('indigenous-toggle');
const contentPanel = document.getElementById('content-panel');
const closePanelBtn = document.getElementById('close-panel');
const panelTitle = document.getElementById('panel-title');
const panelText = document.getElementById('panel-text');
const indigenousNote = document.getElementById('indigenous-note');
const indigenousText = document.getElementById('indigenous-text');
const sitemapBtn = document.getElementById('sitemap-btn');
const sitemapModal = document.getElementById('sitemap-modal');
const closeModalBtn = document.getElementById('close-modal');
const hotspots = document.querySelectorAll('.hotspot');

// Initialization
function init() {
    setupEventListeners();
    updateUI();
}

function setupEventListeners() {
    // Start Experience
    startBtn.addEventListener('click', () => {
        attractScreen.classList.add('hidden');
        mainInterface.classList.remove('hidden');
    });

    // Mode Toggle
    modeToggle.addEventListener('click', () => {
        state.mode = state.mode === 'pro' ? 'student' : 'pro';
        updateUI();
    });

    // Indigenous Toggle
    // Indigenous Toggle (Dreamtime Modal + Content)
    indigenousToggle.addEventListener('click', () => {
        // 1. Open Modal
        const dreamtimeModal = document.getElementById('dreamtime-modal');
        if (dreamtimeModal) dreamtimeModal.classList.remove('hidden');

        // 2. Enable Indigenous Content in Side Panel
        state.indigenousVisible = true;
        indigenousToggle.setAttribute('aria-pressed', 'true');

        // Update panel if open
        if (!contentPanel.classList.contains('hidden')) {
            toggleIndigenousContent();
        }
    });

    // Close Dreamtime Modal
    const closeDreamtimeBtn = document.getElementById('close-dreamtime');
    if (closeDreamtimeBtn) {
        closeDreamtimeBtn.addEventListener('click', () => {
            document.getElementById('dreamtime-modal').classList.add('hidden');
        });
    }

    // Hotspots
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (e) => {
            const targetKey = hotspot.dataset.target;
            openPanel(targetKey);
        });
    });

    // Close Panel
    closePanelBtn.addEventListener('click', () => {
        contentPanel.classList.add('hidden');
    });

    // Site Map
    sitemapBtn.addEventListener('click', () => {
        sitemapModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        sitemapModal.classList.add('hidden');
    });
}

function updateUI() {
    const body = document.body;
    const modeBtnText = modeToggle.querySelector('.mode-text');

    if (state.mode === 'student') {
        body.classList.add('student-mode');
        modeBtnText.textContent = "Student Mode";
        modeToggle.setAttribute('aria-pressed', 'true');

        // Update Hotspot Icons & Labels
        updateHotspotVisuals('student');
    } else {
        body.classList.remove('student-mode');
        modeBtnText.textContent = "Professional Mode";
        modeToggle.setAttribute('aria-pressed', 'false');

        // Update Hotspot Icons & Labels
        updateHotspotVisuals('pro');
    }

    // Refresh panel content if open
    // (Optional: could close panel on mode switch, but keeping it open is smoother)
}

function updateHotspotVisuals(mode) {
    hotspots.forEach(hotspot => {
        const key = hotspot.dataset.target;
        const data = contentData[key][mode];
        const labelEl = hotspot.querySelector('.hotspot-label');
        const iconEl = hotspot.querySelector('.hotspot-icon');

        labelEl.textContent = data.label;

        // Icons
        if (mode === 'student') {
            if (key === 'source') iconEl.textContent = '☁️';
            if (key === 'runoff') iconEl.textContent = '🐮';
            if (key === 'reef') iconEl.textContent = '🐠';
        } else {
            iconEl.textContent = ''; // Abstract circle
        }
    });
}

function openPanel(key) {
    const data = contentData[key][state.mode];

    panelTitle.textContent = data.title;
    panelText.textContent = data.text;

    // Indigenous Content
    indigenousText.textContent = contentData[key].indigenous;
    toggleIndigenousContent();

    contentPanel.classList.remove('hidden');
}

function toggleIndigenousContent() {
    if (state.indigenousVisible) {
        indigenousNote.classList.remove('hidden');
    } else {
        indigenousNote.classList.add('hidden');
    }
}

// Run
init();
