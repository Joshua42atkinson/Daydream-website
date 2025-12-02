import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
// import portfolioData from '../data/portfolioData.json'; // Removed unused import
// Actually, standard import works in Vite for JSON.

export default function Home() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Hero />

            <section className="py-20 px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Competencies</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Demonstrating mastery in Learning Design and Technology through a rigorous portfolio of artifacts and reflections.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* We can map a few featured categories here */}
                    {['foundations', 'design', 'evaluation'].map((cat, i) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#CFB991]/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-3 capitalize">{cat}</h3>
                            <p className="text-slate-400">
                                {cat === 'foundations' && "Applying ID research and theory to solve real-world learning problems."}
                                {cat === 'design' && "Creating engaging, evidence-based instructional interventions."}
                                {cat === 'evaluation' && "Assessing impact and implementing data-driven improvements."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
