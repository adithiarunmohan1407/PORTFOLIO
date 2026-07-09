import React, { useState, useEffect } from 'react';
import { Sparkles, FileCode2, Layout, Cpu, CheckCircle2, ArrowRight, X, ArrowLeft } from 'lucide-react';
import { ServiceItem } from '../data';
import { useCMS } from '../context/CMSContext';

export const Services: React.FC = () => {
  const cms = useCMS();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const closeServiceModal = () => setSelectedService(null);

  // ESC key & body scroll lock
  useEffect(() => {
    if (!selectedService) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeServiceModal();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedService]);

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
        badge: 'bg-white/70 dark:bg-slate-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700',
        gradient: 'from-blue-600 via-indigo-600 to-purple-600',
        glow: 'hover:shadow-indigo-500/40',
        border: 'border-indigo-400 dark:border-indigo-600 hover:border-indigo-500',
        cardBg: 'from-indigo-50 via-blue-50 to-cyan-50 dark:from-indigo-950/60 dark:via-blue-950/50 dark:to-cyan-950/60',
        titleGrad: 'from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400'
      };
      case 'emerald': return {
        badge: 'bg-white/70 dark:bg-slate-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        glow: 'hover:shadow-emerald-500/40',
        border: 'border-emerald-400 dark:border-emerald-600 hover:border-emerald-500',
        cardBg: 'from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/60 dark:via-teal-950/50 dark:to-green-950/60',
        titleGrad: 'from-emerald-600 via-teal-600 to-green-600 dark:from-emerald-400 dark:via-teal-400 dark:to-green-400'
      };
      case 'violet': return {
        badge: 'bg-white/70 dark:bg-slate-900/40 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700',
        gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
        glow: 'hover:shadow-purple-500/40',
        border: 'border-purple-400 dark:border-purple-600 hover:border-purple-500',
        cardBg: 'from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/60 dark:via-fuchsia-950/50 dark:to-pink-950/60',
        titleGrad: 'from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400'
      };
      default: return {
        badge: 'bg-indigo-50 text-indigo-600 border-indigo-200',
        gradient: 'from-indigo-500 to-purple-600',
        glow: 'hover:shadow-indigo-500/20',
        border: 'hover:border-indigo-500',
        cardBg: 'from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40',
        titleGrad: 'from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400'
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
                className={`flex flex-col justify-between p-10 rounded-3xl bg-gradient-to-br ${styles.cardBg} border-2 ${styles.border} shadow-xl ${styles.glow} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden`}
              >
                {/* Top Corner Decorative Gradient Splash */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${styles.gradient} opacity-20 rounded-bl-full group-hover:scale-125 transition-transform blur-2xl`} />
                <div className={`absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr ${styles.gradient} opacity-15 rounded-full blur-2xl group-hover:scale-125 transition-transform`} />

                <div className="relative z-10">
                  {/* Icon Box with glowing halo */}
                  <div className="relative w-16 h-16 mb-8">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${styles.gradient} blur-md opacity-60 animate-pulse`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-tr ${styles.gradient} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title with gradient */}
                  <h3 className={`text-2xl font-extrabold tracking-tight mb-4 bg-gradient-to-r ${styles.titleGrad} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-8 font-medium">
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

                {/* Trigger Button with vibrant gradient */}
                <div className="pt-6 border-t-2 border-dashed border-white/60 dark:border-slate-700 relative z-10">
                  <button
                    onClick={() => setSelectedService(service)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r ${styles.gradient} text-white font-bold text-sm hover:shadow-lg transition-all cursor-pointer group-hover:scale-[1.02] active:scale-95`}
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
        <div 
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={closeServiceModal}
        >
          {/* Persistent floating Back to Portfolio button */}
          <button
            onClick={closeServiceModal}
            aria-label="Return back to portfolio"
            className="fixed top-4 sm:top-6 left-4 sm:left-6 z-[60] flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-indigo-500/50 border-2 border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div 
            className="relative w-full max-w-2xl p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95 duration-200 my-8 mt-16 sm:mt-8"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close button */}
            <button
              onClick={closeServiceModal}
              title="Close & return to portfolio"
              className="absolute top-6 right-6 p-2 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer border border-rose-200 dark:border-rose-800"
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
                onClick={closeServiceModal}
                className="w-full sm:flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-base shadow-lg shadow-indigo-500/30 text-center cursor-pointer active:scale-95 transition-all"
              >
                Inquire About This Service
              </a>
              <button
                onClick={closeServiceModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-base text-center cursor-pointer active:scale-95 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Portfolio</span>
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4 font-medium">
              💡 Press <kbd className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[10px] border border-slate-200 dark:border-slate-700">Esc</kbd> or click outside to return
            </p>

          </div>
        </div>
      )}

    </section>
  );
};
