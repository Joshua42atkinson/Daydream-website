import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { ArrowLeft, Award, ArrowRight, Shield, Database, Cpu, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

// Consistent Color System (replicated for isolation)
const categoryColors = {
    'foundations': { gradient: 'from-indigo-600 to-purple-600', accent: 'text-indigo-400', border: 'border-indigo-500/30' },
    'planning': { gradient: 'from-blue-600 to-cyan-600', accent: 'text-cyan-400', border: 'border-cyan-500/30' },
    'design': { gradient: 'from-purple-600 to-pink-600', accent: 'text-fuchsia-400', border: 'border-fuchsia-500/30' },
    'evaluation': { gradient: 'from-green-600 to-emerald-600', accent: 'text-emerald-400', border: 'border-emerald-500/30' },
    'research': { gradient: 'from-amber-600 to-orange-600', accent: 'text-amber-400', border: 'border-amber-500/30' }
};

export default function SupraBadgePage() {
    const { categoryId } = useParams();
    const category = portfolioData.categories.find(c => c.id === categoryId);

    if (!category) {
        return <Navigate to="/portfolio" replace />;
    }

    const subBadges = portfolioData.badges.filter(b => b.categoryId === categoryId);
    const colors = categoryColors[categoryId] || categoryColors['foundations'];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br ${colors.gradient} rounded-full blur-[120px] opacity-20 animate-pulse`} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]" />
            </div>

            {/* Header Section */}
            <div className="relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-md pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#CFB991] transition-colors font-mono text-sm tracking-wider uppercase">
                            <ArrowLeft size={16} /> Return to Operations Center
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CFB991]/10 border border-[#CFB991]/20 text-[#CFB991] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            <Activity size={12} /> Active Sector
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {category.title}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed border-l-4 border-[#CFB991]/50 pl-6">
                            {category.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Sub-Badges (Competency Modules) Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-sm font-bold text-[#CFB991] uppercase tracking-widest flex items-center gap-2">
                        <Database size={16} />
                        Available Competency Modules
                    </h2>
                    <span className="text-slate-600 font-mono text-xs hidden md:block">
                        SYS.STATUS: OPERATIONAL
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subBadges.map((badge, index) => (
                        <Link
                            key={badge.id}
                            to={`/portfolio/${categoryId}/${badge.id}`}
                            className="group block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`h-full bg-slate-900/60 border border-slate-700/50 hover:border-[#CFB991]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#CFB991]/10 hover:-translate-y-1 backdrop-blur-sm group-hover:bg-slate-900/80 relative overflow-hidden`}
                            >
                                {/* Decorative Tech Lines */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent -mr-10 -mt-10 rounded-full blur-xl" />

                                <div className="flex items-start justify-between mb-6 relative">
                                    <div className={`p-4 rounded-xl bg-slate-800/80 ${colors.accent} ring-1 ring-white/10 group-hover:bg-[#CFB991]/10 group-hover:text-[#CFB991] transition-colors`}>
                                        <Award size={24} />
                                    </div>
                                    <div className="px-2 py-1 bg-black/40 rounded text-[10px] font-mono text-slate-500 uppercase">
                                        v1.0
                                    </div>
                                </div>

                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CFB991] transition-colors pr-8">
                                        {badge.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-300 transition-colors mt-6">
                                        <span className="uppercase tracking-wider font-bold text-[10px]">Initialize Protocol</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
