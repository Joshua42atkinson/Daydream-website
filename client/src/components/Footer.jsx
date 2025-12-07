import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 print:hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
                            <div className="p-2 bg-[#CFB991] rounded-lg text-slate-900 group-hover:scale-110 transition-transform">
                                <Terminal size={20} strokeWidth={3} />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                Joshua<span className="text-[#CFB991]">Atkinson</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-4">
                            A Master's Competency Portfolio for Purdue University's Learning Design & Technology program.
                            Built with Rust, React, and Pedagogical Rigor.
                        </p>
                        <div className="px-4 py-3 bg-slate-900/50 border-l-4 border-[#CFB991] rounded-r-lg mb-6">
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <strong className="text-[#CFB991]">Local-First Philosophy:</strong> This portfolio is designed with privacy-centric principles.
                                All instructional tools prioritize data sovereignty and learner agency over surveillance capitalism.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <SocialLink href="https://github.com/joshua42atkinson" icon={Github} label="GitHub" />
                            <SocialLink href="https://linkedin.com/in/joshua-atkinson" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="mailto:atkinsoj@purdue.edu" icon={Mail} label="Email" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/portfolio" label="Competency Portfolio" />
                            <FooterLink to="/ask-pete" label="The Ask Pete Initiative" />
                            <FooterLink to="/about" label="About the Designer" />
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-white font-bold mb-6">System Status</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-mono">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>All Systems Nominal</span>
                            </li>
                            <li>Version: 2.4.0 (Redeemed)</li>
                            <li>Environment: Production</li>
                            <li>Framework: React + Vite</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                    <p>&copy; {new Date().getFullYear()} Joshua Atkinson. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Designed for <span className="text-[#CFB991]">Purdue LDT</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
            aria-label={label}
        >
            <Icon size={20} />
        </a>
    );
}

function FooterLink({ to, label }) {
    return (
        <li>
            <Link to={to} className="text-slate-400 hover:text-[#CFB991] transition-colors text-sm flex items-center gap-1 group">
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                {label}
            </Link>
        </li>
    );
}
