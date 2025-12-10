import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, ArrowRight, Layers, Target, PenTool, BarChart, Hexagon, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

// Visual System Config
const categoryThemes = {
    'foundations': {
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
        hoverBorder: 'group-hover:border-indigo-500/50',
        gradient: 'from-indigo-900/50 to-purple-900/50',
        glow: 'group-hover:shadow-indigo-500/20'
    },
    'planning': {
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        hoverBorder: 'group-hover:border-cyan-500/50',
        gradient: 'from-cyan-900/50 to-blue-900/50',
        glow: 'group-hover:shadow-cyan-500/20'
    },
    'design': {
        color: 'text-fuchsia-400',
        bg: 'bg-fuchsia-500/10',
        border: 'border-fuchsia-500/20',
        hoverBorder: 'group-hover:border-fuchsia-500/50',
        gradient: 'from-fuchsia-900/50 to-pink-900/50',
        glow: 'group-hover:shadow-fuchsia-500/20'
    },
    'evaluation': {
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        hoverBorder: 'group-hover:border-emerald-500/50',
        gradient: 'from-emerald-900/50 to-teal-900/50',
        glow: 'group-hover:shadow-emerald-500/20'
    }
};

const CategoryIcon = ({ id, size = 24, className = "" }) => {
    switch (id) {
        case 'foundations': return <Layers size={size} className={className} />;
        case 'planning': return <Target size={size} className={className} />;
        case 'design': return <PenTool size={size} className={className} />;
        case 'evaluation': return <BarChart size={size} className={className} />;
        default: return <Briefcase size={size} className={className} />;
    }
};

export default function PortfolioHome() {
    const { categories } = portfolioData;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] opacity-30 animate-pulse delay-700" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center relative"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFB991] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CFB991]"></span>
                        </span>
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#CFB991] uppercase">
                            Systems Architect // Portfolio
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Competency <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] to-amber-200">Domains</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A verified comprehensive record of instructional design capabilities,
                        technical systems engineering, and strategic leadership.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {categories.map((category, index) => {
                        const theme = categoryThemes[category.id] || categoryThemes['foundations'];

                        return (
                            <Link key={category.id} to={`/portfolio/${category.id}`} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className={`group h-full relative overflow-hidden rounded-3xl bg-slate-900/40 border ${theme.border} ${theme.hoverBorder} backdrop-blur-md transition-all duration-500 shadow-2xl hover:shadow-2xl ${theme.glow}`}
                                >
                                    {/* Card Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Tech Grid Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />

                                    <div className="relative p-10 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={`p-4 rounded-2xl ${theme.bg} ${theme.color} ring-1 ring-inset ring-white/10`}>
                                                <CategoryIcon id={category.id} size={32} />
                                            </div>
                                            <div className="p-2 rounded-full border border-white/5 text-slate-500 group-hover:text-white group-hover:border-white/20 transition-colors">
                                                <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#CFB991] transition-colors">
                                                {category.title}
                                            </h2>
                                            <p className="text-slate-400 leading-relaxed text-lg">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Footer / Meta */}
                                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-sm font-mono text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <Hexagon size={14} className={theme.color} />
                                                <span className="uppercase tracking-wider">Sector {index + 1}</span>
                                            </div>
                                            <div className="group-hover:translate-x-2 transition-transform duration-300 text-white font-medium">
                                                ACCESS FILES_
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
