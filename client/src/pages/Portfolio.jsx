import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTIFACTS, CATEGORIES } from '../data/artifacts';
import { X, ExternalLink, BookOpen, Filter, Briefcase, ArrowUpRight, FileText, Lightbulb } from 'lucide-react';

export default function Portfolio() {
    const [selectedArtifact, setSelectedArtifact] = useState(null);

    // Split artifacts by category
    const allArtifacts = ARTIFACTS || [];
    const majorReports = allArtifacts.filter(a => a.category === "Major Reports");
    const evidence = allArtifacts.filter(a => a.category === "Competency Evidence");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">

            {/* Hero Section */}
            <div className="relative py-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 mb-6">
                        <Briefcase size={14} />
                        Master's Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        The <span className="text-[#CFB991]">Work</span>.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A collection of artifacts demonstrating mastery in Learning Design & Technology.
                        From theoretical frameworks to production-grade code.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

                {/* Section 1: Major Reports (The Big 5) */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-slate-800" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Major Reports</h2>
                        <div className="h-px flex-1 bg-slate-800" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {majorReports.map((artifact) => (
                            <motion.div
                                key={artifact.id}
                                layoutId={artifact.id}
                                onClick={() => setSelectedArtifact(artifact)}
                                className="group cursor-pointer bg-slate-900/40 border border-slate-800 hover:border-[#CFB991]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#CFB991]/10 hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-lg bg-[#CFB991]/10 text-[#CFB991] group-hover:scale-110 transition-transform">
                                        <artifact.icon size={24} />
                                    </div>
                                    <ArrowUpRight className="text-slate-600 group-hover:text-[#CFB991] transition-colors" size={20} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CFB991] transition-colors">
                                    {artifact.title}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                                    {artifact.summary}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Competency Evidence (The Rest) */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-slate-800" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Competency Evidence</h2>
                        <div className="h-px flex-1 bg-slate-800" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {evidence.map((artifact) => (
                            <motion.div
                                key={artifact.id}
                                layoutId={artifact.id}
                                onClick={() => setSelectedArtifact(artifact)}
                                className="group cursor-pointer bg-slate-900/20 border border-slate-800 hover:border-slate-600 rounded-lg p-5 transition-all hover:bg-slate-800/40"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <artifact.icon size={18} className="text-slate-500 group-hover:text-[#CFB991] transition-colors" />
                                    <h3 className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors truncate">
                                        {artifact.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedArtifact && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArtifact(null)}
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={selectedArtifact.id}
                            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-slate-800 bg-slate-900/50">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-[#CFB991]/20 text-[#CFB991]">
                                            <selectedArtifact.icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white leading-tight">
                                                {selectedArtifact.title}
                                            </h3>
                                            <span className="text-xs font-mono text-[#CFB991] uppercase tracking-wider">
                                                {selectedArtifact.category}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedArtifact(null)}
                                        className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <FileText size={14} /> Summary
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        {selectedArtifact.summary}
                                    </p>
                                </div>

                                <div className="mb-8 p-6 bg-slate-950 rounded-xl border border-slate-800">
                                    <h4 className="text-sm font-bold text-[#CFB991] uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Lightbulb size={14} /> Reflection
                                    </h4>
                                    <div
                                        className="prose prose-invert prose-sm max-w-none text-slate-400"
                                        dangerouslySetInnerHTML={{ __html: selectedArtifact.reflection }}
                                    />
                                </div>

                                <a
                                    href={selectedArtifact.linkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-900 font-bold rounded-xl transition-all transform active:scale-[0.98]"
                                >
                                    {selectedArtifact.linkText}
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
