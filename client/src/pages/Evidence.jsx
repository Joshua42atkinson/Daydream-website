import React from 'react';
import { FileText, Code, PenTool, ExternalLink } from 'lucide-react';

// The verified data we just prepared
const artifacts = [
  {
    title: "The Iron Network: A Codex",
    type: "Design Document",
    description: "The definitive 'Lore Bible' for the Cognitive Railway Ecosystem. This document mythologizes Purdue's history into the 'Foundry' and establishes the systems isomorphism between software engineering and cognitive resilience.",
    link: "https://drive.google.com/file/d/1yjrFFXxburg6YaWWnm-ie_mhB0YQmj5CzeF7n4GLywk/view?usp=sharing",
    tags: ["Lore", "Pedagogy", "System Architecture"],
    isHero: true // Special flag for the main doc
  },
  {
    title: "Ask Pete Field Manual (Short 8k)",
    type: "Field Manual",
    description: "The 'Boilermaker’s Guide to Cognitive Logistics.' A handbook for students that reframes failure as data (The Heavilon Protocol) and uses the steam engine as a metaphor for self-regulation.",
    link: "https://drive.google.com/file/d/1ODzPG8MJMMdZoFc_buzYKQ2_qpOVYW8A/view?usp=sharing",
    tags: ["Student Guide", "Psychology", "Resilience"]
  },
  {
    title: "Storyfied D20 Game Design",
    type: "Technical Spec",
    description: "A comprehensive specification for the D20 narrative ecosystem. Details the 'Logistics Check' mechanics, Jungian Locomotive Profiles, and the 'Coal & Steam' tokenomics of attention.",
    link: "https://drive.google.com/file/d/1oGPRJjpms68CiYaNJxNqUcIpaIswPJdt/view?usp=sharing",
    tags: ["Game Design", "Mechanics", "D20 System"]
  },
  {
    title: "Iron Road: Codebase of a Digital Mirror",
    type: "Technical Audit",
    description: "A deep dive into the technical architecture. Covers the 'Rust-Powered' stack, local-first privacy mandates, and the 'AI as Mirror' philosophy.",
    link: "https://drive.google.com/file/d/1FK-mO0mtWNomOX9AsguMtEMWDrR7EMhV/view?usp=sharing",
    tags: ["Codebase", "Rust", "AI Architecture"]
  },
  {
    title: "Iron Road Design Document",
    type: "Executive Summary",
    description: "The strategic blueprint. Defines the 'Edutainment Gap,' the 'Vertical Slice' MVP strategy, and the plan for institutionalizing the project.",
    link: "https://drive.google.com/file/d/1quc1o168NXArNr8woAwUb-pCP9TL0oNj/view?usp=sharing",
    tags: ["Strategy", "MVP", "Proposal"]
  },
  {
    title: "Blog: From Mindmap to Model",
    type: "Reflection",
    description: "A reflective piece on the evolution of the instructional design process, exploring how AI can bridge the gap between abstract mindmaps and concrete models.",
    link: "https://drive.google.com/file/d/1cLOjMxAeh8FmcRTKF3y_-pRPwfYR8Ns5/view?usp=sharing",
    tags: ["Reflection", "Process", "AI"]
  },
  {
    title: "Email Reflection Artifact",
    type: "Communication",
    description: "Evidence of professional communication and feedback integration. Demonstrates the pivot in project scope based on expert critique.",
    link: "https://drive.google.com/file/d/1NHiexwwJNsEpS1uIhX-DKkDnWGUsvV-3/view?usp=sharing",
    tags: ["Feedback", "Pivot"]
  }
];

const ArtifactCard = ({ item }) => (
  <div className={`p-6 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all ${item.isHero ? 'col-span-1 md:col-span-2 lg:col-span-3 border-amber-500/50 bg-slate-800/80' : ''}`}>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
        {item.type === "Design Document" && <PenTool className="w-5 h-5 text-amber-400" />}
        {item.type === "Technical Spec" && <Code className="w-5 h-5 text-blue-400" />}
        {!["Design Document", "Technical Spec"].includes(item.type) && <FileText className="w-5 h-5 text-slate-400" />}
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{item.type}</span>
      </div>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>

    <h3 className={`font-bold mb-2 text-white ${item.isHero ? 'text-2xl' : 'text-xl'}`}>{item.title}</h3>
    <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>

    <div className="flex flex-wrap gap-2 mt-auto">
      {item.tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600">
          #{tag}
        </span>
      ))}
    </div>
  </div>
);

export default function EvidencePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-slate-700 pb-8">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            The Archive
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Documentation of the Iron Road initiative. From the initial "Codex" of lore to the technical audits of the Rust-based digital mirror.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, index) => (
            <ArtifactCard key={index} item={artifact} />
          ))}
        </div>
      </div>
    </div>
  );
}
