import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, BookOpen, Cpu, Shield, Layers } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#CFB991]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 lg:pt-32 pb-20">

                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20">
                        <span className="w-2 h-2 rounded-full bg-[#CFB991] animate-pulse" />
                        Online Portfolio System
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] to-[#bfa37a]">Daydream</span> <br />
                        Initiative.
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12">
                        A comprehensive <strong>Learning Design & Technology</strong> master's portfolio.
                        Exploring the intersection of Cognitive Load Theory, Local-First AI, and Embodied Cognition.
                    </p>

                    {/* Primary Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/portfolio"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-950 text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
                        >
                            <BookOpen size={20} />
                            View Competency Portfolio
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/ask-pete"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 text-lg font-bold rounded-xl transition-all"
                        >
                            <Terminal size={20} className="text-[#CFB991]" />
                            Talk to Ask Pete
                        </Link>
                    </div>
                </motion.div>

                {/* Features / Quick Links Grid */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Layers}
                        title="Systematic Design"
                        desc="Artifacts demonstrating ADDIE, Gap Analysis, and rigorous instructional planning."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Ethical Architecture"
                        desc="Implementing 'Privacy Moats' and 'Local-First' data policies to protect student agency."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={Cpu}
                        title="Technical Mastery"
                        desc="Full stack Rust/WASM implementations demonstrating modern EdTech capabilities."
                        delay={0.4}
                    />
                </div>
            </div>
        </div>
    );
}

// Helper Component for Feature Cards
function FeatureCard({ icon: Icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-[#CFB991]/30 transition-colors"
        >
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-[#CFB991] mb-6">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{desc}</p>
        </motion.div>
    );
}
