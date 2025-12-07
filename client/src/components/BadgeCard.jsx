import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ArrowRight, Sparkles } from 'lucide-react';

// Category color mapping
const categoryColors = {
    'foundations': { gradient: 'from-indigo-600 to-purple-600', pattern: 'from-indigo-500/20 to-purple-500/20' },
    'planning': { gradient: 'from-blue-600 to-cyan-600', pattern: 'from-blue-500/20 to-cyan-500/20' },
    'design': { gradient: 'from-purple-600 to-pink-600', pattern: 'from-purple-500/20 to-pink-500/20' },
    'evaluation': { gradient: 'from-green-600 to-emerald-600', pattern: 'from-green-500/20 to-emerald-500/20' },
    'research': { gradient: 'from-amber-600 to-orange-600', pattern: 'from-amber-500/20 to-orange-500/20' }
};

export default function BadgeCard({ badge, onClick, categoryId }) {
    const artifactCount = badge.artifacts ? badge.artifacts.length : 0;
    const colors = categoryColors[categoryId] || categoryColors['foundations'];

    return (
        <motion.div
            layoutId={`card-${badge.id}`}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(207,185,145,0.2)] hover:border-[#CFB991]/50"
            onClick={onClick}
        >
            {/* Header Image Area with Gradient */}
            <div className="h-48 overflow-hidden relative bg-slate-950">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />

                {/* Floating orbs */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${colors.pattern} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                <div className={`absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br ${colors.pattern} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100`} />

                {/* Central icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                    >
                        <Sparkles size={48} className="text-white" strokeWidth={1.5} />
                    </motion.div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />

                {/* Badge Pill */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-950/90 text-[#CFB991] rounded-full border border-[#CFB991]/30 backdrop-blur-md shadow-lg">
                        Competency
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 relative z-20 -mt-12">
                <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-5 rounded-xl shadow-xl group-hover:border-[#CFB991]/30 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#CFB991] transition-colors">
                        {badge.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 h-8 leading-relaxed">
                        {badge.artifacts[0]?.summary || "Click to view competency evidence..."}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                            <BookOpen size={14} className="text-[#CFB991]" />
                            <span>{artifactCount} Artifact{artifactCount !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="bg-slate-800 p-1.5 rounded-full text-slate-400 group-hover:bg-[#CFB991] group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110">
                            <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}