import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTIFACTS, CATEGORIES } from '../data/artifacts';
import { X, ExternalLink, BookOpen, Filter } from 'lucide-react';

export default function Portfolio() {
    const [selectedArtifact, setSelectedArtifact] = useState(null);
    const [filter, setFilter] = useState('All');

    // Filter for MAJOR artifacts only
    const majorArtifacts = ARTIFACTS.filter(art => art.type === 'major');

    const filteredArtifacts = filter === 'All'
        ? majorArtifacts
        : majorArtifacts.filter(a => a.category === filter);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 px-6 pb-20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Portfolio Artifacts</h1>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat
                                    ? 'bg-[#CFB991] border-[#CFB991] text-slate-950 shadow-lg shadow-[#CFB991]/25'
                                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtifacts.map((artifact) => (
                        <motion.div
                            key={artifact.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedArtifact(artifact)}
                            className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-[#CFB991]/50 transition-all cursor-pointer group flex flex-col h-full"
                        >
                            <div className="p-6 flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-[#CFB991] group-hover:text-slate-950 group-hover:bg-[#CFB991] transition-colors">
                                        {/* Render SVG path if available, else generic icon */}
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={artifact.iconPath} />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider border border-slate-700 px-2 py-1 rounded">
                                        {artifact.category.split(' ')[0]}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#CFB991] transition-colors">
                                    {artifact.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {artifact.summary}
                                </p>
                            </div>

                            <div className="px-6 py-4 bg-slate-950/30 border-t border-slate-800 flex items-center justify-between">
                                <span className="text-xs text-slate-500 font-mono">{artifact.challenge.split(':')[0]}</span>
                                <div className="flex items-center gap-2 text-[#CFB991] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>View Reflection</span>
                                    <BookOpen className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedArtifact && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedArtifact(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#CFB991]/10"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-slate-800 flex justify-between items-start sticky top-0 bg-slate-900/95 backdrop-blur z-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{selectedArtifact.title}</h2>
                                    <p className="text-[#CFB991] text-sm mt-1 font-mono">{selectedArtifact.challenge}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedArtifact(null)}
                                    className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-8 p-6 bg-slate-950 rounded-xl border border-slate-800">
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Artifact Summary</h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        {selectedArtifact.summary}
                                    </p>
                                </div>

                                <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-white prose-a:text-[#CFB991] max-w-none">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <BookOpen className="text-[#CFB991]" />
                                        Reflection & Competency Alignment
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: selectedArtifact.reflection }} />
                                </div>

                                {selectedArtifact.linkUrl && selectedArtifact.linkUrl !== '#' && (
                                    <div className="mt-8 pt-8 border-t border-slate-800 flex justify-center">
                                        <a
                                            href={selectedArtifact.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-950 font-bold rounded-full transition-all shadow-lg shadow-[#CFB991]/25"
                                        >
                                            {selectedArtifact.linkText || "View Artifact"}
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
