import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function BadgeCard({ badge, onClick }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors cursor-pointer group"
            onClick={onClick}
        >
            <div className="h-48 overflow-hidden relative">
                <img
                    src={badge.image || "/assets/badges/default.png"}
                    alt={badge.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 text-xs font-bold bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                        {badge.categoryId}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {badge.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                    {badge.artifacts[0]?.summary || "Click to view details..."}
                </p>

                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <BookOpen className="w-4 h-4" />
                    <span>View {badge.artifacts.length} Artifact{badge.artifacts.length !== 1 ? 's' : ''}</span>
                </div>
            </div>
        </motion.div>
    );
}
