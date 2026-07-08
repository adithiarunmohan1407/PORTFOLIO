import React from 'react';
import { Mail, ArrowUp, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

interface FooterProps {
  onOpenAdmin: () => void;
  isAdmin: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, isAdmin }) => {
  const cms = useCMS();
  const contactInfo = cms.contactInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const GithubIcon = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );

  const LinkedinIcon = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.43a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
    </svg>
  );

  return (
    <footer className="relative bg-slate-900 text-slate-100 pt-16 pb-12 border-t border-indigo-500/30 overflow-hidden">
      
      {/* Background glow orbs in footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center font-extrabold text-lg shadow-md shadow-indigo-500/25">
              A
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Adithi A M
              </h3>
              <p className="text-xs text-slate-400 font-medium">B.Tech CSE Third Year • Innovator</p>
            </div>
          </div>

          {/* Prompt exact requirement: "Designed and Developed by Adithi A M" */}
          <div className="text-center">
            <p className="text-base font-extrabold text-white flex items-center justify-center gap-2">
              <span>Designed and Developed by</span>
              <span className="text-indigo-400 underline decoration-emerald-400 font-extrabold">Adithi A M</span>
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </p>
            <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
              Constructed with React, Tailwind CSS <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" /> & Deep CSE Passion
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white transition-colors duration-200"
            >
              <GithubIcon />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white transition-colors duration-200"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="p-3 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright note, Admin Trigger and Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="text-xs font-semibold text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Adithi A M. All rights reserved. 
          </p>

          <button
            onClick={onOpenAdmin}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs transition-all cursor-pointer ${
              isAdmin 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse' 
                : 'bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isAdmin ? 'Admin Authenticated (Click to Open CMS)' : 'Admin Portal Login'}</span>
          </button>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all hover:-translate-y-1 group border border-slate-700 cursor-pointer shadow-lg"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform text-indigo-400" />
          </button>

        </div>

      </div>
    </footer>
  );
};
