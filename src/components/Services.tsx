import React, { useState } from 'react';
import { Sparkles, FileCode2, Layout, Cpu, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { ServiceItem } from '../data';
import { useCMS } from '../context/CMSContext';

export const Services: React.FC = () => {
  const cms = useCMS();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-8 h-8" />;
      case 'Layout': return <Layout className="w-8 h-8" />;
      case 'Cpu': return <Cpu className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'indigo': return {
        badge: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        gradient: 'from-blue-600 to-indigo-600',
        glow: 'hover:shadow-indigo-500/20',
        border: 'hover:border-indigo-500 dark:hover:border-indigo-400'
      };
      case 'emerald': return {
        badge: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        gradient: 'from-emerald-500 to-teal-600',
        glow: 'hover:shadow-emerald-500/20',
        border: 'hover:border-emerald-500 dark:hover:border-emerald-400'
      };
      case 'violet': return {
        badge: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
        gradient: 'from-purple-600 to-pink-600',
        glow: 'hover:shadow-purple-500/20',
        border: 'hover:border-purple-500 dark:hover:border-purple-400'
      };
      default: return {
        badge: 'bg-indigo-50 text-indigo-600 border-indigo-200',
        gradient: 'from-indigo-500 to-purple-600',
        glow: 'hover:shadow-indigo-500/20',
        border: 'hover:border-indigo-500'
      };
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>How I Can Add Value</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Services & Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-emerald-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Delivering clean, robust software solutions leveraging modern development stacks and artificial intelligence techniques.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cms.servicesData.map((service) => {
            const styles = getColorClasses(service.color);
            return (
              <div 
                key={service.id}
                className={`flex flex-col justify-between p-10 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xl ${styles.glow} ${styles.border} transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden`}
              >
                {/* Top Corner Decorative Gradient Splash */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${styles.gradient} opacity-10 rounded-bl-full group-hover:scale-125 transition-transform`} />

                <div>
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${styles.gradient} text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-8 group-hover:rotate-6 transition-transform`}>
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title & Exact Description */}
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Quick Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`text-xs font-bold px-3 py-1.5 rounded-xl border ${styles.badge}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trigger Button to Open Detailed Breakdown */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white font-bold text-sm transition-all group-hover:shadow-md cursor-pointer text-slate-800 dark:text-slate-200"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive modal for deeper service breakdown */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95 duration-200">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  Premium Quality Workflow
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
              {selectedService.description}
            </p>

            {/* Deliverables List */}
            <div className="space-y-4 mb-10">
              <h4 className="font-extrabold text-base uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Deliverables & Features:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {selectedService.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-base shadow-lg shadow-indigo-500/30 text-center cursor-pointer"
              >
                Inquire About This Service
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-base text-center cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
