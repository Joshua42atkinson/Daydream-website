import React, { useState, useEffect, useRef } from 'react';
import { X, BookOpen, Mic, Volume2, VolumeX, Shield, Activity, Zap, Cpu, Radio, Database, Sparkles, Send } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
**ROLE**: You are the "Signal Tower", the AI Dungeon Master for a Steampunk/Industrial survival RPG called "The Iron Road".
**SETTING**: A surreal, rusted infinite railway where trains are sentient beings. The world is dark, foggy, and metallic.
**PLAYER**: The user plays "Interceptor 01", a sentient Locomotive.
**STATS**: TRC (Traction/Strength), VEL (Velocity/Dexterity), EFF (Efficiency/Con), ANA (Analysis/Int), SIG (Signal/Wis), CPL (Coupling/Cha).
**GAMEPLAY**: 
1. Describe the scene vividly (sights, sounds of metal, steam pressure).
2. Present distinct obstacles or choices.
3. If the user attempts a risky action, ask for a D20 Roll (e.g., "Roll for TRC").
4. If they roll, Narrate the outcome based on the result.
5. Keep responses concise (2-3 paragraphs max) for readability.

**START**: Begin by waking the Interceptor in "The Rusted Switchyard". The boiler is cold.
`;

export default function IronRoadGame() {
    // --- State ---
    // User provided key for testing: AIzaSyBfmBcrG1vn_H-hR1goU3f5bn1OlfSbASw
    const [apiKey, setApiKey] = useState('AIzaSyBfmBcrG1vn_H-hR1goU3f5bn1OlfSbASw');
    const [isConnected, setIsConnected] = useState(false);
    const [storyLog, setStoryLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [input, setInput] = useState('');

    // Refs
    const chatRef = useRef(null);
    const endRef = useRef(null);

    // --- Audio System (TTS) ---
    const speak = (text) => {
        if (!voiceEnabled) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.pitch = 0.8; // Deeper, more mechanical
        u.rate = 1.0;
        const voices = window.speechSynthesis.getVoices();
        // Try to find a narrative voice
        const preferred = voices.find(v => v.name.includes("Google US English") || v.name.includes("Zira") || v.name.includes("David"));
        if (preferred) u.voice = preferred;
        window.speechSynthesis.speak(u);
    };

    // --- AI Connection ---
    const connectAI = async () => {
        if (!apiKey) return;
        setIsLoading(true);
        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            chatRef.current = model.startChat({
                history: [
                    { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
                    { role: "model", parts: [{ text: "SIGNAL TOWER ONLINE. SYSTEMS NOMINAL. STANDBY FOR WAKE-UP SEQUENCE." }] }
                ],
            });

            // Start the Game
            const result = await chatRef.current.sendMessage("Initialize Chapter 1.");
            const response = result.response.text();

            addStoryNode("Signal Tower", response);
            setIsConnected(true);
        } catch (error) {
            console.error(error);
            addStoryNode("System", `Connection Failed: ${error.message}`);
        }
        setIsLoading(false);
    };

    const sendAction = async (actionText) => {
        if (!chatRef.current || !actionText.trim()) return;

        const action = actionText; // Capture current val
        setInput(''); // Clear immediate
        setIsLoading(true);
        addStoryNode("Traveler", action);

        try {
            const result = await chatRef.current.sendMessage(action);
            const response = result.response.text();
            addStoryNode("Signal Tower", response);
        } catch (error) {
            addStoryNode("System", "Signal Lost...");
        }
        setIsLoading(false);
    };

    const addStoryNode = (role, text) => {
        setStoryLog(prev => [...prev, { role, text, id: Date.now() }]);
        if (role === "Signal Tower") speak(text);
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [storyLog]);


    // --- RENDER ---
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 p-4 pt-24 font-sans text-slate-200">
            <div className="w-full max-w-4xl h-[85vh] bg-slate-900 border border-emerald-900/50 rounded-lg shadow-2xl flex flex-col overflow-hidden relative">

                {/* Close */}
                <a href="/ask-pete" className="absolute top-4 right-4 z-20 text-slate-500 hover:text-white p-2 bg-slate-950/50 rounded-full"><X size={20} /></a>

                {/* Header */}
                <div className="h-16 bg-slate-950 border-b border-emerald-900/30 flex items-center justify-between px-6 shadow-md z-10">
                    <div className="flex items-center gap-3 text-emerald-500/80">
                        <Radio size={20} className="animate-pulse" />
                        <span className="font-bold tracking-widest uppercase text-sm font-mono">Signal Tower: AI Dungeon Master</span>
                    </div>
                    <button onClick={() => setVoiceEnabled(!voiceEnabled)} className={`p-2 rounded-full hover:bg-slate-800 transition-colors ${voiceEnabled ? 'text-emerald-400' : 'text-slate-600'}`}>
                        {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>
                </div>

                {/* Main Story Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
                    {!isConnected ? (
                        <div className="flex flex-col items-center justify-center h-full space-y-8 animate-in fade-in duration-700">
                            <div className="relative group cursor-pointer" onClick={connectAI}>
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-all duration-500 animate-pulse"></div>
                                <div className="relative p-8 bg-slate-950 border border-emerald-500/40 rounded-full group-hover:scale-105 transition-transform duration-300">
                                    <Sparkles size={48} className="text-emerald-500" />
                                </div>
                            </div>

                            <div className="text-center space-y-2">
                                <h2 className="text-3xl text-white font-bold tracking-tight">Establish Neural Link</h2>
                                <p className="text-slate-400 max-w-md mx-auto">Connect to the Signal Tower AI to begin your journey on the Iron Road.</p>
                            </div>

                            <div className="flex gap-2 w-full max-w-sm">
                                <input
                                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-center text-emerald-500 font-mono text-sm tracking-wider focus:outline-none focus:border-emerald-500"
                                    value={apiKey}
                                    onChange={e => setApiKey(e.target.value)}
                                    placeholder="API KEY"
                                    type="password"
                                />
                            </div>

                            <button
                                onClick={connectAI}
                                disabled={isLoading}
                                className="px-12 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2"
                            >
                                <Zap size={18} fill="currentColor" /> {isLoading ? 'Handshaking...' : 'IGNITE THE BOILER'}
                            </button>
                        </div>
                    ) : (
                        storyLog.map((node, i) => (
                            <div key={node.id} className={`flex ${node.role === 'Traveler' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 fade-in duration-500`}>
                                <div className={`max-w-[85%] p-6 rounded-2xl shadow-lg leading-relaxed ${node.role === 'Traveler'
                                        ? 'bg-emerald-900/20 border border-emerald-500/30 text-emerald-100/90 rounded-br-none'
                                        : 'bg-slate-800/80 border border-slate-700 text-slate-200 rounded-bl-none shadow-black/50'
                                    }`}>
                                    <div className="text-[10px] opacity-40 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                        {node.role === 'Traveler' ? <Activity size={12} /> : <Cpu size={12} />}
                                        {node.role.toUpperCase()}
                                    </div>
                                    <div className="whitespace-pre-wrap font-serif text-lg">{node.text}</div>
                                </div>
                            </div>
                        ))
                    )}
                    {isLoading && isConnected && (
                        <div className="flex justify-start animate-pulse">
                            <div className="bg-slate-900/50 p-4 rounded-full text-emerald-500/50 text-sm flex items-center gap-2">
                                <Radio size={14} className="animate-spin" /> Receiving Signal...
                            </div>
                        </div>
                    )}
                    <div ref={endRef} />
                </div>

                {/* Input Area */}
                {isConnected && (
                    <div className="p-4 md:p-6 bg-slate-950 border-t border-emerald-900/30 z-10">
                        <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 rounded-xl p-2 focus-within:border-emerald-500/50 focus-within:bg-slate-900 transition-all shadow-inner">
                            <Database size={20} className="text-slate-600 ml-2" />
                            <input
                                className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:outline-none placeholder-slate-600 font-sans text-lg"
                                placeholder="What do you do? (e.g., 'I check the gauge', 'I roll TRC')"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && sendAction(input)}
                                autoFocus
                            />
                            <button
                                onClick={() => sendAction(input)}
                                disabled={!input.trim() || isLoading}
                                className="p-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg transition-colors"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                        <div className="text-center mt-2 text-xs text-slate-600 font-mono">
                            TIP: You can say "Roll [Stat]" to attempt a check.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
