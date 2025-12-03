import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Cpu, Database, Award } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991] pt-20">

            {/* 1. HERO SECTION: The "Instructional Systems Architect" Identity */}
            <div className="max-w-4xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 bg-[#CFB991] rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-2xl shadow-[#CFB991]/20"
                >
                    <User size={48} strokeWidth={2.5} />
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Joshua Atkinson
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#CFB991] font-mono mb-8 flex items-center gap-3">
                    <Terminal size={28} />
                    Instructional Systems Architect
                </h2>

                <div className="prose prose-invert prose-lg text-slate-400 leading-relaxed border-l-4 border-slate-800 pl-6">
                    <p>
                        I am a Learning Design & Technology graduate student at Purdue University, focused on the intersection of
                        <strong className="text-white"> Systems Engineering</strong> and <strong className="text-white">Cognitive Science</strong>.
                    </p>
                    <p>
                        My work challenges the traditional LMS model by introducing "Local-First" AI architectures that prioritize
                        student agency and data sovereignty. Through the <strong className="text-[#CFB991]">Ask Pete Initiative</strong>, I investigate how
                        Generative AI can function not just as an oracle, but as a Socratic scaffold that increases—rather than
                        bypasses—desirable difficulty.
                    </p>
                </div>
            </div>

            {/* 2. PHILOSOPHY GRID: The "Ask Pete" Theory */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="text-slate-500 uppercase tracking-widest text-sm font-bold">The Daydream Philosophy</span>
                    <div className="h-px flex-1 bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PhilosophyCard
                        icon={Cpu}
                        title="Cognitive Logistics"
                        content="Learning is a supply chain problem. I model Intrinsic Load as 'Cargo Weight' and Working Memory as 'Engine Capacity,' using physics simulations to optimize information delivery."
                        delay={0.1}
                    />
                    <PhilosophyCard
                        icon={Terminal}
                        title="Systems Isomorphism"
                        content="The code structure should mirror the pedagogical structure. I use Rust and WebAssembly to ensure that the reliability of the software matches the rigor of the curriculum."
                        delay={0.2}
                    />
                    <PhilosophyCard
                        icon={Database}
                        title="Data Sovereignty"
                        content="In an era of Surveillance Capitalism, I advocate for 'Privacy Moats.' Student data should be processed locally (on-device), ensuring that their thoughts remain their property."
                        delay={0.3}
                    />
                </div>
            </div>

            {/* 3. TIMELINE: The Academic Journey */}
            <div className="max-w-4xl mx-auto px-6 pb-32 pt-12">
                <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
                    <Award className="text-[#CFB991]" />
                    Academic Trajectory
                </h3>

                <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-10 relative">
                    <TimelineItem
                        year="2025"
                        title="M.S. Learning Design & Technology"
                        org="Purdue University"
                        desc="Specialization in Educational Data Mining and AI-Augmented Scaffolding. Capstone: The 'Ask Pete' Living Laboratory."
                    />
                    <TimelineItem
                        year="2024"
                        title="The 'Hostile MVP' Pivot"
                        org="Engineering Milestone"
                        desc="Transitioned the Daydream platform from a Python/LangChain prototype to a high-performance Rust/Bevy architecture to solve latency and privacy constraints."
                    />
                    <TimelineItem
                        year="Pre-2023"
                        title="Professional Background"
                        org="Industry Experience"
                        desc="Brought extensive experience in UI/UX and commercial engagement to the academic sphere, translating 'User Retention' strategies into 'Learner Engagement' mechanics."
                    />
                </div>
            </div>
        </div>
    );
}

// --- Helper Components ---

function PhilosophyCard({ icon: Icon, title, content, delay }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-[#CFB991]/30 transition-all group"
        >
            <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center text-[#CFB991] mb-6 border border-slate-800 group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#CFB991] transition-colors">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {content}
            </p>
        </motion.div>
    );
}

function TimelineItem({ year, title, org, desc }) {
    return (
        <div className="relative">
            {/* Timeline Dot */}
            <span className="absolute -left-[49px] top-1 w-5 h-5 rounded-full bg-slate-950 border-4 border-slate-800 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <span className="text-[#CFB991] font-mono font-bold text-xs bg-[#CFB991]/10 px-2 py-1 rounded border border-[#CFB991]/20">
                    {year}
                </span>
                <h4 className="text-xl font-bold text-white">{title}</h4>
            </div>
            <div className="text-sm text-slate-500 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                {org}
            </div>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
