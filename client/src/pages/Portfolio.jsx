import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import BadgeCard from '../components/BadgeCard';
import { X, ExternalLink, Briefcase, Layers, FileText, Lightbulb, CheckCircle } from 'lucide-react';

export default function Portfolio() {
    const [selectedBadge, setSelectedBadge] = useState(null);
    const { categories, badges } = portfolioData;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">

            {/* Hero Section */}
            <div className="relative py-24 px-6 text-center overflow-hidden border-b border-slate-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 mb-6">
                        <Briefcase size={14} />
                        {portfolioData.title}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Competency <span className="text-[#CFB991]">Portfolio</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A systematic collection of artifacts and reflections demonstrating mastery of the Purdue LDT Competencies.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Iterate through SUPRA-BADGES (Categories) */}
                {categories.map((category) => (
                    <div key={category.id} className="mb-32 last:mb-0 relative">
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 border-b border-slate-800 pb-8">
                            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-[#CFB991]">
                                <Layers size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                                <p className="text-slate-400 max-w-xl">{category.description}</p>
                            </div>
                        </div>

                        {/* Sub-Badges Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {badges
                                .filter(b => b.categoryId === category.id)
                                .map((badge) => (
                                    <BadgeCard
                                        key={badge.id}
                                        badge={badge}
                                        onClick={() => setSelectedBadge(badge)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* BADGE DETAIL MODAL */}
            <AnimatePresence>
                {selectedBadge && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBadge(null)}
                            className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
                        />

                        {/* Modal Window */}
                        <motion.div
                            layoutId={`card-${selectedBadge.id}`}
                            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900 z-10 flex items-start justify-between">
                                <div>
                                    <div className="text-xs font-mono text-[#CFB991] uppercase tracking-wider mb-2">
                                        Sub-Badge Competency
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {selectedBadge.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedBadge(null)}
                                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-12">

                                {/* Iterate through Artifacts in this Badge */}
                                {selectedBadge.artifacts.map((artifact, index) => (
                                    <div key={index} className="relative pl-6 md:pl-8 border-l-2 border-slate-800 hover:border-[#CFB991] transition-colors duration-300">

                                        {/* Artifact Title & Link */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <h4 className="text-xl font-bold text-slate-100">
                                                <span className="text-[#CFB991] mr-2">#{index + 1}</span>
                                                {artifact.title}
                                            </h4>
                                            {artifact.file_path && (
                                                <a
                                                    href={artifact.file_path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#CFB991]/10 text-[#CFB991] hover:bg-[#CFB991] hover:text-slate-900 rounded-lg text-sm font-bold transition-all"
                                                >
                                                    View Artifact <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>

                                        {/* Origin/Context */}
                                        {artifact.origin && (
                                            <div className="mb-6 inline-block bg-slate-950 px-3 py-1 rounded border border-slate-800 text-xs text-slate-500 font-mono">
                                                Context: {artifact.origin}
                                            </div>
                                        )}

                                        {/* Grid for Summary & Reflection */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            {/* Summary Column */}
                                            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50">
                                                <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                    <FileText size={16} /> Summary
                                                </h5>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {artifact.summary}
                                                </p>
                                            </div>

                                            {/* Reflection Column */}
                                            <div className="bg-slate-950 p-6 rounded-xl border border-[#CFB991]/20 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 text-[#CFB991]">
                                                    <Lightbulb size={64} />
                                                </div>
                                                <h5 className="text-sm font-bold text-[#CFB991] uppercase tracking-wider mb-4 flex items-center gap-2">
                                                    <CheckCircle size={16} /> Competency Reflection
                                                </h5>

                                                <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                                                    {artifact.reflection.challenge && (
                                                        <div>
                                                            <span className="text-slate-500 font-bold block mb-1">The Challenge:</span>
                                                            {artifact.reflection.challenge}
                                                        </div>
                                                    )}
                                                    {artifact.reflection.content && (
                                                        <div>
                                                            <span className="text-slate-500 font-bold block mb-1">My Approach:</span>
                                                            {artifact.reflection.content}
                                                        </div>
                                                    )}
                                                    {artifact.reflection.competency_alignment && (
                                                        <div className="pt-2 border-t border-slate-800 mt-2">
                                                            <span className="text-[#CFB991] font-bold block mb-1">Growth & Alignment:</span>
                                                            {artifact.reflection.competency_alignment}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
