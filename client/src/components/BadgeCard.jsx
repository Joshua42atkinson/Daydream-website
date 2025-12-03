import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

export default function BadgeCard({ badge, onClick }) {
    // Count total artifacts in this badge
    const artifactCount = badge.artifacts ? badge.artifacts.length : 0;

    return (
        <motion.div
            layoutId={`card-${badge.id}`}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-slate-900/40 border border-slate-800 hover:border-[#CFB991]/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[#CFB991]/10"
            onClick={onClick}
        >
            {/* Image / Header Area */}
            <div className="h-40 overflow-hidden relative bg-slate-950">
                {/* Fallback pattern if no image exists */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

                {badge.image ? (
                    <img
                        src={badge.image}
                        alt={badge.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        onError={(e) => { e.target.style.display = 'none' }} // Hide if broken link
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                        <Award size={48} />
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Category Pill */}
                <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-950/80 text-[#CFB991] rounded border border-[#CFB991]/20 backdrop-blur-sm">
                        Sub-Badge
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-slate-200 mb-2 leading-tight group-hover:text-[#CFB991] transition-colors">
                    {badge.title}
                </h3>

                {/* Preview the first artifact title if available */}
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 h-8">
                    {badge.artifacts[0]?.summary || "Click to view competency evidence..."}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                    <div className="flex items-center gap-2 text-[#CFB991] text-xs font-medium">
                        <BookOpen size={14} />
                        <span>{artifactCount} Challenge{artifactCount !== 1 ? 's' : ''} Completed</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
