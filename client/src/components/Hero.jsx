import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Shield, Landmark } from 'lucide-react'; // Added Landmark for Gov feel
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            {/* Background Gradient - Deeper, more executive feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-[#CFB991]/5" />

            {/* Abstract Map Overlay (Nod to Houlton/Town Manager role) */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Identity Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-mono tracking-widest uppercase"
                >
                    <Shield size={12} className="text-[#CFB991]" />
                    <span>Operations & Leadership</span>
                </motion.div>

                {/* Name & Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
                >
                    Joshua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] to-amber-700">Atkinson</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    <span className="text-white font-medium">Systems Architect & Public Administrator</span>
                    <br />
                    Merging 17 years of Marine Corps leadership with modern Learning Design technology to build resilient communities.
                </motion.p>

                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        to="/portfolio"
                        className="group relative px-8 py-4 bg-[#CFB991] text-slate-950 font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(207,185,145,0.4)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            View Competency Portfolio
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        to="/ask-pete"
                        className="group px-8 py-4 bg-slate-900/50 border border-slate-700 hover:border-[#CFB991]/50 text-slate-300 hover:text-white rounded-lg transition-all flex items-center gap-2"
                    >
                        <Cpu size={18} className="text-[#CFB991]" />
                        <span>View Technical Capstone</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
