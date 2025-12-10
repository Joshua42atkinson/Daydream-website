import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Layers, BrainCircuit, Shield, Cpu, Code, GraduationCap, Briefcase, FileText, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    const [persona, setPersona] = useState(null); // 'recruiter' | 'educator' | 'developer' | null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950 min-h-screen"
        >
            <Helmet>
                <title>Joshua Atkinson | Systems Architect & Public Administrator</title>
                <meta name="description" content="Portfolio showcasing instructional design, systems architecture, and educational technology expertise." />
            </Helmet>

            <Hero />

            {/* MEDIA COMMAND CENTER */}
            <section className="py-24 px-6 relative border-t border-slate-900 bg-slate-950">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Operational <span className="text-[#CFB991]">Briefing</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Review the specialized intelligence brief below. This dossier synthesizes the
                            <span className="text-cyan-400 font-medium"> Iron Road</span> architecture and the
                            <span className="text-[#CFB991] font-medium"> Boilermaker Mindset</span>.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">

                        {/* MAIN VIDEO CONSOLE */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-2 text-[#CFB991] font-mono text-xs uppercase tracking-widest pl-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFB991] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CFB991]"></span>
                                </span>
                                Visual Feed // Systems_Isomorphism.mp4
                            </div>

                            <div className="relative aspect-video bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group">
                                {/* Decorators */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#CFB991]/30 rounded-tl-lg z-20" />
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#CFB991]/30 rounded-br-lg z-20" />

                                {/* Placeholder / Video Element */}
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    poster="assets/video_thumbnail_placeholder.jpg" // User to provide or we gen generic
                                >
                                    <source src="assets/home_video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Overlay for 'Empty' state if needed, but video controls handle it */}
                            </div>
                            <p className="text-slate-500 text-sm font-mono border-l-2 border-slate-800 pl-4 py-1">
                                [SECURE CHANNEL]: Visualizing the translation of kinetic operations into cognitive systems.
                            </p>
                        </div>

                        {/* AUDIO LOG CONSOLE */}
                        <div className="lg:col-span-1 space-y-4">
                            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest pl-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                Audio Log // Deep_Dive_Protocol.mp3
                            </div>

                            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
                                {/* Background Waveform Effect (Static or CSS anim) */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                                    <div>
                                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 mb-6 text-cyan-400 shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">NotebookLM Deep Dive</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                            AI-synthesized discussion analyzing the core pedagogical architecture of the Iron Road capability.
                                        </p>
                                    </div>

                                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                                        <audio
                                            controls
                                            className="w-full h-10 accent-[#CFB991]"
                                        >
                                            <source src="assets/home_audio.m4a" type="audio/mp4" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative 'Next Up' or Status */}
                            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-center justify-between">
                                <span className="text-xs text-slate-500 font-mono">STATUS</span>
                                <span className="text-xs text-emerald-400 font-mono font-bold">READY FOR PLAYBACK</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    );
}

// ------------------- HELPER COMPONENTS -------------------

function PersonaButton({ id, label, icon: Icon, active, onClick }) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`
                relative px-6 py-4 rounded-xl border flex items-center gap-3 transition-all duration-300
                ${active
                    ? 'bg-[#CFB991]/20 border-[#CFB991] text-white shadow-[0_0_20px_rgba(207,185,145,0.3)] scale-105'
                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-[#CFB991]/50 hover:text-slate-200'
                }
            `}
        >
            <Icon size={20} className={active ? 'text-[#CFB991]' : ''} />
            <span className="font-semibold">{label}</span>
            {active && (
                <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-xl bg-[#CFB991]/10 blur-xl -z-10"
                />
            )}
        </button>
    );
}

function PersonaContent({ title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-12"
        >
            <h3 className="text-xl font-mono text-[#CFB991] mb-8 border-l-4 border-[#CFB991] pl-4 uppercase tracking-widest">
                // {title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                {children}
            </div>
        </motion.div>
    );
}

function ContentCard({ title, desc, icon: Icon, link, cta }) {
    return (
        <Link to={link} className="block group">
            <div className="h-full p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#CFB991]/40 transition-all duration-300 hover:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon size={100} />
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-[#CFB991]/50 transition-colors">
                        <Icon size={24} className="text-[#CFB991]" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{title}</h4>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                    {desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-[#CFB991] group-hover:translate-x-2 transition-transform">
                    {cta} <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
}