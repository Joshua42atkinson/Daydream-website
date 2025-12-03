import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { ARTIFACTS } from '../../data/artifacts';
import { ArrowLeft, ExternalLink, FileText, Lightbulb, Link as LinkIcon } from 'lucide-react';

export default function SubBadgePage() {
    const { categoryId, badgeId } = useParams();

    const category = portfolioData.categories.find(c => c.id === categoryId);
    const badge = portfolioData.badges.find(b => b.id === badgeId);

    if (!category || !badge) {
        return <Navigate to={`/portfolio/${categoryId}`} replace />;
    }

    // Hydrate artifacts with full data from ARTIFACTS constant
    const badgeArtifacts = badge.artifacts.map(ba => {
        const fullArtifact = ARTIFACTS.find(a => a.id === ba.artifactId);
        return fullArtifact || null;
    }).filter(Boolean);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            {/* Header */}
            <div className="bg-slate-900/50 border-b border-slate-800 sticky top-16 z-20 backdrop-blur-md">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <Link to="/portfolio" className="hover:text-[#CFB991] transition-colors">Domains</Link>
                        <span>/</span>
                        <Link to={`/portfolio/${categoryId}`} className="hover:text-[#CFB991] transition-colors">{category.title}</Link>
                        <span>/</span>
                        <span className="text-[#CFB991]">{badge.title}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        {badge.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-16">
                    {badgeArtifacts.map((artifact) => (
                        <div key={artifact.id} className="scroll-mt-24" id={artifact.id}>
                            <div className="bg-slate-900/20 border border-slate-800 rounded-2xl overflow-hidden">
                                {/* Artifact Header */}
                                <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-[#CFB991]/10 text-[#CFB991]">
                                            <artifact.icon size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white mb-1">
                                                {artifact.title}
                                            </h2>
                                            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                                                {artifact.type === 'major' ? 'Major Report' : 'Evidence Artifact'}
                                            </span>
                                        </div>
                                    </div>

                                    {artifact.linkUrl && artifact.linkUrl !== '#' && (
                                        <a
                                            href={artifact.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-900 font-bold rounded-xl transition-colors whitespace-nowrap"
                                        >
                                            {artifact.linkText || "View Artifact"}
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>

                                {/* Artifact Body */}
                                <div className="p-6 md:p-8 space-y-8">
                                    {/* Summary */}
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <FileText size={14} /> Summary
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {artifact.summary}
                                        </p>
                                    </div>

                                    {/* Reflection */}
                                    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800/50">
                                        <h3 className="text-sm font-bold text-[#CFB991] uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <Lightbulb size={14} /> Reflection & Competency Alignment
                                        </h3>
                                        <div
                                            className="prose prose-invert prose-sm max-w-none text-slate-400"
                                            dangerouslySetInnerHTML={{ __html: artifact.reflection }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
