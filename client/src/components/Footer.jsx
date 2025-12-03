import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Joshua Atkinson. All rights reserved.</p>
            </div>
        </footer>
    );
}
