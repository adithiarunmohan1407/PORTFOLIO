import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, X, Check, Laptop, Terminal } from 'lucide-react';
import { Project } from '../data';
import { useCMS } from '../context/CMSContext';

export const Projects: React.FC = () => {
  const cms = useCMS();
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = ['All', 'AI / ML', 'Full Stack', 'Web App'];

  const filteredProjects = cms.projectsData.filter((project) => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  const GithubIcon = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-indigo-500 animate-pulse" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects Showcase
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Explore my premier artificial intelligence web platforms, recommendation engines, and full-stack management terminals.
          </p>
        </div>

        {/* Live Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl font-extrabold text-sm sm:text-base transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25 scale-102'
                      : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => {
            return (
              <div 
                key={project.id}
                className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                
                {/* Visual Placeholder / Mockup Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Category Pill Over image */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs font-black text-slate-900 dark:text-white shadow">
                    {project.category}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                      <span>{project.title}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </h3>
                    <p className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Tech Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.technologies || []).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-extrabold px-3 py-1 rounded-lg bg-indigo-50 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-slate-600 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Footer */}
                <div className="p-6 pt-0 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700/60 mt-auto">
                  
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-grow flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-extrabold text-sm shadow-md shadow-indigo-500/25 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl || cms.contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="flex items-center justify-center p-3 rounded-2xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <GithubIcon />
                  </a>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Stunning High-Fidelity Project Interactive Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-4xl p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl my-8 overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header Row */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 font-black text-xs">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Featured Portfolio Work</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-lg font-bold text-amber-500">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body Layout */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Image Screenshot Preview Simulation */}
              <div className="md:col-span-7 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950">
                  {/* Top Bar Window simulation */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1">
                      <Laptop className="w-3 h-3 text-indigo-400" /> live-preview.{activeModalProject.id}.platform
                    </span>
                  </div>
                  
                  <img 
                    src={activeModalProject.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'} 
                    alt={activeModalProject.title}
                    className="w-full h-auto object-cover max-h-80" 
                  />
                  
                  {/* Terminal interactive badge */}
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-400" /> Status: Deployed & Active
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 rounded font-bold">100% Fully Responsive</span>
                  </div>
                </div>

                {/* Extended Description */}
                <div>
                  <h4 className="font-extrabold text-base uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                    System Overview & Problem Solved
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.extendedDescription || activeModalProject.description}
                  </p>
                </div>
              </div>

              {/* Right Side Info */}
              <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
                
                {/* Key Features */}
                {activeModalProject.keyFeatures && activeModalProject.keyFeatures.length > 0 && (
                  <div>
                    <h4 className="font-extrabold text-base uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      Architectural Features:
                    </h4>
                    <div className="space-y-2.5">
                      {activeModalProject.keyFeatures.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="font-extrabold text-base uppercase tracking-wider text-slate-900 dark:text-white">
                    Verified Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(activeModalProject.technologies || []).map((t) => (
                      <span key={t} className="text-xs font-black px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-slate-700 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
                  <a
                    href={activeModalProject.githubUrl || cms.contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-extrabold text-sm shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <GithubIcon />
                    <span>View Official Source Code</span>
                  </a>

                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg active:scale-95 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
