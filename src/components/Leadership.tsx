import React from 'react';
import { Award, FileText, Sparkles, Users, Calendar, Flag, Star, Zap } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const Leadership: React.FC = () => {
  const cms = useCMS();
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Documentation Head': return <FileText className="w-5 h-5" />;
      case 'Content Lead': return <Sparkles className="w-5 h-5" />;
      case 'Events & Activities Coordinator': return <Flag className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  // Rich vibrant color themes for each leadership entry
  const colors = [
    { 
      bg: 'from-indigo-500 via-blue-500 to-cyan-500',
      cardBg: 'from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40',
      border: 'border-indigo-400 dark:border-indigo-600',
      glow: 'shadow-indigo-500/30',
      accent: 'text-indigo-600 dark:text-indigo-400',
      pill: 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300'
    },
    { 
      bg: 'from-emerald-500 via-teal-500 to-green-500',
      cardBg: 'from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40',
      border: 'border-emerald-400 dark:border-emerald-600',
      glow: 'shadow-emerald-500/30',
      accent: 'text-emerald-600 dark:text-emerald-400',
      pill: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
    },
    { 
      bg: 'from-purple-500 via-fuchsia-500 to-pink-500',
      cardBg: 'from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/40',
      border: 'border-purple-400 dark:border-purple-600',
      glow: 'shadow-purple-500/30',
      accent: 'text-purple-600 dark:text-purple-400',
      pill: 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
    },
    { 
      bg: 'from-amber-500 via-orange-500 to-red-500',
      cardBg: 'from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40',
      border: 'border-amber-400 dark:border-amber-600',
      glow: 'shadow-amber-500/30',
      accent: 'text-amber-600 dark:text-amber-400',
      pill: 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300'
    }
  ];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-amber-50/20 to-rose-50/30 dark:from-transparent dark:via-amber-950/10 dark:to-rose-950/20 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      
      {/* Vibrant Colorful Glow Orbs */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-rose-500/15 dark:bg-rose-500/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-500/20 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 text-sm font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Extra-Curricular Excellence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Leadership & <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 dark:from-amber-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">Campus Involvement</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Active contributions to major college technical committees, organizing open-source chapters, and fostering peer tech learning.
          </p>
        </div>

        {/* Elegant Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Colorful Connector line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 via-emerald-500 via-purple-500 to-amber-500 sm:-translate-x-1/2 rounded-full opacity-70 shadow-lg shadow-purple-500/30" />

          <div className="space-y-12 relative z-10">
            {cms.leadershipData.map((item, index) => {
              const colorStyle = colors[index % colors.length];
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.role + item.organization + index}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  
                  {/* Timeline Center Node Badge with glowing halo */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 shadow-2xl group-hover:scale-125 transition-transform duration-300 z-20">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${colorStyle.bg} blur-md opacity-60 animate-pulse`} />
                    <div className={`relative w-full h-full rounded-xl bg-gradient-to-tr ${colorStyle.bg} text-white flex items-center justify-center shadow-inner`}>
                      {getRoleIcon(item.role)}
                    </div>
                  </div>

                  {/* Vibrant Colorful Card Box */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
                    isEven ? 'sm:pr-14 sm:text-right' : 'sm:pl-14 sm:text-left'
                  }`}>
                    
                    {/* Gradient border wrapper for vibrant edge */}
                    <div className={`relative p-1 rounded-3xl bg-gradient-to-tr ${colorStyle.bg} shadow-xl ${colorStyle.glow} group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5`}>
                      
                      <div className={`p-8 rounded-[calc(1.5rem-4px)] bg-gradient-to-br ${colorStyle.cardBg} relative overflow-hidden`}>
                      
                        {/* Colorful decorative gradient orbs */}
                        <div className={`absolute -top-16 ${isEven ? '-left-16' : '-right-16'} w-40 h-40 bg-gradient-to-br ${colorStyle.bg} opacity-20 rounded-full blur-2xl pointer-events-none`} />
                        <div className={`absolute -bottom-16 ${isEven ? '-right-16' : '-left-16'} w-40 h-40 bg-gradient-to-br ${colorStyle.bg} opacity-15 rounded-full blur-2xl pointer-events-none`} />

                        <div className="relative z-10">

                          {/* Header bar */}
                          <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                            isEven ? 'sm:justify-end' : 'sm:justify-start'
                          }`}>
                            <span className={`px-3 py-1 rounded-full font-extrabold text-xs ${colorStyle.pill} shadow-sm`}>
                              {item.organization}
                            </span>
                            {item.period && (
                              <span className={`flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 ${colorStyle.accent} border ${colorStyle.border} font-bold shadow-sm`}>
                                <Calendar className="w-3.5 h-3.5" />
                                {item.period}
                              </span>
                            )}
                            {index === 0 && (
                              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs shadow-lg animate-pulse">
                                <Star className="w-3 h-3 fill-white" />
                                Top Role
                              </span>
                            )}
                          </div>

                          {/* Main Role Title with color accent */}
                          <h3 className={`text-2xl font-black tracking-tight mb-2 bg-gradient-to-r ${colorStyle.bg} bg-clip-text text-transparent`}>
                            {item.role}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-medium">
                            {item.description}
                          </p>

                          {/* Highlight list with colorful bullets */}
                          {item.highlights && item.highlights.length > 0 && (
                            <div className={`mt-6 pt-4 border-t-2 border-dashed ${colorStyle.border} space-y-2 ${
                              isEven ? 'sm:text-right' : 'sm:text-left'
                            }`}>
                              <span className={`text-[10px] font-black uppercase tracking-widest ${colorStyle.accent} flex items-center gap-1 ${
                                isEven ? 'sm:justify-end' : 'sm:justify-start'
                              }`}>
                                <Zap className="w-3 h-3" />
                                Key Impact
                              </span>
                              {item.highlights.map((h) => (
                                <div key={h} className={`flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 ${
                                  isEven ? 'sm:justify-end sm:flex-row-reverse' : ''
                                }`}>
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorStyle.bg} shrink-0 mt-1.5 shadow`} />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}

                        </div>
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
