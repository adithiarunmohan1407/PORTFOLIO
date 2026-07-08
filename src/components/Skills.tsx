import React, { useState } from 'react';
import { Sparkles, Code2, Globe, Database, Wrench, Users, Check, Flame } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const Skills: React.FC = () => {
  const cms = useCMS();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon selector mapping
  const renderCategoryIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Users': return <Users {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const filteredCategories = cms.skillCategories.filter((cat) => {
    if (activeCategoryFilter !== 'All' && cat.title !== activeCategoryFilter) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const matchCat = cat.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchSkill = cat.skills.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat || matchSkill;
    }
    return true;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Competencies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            A comprehensive overview of my programming expertise, web architectures, databases, and professional interpersonal proficiencies.
          </p>
        </div>

        {/* Technical Top Indicators */}
        <div className="mb-20">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            <span>Core Technical Expertise</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {cms.technicalIndicators.map((indicator) => {
              return (
                <div 
                  key={indicator.name}
                  className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  {/* Beautiful CSS Circular representation */}
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200 dark:text-slate-700"
                        strokeWidth="3.2"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="transition-all duration-1000 ease-out group-hover:scale-105"
                        strokeDasharray={`${indicator.level}, 100`}
                        strokeWidth="3.2"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        stroke={indicator.color}
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-slate-900 dark:text-white">
                        {indicator.level}%
                      </span>
                    </div>
                  </div>

                  <p className="font-extrabold text-sm text-slate-800 dark:text-slate-200 text-center mt-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {indicator.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactivity: Category filter pills & live search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white/80 dark:bg-slate-800/80 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['All', ...cms.skillCategories.map(c => c.title)].map((catName) => {
              const isActive = activeCategoryFilter === catName;
              return (
                <button
                  key={catName}
                  onClick={() => setActiveCategoryFilter(catName)}
                  className={`px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search skills (e.g. Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        {/* Display Modern Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            return (
              <div
                key={category.title}
                className="flex flex-col p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${category.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {renderCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {category.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                      {category.skills.length} Capabilities verified
                    </p>
                  </div>
                </div>

                {/* List of individual skills with animated progress bars */}
                <div className="space-y-6 flex-grow">
                  {category.skills.map((skill) => {
                    return (
                      <div key={skill.name} className="space-y-2">
                        
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-base text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            {skill.highlight && (
                              <Flame className="w-4 h-4 text-amber-500 animate-pulse fill-amber-500" />
                            )}
                            <span>{skill.name}</span>
                          </span>
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Animated gradient progress bar */}
                        <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden p-0.5">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Verified footer mark */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>Adithi A M Stack</span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5" /> High Proficiency
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
