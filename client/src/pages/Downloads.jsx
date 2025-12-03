import React from 'react';
import { FileText, Download, Folder, Database, FileCode } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Downloads() {
    // Flatten all artifacts into a single list for the archive
    const allArtifacts = portfolioData.badges.flatMap(badge =>
        badge.artifacts.map(artifact => ({
            ...artifact,
            badgeName: badge.title,
            category: badge.categoryId
        }))
    );

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-mono selection:bg-[#CFB991]/30 selection:text-[#CFB991] pt-20">

            <div className="max-w-6xl mx-auto px-6 pb-24">
                {/* Header */}
                <div className="border-b border-slate-800 pb-8 mb-8">
                    <div className="flex items-center gap-3 text-[#CFB991] mb-2">
                        <Database size={20} />
                        <span className="uppercase tracking-widest text-sm font-bold">System Archive // Root</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">Artifact Repository</h1>
                    <p className="text-slate-500">
                        Direct access to raw file storage. Indexing {allArtifacts.length} items.
                    </p>
                </div>

                {/* File System Grid */}
                <div className="bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden">

                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 p-4 bg-slate-900 border-b border-slate-800 text-xs text-slate-500 uppercase tracking-wider font-bold">
                        <div className="col-span-6 md:col-span-5">Filename / Title</div>
                        <div className="col-span-3 hidden md:block">Associated Badge</div>
                        <div className="col-span-3 hidden md:block">Type</div>
                        <div className="col-span-6 md:col-span-1 text-right">Action</div>
                    </div>

                    {/* File Rows */}
                    <div className="divide-y divide-slate-800/50">
                        {allArtifacts.map((file, index) => (
                            <div key={index} className="grid grid-cols-12 gap-4 p-4 hover:bg-slate-800/40 transition-colors items-center group">

                                {/* File Name */}
                                <div className="col-span-6 md:col-span-5 flex items-start gap-3">
                                    <div className="text-slate-600 group-hover:text-[#CFB991] transition-colors mt-1">
                                        <FileIcon url={file.file_path} />
                                    </div>
                                    <div>
                                        <div className="text-slate-200 font-medium group-hover:text-white transition-colors">
                                            {file.title}
                                        </div>
                                        <div className="text-xs text-slate-500 md:hidden mt-1">
                                            {file.badgeName}
                                        </div>
                                    </div>
                                </div>

                                {/* Badge Context */}
                                <div className="col-span-3 hidden md:flex items-center text-sm text-slate-400">
                                    <Folder size={14} className="mr-2 text-slate-600" />
                                    {file.badgeName}
                                </div>

                                {/* File Type */}
                                <div className="col-span-3 hidden md:flex items-center text-xs text-slate-500 uppercase">
                                    {getFileType(file.file_path)}
                                </div>

                                {/* Download Button */}
                                <div className="col-span-6 md:col-span-1 flex justify-end">
                                    <a
                                        href={file.file_path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-[#CFB991] hover:bg-slate-800 border border-slate-800 transition-all"
                                        title="Open Artifact"
                                    >
                                        <Download size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper to guess icon based on link
function FileIcon({ url }) {
    if (url.includes('youtube') || url.includes('youtu.be')) return <FileCode />; // Video
    if (url.includes('github')) return <FileCode />; // Code
    if (url.includes('docs.google')) return <FileText />; // Doc
    return <FileText />;
}

// Helper to guess type string
function getFileType(url) {
    if (url.includes('youtube')) return 'Video Resource';
    if (url.includes('github')) return 'Source Code';
    if (url.includes('docs.google')) return 'Cloud Document';
    return 'External Resource';
}
