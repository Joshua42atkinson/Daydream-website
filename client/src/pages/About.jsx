import React from 'react';
import {
    Award,
    Code,
    Users,
    Shield,
    Briefcase,
    Landmark,
    MapPin,
    FileText
} from 'lucide-react';

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#CFB991] uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/20 mb-4">
            <Icon size={14} />
            {subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {title}
        </h2>
        <div className="h-1 w-20 bg-[#CFB991] rounded-full" />
    </div>
);

export default function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991]">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* --- Bio Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-center">

                    {/* Image / Identity */}
                    <div className="md:col-span-4 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#CFB991] to-slate-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                            {/* Replace with your actual photo URL or keep placeholder */}
                            <img
                                src="https://github.com/joshua42atkinson.png"
                                alt="Joshua Atkinson"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
                                <div className="flex items-center gap-2 text-[#CFB991] mb-1">
                                    <MapPin size={16} />
                                    <span className="text-sm font-mono tracking-wider">HOULTON, ME</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Narrative Bio */}
                    <div className="md:col-span-8 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Integrity. Strategy. <span className="text-[#CFB991]">Service.</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">
                            Decorated U.S. Marine Corps Veteran (Gunnery Sergeant) with over 17 years of leadership in fiscal oversight, crisis management, and strategic operations.
                        </p>

                        <div className="prose prose-invert prose-lg text-slate-300">
                            <p>
                                My career has been defined by decisive problem-solving in high-stakes environments. From serving as <strong>Incident Commander</strong> for tactical aircraft emergencies to managing multi-million dollar assets as a <strong>Fiscal Chief</strong>, I have honed the ability to lead diverse teams with transparency and accountability.
                            </p>
                            <p>
                                Now established in Houlton, Maine, I am pivoting my focus to <strong>Public Administration</strong> and <strong>Instructional Systems Design</strong>. I combine the discipline of military service with the innovation of the tech sector, serving on the board of the Unitarian Church of Houlton and coordinating vital community outreach programs like The Cup Cafe.
                            </p>
                        </div>

                        {/* Resume Download / Contact */}
                        <div className="flex gap-4 pt-4">
                            <a href="mailto:joshua42atkinson@gmail.com" className="px-6 py-3 bg-[#CFB991] text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-2">
                                <Briefcase size={18} />
                                Contact for Opportunities
                            </a>
                            <button className="px-6 py-3 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-[#CFB991] hover:text-[#CFB991] transition-colors flex items-center gap-2">
                                <FileText size={18} />
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- Core Competencies (The Resume Logic) --- */}
                <SectionHeader icon={Shield} title="Core Competencies" subtitle="Operational Readiness" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    <CompetencyCard
                        title="Fiscal Management"
                        icon={Landmark}
                        desc="Managed annual operating budgets and procurement. Served as final authority on fiscal legality for detachment expenditures, ensuring 100% accountability of government funds."
                    />
                    <CompetencyCard
                        title="Crisis Leadership"
                        icon={Shield}
                        desc="Served as on-scene Incident Commander for 18+ tactical emergencies. Expertise in risk mitigation, safety compliance, and decisive action under extreme pressure."
                    />
                    <CompetencyCard
                        title="Personnel Development"
                        icon={Users}
                        desc="Directed training and performance evaluations for units of 130+ personnel. Authored Standard Operating Procedures (SOPs) for Equal Opportunity and organizational climate."
                    />
                </div>

                {/* --- Education & Community --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-[#CFB991]" size={24} />
                            <h3 className="text-xl font-bold text-white">Education</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold">M.S. Learning Design & Technology</h4>
                                <p className="text-slate-400 text-sm">Purdue University (In Progress)</p>
                                <p className="text-slate-500 text-xs mt-1">Focus: Systems Architecture & Educational Infrastructure</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">B.A. English / Creative Writing</h4>
                                <p className="text-slate-400 text-sm">Southern New Hampshire University</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-[#CFB991]" size={24} />
                            <h3 className="text-xl font-bold text-white">Community Impact</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold">Board Member</h4>
                                <p className="text-slate-400 text-sm">Unitarian Universalist Church of Houlton</p>
                                <p className="text-slate-500 text-xs mt-1">Strategic oversight of operations, finances, and growth initiatives.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Program Coordinator</h4>
                                <p className="text-slate-400 text-sm">The Cup Cafe</p>
                                <p className="text-slate-500 text-xs mt-1">Managing volunteers to provide free community meals and foster social connection.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Helper Component
const CompetencyCard = ({ title, desc, icon: Icon }) => (
    <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-xl hover:border-[#CFB991]/30 transition-all duration-300">
        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-[#CFB991]">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
);
