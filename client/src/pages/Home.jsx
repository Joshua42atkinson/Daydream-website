import React from 'react';
import Hero from '../components/Hero';
import { Layers, BrainCircuit, Shield, Cpu } from 'lucide-react';
// ADD THIS LINE BELOW:
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Hero />

            {/* Professional Philosophy / Mission */}
            <section className="py-24 px-6 border-b border-slate-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Intersection of <span className="text-[#CFB991]">Pedagogy</span> & <span className="text-[#CFB991]">Code</span></h2>
                        {/* ADDED: Subtle animated divider */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1 bg-[#CFB991] mx-auto rounded-full mb-8"
                        />
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            I build educational infrastructure that respects the physics of the mind. By combining <strong>Instructional Design</strong> principles with <strong>Systems Engineering</strong>, I create learning environments that are reliable, scalable, and psychologically safe.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={BrainCircuit}
                            title="Cognitive Engineering"
                            desc="Applying Cognitive Load Theory to software architecture to prevent learner burnout."
                        />
                        <FeatureCard
                            icon={Layers}
                            title="Systems Isomorphism"
                            desc="Ensuring the structural integrity of the code mirrors the psychological safety of the classroom."
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Privacy-First Architecture"
                            desc="Leveraging Local-First AI to protect learner sovereignty and data ethics."
                        />
                    </div>
                </div>
            </section>

            {/* Portfolio Grid (Existing but reframed) */}
            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Layers}
                        title="Systematic Design"
                        desc="Artifacts demonstrating ADDIE, Gap Analysis, and rigorous instructional planning."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Ethical Architecture"
                        desc="Implementing 'Privacy Moats' and 'Local-First' data policies to protect student agency."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={Cpu}
                        title="Technical Mastery"
                        desc="Full stack Rust/WASM implementations demonstrating modern EdTech capabilities."
                        delay={0.4}
                    />
                </div>
            </section>
        </div>
    );
}

// Helper Component for the grid
function FeatureCard({ icon: Icon, title, desc, delay }) {
    return (
        // MODIFIED: Added backdrop-blur-md for a proper glassmorphism effect
        <div className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-[#CFB991]/30 transition-all duration-300 group backdrop-blur-md">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-[#CFB991] group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
        </div>
    );
}