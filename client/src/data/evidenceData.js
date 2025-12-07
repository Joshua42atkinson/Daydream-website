// client/src/pages/Evidence.jsx

import React from 'react';
import { FileText, Code, PenTool, ExternalLink, Video, Github } from 'lucide-react';
import { evidenceData as artifacts } from '../data/evidenceData'; // <--- UPDATED IMPORT

// The hardcoded artifacts array that was here has been removed and replaced by the import.

const ArtifactCard = ({ item }) => (
  <div className={`p-6 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all ${item.isHero ? 'col-span-1 md:col-span-2 lg:col-span-3 border-amber-500/50 bg-slate-800/80' : ''}`}>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
        {item.type === "Design Document" && <PenTool className="w-5 h-5 text-amber-400" />}
        {item.type === "Technical Spec" && <Code className="w-5 h-5 text-blue-400" />}
        {item.type === "Video" && <Video className="w-5 h-5 text-red-400" />}
        {item.type === "Repository" && <Github className="w-5 h-5 text-green-400" />}
        {!["Design Document", "Technical Spec", "Video", "Repository"].includes(item.type) && <FileText className="w-5 h-5 text-slate-400" />}
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
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.title} item={artifact} />
          ))}
        </div>
      </div>
    </div>
  );
}