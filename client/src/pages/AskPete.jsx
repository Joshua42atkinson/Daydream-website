import React, { useState } from 'react';
import { Terminal, Cpu, Shield, Zap, Network, Lock, ArrowRight, BookOpen, Users, Database, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function AskPete() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991] pt-20 overflow-x-hidden"
        >
            <Helmet>
                <title>The Ask Pete Initiative | Joshua Atkinson</title>
                <meta name="description" content="A GPS-enabled physical AI learning ecosystem built with Rust and Bevy. Demonstrates advanced instructional design and systems architecture." />
            </Helmet>

            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] opacity-30 animate-pulse" />
                <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[80px] opacity-30 animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]" />
            </div>

            {/* Mission Header */}
            <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
                <div className="relative max-w-5xl py-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                            <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            System Architecture v2.4
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white"
                    >
                        The{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] via-amber-200 to-yellow-400 animate-pulse">Living</span>{' '}
                        <span className="text-slate-500">Laboratory</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed border-l-4 border-slate-800 pl-6"
                    >
                        "Ask Pete" is a <strong className="text-cyan-400 font-medium">GPS-Enabled Physical AI Learning Ecosystem</strong> designed
                        to capture high-fidelity telemetry of the student's cognitive journey. It functions as a 'Black Box Recorder'
                        for the learning process.
                    </motion.p>
                </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Pillar 1: Cognitive Logistics */}
                    <div className="col-span-1 lg:col-span-2 group bg-slate-900/40 border border-slate-700/50 rounded-3xl p-10 hover:border-[#CFB991]/30 transition-all duration-500 backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-slate-800/50 rounded-2xl text-[#CFB991] border border-white/5 shadow-inner">
                                <Network size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Cognitive Logistics</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <p className="text-slate-300 leading-relaxed text-lg mb-4">
                                    We translate the abstract principles of <strong>Cognitive Load Theory (CLT)</strong> into a concrete physics simulation.
                                    Learning is modeled as a railway system where information is 'Cargo' and working memory is 'Engine Capacity.'
                                </p>
                            </div>
                            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
                                <ul className="space-y-4">
                                    <ListItem label="Intrinsic Load" value="Cargo Mass" icon={<Database size={14} />} />
                                    <ListItem label="Extraneous Load" value="Track Friction" icon={<Zap size={14} />} />
                                    <ListItem label="Germane Load" value="Combustion" icon={<ActivityIcon />} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2: The Stack */}
                    <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl p-10 relative overflow-hidden group backdrop-blur-md hover:shadow-cyan-500/5 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-center gap-4 mb-8 relative">
                            <div className="p-4 bg-slate-800/50 rounded-2xl text-cyan-400 border border-white/5 shadow-inner">
                                <Cpu size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">The Stack</h3>
                        </div>

                        <p className="text-slate-400 mb-8 relative leading-relaxed">
                            Built on <strong>Rust</strong> and <strong>WebAssembly</strong> to ensure "Systems Isomorphism"—the reliability of the code must match the rigor of the pedagogy.
                        </p>

                        <div className="flex flex-wrap gap-2 relative">
                            <TechBadge color="cyan">Bevy Engine</TechBadge>
                            <TechBadge color="blue">Axum</TechBadge>
                            <TechBadge color="orange">Leptos</TechBadge>
                            <TechBadge color="green">WebGPU</TechBadge>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Privacy Moat Section - Feature Highlight */}
            <div className="relative py-32 border-y border-slate-900 bg-slate-950/80 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 text-[#CFB991] font-mono font-bold mb-6 tracking-widest uppercase text-sm">
                                <Shield size={18} /> Ethical Compliance Protocol
                            </div>
                            <h2 className="text-5xl font-bold text-white mb-8">The Privacy Moat</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                In an era of Surveillance Capitalism, "Ask Pete" implements a <strong>Hybrid Sovereign Architecture</strong>.
                                Student data is processed locally on the device (Edge Computing), ensuring that their thoughts remain their property.
                            </p>
                            <ul className="space-y-6">
                                <CheckItem title="FERPA Compliant by Default">Data never leaves the device. The server is blind.</CheckItem>
                                <CheckItem title="Local-First Vector Database">Semantic search runs on-metal, not in the cloud.</CheckItem>
                                <CheckItem title="Apache 2.0 Open Source">The "Prime Directive" of transparency.</CheckItem>
                            </ul>
                        </div>

                        {/* Visual for Moat */}
                        <div className="relative flex-shrink-0">
                            <div className="w-80 h-80 rounded-full border border-slate-700 flex items-center justify-center relative bg-slate-900/50 shadow-2xl">
                                <div className="absolute inset-0 border border-[#CFB991]/20 rounded-full animate-spin-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-4 border border-slate-600 rounded-full border-dashed animate-spin-[spin_20s_linear_infinite_reverse]" />
                                <div className="text-center z-10 p-8 rounded-full bg-slate-900 border border-slate-700 shadow-xl">
                                    <Lock size={48} className="mx-auto text-[#CFB991] mb-2" />
                                    <div className="text-xs font-mono font-bold text-white uppercase tracking-widest">Local-First</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Secure Enclave</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pedagogy Deep Dive */}
            <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-indigo-400 font-mono font-bold mb-6 tracking-widest uppercase text-sm">
                        <BookOpen size={18} /> Pedagogical Framework
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Cognitive Load as Railway Physics</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        The core pedagogical innovation of Ask Pete is translating abstract Cognitive Load Theory (CLT)
                        into a concrete, interactive physics simulation. This "Systems Isomorphism" allows students to
                        <strong className="text-white"> feel</strong> cognitive constraints as physical resistance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card
                        title="Intrinsic Load"
                        subtitle="Cargo Mass"
                        color="text-[#CFB991]"
                        icon={<Database size={24} />}
                        description="The inherent difficulty of the concept becomes the weight of the cargo. Complex topics require more 'engine power' to move."
                    />
                    <Card
                        title="Extraneous Load"
                        subtitle="Track Friction"
                        color="text-cyan-400"
                        icon={<Zap size={24} />}
                        description="Poor instructional design becomes rust on the tracks. Confusing interfaces create resistance that wastes cognitive energy."
                    />
                    <Card
                        title="Germane Load"
                        subtitle="Steam Generation"
                        color="text-amber-400"
                        icon={<Activity size={24} />}
                        description="Productive struggle becomes heat that generates steam. This 'steam' powers skill progression and unlocks new capabilities."
                    />
                </div>
            </div>

            {/* Cultural Engineering */}
            <div className="bg-slate-900/30 border-t border-slate-800 py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono font-bold mb-6 tracking-widest uppercase text-sm">
                                <Users size={18} /> Learner Analysis
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-8">The Boilermaker Mindset</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Ask Pete was designed specifically for Purdue students through deep cultural analysis.
                                Rather than generic self-help language, the system uses <strong className="text-white">engineering metaphors</strong> and
                                <strong className="text-white"> historical narrative anchors</strong> that resonate with the target population.
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-4">
                                    <Globe size={20} className="text-emerald-400" />
                                    <span className="text-slate-300 font-mono text-sm">"Self-regulation" → <strong className="text-white">"Cognitive Logistics"</strong></span>
                                </div>
                                <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-4">
                                    <Shield size={20} className="text-emerald-400" />
                                    <span className="text-slate-300 font-mono text-sm">"Emotional resilience" → <strong className="text-white">"Structural Integrity"</strong></span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Terminal size={100} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">The Heavilon Protocol</h3>
                            <p className="text-slate-400 leading-relaxed mb-6 italic border-l-2 border-[#CFB991] pl-4">
                                "Failure isn't defeat—it's telemetry."
                            </p>
                            <p className="text-sm text-slate-500">
                                Named after the 1894 Heavilon Hall fire, this framework reframes failure as data collection.
                                Just as the fire led to Purdue's "One Brick Higher" resilience motto, student struggles become
                                the foundation for growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8">Ready to see the technical implementation?</h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-950 font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#CFB991]/20"
                    >
                        View Competency Portfolio <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

// Helper Components
function ListItem({ label, value, icon }) {
    return (
        <li className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0">
            <span className="text-slate-500 font-medium flex items-center gap-2 text-sm">{icon} {label}</span>
            <span className="text-white font-mono text-sm">{value}</span>
        </li>
    );
}

function TechBadge({ children, color = "slate" }) {
    const colorMap = {
        cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        orange: "text-orange-400 border-orange-500/30 bg-orange-500/10",
        green: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        slate: "text-slate-400 border-slate-500/30 bg-slate-500/10",
    };

    return (
        <span className={`px-4 py-1.5 text-xs font-mono border rounded-full ${colorMap[color]}`}>
            {children}
        </span>
    );
}

function CheckItem({ title, children }) {
    return (
        <li className="flex items-start gap-4">
            <div className="mt-1 p-1 bg-emerald-500/10 rounded text-emerald-400 border border-emerald-500/30">
                <Zap size={14} />
            </div>
            <div>
                <strong className="block text-white mb-1">{title}</strong>
                <span className="text-slate-400 text-sm leading-relaxed">{children}</span>
            </div>
        </li>
    );
}

function Card({ title, subtitle, description, color, icon }) {
    return (
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/60 transition-colors backdrop-blur-sm">
            <div className={`${color} mb-4`}>{icon}</div>
            <div className={`${color} font-bold mb-2`}>{subtitle}</div>
            <h3 className="text-white font-bold text-xl mb-4">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

function ActivityIcon() {
    return <Activity size={14} />
}
