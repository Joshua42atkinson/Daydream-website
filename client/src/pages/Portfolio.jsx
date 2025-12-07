// client/src/pages/Portfolio.jsx

import React, { useState } from 'react'; // KEEP only React
import { motion, AnimatePresence } from 'framer-motion'; // REMOVE AnimatePresence
import { portfolioData } from '../data/portfolioData';
import BadgeCard from '../components/BadgeCard';
import { X, ExternalLink, Briefcase, Layers, FileText, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure Link is imported

export default function Portfolio() {
    // REMOVE useState, setSelectedBadge, visibleReflections, handleCloseModal, toggleReflection
    // No state needed as navigation is now handled by react-router-dom

    const { categories, badges } = portfolioData;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">

            {/* Hero Section (Keep) */}
            // ... (code for Hero Section) ...

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Iterate through SUPRA-BADGES (Categories) (Keep) */}
                {categories.map((category) => (
                    <div key={category.id} className="mb-32 last:mb-0 relative">
                        {/* Section Header (Keep) */}
                        // ... (code for Section Header) ...

                        {/* Sub-Badges Grid (Update) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {badges
                                .filter(b => b.categoryId === category.id)
                                .map((badge) => (
                                    // WRAP BADGECARD WITH A LINK THAT NAVIGATES TO THE DEDICATED PAGE
                                    <Link 
                                        key={badge.id}
                                        to={`/portfolio/${category.id}/${badge.id}`} 
                                    >
                                        <BadgeCard
                                            badge={badge}
                                            // onClick prop is now handled by the Link wrapper
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* BADGE DETAIL MODAL - REMOVE ENTIRE BLOCK */}
            {/* <AnimatePresence>
                {selectedBadge && (
                    // ... Modal content ...
                )}
            </AnimatePresence> */}
        </div>
    );
}

// NOTE: You will need to remove the unused imports and state variables mentioned above 
// from the top of the Portfolio.jsx file to clean up the code.