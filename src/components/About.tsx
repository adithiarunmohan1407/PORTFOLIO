import React, { useState } from 'react';
import { Sparkles, GraduationCap, Award, BookOpen, Target, Brain, Code2, Compass } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const About: React.FC = () => {
  const cms = useCMS();
  const aboutData = cms.aboutData;
  const [activeTab, setActiveTab] = useState<'intro' | 'academics'>('intro');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute -left-20 top-1/3 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-rose-500/10 dark:bg-rose-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {aboutData.heading || "About Me"}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            {aboutData.subheading || "Passionate Engineer & Problem Solver"}
          </p>
        </div>

        {/* Tab Switcher for highly interactive presentation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
            <button
              onClick={() => setActiveTab('intro')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                activeTab === 'intro'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 scale-102'
                  : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <Brain className="w-5 h-5" />
              <span>Professional Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('academics')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                activeTab === 'academics'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20 scale-102'
                  : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Academic Highlights</span>
            </button>
          </div>
        </div>

        {/* Content View based on active tab */}
        {activeTab === 'intro' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in zoom-in-95 duration-400">
            
            {/* Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Target className="w-5 h-5" />
                  </span>
                  <span>My Story & Vision</span>
                </h3>

                <p>
                  I am a motivated <strong className="text-indigo-600 dark:text-indigo-400">Third-year B.Tech CSE student</strong> at <span className="underline decoration-indigo-500 font-semibold">NSS College of Engineering</span>. My voyage into computer science is driven by an insatiable curiosity to understand how software transforms data into intelligent action.
                </p>
                <p className="mt-4">
                  With deep expertise in <strong className="text-purple-600 dark:text-purple-400 font-semibold">Python</strong>, <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Web Development</strong>, and a profound passion for <strong className="text-rose-600 dark:text-rose-400 font-semibold">Artificial Intelligence & Machine Learning</strong>, I focus on constructing clean, efficient, and highly scalable architectures adhering to professional Software Engineering principles.
                </p>
                
                {/* Core Mindset Highlights */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Continuous Learning Mindset</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Constantly acquiring new frameworks and advanced AI models.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Brain className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Problem-Solving Approach</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Breaking down complex requirements into elegant algorithms.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Impactful Products</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Building software that solves real pain points in healthcare & careers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Software Engineering</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Focused on maintainability, modularity, and database speed.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(aboutData.quickFacts || []).map((fact, index) => {
                const colors = [
                  "border-indigo-500/30 hover:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400",
                  "border-emerald-500/30 hover:border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400",
                  "border-purple-500/30 hover:border-purple-500 bg-purple-50/40 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
                  "border-amber-500/30 hover:border-amber-500 bg-amber-50/40 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400"
                ];
                return (
                  <div 
                    key={fact.label}
                    className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 shadow-lg ${colors[index % colors.length]}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80">{fact.label}</p>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-2">{fact.value}</p>
                  </div>
                );
              })}

              {/* Large CTA Mini Card */}
              <div className="sm:col-span-2 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden flex items-center justify-between">
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-indigo-500/20 to-transparent pointer-events-none" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-indigo-300">Ready to build something amazing?</p>
                  <p className="text-xl font-bold">Let's collaborate on your next vision.</p>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 active:scale-95 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </div>

          </div>
        ) : (
          <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-400">
            {/* Academic Highlights as Elegant Premium Card */}
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/50 dark:from-slate-800 dark:via-indigo-950/40 dark:to-purple-950/40 border-2 border-indigo-200/80 dark:border-indigo-800 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Degree info */}
                <div className="space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-extrabold uppercase tracking-widest">
                    <Award className="w-4 h-4" />
                    <span>Academic Distinction</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                    {aboutData.academicCard?.degree || "B.Tech in Computer Science and Engineering"}
                  </h3>

                  <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-600 dark:text-slate-400 font-semibold text-lg">
                    <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold">
                      <GraduationCap className="w-5 h-5" />
                      {aboutData.academicCard?.institution || "NSS College of Engineering"}
                    </span>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                    <span>{aboutData.academicCard?.year || "Third Year"}</span>
                  </div>
                </div>

                {/* Outstanding CGPA Big Showcase Box */}
                <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-600 to-indigo-600 text-white shadow-xl shadow-emerald-500/25 shrink-0 hover:scale-105 transition-transform duration-300">
                  <span className="text-xs uppercase font-extrabold tracking-widest opacity-80">Outstanding</span>
                  <span className="text-5xl sm:text-6xl font-extrabold tracking-tight my-1">
                    {aboutData.academicCard?.cgpa || "8.91"}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full mt-2">
                    Current CGPA
                  </span>
                </div>

              </div>

              {/* Bottom Key Academic Highlights list */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-base">Consistent Top Performer</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Maintained exceptional grades throughout all engineering semesters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-base">Core Computer Science</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Advanced coursework in Algorithms, DBMS, Operating Systems, and AI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-base">Campus Active Representative</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Representing student engineering chapters at state tech forums.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
