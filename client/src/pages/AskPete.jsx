import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Terminal,
    Cpu,
    Shield,
    Zap,
    Anchor,
    Feather,
    Layout,
    Heart,
    Flame,
    Gauge,
    Activity,
    Database,
    Radio,
    TrainFront,
    BrainCircuit,
    BookOpen,
    Users
} from 'lucide-react';

// --- Components ---

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 mb-4">
            <Icon size={14} />
            {subtitle}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">
            {title}
        </h2>
        <div className="h-1 w-24 bg-[#CFB991] rounded-full" />
    </div>
);

const LoreCard = ({ title, icon: Icon, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="h-full p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#CFB991]/30 transition-all duration-300 group"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-[#CFB991]/10 text-[#CFB991] group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-slate-400 leading-relaxed text-sm space-y-4">
            {children}
        </div>
    </motion.div>
);

const StatBar = ({ label, value, color = "bg-[#CFB991]" }) => (
    <div className="mb-4">
        <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-slate-400 uppercase tracking-wider">{label}</span>
            <span className="text-[#CFB991]">{value}%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${color}`}
            />
        </div>
    </div>
);

const ArchetypeCard = ({ title, role, icon: Icon, stats, desc }) => (
    <div className="relative overflow-hidden p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-[#CFB991]/50 transition-all group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={100} />
        </div>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
                <Icon className="text-[#CFB991]" size={24} />
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-xs font-mono text-[#CFB991] uppercase tracking-widest mb-6">{role}</p>

            <div className="space-y-3 mb-6">
                {stats.map((stat, i) => (
                    <StatBar key={i} label={stat.label} value={stat.value} />
                ))}
            </div>

            <p className="text-slate-400 text-sm border-t border-slate-800 pt-4">
                {desc}
            </p>
        </div>
    </div>
);

export default function AskPete() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">

            {/* Hero Section */}
            <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0" />

                {/* Animated Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#CFB991]/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-[#CFB991]/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 text-[#CFB991] font-mono text-xs tracking-widest uppercase mb-8"
                    >
                        <Terminal size={12} />
                        System Version 5.0 // Genesis Logic
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        THE IRON <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] to-amber-600">NETWORK</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        "We are looking this morning to the future, not the past... I tell you, young men, that tower shall go up one brick higher."
                    </motion.p>
                    <p className="mt-4 text-[#CFB991] font-mono text-sm uppercase tracking-widest">— President James Smart, 1894</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

                {/* 1.0 The Heavilon Algorithm */}
                <section className="mb-32">
                    <SectionHeader icon={BrainCircuit} title="The Heavilon Algorithm" subtitle="Reframing Catastrophe" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-invert prose-lg">
                            <p className="text-slate-300 leading-relaxed">
                                In legacy educational models, failure is encoded as a <span className="text-red-400">System Crash</span>. The Iron Network operates on the <strong>Heavilon Algorithm</strong>, which reinterprets failure as high-fidelity telemetry.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                When an Operator encounters a "Heavilon Event"—a failed exam, a rejected internship, or a mental health collapse—the directive is not to despair, but to execute the <strong>Rebuild Protocol</strong>.
                            </p>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start gap-3">
                                    <Activity className="text-[#CFB991] mt-1 shrink-0" size={20} />
                                    <span><strong>Analyze the Debris:</strong> Failure is not a moral judgment; it is pure Data.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Gauge className="text-[#CFB991] mt-1 shrink-0" size={20} />
                                    <span><strong>Identify the Weak Point:</strong> Was it the foundation (sleep)? The beams (discipline)?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrainFront className="text-[#CFB991] mt-1 shrink-0" size={20} />
                                    <span><strong>Execute the Rebuild:</strong> Build it One Brick Higher.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-full min-h-[400px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                            <div className="relative z-10 text-center p-8">
                                <div className="text-6xl font-bold text-white mb-2">1894</div>
                                <div className="text-[#CFB991] font-mono uppercase tracking-widest">The Great Fire</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2.0 The Machine Anatomy */}
                <section className="mb-32">
                    <SectionHeader icon={Cpu} title="The Machine Architecture" subtitle="Chassis & Systems" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <LoreCard title="The Firebox" icon={Flame} delay={0.1}>
                            <p><strong>The Metabolic Core.</strong> The combustion chamber where Coal (Attention) is converted into Heat.</p>
                            <p className="text-[#CFB991]">Directive: Burn Anthracite (clean fuel) to prevent "Clinkers" (Brain Fog).</p>
                        </LoreCard>

                        <LoreCard title="The Boiler" icon={Gauge} delay={0.2}>
                            <p><strong>The Nervous System.</strong> A high-pressure vessel designed to contain the energy generated by the Firebox.</p>
                            <p className="text-[#CFB991]">Warning: Vent steam regularly to prevent a Hull Rupture (Burnout).</p>
                        </LoreCard>

                        <LoreCard title="The Governor" icon={Shield} delay={0.3}>
                            <p><strong>The Inner Critic.</strong> A centrifugal speed limiter designed to prevent the engine from tearing itself apart.</p>
                            <p className="text-[#CFB991]">Protocol: Do not silence the Governor; calibrate it for high-speed operation.</p>
                        </LoreCard>

                        <LoreCard title="The Drive Wheels" icon={TrainFront} delay={0.4}>
                            <p><strong>The Will.</strong> Steel wheels on steel rails offer low friction at speed but are prone to slip at a standstill.</p>
                            <p className="text-[#CFB991]">Tactic: Use "Sand" (Discipline) to gain traction on steep grades.</p>
                        </LoreCard>
                    </div>
                </section>

                {/* 3.0 The Grid Physics */}
                <section className="mb-32 bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Radio size={300} />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-12 text-center">The Physics of the Grid</h3>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 text-slate-400">
                                    <Activity size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">The Static</h4>
                                <p className="text-slate-400 text-sm">
                                    <strong>Entropy & Friction.</strong> The background radiation of the unorganized world. If you stop applying force, The Static wins, and velocity decays to zero.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-[#CFB991]/20 rounded-full flex items-center justify-center mb-6 text-[#CFB991]">
                                    <Layout size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">The Tracks</h4>
                                <p className="text-slate-400 text-sm">
                                    <strong>The Curriculum.</strong> Structured paths laid by legacy Operators. They reduce friction, allowing you to move heavy loads with speed.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6 text-amber-500">
                                    <Radio size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">The Signal</h4>
                                <p className="text-slate-400 text-sm">
                                    <strong>Purpose & Flow.</strong> The magnetic pull of the destination. When engine speed matches track frequency, vibration vanishes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4.0 Archetypes */}
                <section className="mb-24">
                    <SectionHeader icon={Users} title="Locomotive Profiles" subtitle="Jungian Engineering" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ArchetypeCard
                            title="Interceptor"
                            role="The Hero"
                            icon={Shield}
                            stats={[
                                { label: "Traction", value: 90 },
                                { label: "Velocity", value: 85 },
                                { label: "Efficiency", value: 40 }
                            ]}
                            desc="High Risk / High Reward. Capable of tackling Boss Nodes head-on but prone to Boiler Explosions."
                        />

                        <ArchetypeCard
                            title="Analyzer"
                            role="The Sage"
                            icon={BrainCircuit}
                            stats={[
                                { label: "Analysis", value: 95 },
                                { label: "Signaling", value: 80 },
                                { label: "Traction", value: 50 }
                            ]}
                            desc="Slow and Steady. Excels at VaaM tasks and decoding complex schemas. Diagnostic Specialist."
                        />

                        <ArchetypeCard
                            title="Switcher"
                            role="The Explorer"
                            icon={Zap}
                            stats={[
                                { label: "Velocity", value: 90 },
                                { label: "Coupling", value: 85 },
                                { label: "Traction", value: 45 }
                            ]}
                            desc="Lateral Thinker. Prefers Branch Lines and finding shortcuts. Avoids the main linear track."
                        />

                        <ArchetypeCard
                            title="Supply Train"
                            role="The Caregiver"
                            icon={Heart}
                            stats={[
                                { label: "Efficiency", value: 95 },
                                { label: "Coupling", value: 90 },
                                { label: "Velocity", value: 50 }
                            ]}
                            desc="Social Logistics. Thrives in Convoy Mode. Can offload Friction from other players."
                        />
                    </div>
                </section>

                {/* Footer Quote */}
                <div className="text-center border-t border-slate-800 pt-24">
                    <p className="text-2xl md:text-4xl font-bold text-white mb-6 font-display">
                        "Disengage the brakes. Open the throttle to maximum."
                    </p>
                    <p className="text-[#CFB991] font-mono tracking-widest uppercase">
                        Hammer Down.
                    </p>
                </div>

            </div>
        </div>
    );
}
