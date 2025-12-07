import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, FileText, Lightbulb, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ReflectionViewer from '../../components/ReflectionViewer';
import { evidenceData } from '../../data/evidenceData';

// --- START: Explicit Title Mapping for Robust Linking ---
const ARTIFACT_TITLE_MAP = {
    // Foundations Badges
    "Executive Summary: The Daydream Pivot": "Email Reflection Artifact",
    "From Mindmap to Model: The Rise of AI": "Blog: From Mindmap to Model",
    "The Iron Network Codex": "The Iron Network: A Codex",
    "LDT Technology Badge: Website Development": "Website Development Technology Badge (Credential)",
    "RCR Training & The Privacy Pivot": "CITI Program: Responsible Conduct of Research",

    // Planning Badges
    "The Vision vs. Reality Gap Analysis": "Iron Road Design Document",
    "Ask Pete Field Manual: The Boilermaker's Guide": "Ask Pete Field Manual (Short 8k)",
    "Vocabulary-as-a-Mechanism (VaaM)": "Storyfied D20 Game Design",
    "Synthetic Source Verification Matrix": "Iron Road Design Document",
    "The Glass Box Architecture": "Iron Road: Codebase of a Digital Mirror",

    // Design Badges
    "Constraint-Based ADDIE Protocol": "Iron Road Design Document",
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
};
// --- END: Explicit Title Mapping for Robust Linking ---

// Helper to find the correct external link based on the map and exact title match
const getArtifactLink = (artifact) => {
    const targetTitle = ARTIFACT_TITLE_MAP[artifact.title];
    if (!targetTitle) {
        return artifact.file_path;
    }
    const match = evidenceData.find(item => item.title === targetTitle);
    if (match) {
        return match.link;
    }
    return artifact.file_path;
};

// Category color mapping for visual consistency
const categoryColors = {
    'foundations': { gradient: 'from-indigo-600 to-purple-600', accent: 'indigo' },
    'planning': { gradient: 'from-blue-600 to-cyan-600', accent: 'blue' },
    'design': { gradient: 'from-purple-600 to-pink-600', accent: 'purple' },
    'evaluation': { gradient: 'from-green-600 to-emerald-600', accent: 'green' },
    'research': { gradient: 'from-amber-600 to-orange-600', accent: 'amber' }
};

export default function SubBadgePage() {
    const { categoryId, badgeId } = useParams();

    const category = portfolioData.categories.find(c => c.id === categoryId);
    const badge = portfolioData.badges.find(b => b.id === badgeId);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [badgeId]);

    if (!category || !badge) {
        return <Navigate to={`/portfolio/${categoryId}`} replace />;
    }

    const badgeArtifacts = badge.artifacts || [];
    const colors = categoryColors[categoryId] || categoryColors['foundations'];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]"
        >
            <Helmet>
                <title>{badge.title} | Joshua Atkinson</title>
                <meta name="description" content={`Competency portfolio: ${badge.title}. ${badgeArtifacts[0]?.summary || ''}`} />
            </Helmet>

            {/* Hero Section with Gradient */}
            <div className="relative overflow-hidden border-b border-slate-900">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10`} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5" />

                {/* Floating orbs for visual interest */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-[#CFB991]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative max-w-6xl mx-auto px-6 py-16">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2 text-sm text-slate-400 mb-8"
                    >
                        <Link to="/portfolio" className="hover:text-[#CFB991] transition-colors flex items-center gap-2">
                            <ArrowLeft size={16} />
                            Portfolio
                        </Link>
                        <span>/</span>
                        <Link to={`/portfolio/${categoryId}`} className="hover:text-[#CFB991] transition-colors">
                            {category.title}
                        </Link>
                    </motion.div>

                    {/* Badge Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFB991]/10 border border-[#CFB991]/30 text-[#CFB991] text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles size={14} />
                            {category.title} Competency
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {badge.title}
                        </h1>

                        {/* Artifact count */}
                        <div className="flex items-center gap-6 text-slate-400">
                            <div className="flex items-center gap-2">
                                <FileText size={18} className="text-[#CFB991]" />
                                <span className="font-medium">{badgeArtifacts.length} Artifact{badgeArtifacts.length !== 1 ? 's' : ''}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lightbulb size={18} className="text-[#CFB991]" />
                                <span className="font-medium">Competency Reflections</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="space-y-20">
                    {badgeArtifacts.map((artifact, index) => {
                        const artifactLink = getArtifactLink(artifact);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="scroll-mt-32"
                            >
                                {/* Artifact Card with Enhanced Design */}
                                <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md hover:border-[#CFB991]/30 transition-all duration-500">
                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#CFB991]/10 to-transparent rounded-bl-full" />

                                    {/* Header */}
                                    <div className="relative p-8 md:p-10 border-b border-slate-800/50">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                            <div className="flex items-start gap-5 flex-1">
                                                {/* Icon with gradient background */}
                                                <div className="relative">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 blur-xl rounded-xl`} />
                                                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-[#CFB991] shadow-lg border border-slate-700">
                                                        <FileText size={32} />
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-[#CFB991] transition-colors">
                                                        {artifact.title}
                                                    </h2>
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 rounded-lg text-xs font-mono text-slate-400 uppercase tracking-wider border border-slate-800">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#CFB991] animate-pulse" />
                                                        {artifact.origin}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            {artifactLink && !artifactLink.startsWith('/assets/docs/') && (
                                                <a
                                                    href={artifactLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/btn flex items-center gap-3 px-6 py-3 bg-[#CFB991] hover:bg-white text-slate-950 font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(207,185,145,0.4)] hover:scale-105"
                                                >
                                                    View Artifact
                                                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Summary Section */}
                                    <div className="p-8 md:p-10 bg-slate-950/40">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Summary</span>
                                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                                        </div>
                                        <p className="text-slate-300 text-lg leading-relaxed">
                                            {artifact.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Reflection Section */}
                                <div className="mt-12 pl-4 md:pl-8">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                                        <span className="text-[#CFB991] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                            <Lightbulb size={16} className="animate-pulse" />
                                            Competency Reflection
                                        </span>
                                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                                    </div>

                                    <ReflectionViewer reflection={artifact.reflection} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Back to Category Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        to={`/portfolio/${categoryId}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 hover:border-[#CFB991]/50 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Back to {category.title}
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}