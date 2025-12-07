import React from 'react';
import { portfolioData } from '../data/portfolioData';
import BadgeCard from '../components/BadgeCard';
import { Briefcase, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Portfolio() {
    // Note: Removed unused useState, setSelectedBadge, etc., as navigation handles the detail view.

    const { categories, badges } = portfolioData;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]"
        >
            <Helmet>
                <title>Portfolio | Joshua Atkinson</title>
                <meta name="description" content="IBSTPI-aligned instructional design portfolio demonstrating competencies in professional foundations, planning, design, evaluation, and research." />
            </Helmet>

            {/* Hero Section - RE-INSERTED */}
            <div className="relative py-24 px-6 text-center overflow-hidden border-b border-slate-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 mb-6">
                        <Briefcase size={14} />
                        {portfolioData.title}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Competency</span>{' '}
                        <span className="bg-gradient-to-r from-[#CFB991] via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">Portfolio</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A systematic collection of artifacts and reflections demonstrating mastery of the Purdue LDT Competencies.
                    </p>
                </div>
            </div>
            {/* END Hero Section */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Iterate through SUPRA-BADGES (Categories) */}
                {categories.map((category) => (
                    <div key={category.id} className="mb-32 last:mb-0 relative">

                        {/* Section Header - RE-INSERTED */}
                        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 border-b border-slate-800 pb-8">
                            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-[#CFB991]">
                                <Layers size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                                <p className="text-slate-400 max-w-xl">{category.description}</p>
                            </div>
                        </div>
                        {/* END Section Header */}

                        {/* Sub-Badges Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {badges
                                .filter(b => b.categoryId === category.id)
                                .map((badge) => (
                                    <Link
                                        key={badge.id}
                                        to={`/portfolio/${category.id}/${badge.id}`}
                                    >
                                        <BadgeCard
                                            badge={badge}
                                            categoryId={category.id}
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
            {/* Note: The Modal/AnimatePresence block was removed to enable direct page navigation. */}
        </motion.div>
    );
}