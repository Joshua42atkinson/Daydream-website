import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, BookOpen, Archive, FileText } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Competency Portfolio', path: '/portfolio', icon: BookOpen },
        { name: 'Evidence', path: '/evidence', icon: Archive },
        { name: 'Ask Pete', path: '/ask-pete', icon: Terminal },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 print:hidden ${scrolled
                ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-[#CFB991] rounded-lg text-slate-900 group-hover:scale-110 transition-transform">
                            <Terminal size={20} strokeWidth={3} />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Joshua<span className="text-[#CFB991]">Atkinson</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`flex items-center gap-2 text-sm font-medium transition-colors ${isActive(link.path)
                                    ? 'text-[#CFB991]'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {link.icon && <link.icon size={16} />}
                                {link.name}
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="https://github.com/joshua42atkinson/day_dream"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-all"
                        >
                            GitHub Repo
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-4 shadow-2xl">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium ${isActive(link.path) ? 'text-[#CFB991]' : 'text-slate-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
