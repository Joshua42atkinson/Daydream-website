import React, { useState, useEffect } from 'react';
import {
    Award,
    BookOpen,
    Code,
    Heart,
    Lightbulb,
    Users,
    Terminal,
    Cpu,
    Shield,
    Zap,
    Anchor,
    Feather,
    Layout,
    ArrowRight
} from 'lucide-react';

// --- Components ---

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase rounded-full bg-indigo-950/50 border border-indigo-900 mb-4">
            <Icon size={14} />
            {subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {title}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
    </div>
);

const SkillCard = ({ title, skills, colorClass, icon: Icon }) => (
    <div className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
        <div className={`absolute top-0 left-0 w-full h-1 ${colorClass} rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
        <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">{title}</h3>
            <Icon className="text-slate-500 group-hover:text-slate-300 transition-colors" size={20} />
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800 rounded border border-slate-700/50">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const ArchetypeCard = ({ title, role, desc, icon: Icon, color }) => (
    <div className="relative overflow-hidden p-6 bg-slate-800/20 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-500 group">
        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${color}-500/10 rounded-full blur-2xl group-hover:bg-${color}-500/20 transition-all`} />
        <div className="relative z-10">
            <div className={`w-12 h-12 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center mb-4 text-${color}-400 group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className={`text-xs font-bold uppercase tracking-wider text-${color}-400 mb-3`}>{role}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    </div>
);

const Footer = () => (
    <footer className="mt-24 pt-12 border-t border-slate-800/50 text-center pb-12">
        <div className="flex items-center justify-center gap-6 mb-8">
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors"><Code size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors"><Feather size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><Users size={20} /></a>
        </div>
        <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Joshua Atkinson. <span className="text-slate-600">Open Source Educational Systems.</span>
        </p>
    </footer>
);

export default function About() {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">

            {/* Ambient Background Effects */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] animate-pulse"
                    style={{ transform: `translateY(${scrolled * 0.1}px)` }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] animate-pulse delay-1000"
                    style={{ transform: `translateY(${-scrolled * 0.1}px)` }}
                />
                <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-cyan-900/5 blur-[100px] transform -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* --- Hero Section --- */}
                <header className="text-center mb-24 relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest text-indigo-300 uppercase rounded-full bg-indigo-950/30 border border-indigo-500/30 mb-8 animate-fade-in-up">
                        <Terminal size={12} className="text-indigo-400" />
                        System Status: Online
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-8 tracking-tight">
                        Engineering Resilience.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Designing Consciousness.
                        </span>
                    </h1>
                </header>

                {/* --- Narrative Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">

                    {/* Bio Card */}
                    <div className="md:col-span-7 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md hover:border-indigo-500/30 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className="text-indigo-400" size={24} />
                            Leadership Under Pressure
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Former U.S. Marine Corps Gunnery Sergeant with over <strong className="text-white">17 years and 10 months</strong> of leadership experience in <strong className="text-white">Aircraft Rescue and Firefighting</strong>. Led diverse teams of up to 130+ personnel in high-stakes environments, managing multi-million dollar assets and serving as Incident Commander for 18+ tactical aircraft emergencies.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Expertise spans <span className="text-indigo-300">fiscal management</span> (as certified Fiscal Chief overseeing annual budgets), <span className="text-purple-300">personnel development</span> (directing training and performance evaluations), and <span className="text-cyan-300">crisis management</span> (Fire Officer III, Fire Instructor III, Incident Safety Officer).
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Now pursuing a <strong className="text-white">Master's in Learning Design & Technology</strong> at Purdue University, applying military precision and systems thinking to educational innovation. Active in Houlton, Maine community as Board Member of the Unitarian Universalist Church and Program Coordinator for The Cup Cafe outreach program.
                        </p>
                    </div>

                    {/* Stats/Quick Info */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="flex-1 p-8 bg-gradient-to-br from-indigo-900/20 to-slate-900/50 border border-indigo-500/20 rounded-2xl flex flex-col justify-center">
                            <h3 className="text-lg font-semibold text-indigo-300 mb-1">Current Focus</h3>
                            <p className="text-2xl font-bold text-white">The Daydream Initiative</p>
                            <p className="text-sm text-slate-400 mt-2">
                                Building privacy-first, local-first educational infrastructure using Rust & WebAssembly.
                            </p>
                        </div>
                        <div className="flex-1 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
                            <h3 className="text-lg font-semibold text-slate-300 mb-3">Service Record</h3>
                            <div className="space-y-2 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Anchor size={14} className="text-indigo-400" />
                                    <span>17+ Years USMC</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield size={14} className="text-purple-400" />
                                    <span>Honorable Discharge</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap size={14} className="text-cyan-400" />
                                    <span>Aircraft Rescue & Firefighting</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-300">Location</h3>
                                <p className="text-slate-500">Houlton, Maine</p>
                            </div>
                            <Anchor className="text-slate-700" size={40} />
                        </div>
                    </div>
                </div>

                {/* --- Philosophy Section --- */}
                <SectionHeader icon={Lightbulb} title="Philosophy & Approach" subtitle="The Great Game" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    <div className="p-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 to-transparent">
                        <div className="h-full p-6 bg-slate-950 rounded-xl border border-indigo-500/20">
                            <h3 className="text-lg font-bold text-white mb-3">Gamified Consciousness</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The framework uses game design metaphors to bypass modern cynicism. By replacing charged terms with neutral mechanics (like "debuffs" or "stats"), we create a functional lexicon for self-mastery.
                            </p>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent">
                        <div className="h-full p-6 bg-slate-950 rounded-xl border border-purple-500/20">
                            <h3 className="text-lg font-bold text-white mb-3">Privacy as Pedagogy</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Psychological safety is a prerequisite for deep learning. The Daydream architecture utilizes local-first tech (Rust/WASM) so learners can experiment without surveillance or data harvesting.
                            </p>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl bg-gradient-to-b from-cyan-500/20 to-transparent">
                        <div className="h-full p-6 bg-slate-950 rounded-xl border border-cyan-500/20">
                            <h3 className="text-lg font-bold text-white mb-3">Narrative Scaffolding</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Stories are treated as cognitive tools. By using frameworks like the Hero's Journey and Jungian archetypes, the system reduces cognitive load and fosters intrinsic motivation through meaning.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- The Archetypes (Great Game Classes) --- */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white">Archetypal Framework</h2>
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-1 rounded">System Modules</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ArchetypeCard
                            title="The Sage"
                            role="Path of Air"
                            icon={Feather}
                            color="indigo"
                            desc="Strategy, Intellect, and Clarity. The architecture of ideas and systems."
                        />
                        <ArchetypeCard
                            title="The Healer"
                            role="Path of Water"
                            icon={Heart}
                            color="purple"
                            desc="Empathy, Somatics, and Connection. Bridging the gap between self and other."
                        />
                        <ArchetypeCard
                            title="The Builder"
                            role="Path of Earth"
                            icon={Layout}
                            color="cyan"
                            desc="Action, Creation, and Tech. Turning abstract intent into tangible reality."
                        />
                        <ArchetypeCard
                            title="The Mystic"
                            role="Path of Fire"
                            icon={Zap}
                            color="amber"
                            desc="Will, Passion, and Spirit. The engine of transformation and drive."
                        />
                    </div>
                </div>

                {/* --- Technical Competencies (The Rust Stack) --- */}
                <SectionHeader icon={Code} title="Technical Architecture" subtitle="The Stack" />

                <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-24">
                    {/* Decorative Code Background */}
                    <div className="absolute right-0 top-0 opacity-5 text-indigo-300 font-mono text-xs p-4 hidden lg:block pointer-events-none select-none">
                        {`impl Architect for Technomancer {\n  fn build_system(&self) -> Result<Legacy, Error> {\n    let stack = Rust::new(Bevy, Axum);\n    stack.deploy(Learning::Deep);\n    Ok(Legacy::Created)\n  }\n}`}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <SkillCard
                            title="Systems Engineering"
                            icon={Cpu}
                            colorClass="bg-orange-500"
                            skills={['Rust', 'WebAssembly', 'Bevy ECS', 'Memory Safety', 'Systems Architecture']}
                        />
                        <SkillCard
                            title="Web Technologies"
                            icon={Layout}
                            colorClass="bg-cyan-500"
                            skills={['React', 'Tailwind CSS', 'Axum', 'Leptos', 'TypeScript']}
                        />
                        <SkillCard
                            title="Learning Science"
                            icon={BookOpen}
                            colorClass="bg-indigo-500"
                            skills={['Instructional Design', 'Cognitive Load Theory', 'ADDIE / SAM', 'Psychometrics']}
                        />
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-950/50 rounded-xl border border-slate-800">
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">Why Rust?</h4>
                            <p className="text-slate-400 text-sm max-w-xl">
                                Rust was chosen not just for performance, but for <strong>correctness</strong>. In educational technology, data integrity and privacy are paramount. This stack allows for "Daydream" to offer memory safety guarantees that other languages cannot, ensuring a stable foundation for human growth.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                <span className="text-xs font-bold text-orange-400">Rs</span>
                            </div>
                            <ArrowRight className="text-slate-600" />
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                <span className="text-xs font-bold text-cyan-400">Re</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Mission Statement --- */}
                <section className="relative p-8 md:p-16 bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-900/50 rounded-3xl text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="relative z-10">
                        <Heart className="text-pink-500 mx-auto mb-6 animate-pulse" size={48} />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Mission</h2>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                            "To democratize access to high-quality, narrative-driven learning experiences by building open-source tools that empower instructional designers to create complex, ethically sound educational systems."
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="font-mono text-indigo-300 text-sm tracking-widest uppercase">
                                Joshua Atkinson  //  The Great Game
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
