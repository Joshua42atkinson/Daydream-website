import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Brain, Settings, CheckCircle, Rocket, Quote, Infinity as InfinityIcon, TrendingUp } from 'lucide-react';

export default function ReflectionViewer({ reflection }) {
    // Map the sections to icons and labels
    const sections = [
        { key: 'introduction', label: 'Context', icon: Flag, color: 'text-blue-400', border: 'border-blue-500/30' },
        { key: 'prior_knowledge', label: 'Prior Knowledge', icon: Brain, color: 'text-purple-400', border: 'border-purple-500/30' },
        { key: 'process', label: 'The Process', icon: Settings, color: 'text-amber-400', border: 'border-amber-500/30' },
        { key: 'evidence', label: 'Evidence', icon: CheckCircle, color: 'text-emerald-400', border: 'border-emerald-500/30' },
        { key: 'conclusion', label: 'Future Application', icon: Rocket, color: 'text-pink-400', border: 'border-pink-500/30' },
        { key: 'lifelong_learning', label: 'Lifelong Learning', icon: InfinityIcon, color: 'text-slate-200', border: 'border-slate-200/50' },
        // NEW SECTION: Action Plan (Professor's Requirement)
        {
            key: 'action_plan',
            label: 'Action Plan for Growth',
            icon: TrendingUp,
            color: 'text-red-400',
            border: 'border-red-500/30'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Challenge Header */}
            <div className="relative p-6 bg-slate-900/80 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#CFB991]" />
                <div className="flex items-start gap-4 relative z-10">
                    <Quote className="text-slate-600 flex-shrink-0" size={24} />
                    <div>
                        <h4 className="text-xs font-bold text-[#CFB991] uppercase tracking-widest mb-1">
                            The Challenge
                        </h4>
                        <p className="text-lg text-white font-medium italic leading-relaxed">
                            "{reflection.challenge}"
                        </p>
                    </div>
                </div>
            </div>

            {/* The 7-Step Timeline */}
            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 py-4">
                {sections.map((section, index) => {
                    const content = reflection[section.key];
                    if (!content) return null;

                    return (
                        <motion.div
                            key={section.key}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Icon Bubble */}
                            <div className={`absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-slate-950 border-2 ${section.border} flex items-center justify-center z-10 group`}>
                                <section.icon size={18} className={`${section.color} group-hover:scale-110 transition-transform`} />
                            </div>

                            {/* Content Card */}
                            <div className="group">
                                <h5 className={`text-sm font-bold uppercase tracking-wider mb-3 ${section.color} flex items-center gap-2`}>
                                    {section.label}
                                    <span className="h-px w-10 bg-slate-800 group-hover:bg-slate-700 transition-colors" />
                                </h5>
                                <div className="prose prose-invert prose-slate max-w-none">
                                    <p className="text-slate-300 leading-7 text-base">
                                        {content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}