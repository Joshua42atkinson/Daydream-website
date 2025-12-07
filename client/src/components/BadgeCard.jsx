import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ArrowRight } from 'lucide-react';

export default function BadgeCard({ badge, onClick }) {
    const artifactCount = badge.artifacts ? badge.artifacts.length : 0;

    return (
        <motion.div
            layoutId={`card-${badge.id}`}
            whileHover={{ y: -8 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(207,185,145,0.1)] hover:border-[#CFB991]/30"
            onClick={onClick}
        >
            {/* Header Image Area */}
            <div className="h-48 overflow-hidden relative bg-slate-950">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                
                {/* Image */}
                {badge.image ? (
                    <img
                        src={badge.image}
                        alt={badge.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        onError={(e) => { e.target.style.display = 'none' }} 
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-800">
                        <Award size={64} strokeWidth={1} />
                    </div>
                )}

                {/* Badge Pill */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-950/90 text-[#CFB991] rounded-full border border-[#CFB991]/20 backdrop-blur-md shadow-lg">
                        Competency
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 relative z-20 -mt-12">
                <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-5 rounded-xl shadow-xl group-hover:border-[#CFB991]/20 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#CFB991] transition-colors">
                        {badge.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 h-8 leading-relaxed">
                        {badge.artifacts[0]?.summary || "Click to view competency evidence..."}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                            <BookOpen size={14} />
                            <span>{artifactCount} Artifacts</span>
                        </div>
                        <div className="bg-slate-800 p-1.5 rounded-full text-slate-400 group-hover:bg-[#CFB991] group-hover:text-slate-900 transition-all duration-300">
                            <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}