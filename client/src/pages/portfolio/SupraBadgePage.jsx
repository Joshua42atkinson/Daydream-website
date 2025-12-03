import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { ArrowLeft, Award, ArrowRight } from 'lucide-react';

export default function SupraBadgePage() {
    const { categoryId } = useParams();
    const category = portfolioData.categories.find(c => c.id === categoryId);

    if (!category) {
        return <Navigate to="/portfolio" replace />;
    }

    const subBadges = portfolioData.badges.filter(b => b.categoryId === categoryId);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            {/* Header */}
            <div className="bg-slate-900/50 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#CFB991] transition-colors mb-6">
                        <ArrowLeft size={16} /> Back to Domains
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {category.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        {category.description}
                    </p>
                </div>
            </div>

            {/* Sub-Badges Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-sm font-bold text-[#CFB991] uppercase tracking-widest mb-8">
                    Competencies (Sub-Badges)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subBadges.map((badge) => (
                        <Link
                            key={badge.id}
                            to={`/portfolio/${categoryId}/${badge.id}`}
                            className="group bg-slate-900/40 border border-slate-800 hover:border-[#CFB991]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#CFB991]/5 hover:-translate-y-1 block"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-[#CFB991]/20 text-slate-400 group-hover:text-[#CFB991] transition-colors">
                                    <Award size={24} />
                                </div>
                                <ArrowRight className="text-slate-600 group-hover:text-[#CFB991] transition-colors" size={20} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#CFB991] transition-colors">
                                {badge.title}
                            </h3>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                                Click to view artifacts and reflections.
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
