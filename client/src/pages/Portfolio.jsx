import React, { useState } from 'react';
import { Award, ExternalLink, X, ChevronRight, Menu } from 'lucide-react';
import { ARTIFACTS, CATEGORIES } from '../data/artifacts';
import Footer from '../components/Footer';

// Icon Component
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// Modal Component
const Modal = ({ artifact, onClose }) => {
    if (!artifact) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-800/90 border border-slate-700 rounded-2xl shadow-2xl ring-1 ring-white/10">

                <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-slate-800/95 border-slate-700 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                            <Icon path={artifact.iconPath} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">{artifact.title}</h2>
                            <p className="text-sm text-slate-400">{artifact.challenge}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 transition-colors rounded-full hover:bg-slate-700 text-slate-400 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50">
                        <h3 className="mb-3 text-sm font-semibold tracking-wider text-indigo-300 uppercase">Artifact Summary</h3>
                        <div
                            className="text-slate-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: artifact.summary }}
                        />
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-bold text-white">Reflective Analysis</h3>
                        </div>
                        <div
                            className="prose prose-invert prose-slate max-w-none prose-p:leading-loose prose-strong:text-white"
                            dangerouslySetInnerHTML={{ __html: artifact.reflection }}
                        />
                    </div>
                </div>

                <div className="sticky bottom-0 p-6 border-t bg-slate-800/95 border-slate-700 backdrop-blur-md flex justify-end">
                    <a
                        href={artifact.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
                    >
                        {artifact.linkText}
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Artifact Card
const ArtifactCard = ({ artifact, onClick }) => {
    return (
        <div
            onClick={() => onClick(artifact)}
            className="group relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:bg-slate-800/60 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer backdrop-blur-md"
        >
            <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 group-hover:opacity-100" />

            <div className="p-6 flex-1 relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 transition-colors rounded-lg bg-slate-700/50 text-indigo-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-200">
                        <Icon path={artifact.iconPath} />
                    </div>
                    <div className="px-2 py-1 text-xs font-medium tracking-wide text-slate-400 uppercase bg-slate-900/50 rounded-full border border-slate-700/50">
                        {artifact.category.split(' ')[0]}...
                    </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                    {artifact.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-3 mb-4 group-hover:text-slate-300">
                    {artifact.summary.replace(/<[^>]*>?/gm, '')}
                </p>
            </div>

            <div className="px-6 py-4 border-t border-slate-700/30 bg-slate-900/20 relative z-10 flex items-center justify-between group-hover:bg-indigo-900/10 transition-colors">
                <span className="text-xs font-medium text-slate-500 group-hover:text-indigo-300 transition-colors">Read Reflection</span>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-indigo-300 transform group-hover:translate-x-1 transition-all" />
            </div>
        </div>
    );
};

// Main Portfolio Page
export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedArtifact, setSelectedArtifact] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const filteredArtifacts = selectedCategory === "All"
        ? ARTIFACTS
        : ARTIFACTS.filter(a => a.category === selectedCategory);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">

            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <header className="mb-16 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase rounded-full bg-indigo-950/50 border border-indigo-900">
                        <Award size={14} />
                        Competency Portfolio
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Learning Design & Technology
                    </h1>
                    <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed">
                        23 artifacts demonstrating mastery across Professional Foundations, Planning & Analysis,
                        Design & Development, Evaluation & Implementation, and Applying ID Research & Theory.
                    </p>
                </header>

                <div className="sticky top-20 z-40 mb-12">
                    <div className="md:hidden flex justify-center mb-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-full text-sm font-medium shadow-lg"
                        >
                            <Menu size={16} />
                            Filter Competencies
                        </button>
                    </div>

                    <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex flex-wrap justify-center gap-2 p-2 
            bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl
            max-w-fit mx-auto transition-all
          `}>
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setIsMenuOpen(false);
                                }}
                                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                  ${selectedCategory === category
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-400'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtifacts.map((artifact) => (
                        <ArtifactCard
                            key={artifact.id}
                            artifact={artifact}
                            onClick={setSelectedArtifact}
                        />
                    ))}
                </div>

                {filteredArtifacts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No artifacts found in this category.</p>
                    </div>
                )}

                <Footer />

            </div>

            {selectedArtifact && (
                <Modal
                    artifact={selectedArtifact}
                    onClose={() => setSelectedArtifact(null)}
                />
            )}

        </div>
    );
}
