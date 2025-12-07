import React from 'react';
import { Terminal, Cpu, Shield, Zap, Network, Lock, ArrowRight, BookOpen, Users } from 'lucide-react';

export default function AskPete() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991] pt-20">

            {/* Mission Header */}
            <div className="max-w-7xl mx-auto px-6 mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Terminal size={400} />
                </div>

                <div className="relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        System Architecture v2.4
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        The <span className="text-[#CFB991]">Living</span> Laboratory.
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        "Ask Pete" is not just a chatbot. It is a <strong>GPS-Enabled Physical AI Learning Ecosystem</strong> designed
                        to capture high-fidelity telemetry of the student's cognitive journey. It functions as a 'Black Box Recorder'
                        for the learning process.
                    </p>
                </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Pillar 1: Cognitive Logistics */}
                    <div className="col-span-1 lg:col-span-2 bg-slate-950/70 border border-slate-800 rounded-2xl p-8 hover:border-[#CFB991]/30 transition-colors backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-950 rounded-lg text-[#CFB991] border border-slate-800">
                                <Network size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Theory: Cognitive Logistics</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <p className="text-slate-400 leading-relaxed">
                                We translate the abstract principles of <strong>Cognitive Load Theory (CLT)</strong> into a concrete physics simulation.
                                Learning is modeled as a railway system where information is 'Cargo' and working memory is 'Engine Capacity.'
                            </p>
                            <ul className="space-y-3">
                                <ListItem label="Intrinsic Load" value="Cargo Weight (Mass)" />
                                <ListItem label="Extraneous Load" value="Track Friction (Resistance)" />
                                <ListItem label="Germane Load" value="Combustion (Heat/Energy)" />
                            </ul>
                        </div>
                    </div>

                    {/* Pillar 2: The Stack */}
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#CFB991]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">The Stack</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Built on <strong>Rust</strong> and <strong>WebAssembly</strong> to ensure "Systems Isomorphism"—the reliability of the code must match the rigor of the pedagogy.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <TechBadge>Bevy Engine</TechBadge>
                            <TechBadge>Axum</TechBadge>
                            <TechBadge>Leptos</TechBadge>
                            <TechBadge>WebGPU</TechBadge>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Privacy Moat Section */}
            <div className="border-y border-slate-900 bg-slate-950/70 py-24 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 text-[#CFB991] font-mono font-bold mb-4">
                                <Shield size={20} />
                                ETHICAL COMPLIANCE
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">The Privacy Moat</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                In an era of Surveillance Capitalism, "Ask Pete" implements a <strong>Hybrid Sovereign Architecture</strong>.
                                Student data is processed locally on the device (Edge Computing), ensuring that their thoughts remain their property.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <CheckItem>FERPA Compliant by Default (Data never leaves the device)</CheckItem>
                                <CheckItem>Apache 2.0 Open Source "Prime Directive"</CheckItem>
                                <CheckItem>Local-First Vector Database Storage</CheckItem>
                            </ul>
                        </div>

                        {/* Visual for Moat */}
                        <div className="flex-1 w-full max-w-md">
                            <div className="aspect-square rounded-full bg-slate-900 border border-slate-800 relative flex items-center justify-center">
                                <div className="absolute inset-0 border border-[#CFB991]/20 rounded-full animate-spin-slow" />
                                <div className="absolute inset-8 border border-slate-700 rounded-full border-dashed" />
                                <div className="text-center">
                                    <Lock size={48} className="mx-auto text-[#CFB991] mb-2" />
                                    <div className="text-sm font-bold text-white uppercase tracking-widest">Local-First</div>
                                    <div className="text-xs text-slate-500">Secure Environment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pedagogy Deep Dive: Cognitive Load Theory Mapping */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 text-[#CFB991] font-mono font-bold mb-4">
                        <BookOpen size={20} />
                        PEDAGOGICAL FRAMEWORK
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Cognitive Load Theory as Railway Physics</h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                        The core pedagogical innovation of Ask Pete is translating abstract Cognitive Load Theory (CLT)
                        into a concrete, interactive physics simulation. This "Systems Isomorphism" allows students to
                        <strong className="text-white"> feel</strong> cognitive constraints as physical resistance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 backdrop-blur-md">
                        <div className="text-[#CFB991] font-bold mb-3">Intrinsic Load → Cargo Mass</div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            The inherent difficulty of the concept becomes the <strong className="text-white">weight of the cargo</strong>.
                            Complex topics require more "engine power" (working memory capacity) to move.
                        </p>
                    </div>

                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 backdrop-blur-md">
                        <div className="text-cyan-400 font-bold mb-3">Extraneous Load → Track Friction</div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Poor instructional design becomes <strong className="text-white">rust on the tracks</strong>.
                            Confusing interfaces and unclear instructions create resistance that wastes cognitive energy.
                        </p>
                    </div>

                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 backdrop-blur-md">
                        <div className="text-amber-400 font-bold mb-3">Germane Load → Steam Generation</div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Productive struggle becomes <strong className="text-white">heat that generates steam</strong>.
                            This "steam" powers skill progression and unlocks new capabilities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cultural Engineering */}
            <div className="border-y border-slate-900 bg-slate-950/70 py-24 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 text-[#CFB991] font-mono font-bold mb-4">
                            <Users size={20} />
                            LEARNER ANALYSIS
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Cultural Engineering: The Boilermaker Mindset</h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                            Ask Pete was designed specifically for Purdue students through deep cultural analysis.
                            Rather than generic self-help language, the system uses <strong className="text-white">engineering metaphors</strong> and
                            <strong className="text-white"> historical narrative anchors</strong> that resonate with the target population.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-white mb-4">The Heavilon Protocol</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Named after the 1894 Heavilon Hall fire, this framework reframes failure as <strong className="text-white">data collection</strong>.
                                Just as the fire led to Purdue's "One Brick Higher" resilience motto, student struggles become
                                the foundation for growth.
                            </p>
                            <div className="text-sm text-slate-500 font-mono">
                                "Failure isn't defeat—it's telemetry."
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-white mb-4">Language Reframing</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Standard psychological terms were translated into <strong className="text-white">engineering language</strong>:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <Zap size={14} className="text-[#CFB991] mt-1 flex-shrink-0" />
                                    <span className="text-slate-300">"Self-regulation" → "Cognitive Logistics"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Zap size={14} className="text-[#CFB991] mt-1 flex-shrink-0" />
                                    <span className="text-slate-300">"Emotional resilience" → "Structural Integrity"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Zap size={14} className="text-[#CFB991] mt-1 flex-shrink-0" />
                                    <span className="text-slate-300">"Growth mindset" → "Iterative Development"</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Development Philosophy */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 text-[#CFB991] font-mono font-bold mb-4">
                        <Shield size={20} />
                        DESIGN PHILOSOPHY
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Why Rust? Why Local-First?</h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                        Every technical decision in Ask Pete serves a pedagogical purpose. The choice of Rust and
                        local-first architecture isn't just about performance—it's about <strong className="text-white">ethical alignment</strong> and
                        <strong className="text-white"> systems thinking</strong>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-8 backdrop-blur-md">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu className="text-cyan-400" size={24} />
                            Rust Memory Safety = Cognitive Safety
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Rust's compiler enforces <strong className="text-white">memory safety at compile time</strong>, preventing entire classes of bugs.
                            This mirrors how good instructional design should prevent cognitive overload <strong className="text-white">before</strong> it happens,
                            not patch it afterward. The language choice embodies the pedagogical principle.
                        </p>
                    </div>

                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-8 backdrop-blur-md">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lock className="text-[#CFB991]" size={24} />
                            Local-First = Learner Agency
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            By processing student reflections <strong className="text-white">locally on their device</strong>, Ask Pete ensures that
                            their thoughts remain their property. This isn't just FERPA compliance—it's a statement that
                            <strong className="text-white"> learning data belongs to the learner</strong>, not the institution or corporation.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-900/50 to-slate-950/70 border border-slate-800 rounded-xl p-8 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white mb-4">The "Iron Road" as Pedagogical Metaphor</h3>
                    <p className="text-slate-400 leading-relaxed">
                        The railway metaphor isn't arbitrary. Historically, railroads transformed nations by creating
                        <strong className="text-white"> infrastructure for movement</strong>. Similarly, Ask Pete creates cognitive infrastructure—
                        a system that helps students move through difficult concepts efficiently. The "Iron Road" represents
                        the <strong className="text-white">reliable, tested path</strong> through learning challenges, as opposed to the "Daydream"
                        of shortcuts that don't exist.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to see the technical implementation?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/evidence"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-950 font-bold rounded-xl transition-all hover:scale-105"
                    >
                        View Skills & Credentials <ArrowRight size={20} />
                    </a>
                    <a
                        href="/portfolio"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all"
                    >
                        View Competency Portfolio <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}

// Helper Components
function ListItem({ label, value }) {
    return (
        <li className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500 font-medium">{label}</span>
            <span className="text-[#CFB991] font-mono">{value}</span>
        </li>
    );
}

function TechBadge({ children }) {
    return (
        <span className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-mono border border-slate-800 rounded-full">
            {children}
        </span>
    );
}

function CheckItem({ children }) {
    return (
        <li className="flex items-start gap-3 text-slate-300">
            <div className="mt-1 text-[#CFB991]"><Zap size={16} /></div>
            <span>{children}</span>
        </li>
    );
}
