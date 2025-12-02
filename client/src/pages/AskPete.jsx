import React from 'react';

import portfolioData from '../data/portfolioData.json';

export default function AskPete() {
    const askPeteBadge = portfolioData.badges.find(b => b.id === 'ask_pete');
    const artifact = askPeteBadge?.artifacts[0];

    if (!artifact) return <div className="pt-24 text-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Purdue Gold/Black Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#CFB991]/20 to-slate-950 z-0" />

                {/* Animated Gears/Steam (Abstract) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full border-[20px] border-dashed border-[#CFB991]/10 rounded-full"
                />

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-4"
                    >
                        Ask Pete
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[#CFB991] max-w-2xl mx-auto font-mono"
                    >
                        Your AI-Powered Instructional Design Assistant
                    </motion.p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Origin/Context */}
                    <div className="mb-12 p-6 bg-[#CFB991]/10 rounded-2xl border border-[#CFB991]/30">
                        <h3 className="text-[#CFB991] font-bold mb-2 uppercase tracking-wider">Project Context</h3>
                        <p className="text-slate-300">{artifact.origin}</p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#CFB991] prose-a:text-[#CFB991]">
                        <div className="whitespace-pre-wrap">
                            {artifact.full_content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
