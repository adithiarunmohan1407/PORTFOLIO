import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Sparkles, Trophy, Rocket, Star, Zap, Brain } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const Education: React.FC = () => {
  const cms = useCMS();
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-50/30 to-indigo-50/40 dark:from-transparent dark:via-purple-950/20 dark:to-indigo-950/30">
      
      {/* Colorful ambient background orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-500/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-sm font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-bounce" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Solid foundations in computer science theory, algorithms, advanced mathematics, and highly specialized engineering disciplines.
          </p>
        </div>

        {/* Beautiful Colorful Timeline Design */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical rainbow tracking bar */}
          <div className="absolute left-6 md:left-10 top-6 bottom-6 w-1.5 bg-gradient-to-b from-indigo-600 via-purple-600 via-pink-500 to-emerald-500 rounded-full opacity-80 shadow-lg shadow-purple-500/30" />

          <div className="space-y-12">
            {cms.educationData.map((item, index) => {
              const isFirst = index === 0;

              return (
                <div key={item.role + item.organization + index} className="relative pl-16 md:pl-24 group">
                  
                  {/* Glowing Icon Node with pulsing halo */}
                  <div className="absolute left-2 md:left-6 top-6 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 shadow-2xl shadow-purple-500/30 group-hover:scale-125 transition-transform duration-300 z-10">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60 animate-pulse" />
                    <div className={`relative w-full h-full rounded-xl bg-gradient-to-tr ${
                      isFirst ? 'from-indigo-600 via-purple-600 to-pink-500' : 'from-emerald-600 to-teal-600'
                    } text-white flex items-center justify-center shadow-inner`}>
                      {isFirst ? <GraduationCap className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} /> : <BookOpen className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Vibrant Colorful Card */}
                  <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:-translate-y-2">
                    
                    <div className="p-8 sm:p-10 rounded-[calc(1.5rem-4px)] bg-white dark:bg-slate-900 relative overflow-hidden">
                      
                      {/* Decorative gradient orbs inside card */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                      {/* Top badge floating corner */}
                      <div className="absolute top-6 right-6 z-10">
                        <span className="px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center gap-1.5">
                          <Star className="w-3 h-3 fill-white animate-spin" style={{ animationDuration: '4s' }} />
                          {item.badge}
                        </span>
                      </div>

                      {/* Content Body */}
                      <div className="relative z-10">

                        {/* Degree Title with gradient */}
                        <div className="pt-4 sm:pt-0 mb-4 max-w-2xl">
                          <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            {item.role}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-700 dark:text-slate-300 font-bold text-base sm:text-lg mb-6">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/60 dark:to-purple-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <span>{item.organization}</span>
                          </span>
                          <span className="flex items-center gap-1.5 font-mono text-sm bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/60 dark:to-teal-950/60 px-3 py-1.5 rounded-xl text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </span>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
                          {item.description}
                        </p>

                        {/* Vibrant Colorful Stats Showcase Grid */}
                        {isFirst && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            
                            {/* Duration Card */}
                            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 text-white shadow-xl shadow-indigo-500/30 hover:scale-105 transition-transform group/card overflow-hidden">
                              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover/card:scale-125 transition-transform" />
                              <Rocket className="w-6 h-6 mb-2 opacity-90" />
                              <p className="text-xs font-bold uppercase tracking-wider opacity-80">Duration</p>
                              <p className="text-2xl font-black mt-1">2024 - 2028</p>
                              <p className="text-xs font-semibold opacity-80 mt-0.5">4 Year Program</p>
                            </div>

                            {/* CGPA Card */}
                            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform group/card overflow-hidden">
                              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover/card:scale-125 transition-transform" />
                              <Trophy className="w-6 h-6 mb-2 opacity-90" />
                              <p className="text-xs font-bold uppercase tracking-wider opacity-80">Academic Score</p>
                              <p className="text-2xl font-black mt-1">8.75 / 10</p>
                              <p className="text-xs font-semibold opacity-80 mt-0.5">Outstanding CGPA</p>
                            </div>

                            {/* Focus Area Card */}
                            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform group/card overflow-hidden">
                              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover/card:scale-125 transition-transform" />
                              <Brain className="w-6 h-6 mb-2 opacity-90" />
                              <p className="text-xs font-bold uppercase tracking-wider opacity-80">Specialization</p>
                              <p className="text-2xl font-black mt-1">AI & ML</p>
                              <p className="text-xs font-semibold opacity-80 mt-0.5">Deep Focus Track</p>
                            </div>

                          </div>
                        )}

                        {/* Item highlights with rainbow bullets */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="pt-6 border-t border-slate-100 dark:border-slate-700/80 space-y-3">
                            <span className="text-xs font-black uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
                              <Zap className="w-4 h-4 text-amber-500" />
                              Key Focus Areas:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {item.highlights.map((h, i) => {
                                const gradients = [
                                  'from-indigo-500 to-purple-500',
                                  'from-purple-500 to-pink-500',
                                  'from-emerald-500 to-teal-500',
                                  'from-amber-500 to-orange-500'
                                ];
                                return (
                                  <div key={h} className="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:shadow-md transition-shadow">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradients[i % gradients.length]} shrink-0 shadow`} />
                                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                                    <span>{h}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
