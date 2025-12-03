import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Terminal } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-center font-mono text-slate-200">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />

                <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800 text-red-500">
                    <AlertTriangle size={40} />
                </div>

                <h1 className="text-4xl font-bold text-white mb-2">404 ERROR</h1>
                <p className="text-red-400 font-bold mb-6 tracking-widest uppercase text-xs">
                    System Failure: Path Not Found
                </p>

                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    The requested artifact appears to have been redacted or does not exist in the current memory bank.
                </p>

                <div className="flex flex-col gap-3">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#CFB991] hover:bg-[#bfa37a] text-slate-900 font-bold rounded-lg transition-all"
                    >
                        <Home size={18} /> Return to Base
                    </Link>
                    <Link
                        to="/portfolio"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg transition-all border border-slate-700"
                    >
                        <Terminal size={18} /> View Valid Artifacts
                    </Link>
                </div>
            </div>
        </div>
    );
}
