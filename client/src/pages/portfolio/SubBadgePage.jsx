import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, FileText, Lightbulb } from 'lucide-react';
import ReflectionViewer from '../../components/ReflectionViewer';
import { evidenceData } from '../../data/evidenceData';

// ... (existing imports)

// --- START: Explicit Title Mapping for Robust Linking ---
const ARTIFACT_TITLE_MAP = {
    // Foundations Badges
    "Executive Summary: The Daydream Pivot": "Email Reflection Artifact",
    "From Mindmap to Model: The Rise of AI": "Blog: From Mindmap to Model",
    "The Iron Network Codex": "The Iron Network: A Codex",
    // FIXED: Mapping to the new entry in evidenceData.js
    "LDT Technology Badge: Website Development": "Website Development Technology Badge (Credential)",
    // FIXED: Map the ethics badge artifact to the correct CITI certification title
    "RCR Training & The Privacy Pivot": "CITI Program: Responsible Conduct of Research",

    // Planning Badges
    "The Vision vs. Reality Gap Analysis": "Iron Road Design Document",
    "Ask Pete Field Manual: The Boilermaker's Guide": "Ask Pete Field Manual (Short 8k)",
    "Vocabulary-as-a-Mechanism (VaaM)": "Storyfied D20 Game Design",
    "Synthetic Source Verification Matrix": "Iron Road Design Document",
    "The Glass Box Architecture": "Iron Road: Codebase of a Digital Mirror",

    // Design Badges
    "Constraint-Based ADDIE Protocol": "Iron Road Design Document",
    // FIXED: Mapping design spec to main Iron Road Design Document
    "Sequencing Matrix: Dependency of Force": "Iron Road Design Document",
    "Mechanized Pedagogy: The Weigh Station": "Storyfied D20 Game Design",
    "Glassmorphism Design System": "Day/Dream GitHub Repository",
    "The 'Storyfied' D20 System": "Storyfied D20 Game Design",
    "Daydream Initiative Infographic & Screencast": "Day/Dream Project Overview",
    "The Logistics Check & Gradient Scale": "Storyfied D20 Game Design",

    // Evaluation Badges
    "Technical Audit: The Formative Check": "Iron Road: Codebase of a Digital Mirror",
    "Alpha Prototype Evaluation Protocol": "Iron Road Design Document",
    "Scope Governance & The Diffusion Pivot": "Iron Road Design Document",

    // Removed duplicate keys/Older Artifacts
};
// --- END: Explicit Title Mapping for Robust Linking ---

// Helper to find the correct external link based on the map and exact title match
const getArtifactLink = (artifact) => {
    // 1. Get the canonical title from the map
    const targetTitle = ARTIFACT_TITLE_MAP[artifact.title];

    // If no mapping exists, or if it's explicitly null, return the placeholder file path
    if (!targetTitle) {
        return artifact.file_path;
    }

    // 2. Search evidenceData for an EXACT title match
    const match = evidenceData.find(item => item.title === targetTitle);

    if (match) {
        return match.link;
    }

    // 3. Fallback to the original internal placeholder path if no match is found (shouldn't happen with the map)
    return artifact.file_path;
};


export default function SubBadgePage() {
    const { categoryId, badgeId } = useParams();

    const category = portfolioData.categories.find(c => c.id === categoryId);
    const badge = portfolioData.badges.find(b => b.id === badgeId);

    // Scroll to top when page loads (must be before conditional return)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [badgeId]); // Re-scroll when badge changes

    if (!category || !badge) {
        return <Navigate to={`/portfolio/${categoryId}`} replace />;
    }

    const badgeArtifacts = badge.artifacts || [];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            {/* Header - kept mostly the same */}
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

            {/* Content Area */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-24">
                    {badgeArtifacts.map((artifact, index) => {
                        const artifactLink = getArtifactLink(artifact); // Use the helper here

                        return (
                            <div key={index} className="scroll-mt-32">

                                {/* 1. The Artifact Card */}
                                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden mb-8 shadow-xl backdrop-blur-md">
                                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/50">
                                        <div className="flex items-center gap-4">
                                            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-[#CFB991] shadow-inner">
                                                <FileText size={28} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white mb-2">
                                                    {artifact.title}
                                                </h2>
                                                <div className="inline-block px-3 py-1 bg-slate-950 rounded text-xs font-mono text-slate-500 uppercase tracking-wider border border-slate-800">
                                                    {artifact.origin}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Use the dynamically resolved artifactLink here and check if it's an external link */}
                                        {artifactLink && !artifactLink.startsWith('/assets/docs/') && ( // Only show button if link is external (not the broken placeholder)
                                            <a
                                                href={artifactLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-3 px-6 py-3 bg-[#CFB991] hover:bg-white text-slate-950 font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(207,185,145,0.3)]"
                                            >
                                                View Artifact
                                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                        {artifactLink && artifactLink.startsWith('/assets/docs/') && (
                                            <span className="text-sm text-slate-500">
                                                External link not available.
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6 md:p-8 bg-slate-950/30">
                                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Summary</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed">{artifact.summary}</p>
                                    </div>
                                </div>

                                {/* 2. The Reflection Timeline (The "Fancy" Part) */}
                                <div className="pl-2 md:pl-4">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="h-px flex-grow bg-slate-800"></div>
                                        <span className="text-[#CFB991] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                            <Lightbulb size={16} /> Competency Reflection
                                        </span>
                                        <div className="h-px flex-grow bg-slate-800"></div>
                                    </div>

                                    <ReflectionViewer reflection={artifact.reflection} />
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}