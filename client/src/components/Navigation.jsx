import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">JA</span>
                        </div>
                        <span className="text-white font-bold text-lg hidden sm:block">Joshua Atkinson</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/')
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/portfolio"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/portfolio')
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/about"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/about')
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/daydream"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/daydream')
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Daydream Project
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/')
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/portfolio')
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/about')
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/daydream"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/daydream')
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Daydream Project
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
