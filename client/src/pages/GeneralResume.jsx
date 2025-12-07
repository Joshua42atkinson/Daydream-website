import React from 'react';
import { Download, MapPin, Mail, Github, Linkedin, Terminal, BookOpen, Shield } from 'lucide-react';

const GeneralResume = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
            <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:max-w-none">

                {/* HEADER SECTION - The "Small Ego, Big Experience" Intro */}
                {/* HEADER SECTION - Bio & Identity */}
                <header className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden print:bg-white print:text-black print:p-0 print:border-b-2 print:border-slate-800">
                    <div className="absolute top-0 right-0 p-4 opacity-10 print:hidden">
                        <Terminal size={120} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 print:text-4xl print:mb-0">
                                Joshua Atkinson
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-6 print:text-slate-600 print:text-lg print:mb-2">
                                Systems Architect <span className="text-emerald-400 mx-2 print:text-black">•</span>
                                Instructional Strategist <span className="text-emerald-400 mx-2 print:text-black">•</span>
                                Operations Leader
                            </p>

                            {/* Inserted Bio Content */}
                            <div className="space-y-4 text-slate-400 leading-relaxed print:text-black print:text-sm">
                                <p>
                                    Decorated U.S. Marine Corps Veteran (Gunnery Sergeant) with over 17 years of leadership in fiscal oversight, crisis management, and strategic operations. My career has been defined by decisive problem-solving in high-stakes environments—from serving as Incident Commander for tactical emergencies to managing multi-million dollar assets as a Fiscal Chief.
                                </p>
                                <p className="print:hidden">
                                    Now established in Houlton, Maine, I am pivoting my focus to Public Administration and Instructional Systems Design, bridging the gap between high-performance code, cognitive science, and kinetic leadership.
                                </p>
                                <p className="hidden print:block font-italic">
                                    Bridging the gap between high-performance code, cognitive science, and kinetic leadership.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 text-sm font-medium text-slate-300 print:text-black">
                            <a href="mailto:joshua42atkinson@gmail.com" className="flex items-center hover:text-white transition-colors print:text-black">
                                joshua42atkinson@gmail.com <Mail className="ml-2 w-4 h-4 print:hidden" />
                            </a>
                            <div className="flex items-center">
                                Open to Relocation (Immediate) <MapPin className="ml-2 w-4 h-4 text-emerald-400 print:hidden" />
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
                <section className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">

                    {/* Column 1: The Engineer */}
                    <div className="p-8 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-blue-700">
                            <Terminal className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider">The Engineer</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            Building memory-safe, high-concurrency infrastructure.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-800">
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▹</span> Rust (Systems/Async)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▹</span> Bevy ECS & Game Physics
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▹</span> Local-First AI (Candle/Llama)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▹</span> Architecture (Axum/Tokio)
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: The Instructor */}
                    <div className="p-8 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-emerald-700">
                            <BookOpen className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider">The Instructor</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            Operationalizing cognitive load into software mechanics.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-800">
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▹</span> Cognitive Load Theory
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▹</span> Situated Cognition
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▹</span> Agile ADDIE & Design
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▹</span> Constraint-Based Learning
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: The Leader */}
                    <div className="p-8 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-red-700">
                            <Shield className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider">The Leader</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            Executing high-stakes logistics and strategic pivots.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-800">
                            <li className="flex items-start">
                                <span className="mr-2 text-red-500">▹</span> Operations Chief (130+ Personnel)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-red-500">▹</span> Fiscal Chief (FinOps/Budget)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-red-500">▹</span> Crisis Management
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-red-500">▹</span> Strategic Ecosystem Analysis
                            </li>
                        </ul>
                    </div>
                </section>

                {/* MAIN CONTENT AREA */}
                <div className="p-8 md:p-12 space-y-12">

                    {/* SECTION: IRON ROAD */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-100 pb-2 mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">The "Iron Road" Initiative</h2>
                            <span className="text-sm font-bold text-slate-500">2023 – Present</span>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <p className="text-slate-600 mb-6 italic">
                                A "Living Laboratory" bridging the gap between high-performance systems engineering and rigorous instructional design.
                                Serves as the primary evidence base for Technical, Pedagogical, and Strategic competencies.
                            </p>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Technical Feat: The "Armstrong Maneuver"</h4>
                                    <p className="text-sm text-slate-700">
                                        Solved a critical concurrency challenge by architecting a bridge between the asynchronous
                                        <span className="font-mono text-xs bg-slate-200 px-1 py-0.5 mx-1 rounded">Axum</span> web server and the synchronous
                                        <span className="font-mono text-xs bg-slate-200 px-1 py-0.5 mx-1 rounded">Bevy</span> game loop.
                                        Utilized <span className="font-mono text-xs bg-slate-200 px-1 py-0.5 mx-1 rounded">tokio::mpsc</span> channels to enable
                                        real-time physics simulation without blocking web I/O.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-emerald-900 mb-2">Pedagogical Feat: "Coal & Steam" Economy</h4>
                                    <p className="text-sm text-slate-700">
                                        Operationalized abstract learning theory into game physics. Modeled <strong>Intrinsic Load</strong> as physical weight ("Cargo")
                                        and <strong>Motivation</strong> as fuel ("Coal"). This creates a verifiable mathematical model for student burnout
                                        and engagement trajectory.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 md:col-span-2">
                                    <h4 className="font-bold text-red-900 mb-2">Strategic Feat: The Pivot & "Terabyte Problem"</h4>
                                    <p className="text-sm text-slate-700">
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
                        <div className="flex items-baseline justify-between border-b-2 border-slate-100 pb-2 mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">Military Operations Leadership</h2>
                            <span className="text-sm font-bold text-slate-500">2016 – 2021</span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800">Operations Chief</h3>
                                    <span className="text-sm text-slate-500">United States Marine Corps</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Served as the "Technical Program Manager" for a 131-person unit. Orchestrated daily logistics, personnel development,
                                    and tactical execution. Commanded the response to 18 aircraft emergencies, establishing a "Command Post" architecture
                                    that coordinated fire, medical, and logistics in real-time high-stress environments.
                                </p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800">Fiscal Chief (FinOps)</h3>
                                    <span className="text-sm text-slate-500">Goodfellow AFB, TX</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Managed federal budget execution and procurement. Ensured 100% compliance with the Anti-Deficiency Act,
                                    translating complex regulatory code into operational reality—a direct parallel to modern FinOps and Compliance Engineering.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: EDUCATION */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-100 pb-2 mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-bold text-slate-800">Master of Science in Education</h3>
                                <p className="text-sm text-slate-600">Purdue University (LDT Focus) | In Progress</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Bachelor of Arts in English (Fiction Focus)</h3>
                                <p className="text-sm text-slate-600">Southern New Hampshire University (SNHU)</p>
                            </div>
                        </div>
                    </section>

                </div>

                {/* FOOTER ACTION */}
                <div className="bg-slate-50 border-t border-slate-200 p-8 flex justify-center print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl font-bold"
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
