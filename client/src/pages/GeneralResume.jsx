import React from 'react';
import { Download, MapPin, Mail, Github, Linkedin, Terminal, BookOpen, Shield, Cpu, Network, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const GeneralResume = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#CFB991]/30 selection:text-[#CFB991] py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0">
            <Helmet>
                <title>Resume | Joshua Atkinson</title>
                <meta name="description" content="Resume of Joshua Atkinson: Systems Architect, Instructional Strategist, and Operations Leader." />
            </Helmet>

            {/* Background Atmosphere (Screen Only) */}
            <div className="fixed inset-0 pointer-events-none print:hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-30 animate-pulse delay-700" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]" />
            </div>

            <div className="relative max-w-5xl mx-auto bg-slate-900/80 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden border border-slate-700/50 print:shadow-none print:max-w-none print:bg-white print:border-none print:rounded-none">

                {/* HEADER SECTION */}
                <header className="relative p-8 md:p-12 overflow-hidden border-b border-slate-700/50 print:border-slate-300 print:bg-white print:text-black print:p-0 print:mb-6">
                    {/* Screen-Only Fancy Header Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90 print:hidden" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 print:hidden" />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="max-w-3xl">
                            {/* Screen-Only decorative badge */}
                            <div className="print:hidden inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[#CFB991]/10 border border-[#CFB991]/30 text-[#CFB991]">
                                <span className="relative flex h-2 w-2 mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFB991] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CFB991]"></span>
                                </span>
                                Identity Verified // Level 5 Clearance
                            </div>

                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-white print:text-black print:text-4xl">
                                Joshua Atkinson
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-6 print:text-slate-600 print:text-lg print:mb-4">
                                Systems Architect <span className="text-[#CFB991] mx-2 print:text-black">•</span>
                                Instructional Strategist <span className="text-[#CFB991] mx-2 print:text-black">•</span>
                                Operations Leader
                            </p>

                            <div className="space-y-4 text-slate-400 leading-relaxed print:text-black print:text-sm">
                                <p>
                                    Decorated U.S. Marine Corps Veteran (Gunnery Sergeant) with over 17 years of leadership in fiscal oversight, crisis management, and strategic operations. My career has been defined by decisive problem-solving in high-stakes environments.
                                </p>
                                <p className="print:hidden">
                                    Now established in Houlton, Maine, I am pivoting my focus to Public Administration and Instructional Systems Design, bridging the gap between high-performance code, cognitive science, and kinetic leadership.
                                </p>
                                <p className="hidden print:block font-italic text-slate-600">
                                    Bridging the gap between high-performance code, cognitive science, and kinetic leadership.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 text-sm font-medium text-slate-300 print:text-black">
                            <a href="mailto:joshua42atkinson@gmail.com" className="flex items-center hover:text-white transition-colors print:text-black">
                                joshua42atkinson@gmail.com <Mail className="ml-2 w-4 h-4 text-[#CFB991] print:text-black print:ml-1" />
                            </a>
                            <div className="flex items-center">
                                Open to Relocation (Immediate) <MapPin className="ml-2 w-4 h-4 text-[#CFB991] print:hidden" />
                            </div>
                            <div className="flex gap-4 mt-2 print:hidden">
                                <a href="https://github.com/joshua42atkinson" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* THE TRIAD - Visualizing the 3 Personas */}
                <section className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-b border-slate-700/50 print:divide-slate-200 print:border-b-2 print:border-slate-200">

                    {/* Column 1: The Engineer */}
                    <div className="p-8 hover:bg-slate-800/50 transition-colors print:p-4 print:bg-white">
                        <div className="flex items-center gap-3 mb-4 text-blue-400 print:text-blue-800">
                            <Terminal className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-white print:text-black">The Engineer</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4 print:text-slate-700">
                            Building memory-safe, high-concurrency infrastructure.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-300 print:text-black">
                            <li className="flex items-start"><span className="mr-2 text-blue-500">▹</span> Rust (Systems/Async)</li>
                            <li className="flex items-start"><span className="mr-2 text-blue-500">▹</span> Bevy ECS & Game Physics</li>
                            <li className="flex items-start"><span className="mr-2 text-blue-500">▹</span> Local-First AI (Candle/Llama)</li>
                            <li className="flex items-start"><span className="mr-2 text-blue-500">▹</span> Architecture (Axum/Tokio)</li>
                        </ul>
                    </div>

                    {/* Column 2: The Instructor */}
                    <div className="p-8 hover:bg-slate-800/50 transition-colors print:p-4 print:bg-white">
                        <div className="flex items-center gap-3 mb-4 text-emerald-400 print:text-emerald-800">
                            <BookOpen className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-white print:text-black">The Instructor</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4 print:text-slate-700">
                            Operationalizing cognitive load into software mechanics.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-300 print:text-black">
                            <li className="flex items-start"><span className="mr-2 text-emerald-500">▹</span> Cognitive Load Theory</li>
                            <li className="flex items-start"><span className="mr-2 text-emerald-500">▹</span> Situated Cognition</li>
                            <li className="flex items-start"><span className="mr-2 text-emerald-500">▹</span> Agile ADDIE & Design</li>
                            <li className="flex items-start"><span className="mr-2 text-emerald-500">▹</span> Constraint-Based Learning</li>
                        </ul>
                    </div>

                    {/* Column 3: The Leader */}
                    <div className="p-8 hover:bg-slate-800/50 transition-colors print:p-4 print:bg-white">
                        <div className="flex items-center gap-3 mb-4 text-red-400 print:text-red-800">
                            <Shield className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-white print:text-black">The Leader</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4 print:text-slate-700">
                            Executing high-stakes logistics and strategic pivots.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-300 print:text-black">
                            <li className="flex items-start"><span className="mr-2 text-red-500">▹</span> Operations Chief (130+ Personnel)</li>
                            <li className="flex items-start"><span className="mr-2 text-red-500">▹</span> Fiscal Chief (FinOps/Budget)</li>
                            <li className="flex items-start"><span className="mr-2 text-red-500">▹</span> Crisis Management</li>
                            <li className="flex items-start"><span className="mr-2 text-red-500">▹</span> Strategic Ecosystem Analysis</li>
                        </ul>
                    </div>
                </section>

                {/* MAIN CONTENT AREA */}
                <div className="p-8 md:p-12 space-y-12 print:p-0 print:pt-6 print:space-y-6">

                    {/* SECTION: IRON ROAD */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-800 pb-2 mb-6 print:border-slate-200 print:mb-4">
                            <h2 className="text-2xl font-bold text-white print:text-black">The "Iron Road" Initiative</h2>
                            <span className="text-sm font-bold text-[#CFB991] print:text-slate-600">2023 – Present</span>
                        </div>

                        <div className="prose prose-invert max-w-none print:prose-slate">
                            <p className="text-slate-400 mb-6 italic print:text-slate-700 print:mb-4">
                                A "Living Laboratory" bridging the gap between high-performance systems engineering and rigorous instructional design.
                                Serves as the primary evidence base for Technical, Pedagogical, and Strategic competencies.
                            </p>

                            <div className="grid gap-6 md:grid-cols-2 print:gap-4 print:block">
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors print:bg-white print:border-none print:p-0 print:mb-4">
                                    <h4 className="font-bold text-blue-400 mb-2 print:text-blue-900">Technical Feat: The "Armstrong Maneuver"</h4>
                                    <p className="text-sm text-slate-300 print:text-slate-800">
                                        Solved a critical concurrency challenge by architecting a bridge between the asynchronous
                                        <span className="font-mono text-xs bg-slate-900 px-1 py-0.5 mx-1 rounded text-blue-300 print:bg-slate-200 print:text-black">Axum</span> web server and the synchronous
                                        <span className="font-mono text-xs bg-slate-900 px-1 py-0.5 mx-1 rounded text-blue-300 print:bg-slate-200 print:text-black">Bevy</span> game loop.
                                        Utilized <span className="font-mono text-xs bg-slate-900 px-1 py-0.5 mx-1 rounded text-blue-300 print:bg-slate-200 print:text-black">tokio::mpsc</span> channels to enable
                                        real-time physics simulation without blocking web I/O.
                                    </p>
                                </div>

                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors print:bg-white print:border-none print:p-0 print:mb-4">
                                    <h4 className="font-bold text-emerald-400 mb-2 print:text-emerald-900">Pedagogical Feat: "Coal & Steam" Economy</h4>
                                    <p className="text-sm text-slate-300 print:text-slate-800">
                                        Operationalized abstract learning theory into game physics. Modeled <strong>Intrinsic Load</strong> as physical weight ("Cargo")
                                        and <strong>Motivation</strong> as fuel ("Coal"). This creates a verifiable mathematical model for student burnout
                                        and engagement trajectory.
                                    </p>
                                </div>

                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 md:col-span-2 hover:border-red-500/30 transition-colors print:bg-white print:border-none print:p-0">
                                    <h4 className="font-bold text-red-400 mb-2 print:text-red-900">Strategic Feat: The Pivot & "Terabyte Problem"</h4>
                                    <p className="text-sm text-slate-300 print:text-slate-800">
                                        Demonstrated executive discipline by pivoting from a "Massively Multiplayer" vision to a "Vertical Slice" MVP
                                        to align with resource constraints. Personally remediated a critical infrastructure failure (data leak) through
                                        forensic auditing and rigorous "Garbage Collection" protocols.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: USMC */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-800 pb-2 mb-6 print:border-slate-200 print:mb-4">
                            <h2 className="text-2xl font-bold text-white print:text-black">Military Operations Leadership</h2>
                            <span className="text-sm font-bold text-[#CFB991] print:text-slate-600">2016 – 2021</span>
                        </div>

                        <div className="space-y-6 print:space-y-4">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-200 print:text-black">Operations Chief</h3>
                                    <span className="text-sm text-slate-500 print:text-slate-600">United States Marine Corps</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed print:text-slate-800">
                                    Served as the "Technical Program Manager" for a 131-person unit. Orchestrated daily logistics, personnel development,
                                    and tactical execution. Commanded the response to 18 aircraft emergencies, establishing a "Command Post" architecture
                                    that coordinated fire, medical, and logistics in real-time high-stress environments.
                                </p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-200 print:text-black">Fiscal Chief (FinOps)</h3>
                                    <span className="text-sm text-slate-500 print:text-slate-600">Goodfellow AFB, TX</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed print:text-slate-800">
                                    Managed federal budget execution and procurement. Ensured 100% compliance with the Anti-Deficiency Act,
                                    translating complex regulatory code into operational reality—a direct parallel to modern FinOps and Compliance Engineering.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: EDUCATION */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-800 pb-2 mb-6 print:border-slate-200 print:mb-4">
                            <h2 className="text-2xl font-bold text-white print:text-black">Education</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 print:block print:space-y-4">
                            <div>
                                <h3 className="font-bold text-slate-200 print:text-black">Master of Science in Education</h3>
                                <p className="text-sm text-slate-500 print:text-slate-700">Purdue University (LDT Focus) | In Progress</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-200 print:text-black">Bachelor of Arts in English (Fiction Focus)</h3>
                                <p className="text-sm text-slate-500 print:text-slate-700">Southern New Hampshire University (SNHU)</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FOOTER ACTION (Screen Only) */}
                <div className="bg-slate-900 border-t border-slate-800 p-8 flex justify-center print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-[#CFB991] text-slate-900 px-8 py-3 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-[#CFB991]/20 font-bold"
                    >
                        <Download className="w-4 h-4" />
                        Download / Print to PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GeneralResume;
