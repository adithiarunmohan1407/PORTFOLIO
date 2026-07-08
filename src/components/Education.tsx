import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const Education: React.FC = () => {
  const cms = useCMS();
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Qualifications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-emerald-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Solid foundations in computer science theory, algorithms, advanced mathematics, and highly specialized engineering disciplines.
          </p>
        </div>

        {/* Beautiful Timeline Design */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical left tracking bar */}
          <div className="absolute left-6 md:left-10 top-6 bottom-6 w-1.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-emerald-500 rounded-full opacity-70" />

          <div className="space-y-12">
            {cms.educationData.map((item, index) => {
              const isFirst = index === 0;

              return (
                <div key={item.role + item.organization + index} className="relative pl-16 md:pl-24 group">
                  
                  {/* Glowing Icon Node */}
                  <div className="absolute left-2 md:left-6 top-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-xl group-hover:scale-125 transition-transform duration-300 z-10">
                    <div className={`w-full h-full rounded-xl bg-gradient-to-tr ${
                      isFirst ? 'from-indigo-600 to-violet-600' : 'from-emerald-600 to-teal-600'
                    } text-white flex items-center justify-center`}>
                      {isFirst ? <GraduationCap className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} /> : <BookOpen className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* High Quality Card */}
                  <div className={`p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border-2 ${
                    isFirst ? 'border-indigo-500/50 shadow-indigo-500/10' : 'border-emerald-500/40 shadow-emerald-500/10'
                  } shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5 relative overflow-hidden`}>
                    
                    {/* Top Right Corner Highlight Pill */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider ${
                        isFirst ? 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300' : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Degree & Year info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 pt-4 sm:pt-0">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 font-bold text-base sm:text-lg mb-6">
                      <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                        <MapPin className="w-5 h-5 shrink-0" />
                        <span>{item.organization}</span>
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-sm bg-slate-100 dark:bg-slate-700/80 px-3 py-1 rounded-xl text-slate-700 dark:text-slate-300">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Highly prominent prompt-specific academic stats row */}
                    {isFirst && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800 mb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                            3rd
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Year</p>
                            <p className="text-xl font-extrabold text-slate-900 dark:text-white">Third Year Engineering</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                            8.75
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Academic Score</p>
                            <p className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">CGPA: 8.75 / 10</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Item highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-6 border-t border-slate-100 dark:border-slate-700/80 space-y-2.5">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-400">Key Focus Areas:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 font-semibold text-sm">
                              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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
