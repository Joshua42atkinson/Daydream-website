import React, { useState } from 'react';
import {
  FileText, Code, Video, Github, Award, ExternalLink,
  BookOpen, Users, Search, Palette, CheckCircle, Filter,
  Cpu, Shield, Sparkles, ChevronRight, Download
} from 'lucide-react';
import { flagshipProjects, supportingArtifacts, competencyDomains } from '../data/competencyData';
import { technologyBadges } from '../data/technologyBadges';

const competencyColors = {
  professional: "indigo",
  planning: "blue",
  design: "purple",
  evaluation: "green",
  research: "amber"
};

const CompetencyBadge = ({ domainId, small = false }) => {
  const domain = competencyDomains[domainId];
  const color = competencyColors[domainId];
  const sizeClass = small ? "text-xs px-2 py-1" : "text-sm px-3 py-1.5";

  return (
    <span className={`inline-flex items-center gap-1 ${sizeClass} rounded-full bg-${color}-500/10 border border-${color}-500/30 text-${color}-300 font-medium`}>
      {domain.title}
    </span>
  );
};

const FlagshipProjectCard = ({ project }) => (
  <div className="bg-slate-950/70 border-2 border-[#CFB991]/30 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-[#CFB991]/20 transition-all duration-300 hover:-translate-y-1">
    {/* Header */}
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 border-b border-slate-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFB991]/20 border border-[#CFB991]/40 text-[#CFB991] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            Flagship Project
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-lg text-slate-300 font-light italic">{project.subtitle}</p>
        </div>
        <a
          href={project.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 hover:bg-[#CFB991]/20 border border-slate-700 hover:border-[#CFB991] rounded-lg transition-all group"
        >
          <Download className="w-5 h-5 text-slate-400 group-hover:text-[#CFB991]" />
        </a>
      </div>

      {/* Hook */}
      <div className="bg-slate-950/50 border-l-4 border-[#CFB991] p-4 rounded-r-lg">
        <p className="text-slate-200 leading-relaxed">{project.hook}</p>
      </div>
    </div>

    {/* Metadata */}
    <div className="p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Role</h4>
          <p className="text-white font-medium">{project.role}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map(tool => (
              <span key={tool} className="px-2 py-1 bg-slate-800 text-slate-300 text-sm rounded border border-slate-700">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Competencies Demonstrated */}
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">IBSTPI Competencies Demonstrated</h4>
        <div className="space-y-3">
          {project.competencies.map((comp, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
              <CompetencyBadge domainId={comp.domain} small />
              <p className="text-slate-300 text-sm leading-relaxed flex-1">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Key Highlights</h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-300">
              <ChevronRight className="w-4 h-4 text-[#CFB991] mt-1 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ArtifactCard = ({ artifact }) => (
  <a
    href={artifact.pdfPath}
    target="_blank"
    rel="noopener noreferrer"
    className="group block p-6 bg-slate-950/70 border border-slate-800 rounded-xl hover:border-[#CFB991]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-md"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-[#CFB991]" />
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{artifact.type}</span>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#CFB991] transition-colors" />
    </div>

    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#CFB991] transition-colors">{artifact.title}</h3>
    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{artifact.description}</p>

    <div className="flex flex-wrap gap-2 mb-3">
      {artifact.competencies.map(comp => (
        <CompetencyBadge key={comp} domainId={comp} small />
      ))}
    </div>

    <div className="flex flex-wrap gap-2">
      {artifact.tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded">
          #{tag}
        </span>
      ))}
    </div>
  </a>
);

export default function EvidencePage() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const filteredArtifacts = selectedDomain
    ? supportingArtifacts.filter(a => a.competencies.includes(selectedDomain))
    : supportingArtifacts;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFB991]/10 border border-[#CFB991]/30 text-[#CFB991] text-sm font-bold uppercase tracking-wider mb-6">
            <Shield size={16} />
            Skills & Competency Portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] to-amber-600">
              Skills
            </span>
            <br />
            <span className="text-white">& </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB991] to-amber-600">
              Credentials
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            A comprehensive showcase of <strong className="text-white">technical abilities</strong>,
            <strong className="text-white"> professional tools</strong>, and
            <strong className="text-white"> earned credentials</strong> across instructional design,
            web development, multimedia production, and educational technology. Each artifact demonstrates
            practical application of industry-standard tools and methodologies.
          </p>

          <p className="text-slate-400 mt-4 max-w-3xl">
            For the pedagogical theory and instructional design philosophy behind these projects,
            visit the <a href="/ask-pete" className="text-[#CFB991] hover:underline font-medium">Ask Pete Technical Showcase</a>.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Flagship Projects */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-[#CFB991]" />
            <h2 className="text-3xl font-bold text-white">Flagship Projects</h2>
          </div>
          <p className="text-slate-400 mb-8 max-w-3xl">
            Major projects demonstrating technical proficiency across multiple tools and platforms.
            Each showcases practical application of web development, systems architecture, and multimedia production skills.
          </p>

          <div className="space-y-8">
            {flagshipProjects.map(project => (
              <FlagshipProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Competency Filter */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-6 h-6 text-[#CFB991]" />
            <h2 className="text-2xl font-bold text-white">Filter by Competency Domain</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedDomain(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedDomain === null
                ? 'bg-[#CFB991] text-slate-950'
                : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-[#CFB991]/50'
                }`}
            >
              All Artifacts
            </button>
            {Object.values(competencyDomains).map(domain => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedDomain === domain.id
                  ? `bg-${competencyColors[domain.id]}-500 text-white`
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-[#CFB991]/50'
                  }`}
              >
                {domain.title}
              </button>
            ))}
          </div>
        </section>

        {/* Supporting Artifacts */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-[#CFB991]" />
            <h2 className="text-3xl font-bold text-white">Supporting Artifacts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtifacts.map(artifact => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        </section>

        {/* Technology Badges */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-t border-slate-800 pt-12">
            <Award className="w-6 h-6 text-[#CFB991]" />
            <h2 className="text-3xl font-bold text-white">LDT Technology Badges</h2>
          </div>
          <p className="text-slate-400 mb-8 max-w-3xl">
            External credentials earned through Purdue University's Learning Design & Technology program,
            demonstrating proficiency in essential educational technology tools and competencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologyBadges.map((badge) => (
              <a
                key={badge.id}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start bg-slate-950/70 border border-slate-800 rounded-xl p-5 transition-all duration-300 hover:border-[#CFB991]/50 hover:shadow-xl hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="w-14 h-14 flex-shrink-0 mr-4 flex items-center justify-center">
                  {badge.imagePath ? (
                    <img
                      src={badge.imagePath}
                      alt={badge.title + " Badge"}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<svg class="w-12 h-12 text-[#CFB991]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>';
                      }}
                    />
                  ) : (
                    <Award className="w-12 h-12 text-[#CFB991]" />
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base font-bold text-white group-hover:text-[#CFB991] transition-colors mb-1 leading-tight">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                    {badge.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-600 group-hover:text-[#CFB991] transition-colors">
                    View Credential
                    <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}