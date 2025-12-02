import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ARTIFACTS, CATEGORIES } from '../data/artifacts';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Downloads = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter for EVIDENCE artifacts only
    const evidenceArtifacts = ARTIFACTS.filter(art => art.type === 'evidence');

    const filteredArtifacts = selectedCategory === "All"
        ? evidenceArtifacts
        : evidenceArtifacts.filter(art => art.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-amber-900 selection:text-amber-50">
            <Navigation />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        <span className="text-[#CFB991]">Evidence</span> Library
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive archive of supporting documentation, design challenges, and technical proofs.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-[#CFB991] text-black shadow-lg shadow-[#CFB991]/20'
                                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-[#CFB991] border border-slate-800'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Artifact List */}
                <div className="grid gap-4">
                    {filteredArtifacts.map((artifact) => (
                        <motion.div
                            key={artifact.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="group relative bg-slate-900/50 border border-slate-800 hover:border-[#CFB991]/30 rounded-lg p-4 transition-all duration-300 hover:bg-slate-900"
                        >
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-[#CFB991]/20 transition-colors">
                                        <FileText className="w-6 h-6 text-[#CFB991]/70 group-hover:text-[#CFB991]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-[#CFB991] transition-colors">
                                            {artifact.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-1">{artifact.challenge}</p>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-950 text-slate-400 border border-slate-800">
                                            {artifact.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <a
                                        href={artifact.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-[#CFB991]/20 text-slate-300 hover:text-[#CFB991] rounded-md border border-slate-800 hover:border-[#CFB991]/30 transition-all duration-300 text-sm font-medium group-hover:shadow-lg group-hover:shadow-[#CFB991]/10"
                                    >
                                        {artifact.linkUrl.endsWith('.pdf') ? (
                                            <>
                                                <Download className="w-4 h-4" />
                                                Download PDF
                                            </>
                                        ) : (
                                            <>
                                                <ExternalLink className="w-4 h-4" />
                                                View Resource
                                            </>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Downloads;
