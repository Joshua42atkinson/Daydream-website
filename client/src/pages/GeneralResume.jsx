import React from 'react';
import { Download, MapPin, Mail, Github, Linkedin, Terminal, Shield, Landmark, GraduationCap, Medal } from 'lucide-react';

const GeneralResume = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
            <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:max-w-none">

                {/* HEADER SECTION - Executive Identity */}
                <header className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden print:bg-white print:text-black print:p-0 print:border-b-2 print:border-slate-800">
                    <div className="absolute top-0 right-0 p-4 opacity-10 print:hidden">
                        <Landmark size={120} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="max-w-3xl">
                            {/* ADDED: Status Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 print:hidden">
                                <Medal size={14} />
                                Service-Connected Disabled Veteran
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 print:text-4xl print:mb-0">
                                Joshua Atkinson
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-6 print:text-slate-600 print:text-lg print:mb-2">
                                Operations Executive <span className="text-[#CFB991] mx-2 print:text-black">•</span>
                                Systems Architect <span className="text-[#CFB991] mx-2 print:text-black">•</span>
                                Public Administrator
                            </p>

                            <div className="space-y-4 text-slate-400 leading-relaxed print:text-black print:text-sm">
                                <p>
                                    <strong>Executive Summary:</strong> Decorated Marine Corps Veteran and Systems Architect bridging the gap between kinetic operations and digital governance. With over 17 years of leadership experience, I specialize in translating complex regulatory frameworks (Anti-Deficiency Act, FERPA) into operational reality.
                                </p>
                                <p className="print:hidden">
                                    I combine the discipline of a Fiscal Chief—overseeing $13M in assets—with the innovation of a Software Engineer. Currently based in Houlton, Maine, I am dedicated to building resilient systems for public and educational institutions.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 text-sm font-medium text-slate-300 print:text-black">
                            <a href="mailto:joshua42atkinson@gmail.com" className="flex items-center hover:text-white transition-colors print:text-black">
                                joshua42atkinson@gmail.com <Mail className="ml-2 w-4 h-4 print:hidden" />
                            </a>
                            <div className="flex items-center">
                                Houlton, Maine (Open to Relocation) <MapPin className="ml-2 w-4 h-4 text-[#CFB991] print:hidden" />
                            </div>
                            <div className="flex gap-4 mt-2 print:hidden">
                                <a href="https://github.com/joshua42atkinson" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/in/joshua-atkinson" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* CORE COMPETENCIES - The "Executive Dashboard" */}
                <section className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 bg-slate-50">

                    {/* Column 1: Strategic Governance */}
                    <div className="p-8 hover:bg-white transition-colors print:p-4">
                        <div className="flex items-center gap-3 mb-4 text-indigo-900">
                            <Landmark className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider !text-indigo-900">Fiscal Governance</h3>
                        </div>
                        <ul className="space-y-3 text-sm font-medium text-slate-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-[#CFB991]">▸</span> Federal Budget Execution
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-[#CFB991]">▸</span> Asset Acquisition ($13M+)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-[#CFB991]">▸</span> Regulatory Compliance (ADA)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-[#CFB991]">▸</span> Strategic Resource Allocation
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Technical Architecture */}
                    <div className="p-8 hover:bg-white transition-colors print:p-4">
                        <div className="flex items-center gap-3 mb-4 text-blue-900">
                            <Terminal className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider !text-blue-900">Systems Architecture</h3>
                        </div>
                        <ul className="space-y-3 text-sm font-medium text-slate-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▸</span> Rust & WebAssembly (WASM)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▸</span> Local-First Data Sovereignty
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▸</span> FERPA/COPPA Privacy Design
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-500">▸</span> High-Concurrency Logic
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Operational Leadership */}
                    <div className="p-8 hover:bg-white transition-colors print:p-4">
                        <div className="flex items-center gap-3 mb-4 text-emerald-900">
                            <Shield className="w-6 h-6" />
                            <h3 className="font-bold text-lg uppercase tracking-wider !text-emerald-900">Crisis Leadership</h3>
                        </div>
                        <ul className="space-y-3 text-sm font-medium text-slate-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▸</span> Incident Command (18+ Events)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▸</span> Personnel Mgmt (130+ Staff)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▸</span> SOP Authoring & Enforcement
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-emerald-500">▸</span> Cross-Functional Team Building
                            </li>
                        </ul>
                    </div>
                </section>

                {/* MAIN EXPERIENCE AREA */}
                <div className="p-8 md:p-12 space-y-12 print:p-6 print:space-y-6">

                    {/* SECTION: ACADEMIC SABBATICAL & CIVIC LEADERSHIP */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-100 pb-2 mb-6 print:mb-3">
                            <div className="flex items-center gap-3">
                                <GraduationCap className="text-[#CFB991]" size={28} />
                                <h2 className="text-2xl font-bold text-slate-900 !text-slate-900">Academic Sabbatical & Civic Leadership</h2>
                            </div>
                            <span className="text-sm font-bold text-slate-500">2021 – Present</span>
                        </div>

                        <div className="prose prose-slate max-w-none mb-6">
                            <p className="text-slate-600 italic">
                                Following honorable discharge from the USMC, I executed a strategic pivot to full-time academia and civic service.
                                Since 2021, I have focused exclusively on acquiring advanced degrees in English and Learning Design while serving as a community leader in Houlton, Maine.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="pl-4 border-l-2 border-[#CFB991]">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800">Board Member & Program Coordinator</h3>
                                    <span className="text-sm text-slate-500">Unitarian Church of Houlton / The Cup Cafe</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Spearheaded community outreach initiatives in Northern Aroostook County.
                                    Oversaw operational budgets and coordinated volunteer staffing for "The Cup Cafe," a food security program serving vulnerable residents.
                                    Demonstrated ability to build consensus among diverse stakeholders and manage non-profit assets.
                                </p>
                            </div>

                            <div className="pl-4 border-l-2 border-slate-200">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800">Full-Time Scholar (B.A. & M.S.)</h3>
                                    <span className="text-sm text-slate-500">2021 – Present</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                    Maintained a full-time academic courseload for 3+ years, achieving Summa Cum Laude honors while simultaneously architecting the "Iron Road" educational platform.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: USMC EXECUTIVE LEADERSHIP */}
                    <section className="break-before-page">
                        <div className="flex items-baseline justify-between border-b-2 border-slate-100 pb-2 mb-6 print:mb-3">
                            <h2 className="text-2xl font-bold text-slate-900 !text-slate-900">Military Operations Executive</h2>
                            <span className="text-sm font-bold text-slate-500">2010 – 2021</span>
                        </div>

                        <div className="space-y-8">
                            {/* Role 1: Fiscal Chief */}
                            <div className="group">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-800 transition-colors">Fiscal Chief (Financial Operations)</h3>
                                    <span className="text-sm text-slate-500">Marine Corps Detachment, Texas</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                    Served as the Chief Financial Officer for the detachment. Executed the annual operating budget with zero discrepancies.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                    <li><strong>Strategic Acquisition:</strong> Managed contracting for <strong>$13 million</strong> in specialized training equipment and staffing, ensuring strict compliance with federal acquisition regulations.</li>
                                    <li><strong>Audit Readiness:</strong> Supervised all purchasing and travel authorizations, maintaining 100% accountability of public funds in accordance with the Anti-Deficiency Act.</li>
                                </ul>
                            </div>

                            {/* Role 2: Operations Chief */}
                            <div className="group">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-800 transition-colors">Operations Chief</h3>
                                    <span className="text-sm text-slate-500">Marine Wing Support Squadron 272</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                    Directed daily operations and long-term strategic planning for a 131-person unit.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                    <li><strong>Crisis Management:</strong> Served as Incident Commander for <strong>18 aircraft emergencies</strong>, coordinating fire, medical, and logistics assets in high-stakes environments.</li>
                                    <li><strong>Policy Authoring:</strong> Authored the Standard Operating Procedures (SOPs) for the unit's Equal Opportunity and Professional Conduct program, governing 500+ staff members.</li>
                                    <li><strong>Global Logistics:</strong> Maintained accountability and operational readiness for personnel and equipment during Exercise Trident Juncture in Norway.</li>
                                </ul>
                            </div>

                            {/* Role 3: Recruiter */}
                            <div className="group">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-800 transition-colors">Talent Acquisition Specialist</h3>
                                    <span className="text-sm text-slate-500">Marine Corps Recruiting Station Indianapolis</span>
                                </div>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                    <li>Named <strong>"Employee of the Year" (2011)</strong> for the city of Indianapolis.</li>
                                    <li>Managed applicant pipelines, ensuring all candidates met rigorous federal qualification standards (medical, legal, educational).</li>
                                    <li><strong>Diversity & Inclusion:</strong> Actively sought to meet and exceed recruitment diversity goals while maintaining high quality standards.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: EDUCATION & CERTIFICATIONS */}
                    <section>
                        <div className="flex items-baseline justify-between border-b-2 border-slate-100 pb-2 mb-6 print:mb-3">
                            <h2 className="text-2xl font-bold text-slate-900 !text-slate-900">Education & Credentials</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 print:gap-4">
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 print:p-3 print:border-none">
                                <h3 className="font-bold text-slate-800 !text-slate-800">Master of Science in Education</h3>
                                <p className="text-sm text-slate-600 font-medium">Purdue University | 2024 – Present</p>
                                <p className="text-xs text-slate-500 mt-2">Focus: Learning Design & Technology</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 print:p-3 print:border-none">
                                <h3 className="font-bold text-slate-800 !text-slate-800">Bachelor of Arts in English</h3>
                                <p className="text-sm text-slate-600 font-medium">Southern New Hampshire University | 2021 – 2024</p>
                                <p className="text-xs text-slate-500 mt-2">Summa Cum Laude (Fiction Focus)</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 !text-slate-900">Professional Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">Fire Officer III (Executive Level)</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">Fire Instructor III</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">Incident Safety Officer</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">Lean Six Sigma (Green Belt Equiv/USMC)</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">P3 Professional Selling Skills</span>
                            </div>
                        </div>
                    </section>

                </div>

                {/* FOOTER ACTION */}
                <div className="bg-slate-50 border-t border-slate-200 p-8 flex justify-center print:hidden">
                    <a
                        href="/assets/docs/Resume.pdf"
                        download="Joshua_Atkinson_Resume.pdf" // Optional: specifies the filename for the download
                        className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl font-bold tracking-wide"
                    >
                        <Download className="w-5 h-5" />
                        Download Executive Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GeneralResume;
