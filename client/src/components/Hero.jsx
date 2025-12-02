import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            {/* Background Gradient - Purdue Gold/Black Theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#CFB991]/10 via-black to-[#CFB991]/5" />

            {/* Animated Gears/Steam (Spicy) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-96 h-96 border-4 border-[#CFB991]/20 rounded-full border-dashed opacity-30"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-40 -left-20 w-72 h-72 border-2 border-[#CFB991]/10 rounded-full border-dotted opacity-20"
            />

            {/* Steam/Fog Effect */}
            <motion.div
                animate={{ x: [0, 100, 0], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#CFB991]/10 to-transparent blur-3xl"
            />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#CFB991] to-[#ECDCB9]"
                >
                    Joshua Atkinson
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
                >
                    Instructional Designer & Technology Specialist
                    <br />
                    <span className="text-[#CFB991] text-lg font-semibold tracking-wider uppercase mt-2 block">Ask Pete</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/portfolio"
                        className="group px-8 py-3 bg-[#CFB991] hover:bg-[#B8A27A] text-black font-bold rounded-full transition-all flex items-center justify-center gap-2"
                    >
                        View Portfolio
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/daydream"
                        className="px-8 py-3 border border-[#CFB991]/30 hover:bg-[#CFB991]/10 text-[#CFB991] font-bold rounded-full transition-all"
                    >
                        Ask Pete
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
