import React from 'react';
import { Award, FileText, Sparkles, Users, Calendar, Flag } from 'lucide-react';
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

  const colors = [
    { border: 'border-indigo-500', bg: 'from-indigo-500 to-blue-600', text: 'text-indigo-600 dark:text-indigo-400', glow: 'shadow-indigo-500/20' },
    { border: 'border-emerald-500', bg: 'from-emerald-500 to-teal-600', text: 'text-emerald-600 dark:text-emerald-400', glow: 'shadow-emerald-500/20' },
    { border: 'border-purple-500', bg: 'from-purple-500 to-pink-600', text: 'text-purple-600 dark:text-purple-400', glow: 'shadow-purple-500/20' },
    { border: 'border-amber-500', bg: 'from-amber-500 to-orange-600', text: 'text-amber-600 dark:text-amber-400', glow: 'shadow-amber-500/20' }
  ];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Extra-Curricular Excellence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Leadership & Campus Involvement
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Active contributions to major college technical committees, organizing open-source chapters, and fostering peer tech learning.
          </p>
        </div>

        {/* Elegant Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Connector line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 via-emerald-500 to-purple-500 sm:-translate-x-1/2 rounded-full opacity-60" />

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
                  
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-xl group-hover:scale-125 transition-transform duration-300 z-20">
                    <div className={`w-full h-full rounded-xl bg-gradient-to-tr ${colorStyle.bg} text-white flex items-center justify-center`}>
                      {getRoleIcon(item.role)}
                    </div>
                  </div>

                  {/* Card Box */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
                    isEven ? 'sm:pr-14 sm:text-right' : 'sm:pl-14 sm:text-left'
                  }`}>
                    
                    <div className={`p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 ${
                      colorStyle.border
                    }/40 group-hover:${colorStyle.border} shadow-xl ${colorStyle.glow} transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden`}>
                      
                      {/* Subtle Top corner color glow */}
                      <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-24 h-24 bg-gradient-to-br ${colorStyle.bg} opacity-10 rounded-full blur-xl pointer-events-none`} />

                      {/* Header bar */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-extrabold text-xs">
                          {item.organization}
                        </span>
                        {item.period && (
                          <span className="flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                        )}
                      </div>

                      {/* Main Role Title */}
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                        {item.role}
                      </h3>

                      {/* Explicit exact Description */}
                      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium">
                        {item.description}
                      </p>

                      {/* Optional extra highlight pills */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className={`mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/80 flex flex-col gap-2 ${
                          isEven ? 'sm:items-end' : 'sm:items-start'
                        }`}>
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorStyle.bg}`} />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

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
