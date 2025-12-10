import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import selfie from '../assets/selfie.jpg';

export default function Hero() {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    const titleWords = ["Learning", "Design", "Technologies"];

    return (
        <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20 pb-10">
            {/* Background Gradient & Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-[#CFB991]/5" />
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]" />

            {/* Animated Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CFB991]/10 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"
            />

            <div className="relative z-10 container mx-auto px-6 text-center">

                {/* MAIN HEADER: Learning Design Technologies */}
                <div className="mb-12 relative">
                    <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 mb-2">
                        {titleWords.map((word, i) => (
                            <motion.h1
                                key={word}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={textVariants}
                                className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 drop-shadow-2xl"
                            >
                                {word}
                            </motion.h1>
                        ))}
                    </div>

                    {/* Sub-line decoration */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="h-1 w-32 md:w-64 bg-gradient-to-r from-transparent via-[#CFB991] to-transparent mx-auto mt-6"
                    />
                </div>

                {/* Profile Section - Now Below */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <div className="relative mb-8 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#CFB991] to-amber-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <img
                            src={selfie}
                            alt="Joshua Atkinson"
                            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
                        />

                        {/* Status Badge */}
                        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-slate-900 text-[#CFB991] text-xs font-bold px-3 py-1 rounded-full border border-[#CFB991]/50 shadow-lg flex items-center gap-1">
                            <Shield size={10} className="fill-current" />
                            <span>CLEARED</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
                        Joshua <span className="text-[#CFB991]">Atkinson</span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
                        <strong className="text-slate-200">Systems Architect & Public Administrator</strong>
                        <br />
                        Merging 17 years of Marine Corps leadership with modern <span className="text-[#CFB991]">Learning Design</span> technology.
                    </p>

                    {/* Call to Actions */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
                        <Link
                            to="/portfolio"
                            className="w-full md:w-auto px-8 py-4 bg-[#CFB991] text-slate-950 font-bold rounded-lg hover:bg-[#dcca9d] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(207,185,145,0.2)] hover:shadow-[0_0_30px_rgba(207,185,145,0.4)]"
                        >
                            <span>Explore Competencies</span>
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            to="/ask-pete"
                            className="w-full md:w-auto px-8 py-4 bg-slate-900/50 border border-slate-700 hover:border-[#CFB991]/50 text-slate-300 hover:text-white rounded-lg transition-all hover:bg-slate-800 flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Cpu size={18} className="text-[#CFB991]" />
                            <span>Technical Capstone</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}