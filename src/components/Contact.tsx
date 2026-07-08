import React, { useState } from 'react';
import { Mail, MapPin, Send, Sparkles, CheckCircle2, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCMS } from '../context/CMSContext';

export const Contact: React.FC = () => {
  const cms = useCMS();
  const contactInfo = cms.contactInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message to portfolio backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Beautiful Celebration Confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.7 }
      });
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const GithubIcon = ({ className = "w-6 h-6" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );

  const LinkedinIcon = ({ className = "w-6 h-6" }) => (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.43a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
    </svg>
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-indigo-50/20 to-purple-50/30 dark:from-transparent dark:via-indigo-950/20 dark:to-purple-950/20 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-indigo-500 animate-bounce" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Start a Conversation
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Whether you have an exciting software project opportunity, an AI requirement, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Showcase Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all flex items-center gap-6 group hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Location</p>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {contactInfo.location}
                </h4>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Available for Remote & Relocation
                </p>
              </div>
            </div>

            {/* Email Box */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all flex items-center justify-between gap-4 group hover:-translate-y-1">
              <div className="flex items-center gap-6 overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-1 block truncate hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors shrink-0 cursor-pointer"
              >
                {copiedEmail ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Copy className="w-6 h-6" />}
              </button>
            </div>

            {/* GitHub Showcase Box */}
            <a 
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all flex items-center justify-between gap-6 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <GithubIcon />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">GitHub Portal</p>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    adithiarunmohan1407
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Explore 30+ repositories</p>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* LinkedIn Showcase Box */}
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all flex items-center justify-between gap-6 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <LinkedinIcon />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">LinkedIn Network</p>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Adithi A M
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Connect & collaborate</p>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
            </a>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-indigo-600 dark:text-indigo-400">{formData.name}</strong>. I have received your message and will reply to your email (<span className="font-mono">{formData.email}</span>) within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      Send a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="e.g. Software Engineering Career Opportunity / Tech Discussion"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Message input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your detailed inquiry or message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-base shadow-xl shadow-indigo-500/30 active:scale-98 disabled:opacity-70 transition-all cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center font-medium text-slate-400 dark:text-slate-500">
                    🔒 SSL Secure connection. Your email address will never be shared with third parties.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
