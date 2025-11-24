import React from 'react';
import { Sparkles, Code, Shield, Users, Zap, Github, ExternalLink, Play } from 'lucide-react';
import Footer from '../components/Footer';

export default function Daydream() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-900/20 blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-purple-400 uppercase rounded-full bg-purple-950/50 border border-purple-900 mb-6">
                        <Sparkles size={14} />
                        Capstone Project
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 mb-6">
                        The Daydream Initiative
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        A privacy-first, narrative-driven learning platform built with Rust and WebAssembly
                        to solve the "Creator Tooling Gap" in instructional design.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://github.com/Joshua42atkinson/Day_Dream"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 hover:bg-slate-700/60 text-white font-semibold rounded-xl border border-slate-700 hover:border-purple-500/50 backdrop-blur-md transition-all"
                        >
                            <Github size={20} />
                            View on GitHub
                        </a>
                        <a
                            href="https://youtu.be/dYxmWd50xgs"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all"
                        >
                            <Play size={20} />
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Problem Statement */}
                <section className="mb-12 p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-4">The Problem</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Instructional Designers face a critical <strong className="text-white">"Creator Tooling Gap"</strong>:
                        existing authoring tools force them to choose between <span className="text-purple-300 font-medium">narrative flexibility</span> (Twine)
                        and <span className="text-pink-300 font-medium">technical power</span> (Storyline). Neither supports the creation of
                        complex, branching Intelligent Tutoring Systems (ITS) without specialized programming expertise.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        This gap prevents IDs from implementing advanced learning science (Vygotskian scaffolding, Self-Determination Theory)
                        at scale, leaving powerful pedagogical frameworks trapped in academic theory.
                    </p>
                </section>

                {/* Solution */}
                <section className="mb-12 p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-2xl backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
                    <p className="text-slate-200 leading-relaxed mb-6">
                        Daydream is a <strong className="text-white">"Creator's Sandbox"</strong>—a no-code authoring platform
                        that synthesizes the best features of Twine, Storyline, and Genially into a unified workflow,
                        powered by a Rust/Bevy backend compiled to WebAssembly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-900/50 rounded-lg border border-purple-700/30">
                            <h3 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                                <Code size={20} />
                                Rust + WebAssembly
                            </h3>
                            <p className="text-sm text-slate-400">
                                High-performance, memory-safe architecture running entirely in the browser for zero-latency interactions.
                            </p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border border-pink-700/30">
                            <h3 className="font-semibold text-pink-300 mb-2 flex items-center gap-2">
                                <Shield size={20} />
                                Privacy-First Design
                            </h3>
                            <p className="text-sm text-slate-400">
                                Local-first architecture ensures learner data never leaves their device—no servers, no surveillance.
                            </p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border border-indigo-700/30">
                            <h3 className="font-semibold text-indigo-300 mb-2 flex items-center gap-2">
                                <Sparkles size={20} />
                                Narrative Engine
                            </h3>
                            <p className="text-sm text-slate-400">
                                Quest-based progression system mapping the Hero's Journey to Bloom's Taxonomy for seamless learning.
                            </p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border border-cyan-700/30">
                            <h3 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                                <Users size={20} />
                                Jungian Archetypes
                            </h3>
                            <p className="text-sm text-slate-400">
                                Character creation system using psychological frameworks to foster identity-driven motivation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Innovations</h2>
                    <div className="space-y-6">

                        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl backdrop-blur-md">
                            <h3 className="text-xl font-bold text-purple-300 mb-3">Vocabulary-as-a-Mechanic (VaaM)</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Rejects flashcard rote memorization in favor of <strong className="text-white">Situated Cognition</strong>.
                                Words become functional tools required to solve narrative puzzles, ensuring durable transfer through
                                contextual application and Dual Coding Theory (multimedia acquisition).
                            </p>
                        </div>

                        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl backdrop-blur-md">
                            <h3 className="text-xl font-bold text-pink-300 mb-3">AI as a Mirror (Not a Tutor)</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Uses AI for <strong className="text-white">metacognitive reflection</strong>, not content delivery.
                                The system prompts learners to explain their reasoning ("Why did you choose that word?"),
                                fostering psychological safety through privacy before introducing social scaffolding via human mentors.
                            </p>
                        </div>

                        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl backdrop-blur-md">
                            <h3 className="text-xl font-bold text-indigo-300 mb-3">The Virtuous Cycle</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Implements <strong className="text-white">Self-Determination Theory</strong> through a closed-loop system:
                                Persona Engine (Autonomy) → LitRPG Stats (Competence) → Narrative Progression (Relatedness).
                                Replaces extrinsic rewards with intrinsic motivation.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Technical Stack */}
                <section className="mb-12 p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-6">Technical Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-semibold text-purple-300 mb-3">Backend</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Rust (Axum framework)</li>
                                <li>• Bevy ECS (Entity Component System)</li>
                                <li>• WebAssembly (WASM)</li>
                                <li>• Local-first data storage</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-pink-300 mb-3">Frontend</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Leptos (Rust web framework)</li>
                                <li>• Tailwind CSS</li>
                                <li>• Glassmorphism design system</li>
                                <li>• Responsive & accessible</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-indigo-300 mb-3">Pedagogy</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Cognitive Load Theory</li>
                                <li>• Self-Determination Theory</li>
                                <li>• Situated Cognition</li>
                                <li>• Jungian Psychology</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="p-8 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-700/30 rounded-2xl backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-4">Impact & Vision</h2>
                    <p className="text-slate-200 leading-relaxed mb-4">
                        Daydream is released under the <strong className="text-white">GNU General Public License (GPLv3)</strong>,
                        ensuring it remains a permanent public good. The project aims to:
                    </p>
                    <ul className="space-y-3 text-slate-200">
                        <li className="flex items-start gap-3">
                            <Zap className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                            <span>Democratize access to complex ITS authoring for non-technical instructional designers</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Shield className="text-pink-400 flex-shrink-0 mt-1" size={20} />
                            <span>Establish privacy-first design as the ethical standard for educational technology</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Sparkles className="text-indigo-400 flex-shrink-0 mt-1" size={20} />
                            <span>Bridge the gap between advanced learning science and practical implementation</span>
                        </li>
                    </ul>
                </section>

                <Footer />
            </div>
        </div>
    );
}
