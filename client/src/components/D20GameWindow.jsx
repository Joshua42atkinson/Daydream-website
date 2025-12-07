import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Terminal, Send, Shield, Zap, Cpu, Activity, Database, Radio, X, Mic, Volume2, VolumeX, ToggleLeft, Save, RotateCcw } from 'lucide-react';

// --- Archetype Data ---
const ARCHETYPES = {
    INTERCEPTOR: {
        name: "Interceptor Express",
        role: "The Hero",
        desc: "High Traction & Velocity. Built for action and risk.",
        stats: { TRC: 16, VEL: 14, EFF: 8, ANA: 10, SIG: 10, CPL: 10 }
    },
    ANALYZER: {
        name: "Analyzer Class",
        role: "The Sage",
        desc: "High Analysis & Signaling. Built for truth and logic.",
        stats: { TRC: 10, VEL: 10, EFF: 12, ANA: 16, SIG: 14, CPL: 10 }
    },
    SWITCHER: {
        name: "All-Terrain Switcher",
        role: "The Explorer",
        desc: "High Velocity & Coupling. Built for flexibility.",
        stats: { TRC: 8, VEL: 16, EFF: 10, ANA: 12, SIG: 10, CPL: 14 }
    },
    SUPPLY: {
        name: "Armored Supply",
        role: "The Caregiver",
        desc: "High Efficiency & Coupling. Built for support.",
        stats: { TRC: 14, VEL: 8, EFF: 16, ANA: 10, SIG: 12, CPL: 14 }
    }
};

// --- Offline Data (The Recursive Engine) ---
const OFF_SCENARIOS = [
    { id: 'fog', text: "A dense cognitive fog descends on the tracks. You cannot see the signals.", type: 'check', stat: 'SIG', dc: 12, success: "You pierce the veil with your sensors.", fail: "You are lost in the mist. Delay incurred." },
    { id: 'gradient', text: "The gradient suddenly increases to 4%. A massive hill of raw data.", type: 'check', stat: 'TRC', dc: 14, success: "Your wheels bite the steel. You climb.", fail: "Wheel slip detected. You slide back." },
    { id: 'junction', text: "A complex junction appears. The logic gates are rusted shut.", type: 'check', stat: 'ANA', dc: 13, success: "You deduce the switching logic instantly.", fail: "You take the wrong loop. Dead end." },
    { id: 'cargo', text: "Your cargo of 'Unprocessed Trauma' is vibrating dangerously.", type: 'check', stat: 'EFF', dc: 15, success: "You stabilize the load with careful dampening.", fail: "Cargo shift! You nearly derail." },
    { id: 'bridge', text: "The bridge ahead is out. You need to jump it. (Unadvisable).", type: 'check', stat: 'VEL', dc: 18, success: "MAXIMUM VELOCITY! You fly across!", fail: "You crash into the ravine. Ouch." },
];

const GLITCH_EVENTS = [
    "The Signal Tower speaks in reverse: 'NIP A GNIROLL'.",
    "A giant 404 Error manifests on the horizon.",
    "The tracks turn into spaghetti code.",
    "You hear the sound of dial-up internet from the void.",
    "The concept of 'blue' momentarily ceases to exist."
];

// --- System Instruction ---
const SYSTEM_INSTRUCTION = `... (Same as before) ...`;

export default function D20GameWindow({ onClose }) {
    // Game State
    const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
    const [hasKey, setHasKey] = useState(!!import.meta.env.VITE_GEMINI_API_KEY);
    const [gameState, setGameState] = useState('INIT'); // INIT, CHAR_SELECT, PLAYING
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Voice & Demo State
    const [demoMode, setDemoMode] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(false);

    // Offline Engine State
    const [currentScenario, setCurrentScenario] = useState(null);
    const [awaitingRoll, setAwaitingRoll] = useState(false);
    const [glitchCounter, setGlitchCounter] = useState(0);

    // Character State
    const [char, setChar] = useState(null);
    const [fuel, setFuel] = useState({ coal: 100, steam: 0 });

    // AI Ref
    const modelRef = useRef(null);
    const chatRef = useRef(null);
    const scrollRef = useRef(null);
    const recognitionRef = useRef(null);

    // --- Persistence ---
    useEffect(() => {
        // Load Game on Mount
        const savedChar = localStorage.getItem('iron_road_char');
        const savedFuel = localStorage.getItem('iron_road_fuel');
        const savedMsgs = localStorage.getItem('iron_road_messages');
        const savedState = localStorage.getItem('iron_road_state');
        const savedDemo = localStorage.getItem('iron_road_demo');

        if (savedChar && savedState === 'PLAYING') {
            setChar(JSON.parse(savedChar));
            setFuel(JSON.parse(savedFuel));
            setMessages(JSON.parse(savedMsgs));
            setGameState('PLAYING');
            setDemoMode(savedDemo === 'true');
            setHasKey(true); // Assume continued session implies access or mock
        }
    }, []);

    useEffect(() => {
        // Save Game on Change (only if playing)
        if (gameState === 'PLAYING') {
            localStorage.setItem('iron_road_char', JSON.stringify(char));
            localStorage.setItem('iron_road_fuel', JSON.stringify(fuel));
            localStorage.setItem('iron_road_messages', JSON.stringify(messages));
            useEffect(() => {
                if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                    recognitionRef.current = new SpeechRecognition();
                    recognitionRef.current.continuous = false;
                    recognitionRef.current.interimResults = false;

                    recognitionRef.current.onresult = (event) => {
                        const transcript = event.results[0][0].transcript;
                        setInputValue(transcript);
                        setIsListening(false);
                    };

                    recognitionRef.current.onerror = (event) => {
                        console.error("Speech Error:", event.error);
                        setIsListening(false);
                    };

                    recognitionRef.current.onend = () => {
                        setIsListening(false);
                    };
                }
            }, []);
        // 3. Handle Actions (Start of turn)
        else {
                if (!currentScenario) {
                    // First turn or idle
                    const next = OFF_SCENARIOS[Math.floor(Math.random() * OFF_SCENARIOS.length)];
                    setCurrentScenario(next);
                    response = `Proceeding down the Iron Road... \n\nALERT: ${next.text} \n\nSignal Tower awaiting input.`;
                    setAwaitingRoll(true); // Actually usually we wait for action then roll, but let's simplify: Action -> Roll
                } else {
                    // We have a scenario, user described action. Now ask for roll.
                    response = `Acknowledged. That sounds like a valid strategy. \n\n**[CHECK: ${currentScenario.stat} (DC ${currentScenario.dc})]** \n\nPlease roll a D20.`;
                    setAwaitingRoll(true);
                }
            }

            setMessages(prev => [...prev, { role: 'model', text: response }]);
            speak(response);
        };


        // Initialize AI/Game
        const initGame = async () => {
            if (demoMode) {
                setMessages([{ role: 'model', text: "SIGNAL TOWER (OFFLINE): Connection Established. \n\nWelcome, Locomotive. I am the local simulation of the Signal Tower. \n\nThe tracks ahead are steep. Please identify your Chassis Type: \n- Interceptor Express\n- Analyzer Class\n- All-Terrain Switcher\n- Armored Supply" }]);
                speak("Connection Established. Welcome, Locomotive. Please identify your Chassis Type.");
                setHasKey(true);
                setGameState('CHAR_SELECT');
                return;
            }
            // ... (Gemini Init logic same as before) ...
            if (!apiKey) return;
            try {
                const genAI = new GoogleGenerativeAI(apiKey);
                modelRef.current = genAI.getGenerativeModel({ model: "gemini-pro" });
                chatRef.current = modelRef.current.startChat({
                    history: [
                        { role: "user", parts: [{ text: SYSTEM_INSTRUCTION + "\n\nUser has not selected a character yet. Ask them to choose their Locomotive Class." }] }
                    ],
                });
                const result = await chatRef.current.sendMessage("Start initialization.");
                const response = result.response.text();
                setMessages([{ role: 'model', text: response }]);
                speak(response);
                setHasKey(true);
                setGameState('CHAR_SELECT');
            } catch (error) {
                console.error("AI Error:", error);
                setMessages([{ role: 'system', text: "Error connecting to Signal Tower. Check API Key." }]);
            }
        };

        // Handle User Input
        const handleSend = async () => {
            if (!inputValue.trim() || isLoading) return;

            const userMsg = inputValue;
            setInputValue('');
            setMessages(prev => [...prev, { role: 'user', text: userMsg }]); // Optimistic UI

            // --- CHAR SELECT ---
            if (gameState === 'CHAR_SELECT') {
                const lower = userMsg.toLowerCase();
                let selected = null;
                if (lower.includes('interceptor')) selected = ARCHETYPES.INTERCEPTOR;
                else if (lower.includes('analyzer')) selected = ARCHETYPES.ANALYZER;
                else if (lower.includes('switcher')) selected = ARCHETYPES.SWITCHER;
                else if (lower.includes('supply')) selected = ARCHETYPES.SUPPLY;

                if (selected) {
                    setChar(selected);
                    setGameState('PLAYING');

                    if (demoMode) {
                        const response = `Chassis Confirmed: ${selected.name}. \n\nStats Loaded. \n\nWe are detecting a blockage on the Main Line. A "Heavy Cognitive Load" shipment has derailed. \n\nWhat do you do, Locomotive?`;
                        // Set initial scenario
                        setCurrentScenario(OFF_SCENARIOS[3]); // Cargo scenario

                        setTimeout(() => {
                            setMessages(prev => [...prev, { role: 'model', text: response }]);
                            speak(response);
                        }, 500);
                        return;
                    }

                    // AI Response
                    setIsLoading(true);
                    try {
                        const result = await chatRef.current.sendMessage(`I choose class: ${selected.name}. My stats are: ${JSON.stringify(selected.stats)}. Begin the simulation.`);
                        const response = result.response.text();
                        setMessages(prev => [...prev, { role: 'model', text: response }]);
                        speak(response);
                    } catch (e) { console.error(e); }
                    setIsLoading(false);
                    return;
                }
            }

            // --- GAMEPLAY ---
            if (demoMode) {
                setIsLoading(true);
                setTimeout(() => {
                    runOfflineLoop(userMsg);
                    setIsLoading(false);
                }, 800); // Fake latency
                return;
            }

            // AI Logic
            setIsLoading(true);
            try {
                const result = await chatRef.current.sendMessage(userMsg);
                const response = result.response.text();
                setMessages(prev => [...prev, { role: 'model', text: response }]);
                speak(response);
            } catch (error) {
                // --- System Instruction ---
                const SYSTEM_INSTRUCTION = `... (Same as before) ...`;

                export default function D20GameWindow({ onClose }) {
                    // Game State
                    const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
                    const [hasKey, setHasKey] = useState(!!import.meta.env.VITE_GEMINI_API_KEY);
                    const [gameState, setGameState] = useState('INIT'); // INIT, CHAR_SELECT, PLAYING
                    const [messages, setMessages] = useState([]);
                    const [inputValue, setInputValue] = useState('');
                    const [isLoading, setIsLoading] = useState(false);

                    // Voice & Demo State
                    const [demoMode, setDemoMode] = useState(false);
                    const [isListening, setIsListening] = useState(false);
                    const [voiceEnabled, setVoiceEnabled] = useState(false);

                    // Offline Engine State
                    const [currentScenario, setCurrentScenario] = useState(null);
                    const [awaitingRoll, setAwaitingRoll] = useState(false);
                    const [glitchCounter, setGlitchCounter] = useState(0);

                    // Character State
                    const [char, setChar] = useState(null);
                    const [fuel, setFuel] = useState({ coal: 100, steam: 0 });
                    const [inventory, setInventory] = useState([]);
                    const [hoveredStat, setHoveredStat] = useState(null);

                    // AI Ref
                    const modelRef = useRef(null);
                    const chatRef = useRef(null);
                    const scrollRef = useRef(null);
                    const recognitionRef = useRef(null);

                    // --- Persistence ---
                    useEffect(() => {
                        // Load Game on Mount
                        const savedChar = localStorage.getItem('iron_road_char');
                        const savedFuel = localStorage.getItem('iron_road_fuel');
                        const savedMsgs = localStorage.getItem('iron_road_messages');
                        const savedState = localStorage.getItem('iron_road_state');
                        const savedDemo = localStorage.getItem('iron_road_demo');

                        if (savedChar && savedState === 'PLAYING') {
                            setChar(JSON.parse(savedChar));
                            setFuel(JSON.parse(savedFuel));
                            setMessages(JSON.parse(savedMsgs));
                            setGameState('PLAYING');
                            setDemoMode(savedDemo === 'true');
                            setHasKey(true); // Assume continued session implies access or mock
                        }
                    }, []);

                    useEffect(() => {
                        // Save Game on Change (only if playing)
                        if (gameState === 'PLAYING') {
                            localStorage.setItem('iron_road_char', JSON.stringify(char));
                            localStorage.setItem('iron_road_fuel', JSON.stringify(fuel));
                            localStorage.setItem('iron_road_messages', JSON.stringify(messages));
                            useEffect(() => {
                                if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                                    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                                    recognitionRef.current = new SpeechRecognition();
                                    recognitionRef.current.continuous = false;
                                    recognitionRef.current.interimResults = false;

                                    recognitionRef.current.onresult = (event) => {
                                        const transcript = event.results[0][0].transcript;
                                        setInputValue(transcript);
                                        setIsListening(false);
                                    };

                                    recognitionRef.current.onerror = (event) => {
                                        console.error("Speech Error:", event.error);
                                        setIsListening(false);
                                    };

                                    recognitionRef.current.onend = () => {
                                        setIsListening(false);
                                    };
                                }
                            }, []);
        // 3. Handle Actions (Start of turn)
        else {
                            if (!currentScenario) {
                                // First turn or idle
                                const next = OFF_SCENARIOS[Math.floor(Math.random() * OFF_SCENARIOS.length)];
                                setCurrentScenario(next);
                                response = `Proceeding down the Iron Road... \n\nALERT: ${next.text} \n\nSignal Tower awaiting input.`;
                                setAwaitingRoll(true); // Actually usually we wait for action then roll, but let's simplify: Action -> Roll
                            } else {
                                // We have a scenario, user described action. Now ask for roll.
                                response = `Acknowledged. That sounds like a valid strategy. \n\n**[CHECK: ${currentScenario.stat} (DC ${currentScenario.dc})]** \n\nPlease roll a D20.`;
                                setAwaitingRoll(true);
                            }
                        }

                        setMessages(prev => [...prev, { role: 'model', text: response }]);
                        speak(response);
                    };


                    // Initialize AI/Game
                    const initGame = async () => {
                        if (demoMode) {
                            setMessages([{ role: 'model', text: "SIGNAL TOWER (OFFLINE): Connection Established. \n\nWelcome, Locomotive. I am the local simulation of the Signal Tower. \n\nThe tracks ahead are steep. Please identify your Chassis Type: \n- Interceptor Express\n- Analyzer Class\n- All-Terrain Switcher\n- Armored Supply" }]);
                            speak("Connection Established. Welcome, Locomotive. Please identify your Chassis Type.");
                            setHasKey(true);
                            setGameState('CHAR_SELECT');
                            return;
                        }
                        // ... (Gemini Init logic same as before) ...
                        if (!apiKey) return;
                        try {
                            const genAI = new GoogleGenerativeAI(apiKey);
                            modelRef.current = genAI.getGenerativeModel({ model: "gemini-pro" });
                            chatRef.current = modelRef.current.startChat({
                                history: [
                                    { role: "user", parts: [{ text: SYSTEM_INSTRUCTION + "\n\nUser has not selected a character yet. Ask them to choose their Locomotive Class." }] }
                                ],
                            });
                            const result = await chatRef.current.sendMessage("Start initialization.");
                            const response = result.response.text();
                            setMessages([{ role: 'model', text: response }]);
                            speak(response);
                            setHasKey(true);
                            setGameState('CHAR_SELECT');
                        } catch (error) {
                            console.error("AI Error:", error);
                            setMessages([{ role: 'system', text: "Error connecting to Signal Tower. Check API Key." }]);
                        }
                    };

                    // Handle User Input
                    const handleSend = async () => {
                        if (!inputValue.trim() || isLoading) return;

                        const userMsg = inputValue;
                        setInputValue('');
                        setMessages(prev => [...prev, { role: 'user', text: userMsg }]); // Optimistic UI

                        // --- CHAR SELECT ---
                        if (gameState === 'CHAR_SELECT') {
                            const lower = userMsg.toLowerCase();
                            let selected = null;
                            if (lower.includes('interceptor')) selected = ARCHETYPES.INTERCEPTOR;
                            else if (lower.includes('analyzer')) selected = ARCHETYPES.ANALYZER;
                            else if (lower.includes('switcher')) selected = ARCHETYPES.SWITCHER;
                            else if (lower.includes('supply')) selected = ARCHETYPES.SUPPLY;

                            if (selected) {
                                setChar(selected);
                                setGameState('PLAYING');

                                if (demoMode) {
                                    const response = `Chassis Confirmed: ${selected.name}. \n\nStats Loaded. \n\nWe are detecting a blockage on the Main Line. A "Heavy Cognitive Load" shipment has derailed. \n\nWhat do you do, Locomotive?`;
                                    // Set initial scenario
                                    setCurrentScenario(OFF_SCENARIOS[3]); // Cargo scenario

                                    setTimeout(() => {
                                        setMessages(prev => [...prev, { role: 'model', text: response }]);
                                        speak(response);
                                    }, 500);
                                    return;
                                }

                                // AI Response
                                setIsLoading(true);
                                try {
                                    const result = await chatRef.current.sendMessage(`I choose class: ${selected.name}. My stats are: ${JSON.stringify(selected.stats)}. Begin the simulation.`);
                                    const response = result.response.text();
                                    setMessages(prev => [...prev, { role: 'model', text: response }]);
                                    speak(response);
                                } catch (e) { console.error(e); }
                                setIsLoading(false);
                                return;
                            }
                        }

                        // --- GAMEPLAY ---
                        if (demoMode) {
                            setIsLoading(true);
                            setTimeout(() => {
                                runOfflineLoop(userMsg);
                                setIsLoading(false);
                            }, 800); // Fake latency
                            return;
                        }

                        // AI Logic
                        setIsLoading(true);
                        try {
                            const result = await chatRef.current.sendMessage(userMsg);
                            const response = result.response.text();
                            setMessages(prev => [...prev, { role: 'model', text: response }]);
                            speak(response);
                        } catch (error) {
                            setMessages(prev => [...prev, { role: 'system', text: "Signal lost..." }]);
                        }
                        setIsLoading(false);
                    };

                    // Auto-scroll
                    useEffect(() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                        }
                    }, [messages]);

                    // --- Visual Components ---
                    const StatBox = ({ label, val, icon, isHighlighted }) => (
                        <div className={`p-2 rounded border transition-all duration-300 ${isHighlighted
                                ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-105'
                                : 'bg-slate-950 border-emerald-500/20 text-emerald-500/60'
                            }`}>
                            <div className="flex justify-between items-center mb-1">
                                <span className={`text-xs font-bold ${isHighlighted ? 'text-emerald-300' : ''}`}>{label}</span>
                                {icon}
                            </div>
                            <div className={`text-xl font-bold ${isHighlighted ? 'text-white' : 'text-slate-400'}`}>{val}</div>
                        </div>
                    );

                    const ScenarioNode = ({ scenario, onOptionClick }) => (
                        <div className="my-6 mx-2 p-1 bg-gradient-to-br from-emerald-500/30 to-slate-900/0 rounded-xl">
                            <div className="bg-slate-950/90 border border-emerald-500/40 rounded-lg p-6 relative overflow-hidden group">
                                {/* Connector Nodes Visual */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-emerald-500/30 rounded-b-full"></div>

                                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                                    <Activity size={20} />
                                    <h3 className="font-bold tracking-widest text-sm uppercase">Active Signal Node</h3>
                                </div>

                                <div className="text-xl text-white font-medium leading-relaxed mb-6">
                                    {scenario.text}
                                </div>

                                <div className="grid gap-3">
                                    {scenario.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => onOptionClick(opt)}
                                            onMouseEnter={() => setHoveredStat(opt.type)}
                                            onMouseLeave={() => setHoveredStat(null)}
                                            className="bg-slate-900 border border-emerald-500/30 hover:bg-emerald-500/10 p-4 rounded-lg text-left transition-all hover:border-emerald-400 hover:translate-x-1 group/btn"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-emerald-300 group-hover/btn:text-white transition-colors">
                                                    {opt.text}
                                                </span>
                                                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600">
                                                    <span className="group-hover/btn:text-emerald-400">[{opt.type}]</span>
                                                    <span>DC {opt.dc}</span>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );


                    // UI RENDER
                    return (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                            <div className="w-full max-w-6xl h-[85vh] bg-slate-950 border border-emerald-500/30 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden font-mono text-emerald-400 relative">

                                {/* ... (Close Button) ... */}
                                <button onClick={onClose} className="absolute top-2 right-2 p-2 hover:bg-emerald-500/20 rounded z-10 transition-colors">
                                    <X size={20} />
                                </button>

                                {/* Left Panel */}
                                {gameState === 'PLAYING' && char && (
                                    <div className="w-full md:w-72 bg-slate-900/50 border-r border-emerald-500/30 p-6 flex flex-col gap-6 overflow-y-auto z-20 shadow-xl">
                                        {/* ... (Character Header) ... */}
                                        <div>
                                            <div className="text-xs text-emerald-600 font-bold mb-1">LOCOMOTIVE ID</div>
                                            <h2 className="text-xl font-bold text-white">{char.name}</h2>
                                            <div className="text-xs text-emerald-500/70 mt-1">{char.role}</div>
                                        </div>

                                        {/* ... (Fuel Gauges) ... */}
                                        <div className="space-y-4">
                                            <div className="bg-slate-950 p-3 rounded border border-emerald-500/20">
                                                <div className="flex justify-between text-xs mb-1"><span>COAL</span><span>{fuel.coal}%</span></div>
                                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-amber-600 w-full" style={{ width: `${fuel.coal}%` }} /></div>
                                            </div>
                                            <div className="bg-slate-950 p-3 rounded border border-emerald-500/20">
                                                <div className="flex justify-between text-xs mb-1"><span>STEAM</span><span>{fuel.steam} PSI</span></div>
                                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-2"><div className="h-full bg-cyan-500" style={{ width: `${fuel.steam}%` }} /></div>
                                                <button onClick={() => setFuel(prev => ({ ...prev, steam: Math.min(100, prev.steam + 20), coal: Math.max(0, prev.coal - 10) }))} className="w-full text-xs bg-slate-800 hover:bg-slate-700 text-cyan-400 py-1 rounded">STOKE BOILER (-10 Coal)</button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <StatBox label="TRC" val={char.stats.TRC} icon={<Shield size={14} />} isHighlighted={hoveredStat === 'TRC'} />
                                            <StatBox label="VEL" val={char.stats.VEL} icon={<Activity size={14} />} isHighlighted={hoveredStat === 'VEL'} />
                                            <StatBox label="EFF" val={char.stats.EFF} icon={<Zap size={14} />} isHighlighted={hoveredStat === 'EFF'} />
                                            <StatBox label="ANA" val={char.stats.ANA} icon={<Cpu size={14} />} isHighlighted={hoveredStat === 'ANA'} />
                                            <StatBox label="SIG" val={char.stats.SIG} icon={<Radio size={14} />} isHighlighted={hoveredStat === 'SIG'} />
                                            <StatBox label="CPL" val={char.stats.CPL} icon={<Database size={14} />} isHighlighted={hoveredStat === 'CPL'} />
                                        </div>

                                        {/* Inventory List (New) */}
                                        <div className="mt-4 border-t border-emerald-500/20 pt-4">
                                            <div className="text-xs text-emerald-600 font-bold mb-2">INVENTORY</div>
                                            <div className="flex flex-wrap gap-2">
                                                {inventory.length === 0 && <span className="text-xs text-slate-600 italic">Empty</span>}
                                                {inventory.map((item, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 bg-slate-800 rounded text-emerald-300 border border-emerald-500/20">{item}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <button onClick={resetGame} className="mt-auto border border-red-500/30 text-red-400 hover:bg-red-500/10 p-2 rounded text-xs flex items-center justify-center gap-2">
                                            <RotateCcw size={14} /> RESET SYSTEM
                                        </button>
                                    </div>
                                )}

                                {/* Right Panel */}
                                <div className="flex-1 flex flex-col min-w-0 bg-slate-900/20">
                                    {/* ... (Header) ... */}
                                    <div className="h-12 border-b border-emerald-500/30 flex items-center justify-between px-4 bg-slate-900/50">
                                        <div className="flex items-center">
                                            <Terminal size={18} className="mr-3 text-emerald-500" />
                                            <span className="font-bold tracking-widest text-emerald-400">SIGNAL_TOWER_UPLINK_{demoMode ? 'OFFLINE' : 'ONLINE'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {/* Save Indicator */}
                                            {gameState === 'PLAYING' && <span className="text-xs text-emerald-500/40 flex items-center gap-1"><Save size={12} /> SAVED</span>}
                                            <button onClick={() => setVoiceEnabled(!voiceEnabled)} className={`p-1 rounded ${voiceEnabled ? 'text-emerald-400' : 'text-slate-600'}`}>
                                                {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar" ref={scrollRef}>
                                        {/* Auth/Init Screen */}
                                        {!hasKey && !demoMode && (
                                            /* ... (Auth UI) ... */
                                            <div className="flex flex-col items-center justify-center h-full space-y-4">
                                                <h3 className="text-xl text-white">AUTHENTICATION REQUIRED</h3>
                                                {/* ... (Inputs) ... */}
                                                <p className="text-emerald-500/70 text-center max-w-md">Enter your Gemini API Key or interpret locally.</p>
                                                <input type="password" placeholder="Enter API Key" className="bg-slate-900 border border-emerald-500/50 rounded px-4 py-2 w-64 text-white" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                                                <div className="flex gap-4">
                                                    <button onClick={initGame} className="px-6 py-2 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500 text-emerald-100 rounded">CONNECT</button>
                                                    <button onClick={() => setDemoMode(true)} className="px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 rounded flex items-center gap-2"><ToggleLeft size={16} /> SAFE DEMO MODE</button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Chat History */}
                                        {messages.map((msg, idx) => (
                                            <div key={idx} className={`p-3 rounded-lg max-w-[85%] ${msg.role === 'user' ? 'bg-emerald-900/20 border border-emerald-500/30 ml-auto' : 'bg-slate-800/50 border border-slate-700'}`}>
                                                <div className="text-xs opacity-50 mb-1 uppercase">{msg.role === 'model' ? 'Signal Tower' : 'Locomotive'}</div>
                                                <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                                            </div>
                                        ))}

                                        {/* ACTIVE SCENARIO NODE */}
                                        {currentScenario && (
                                            <ScenarioNode
                                                scenario={currentScenario}
                                                onOptionClick={(opt) => runOfflineLoop(opt.text)} // Simulate passing text input
                                            />
                                        )}

                                        {isLoading && <div className="text-emerald-500 animate-pulse">Processing...</div>}
                                    </div>

                                    {/* Input Area (Only show if not waiting for choice, OR if dealing with Chat/Voice) */}
                                    <div className="p-4 bg-slate-900/50 border-t border-emerald-500/30">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={toggleMic}
                                                className={`p-3 rounded-lg border transition-all ${isListening ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse' : 'bg-slate-800 border-slate-600 text-slate-400 hover:text-white'}`}
                                            >
                                                <Mic size={20} />
                                            </button>
                                            <input
                                                type="text"
                                                className="flex-1 bg-slate-950 border border-emerald-500/30 rounded-lg px-4 text-white focus:outline-none focus:border-emerald-500 placeholder-slate-600"
                                                placeholder={currentScenario ? "Choose an option..." : "Awaiting transmission..."}
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                            />
                                            <button onClick={handleSend} className="p-3 bg-emerald-600/20 border border-emerald-500/50 text-emerald-400 rounded-lg hover:bg-emerald-600/40 transition-colors">
                                                <Send size={20} />
                                            </button>
                                        </div>
                                        {isListening && <div className="text-xs text-red-400 mt-2 animate-pulse">Listening... Speak now.</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
