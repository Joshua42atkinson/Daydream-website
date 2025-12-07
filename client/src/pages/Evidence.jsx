// client/src/pages/Evidence.jsx (COMPLETE REFACTOR)

import React from 'react';
import { FileText, Code, PenTool, ExternalLink, Video, Github, Award, ChevronRight } from 'lucide-react';
import { evidenceData as artifacts } from '../data/evidenceData'; 

// --- START: New Badge Data & Component ---

// IMPORTANT: The imagePath assumes you have placed the files in client/public/assets/
// The paths use the names of the PNG files you provided.
const techBadgesData = [
    { 
        name: "ID Professional Communicator", 
        link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/444920/view", 
        // CORRECTED PATH: Removed /badges/ directory
        imagePath: "/assets/Presentation_Tools_Technology_Badge_Repository_-_LDT__Badge_Atkinson.png" 
    },
    { 
        name: "Applying ID Research & Theory", 
        link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/480837/view", 
        // CORRECTED PATH: Removed /badges/ directory
        imagePath: "/assets/Research_Tools_Technology_Badge_Repository_-_LDT__Badge_Atkinson.png" 
    },
    { 
        name: "ID Knowledge, Skills, and Attitudes", // The "Website Development" Badge
        link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/545190/view", 
        // CORRECTED PATH: Removed /badges/ directory
        imagePath: "/assets/Website_Development_Technology_Badge_Repository_-_LDT__Badge_Atkinson (2).png" 
    },
    { 
        name: "Ethical, Legal, and Political Implications", 
        link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/545473/view", 
        // Keeping null as no specific "Ethics" badge image was provided in your assets
        imagePath: null 
    },
    { 
        name: "Systematic Design", 
        link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/545490/view", 
        // CORRECTED PATH: Removed /badges/ directory
        imagePath: "/assets/Video_Production_and_Editing_Technology_Badge_Repository_-_LDT__Badge_Atkinson.png" 
    },
    { 
        name: "Target Population and Environment", 
        link: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/447995/view", 
        // CORRECTED PATH: Removed /badges/ directory
        imagePath: "/assets/Basic_Tools_Technology_Badge_Repository_-_LDT__Badge_Atkinson.png"
    },
];

const BadgeLinkCard = ({ badge }) => (
    <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-slate-900/40 border border-slate-800 rounded-xl p-4 transition-all duration-300 hover:border-[#CFB991]/50 hover:shadow-xl hover:-translate-y-1 block"
    >
        {/* Badge Image or Placeholder Icon */}
        <div className="w-16 h-16 flex-shrink-0 mr-4 flex items-center justify-center">
            {badge.imagePath ? (
                <img
                    src={badge.imagePath}
                    alt={badge.name + " Badge"}
                    className="w-full h-full object-contain"
                    // Fallback in case the path is wrong
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<Award size={40} className="text-slate-600" />'; }}
                />
            ) : (
                // Placeholder for missing image
                <Award size={40} className="text-slate-600" />
            )}
        </div>
        
        {/* Title and Link Icon */}
        <div className="flex-grow">
            <h3 className="text-base font-bold text-white group-hover:text-[#CFB991] transition-colors mb-0">
                {badge.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                View Credential
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </a>
);


// Existing ArtifactCard component (syntax fixed)
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

        {/* --- Section 2: Technology Skills Development Badges (REFACTORED) --- */}
        <h2 className="text-2xl font-bold text-[#CFB991] mb-6 border-t border-slate-800 pt-8">LDT Technology Badges (External Credentials)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techBadgesData.map((badge, index) => (
                <BadgeLinkCard key={index} badge={badge} />
            ))}
        </div>
      </div>
    </div>
  );
}