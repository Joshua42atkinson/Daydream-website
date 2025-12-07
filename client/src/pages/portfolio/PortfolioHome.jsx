import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, ArrowRight, Layers, Target, PenTool, BarChart } from 'lucide-react';

const CategoryIcon = ({ id, size = 24 }) => {
    switch (id) {
        case 'foundations': return <Layers size={size} />;
        case 'planning': return <Target size={size} />;
        case 'design': return <PenTool size={size} />;
        case 'evaluation': return <BarChart size={size} />;
        default: return <Briefcase size={size} />;
    }
};

export default function PortfolioHome() {
    const { categories } = portfolioData;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            {/* Hero Section */}
            <div className="relative py-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 mb-6">
                        <Briefcase size={14} />
                        Master's Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Competency <span className="text-[#CFB991]">Domains</span>.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Select a domain to explore the associated competencies and evidence.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/portfolio/${category.id}`}
                            className="group relative overflow-hidden bg-slate-950/70 border border-slate-800 hover:border-[#CFB991]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#CFB991]/10 hover:-translate-y-1 block backdrop-blur-md"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <CategoryIcon id={category.id} size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="p-4 rounded-xl bg-[#CFB991]/10 text-[#CFB991] w-fit mb-6 group-hover:scale-110 transition-transform">
                                    <CategoryIcon id={category.id} size={32} />
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#CFB991] transition-colors">
                                    {category.title}
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {category.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-[#CFB991] uppercase tracking-wider">
                                    Explore Domain <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
