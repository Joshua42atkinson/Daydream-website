import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Code, Sparkles, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-widest text-indigo-400 uppercase rounded-full bg-indigo-950/50 border border-indigo-900">
                            <Award size={16} />
                            Master's Portfolio
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight leading-tight">
                            Joshua Atkinson
                        </h1>

                        <p className="text-2xl md:text-3xl text-slate-300 font-light">
                            Learning Design & Technology
                        </p>

                        <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
                            Instructional Designer, Systems Architect, and Educational Technologist specializing in
                            <span className="text-indigo-300 font-medium"> narrative-driven learning experiences</span>,
                            <span className="text-purple-300 font-medium"> ethical AI integration</span>, and
                            <span className="text-cyan-300 font-medium"> open-source educational tools</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                to="/portfolio"
                                className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all active:scale-95"
                            >
                                View Portfolio
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/daydream"
                                className="flex items-center gap-2 px-8 py-4 bg-slate-800/60 hover:bg-slate-700/60 text-white font-semibold rounded-xl border border-slate-700 hover:border-indigo-500/50 backdrop-blur-md transition-all active:scale-95"
                            >
                                <Sparkles size={20} />
                                Daydream Project
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Work Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                            Featured Work
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                            Explore key projects demonstrating expertise across instructional design,
                            systems engineering, and educational innovation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Portfolio Card */}
                            <Link
                                to="/portfolio"
                                className="group relative p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all backdrop-blur-md"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4">
                                        <Award size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Competency Portfolio</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        23 artifacts demonstrating mastery across all LDT competency domains with deep theoretical reflections.
                                    </p>
                                </div>
                            </Link>

                            {/* Daydream Card */}
                            <Link
                                to="/daydream"
                                className="group relative p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-purple-500/50 transition-all backdrop-blur-md"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4">
                                        <Sparkles size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Daydream Initiative</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        A Rust-based, privacy-first learning platform combining narrative design with cognitive psychology.
                                    </p>
                                </div>
                            </Link>

                            {/* About Card */}
                            <Link
                                to="/about"
                                className="group relative p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all backdrop-blur-md"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
                                        <BookOpen size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">About & Philosophy</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Learn about my approach to instructional design, ethical technology, and learner-centered innovation.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
