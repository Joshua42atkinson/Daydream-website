// client/src/pages/Evidence.jsx

import React from 'react';
import { FileText, Code, PenTool, ExternalLink, Video, Github, Award, ChevronRight } from 'lucide-react';
import { evidenceData as artifacts } from '../data/evidenceData'; 

// Data for external technology badges
const techBadgeLinks = [
    { name: "ID Professional Communicator", link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/444920/view", tags: ["Foundations"] },
    { name: "Applying ID Research & Theory", link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/480837/view", tags: ["Foundations"] },
    { name: "ID Knowledge, Skills, and Attitudes", link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/545190/view", tags: ["Foundations"] },
    { name: "Ethical, Legal, and Political Implications of Design", link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/545473/view", tags: ["Foundations"] },
    { name: "Systematic Design", link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/545490/view", tags: ["Design"] },
    { name: "Target Population and Environment", link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/447995/view", tags: ["Planning"] },
];


const ArtifactCard = ({ item }) => (
  <div className={`p-6 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all ${item.isHero ? 'col-span-1 md:col-span-2 lg:col-span-3 border-amber-500/50 bg-slate-800/80' : ''}`}>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
        {item.type === "Design Document" && <PenTool className="w-5 h-5 text-amber-400" />}
        {item.type === "Technical Spec" && <Code className="w-5 h-5 text-blue-400" />}
        {item.type === "Video" && <Video className="w-5 h-5 text-red-400" />}
        {item.type === "Repository" && <Github className="w-5 h-5 text-green-400" />}
        {item.type === "Certification" && <Award className="w-5 h-5 text-yellow-400" />}
        {!["Design Document", "Technical Spec", "Video", "Repository", "Certification"].includes(item.type) && <FileText className="w-5 h-5 text-slate-400" />}
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
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            The Digital Archive
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            A repository of raw documents, technical audits, and external certifications for the Iron Road initiative.
          </p>
        </header>

        {/* --- Section 1: Core Project Artifacts --- */}
        <h2 className="text-2xl font-bold text-[#CFB991] mb-6">Core Project Artifacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.title} item={artifact} />
          ))}
        </div>

        {/* --- Section 2: Technology Skills Development Badges --- */}
        <h2 className="text-2xl font-bold text-[#CFB991] mb-6 border-t border-slate-800 pt-8">Technology Skills Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techBadgeLinks.map((badge, index) => (
                <a
                    key={index}
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-[#CFB991]/50 transition-colors group"
                >
                    <div className="flex items-center gap-3">
                        <Award size={20} className="text-[#CFB991]" />
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                            {badge.name}
                        </span>
                    </div>
                    <ChevronRight size={18} className="text-slate-500 group-hover:text-[#CFB991] transition-transform group-hover:translate-x-1" />
                </a>
            ))}
        </div>
      </div>
    </div>
  );
}