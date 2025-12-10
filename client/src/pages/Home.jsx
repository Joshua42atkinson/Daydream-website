import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Layers, BrainCircuit, Shield, Cpu, Code, GraduationCap, Briefcase, FileText, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    const [persona, setPersona] = useState(null); // 'recruiter' | 'educator' | 'developer' | null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950 min-h-screen"
        >
            <Helmet>
                <title>Joshua Atkinson | Systems Architect & Public Administrator</title>
                <meta name="description" content="Portfolio showcasing instructional design, systems architecture, and educational technology expertise." />
            </Helmet>

            <Hero />

            {/* GUIDED GATEWAY SECTION */}
            <section className="py-24 px-6 relative border-t border-slate-900 bg-slate-950">
                {/* Background Grid - Systems Architect Aesthetic */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Identify Your <span className="text-[#CFB991]">Objective</span></h2>
                        <p className="text-slate-400 mb-8">Select your role to initialize a tailored operational view.</p>

                        {/* PERSONA BUTTONS */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <PersonaButton
                                id="recruiter"
                                label="Recruiter / Hiring Manager"
                                icon={Briefcase}
                                active={persona === 'recruiter'}
                                onClick={setPersona}
                            />
                            <PersonaButton
                                id="educator"
                                label="Educator / Researcher"
                                icon={GraduationCap}
                                active={persona === 'educator'}
                                onClick={setPersona}
                            />
                            <PersonaButton
                                id="developer"
                                label="Developer / Engineer"
                                icon={Code}
                                active={persona === 'developer'}
                                onClick={setPersona}
                            />
                        </div>
                    </motion.div>

                    {/* DYNAMIC CONTENT AREA */}
                    <AnimatePresence mode="wait">
                        {persona === 'recruiter' && (
                            <PersonaContent key="recruiter" title="Executive Summary">
                                <ContentCard
                                    title="Professional Resume"
                                    desc="17 years of operational leadership, fiscal governance, and crisis management."
                                    icon={FileText}
                                    link="/resume"
                                    cta="Review Experience"
                                />
                                <ContentCard
                                    title="Flagship Project: The Iron Road"
                                    desc="Technopedagogical ecosystem built for high-stakes learning."
                                    icon={Layers}
                                    link="/portfolio"
                                    cta="View Portfolio"
                                />
                            </PersonaContent>
                        )}

                        {persona === 'educator' && (
                            <PersonaContent key="educator" title="Pedagogical Architecture">
                                <ContentCard
                                    title="Ask Pete: Cognitive Logistics"
                                    desc="Reframing 'help-seeking' as a logistical operation for engineering students."
                                    icon={BrainCircuit}
                                    link="/ask-pete"
                                    cta="Analyze Methodology"
                                />
                                <ContentCard
                                    title="Core Competencies"
                                    desc="Research, Design, and Evaluation badges demonstrating IBSTPI standards."
                                    icon={GraduationCap}
                                    link="/portfolio"
                                    cta="Explore Badges"
                                />
                            </PersonaContent>
                        )}

                        {persona === 'developer' && (
                            <PersonaContent key="developer" title="Technical Specifications">
                                <ContentCard
                                    title="Codebase: Iron Road"
                                    desc="Rust/WASM architecture focusing on Local-First data sovereignty."
                                    icon={Code}
                                    link="/portfolio" // We could deep link if we had a specific tech page
                                    cta="Audit Architecture"
                                />
                                <ContentCard
                                    title="Privacy Moat"
                                    desc="System design preventing surveillance capitalism in EdTech."
                                    icon={Shield}
                                    link="/ask-pete"
                                    cta="Inspect Security"
                                />
                            </PersonaContent>
                        )}

                        {!persona && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-slate-500 italic mt-12 border-t border-slate-800 pt-12"
                            >
                                <p>System awaiting input... Select a protocol above.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </motion.div>
    );
}

// ------------------- HELPER COMPONENTS -------------------

function PersonaButton({ id, label, icon: Icon, active, onClick }) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`
                relative px-6 py-4 rounded-xl border flex items-center gap-3 transition-all duration-300
                ${active
                    ? 'bg-[#CFB991]/20 border-[#CFB991] text-white shadow-[0_0_20px_rgba(207,185,145,0.3)] scale-105'
                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-[#CFB991]/50 hover:text-slate-200'
                }
            `}
        >
            <Icon size={20} className={active ? 'text-[#CFB991]' : ''} />
            <span className="font-semibold">{label}</span>
            {active && (
                <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-xl bg-[#CFB991]/10 blur-xl -z-10"
                />
            )}
        </button>
    );
}

function PersonaContent({ title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-12"
        >
            <h3 className="text-xl font-mono text-[#CFB991] mb-8 border-l-4 border-[#CFB991] pl-4 uppercase tracking-widest">
                // {title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                {children}
            </div>
        </motion.div>
    );
}

function ContentCard({ title, desc, icon: Icon, link, cta }) {
    return (
        <Link to={link} className="block group">
            <div className="h-full p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#CFB991]/40 transition-all duration-300 hover:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon size={100} />
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-[#CFB991]/50 transition-colors">
                        <Icon size={24} className="text-[#CFB991]" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{title}</h4>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                    {desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-[#CFB991] group-hover:translate-x-2 transition-transform">
                    {cta} <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
}