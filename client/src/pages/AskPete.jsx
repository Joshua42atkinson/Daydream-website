import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Shield, Zap, Network, Lock, ArrowRight } from 'lucide-react';

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
                    <div className="col-span-1 lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-[#CFB991]/30 transition-colors">
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
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group">
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
            <div className="border-y border-slate-900 bg-slate-900/20 py-24">
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

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to inspect the artifacts?</h2>
                <a
                    href="/portfolio"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-950 font-bold rounded-xl transition-all hover:scale-105"
                >
                    View Competency Evidence <ArrowRight size={20} />
                </a>
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
