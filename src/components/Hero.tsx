import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Sparkles, Terminal, FileCode2, Cpu } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const Hero: React.FC = () => {
  const cms = useCMS();
  const heroData = cms.heroData;

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titlesList = heroData.titles || [
    "Python Developer", "Web Developer", "AI Enthusiast", "Computer Science Student", "Future Software Engineer"
  ];
  const fullTitle = titlesList[currentTitleIndex % titlesList.length] || "Python Developer";

  // Typing Effect implementation
  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100;
    const delayAfterType = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullTitle.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullTitle.length) {
          setTimeout(() => setIsDeleting(true), delayAfterType);
        }
      } else {
        setDisplayedText(fullTitle.substring(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titlesList.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullTitle, titlesList]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Colorful Gradient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-float pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-3xl animate-float-delayed pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-600/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Elegant Welcome Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 border border-indigo-200/80 dark:border-indigo-800/80 shadow-sm animate-bounce">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-amber-400" />
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Welcome to my digital portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  {heroData.name || "Adithi A M"}
                </span>
              </h1>
            </div>

            {/* Typing Animation Row */}
            <div className="h-10 sm:h-14 flex items-center">
              <div className="flex items-center gap-2 text-xl sm:text-3xl font-bold font-mono bg-slate-900 dark:bg-slate-900/90 text-white px-4 py-2 rounded-xl shadow-lg border border-slate-700">
                <Terminal className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-emerald-400">&gt;</span>
                <span className="text-amber-300 tracking-wide">{displayedText}</span>
                <span className="w-2.5 h-7 bg-indigo-500 animate-blink" />
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal max-w-2xl bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm backdrop-blur-sm whitespace-pre-line">
              "{heroData.introduction}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Exactly As Prompted */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                {/* GitHub Custom SVG */}
                <a
                  href={cms.contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white border border-slate-200/80 dark:border-slate-700 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {/* LinkedIn Custom SVG */}
                <a
                  href={cms.contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white border border-slate-200/80 dark:border-slate-700 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.43a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                  </svg>
                </a>
                {/* Email Lucide Icon */}
                <a
                  href={`mailto:${cms.contactInfo.email}`}
                  aria-label="Email Address"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white border border-slate-200/80 dark:border-slate-700 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Profile Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">
            {/* Ambient Background Behind Avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-emerald-500 rounded-3xl rotate-3 blur-xl opacity-30 animate-pulse" />

            {/* Profile Avatar Card Container */}
            <div className="relative w-72 sm:w-88 lg:w-96 aspect-square rounded-3xl p-3 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center">
                {/* Subtle dot pattern behind image */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Professional Profile Photo of Adithi A M */}
                <img 
                  src="C:\Users\User\Desktop\portfolio\public\images\adithi.jpg" 
                  alt="Adithi A M - Computer Science Engineering Student"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                />

                {/* Elegant bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-bold tracking-wider uppercase text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Open to Work
                    </p>
                    <p className="text-xs text-slate-200 font-medium">Seeking impactful Software Engineering opportunities</p>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badge 1: Python */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 animate-float">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileCode2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">Python Dev</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">95% Expertise</p>
                </div>
              </div>

              {/* Floating Technology Badge 2: AI & ML */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">AI & Machine Learning</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Innovative Models</p>
                </div>
              </div>

              {/* Floating Technology Badge 3: CGPA Badge */}
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-gradient-to-br from-amber-500 to-orange-600 text-white p-3 rounded-2xl shadow-lg font-bold flex flex-col items-center justify-center shadow-amber-500/20">
                <span className="text-xs uppercase tracking-wider opacity-90">CGPA</span>
                <span className="text-lg">8.75</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
