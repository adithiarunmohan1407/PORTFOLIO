import React, { useState } from 'react';
import { 
  ShieldAlert, ShieldCheck, Key, LogOut, Plus, Trash2, Edit3, Save, RotateCcw, 
  Download, X, Layers, Award, GraduationCap, Flame, Settings
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { Project, TimelineItem } from '../data';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ isOpen, onClose }) => {
  const cms = useCMS();
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'projects' | 'skills' | 'leadership' | 'education' | 'services' | 'backup'>('projects');
  const [toast, setToast] = useState<string | null>(null);

  // Form states for adding/editing items
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProjectForm, setNewProjectForm] = useState<Partial<Project>>({
    title: '', subtitle: '', description: '', extendedDescription: '', technologies: [], category: 'AI / ML', image: '', githubUrl: '', liveUrl: '', color: 'from-indigo-500 to-blue-600'
  });
  const [techInput, setTechInput] = useState('');
  const [keyFeaturesInput, setKeyFeaturesInput] = useState('');

  // Skills form
  const [selectedSkillCat, setSelectedSkillCat] = useState<string>(cms.skillCategories[0]?.title || 'Programming Languages');
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(85);
  const [newSkillHighlight, setNewSkillHighlight] = useState(false);

  // Timeline (Leadership & Education)
  const [editingTimeline, setEditingTimeline] = useState<{ index: number; type: 'leadership' | 'education'; item: TimelineItem } | null>(null);
  const [timelineForm, setTimelineForm] = useState<Partial<TimelineItem>>({
    role: '', organization: '', period: '', description: '', highlights: [], category: 'Leadership', badge: ''
  });
  const [timelineHighlightsInput, setTimelineHighlightsInput] = useState('');

  // General Settings Form
  const [heroIntro, setHeroIntro] = useState(cms.heroData.introduction);
  const [contactLocation, setContactLocation] = useState(cms.contactInfo.location);
  const [contactEmail, setContactEmail] = useState(cms.contactInfo.email);
  const [contactGithub, setContactGithub] = useState(cms.contactInfo.github);
  const [contactLinkedin, setContactLinkedin] = useState(cms.contactInfo.linkedin);

  // Import JSON form
  const [importJsonText, setImportJsonText] = useState('');

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (cms.login(passcode)) {
      setLoginError(false);
      showToast('Admin successfully authenticated!');
    } else {
      setLoginError(true);
    }
  };

  // Projects Handlers
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectForm.title || !newProjectForm.description) return;

    const finalTechnologies = techInput ? techInput.split(',').map(t => t.trim()).filter(Boolean) : (newProjectForm.technologies || []);
    const finalFeatures = keyFeaturesInput ? keyFeaturesInput.split('\n').map(f => f.trim()).filter(Boolean) : (newProjectForm.keyFeatures || []);

    const projectPayload: Project = {
      id: editingProject ? editingProject.id : 'proj_' + Date.now(),
      title: newProjectForm.title || '',
      subtitle: newProjectForm.subtitle || '',
      description: newProjectForm.description || '',
      extendedDescription: newProjectForm.extendedDescription,
      technologies: finalTechnologies.length > 0 ? finalTechnologies : ['Python', 'Web'],
      keyFeatures: finalFeatures.length > 0 ? finalFeatures : undefined,
      category: newProjectForm.category as 'AI / ML' | 'Web App' | 'Full Stack',
      image: newProjectForm.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      color: newProjectForm.color || 'from-indigo-500 to-blue-600',
      githubUrl: newProjectForm.githubUrl || cms.contactInfo.github,
      liveUrl: newProjectForm.liveUrl
    };

    if (editingProject) {
      cms.updateProject(projectPayload);
      showToast('Project updated successfully!');
    } else {
      cms.addProject(projectPayload);
      showToast('New project created successfully!');
    }

    setEditingProject(null);
    setNewProjectForm({ title: '', subtitle: '', description: '', extendedDescription: '', technologies: [], category: 'AI / ML', image: '', githubUrl: '', liveUrl: '' });
    setTechInput('');
    setKeyFeaturesInput('');
  };

  const startEditProject = (proj: Project) => {
    setEditingProject(proj);
    setNewProjectForm(proj);
    setTechInput(proj.technologies.join(', '));
    setKeyFeaturesInput(proj.keyFeatures ? proj.keyFeatures.join('\n') : '');
  };

  // Skills Handlers
  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    cms.addSkillToCategory(selectedSkillCat, {
      name: newSkillName.trim(),
      level: Number(newSkillLevel),
      highlight: newSkillHighlight
    });
    showToast(`Added ${newSkillName} to ${selectedSkillCat}`);
    setNewSkillName('');
    setNewSkillLevel(85);
    setNewSkillHighlight(false);
  };

  // Timeline (Leadership & Education) Handlers
  const handleSaveTimelineItem = (e: React.FormEvent, type: 'leadership' | 'education') => {
    e.preventDefault();
    if (!timelineForm.role || !timelineForm.organization) return;

    const highlightsArr = timelineHighlightsInput ? timelineHighlightsInput.split('\n').map(h => h.trim()).filter(Boolean) : (timelineForm.highlights || []);

    const payload: TimelineItem = {
      role: timelineForm.role || '',
      organization: timelineForm.organization || '',
      period: timelineForm.period || '2025 - Present',
      description: timelineForm.description || '',
      highlights: highlightsArr.length > 0 ? highlightsArr : undefined,
      category: type === 'leadership' ? 'Leadership' : 'Education',
      badge: timelineForm.badge || (type === 'leadership' ? 'Leadership' : 'Distinction')
    };

    if (editingTimeline) {
      if (type === 'leadership') cms.updateLeadershipItem(editingTimeline.index, payload);
      if (type === 'education') cms.updateEducationItem(editingTimeline.index, payload);
      showToast('Item updated successfully!');
    } else {
      if (type === 'leadership') cms.addLeadershipItem(payload);
      if (type === 'education') cms.addEducationItem(payload);
      showToast('New item added successfully!');
    }

    setEditingTimeline(null);
    setTimelineForm({ role: '', organization: '', period: '', description: '', highlights: [], category: type === 'leadership' ? 'Leadership' : 'Education', badge: '' });
    setTimelineHighlightsInput('');
  };

  const startEditTimeline = (index: number, type: 'leadership' | 'education', item: TimelineItem) => {
    setEditingTimeline({ index, type, item });
    setTimelineForm(item);
    setTimelineHighlightsInput(item.highlights ? item.highlights.join('\n') : '');
  };

  // General Save
  const handleSaveGeneral = () => {
    cms.updateHeroData({ ...cms.heroData, introduction: heroIntro });
    cms.updateContactInfo({ ...cms.contactInfo, location: contactLocation, email: contactEmail, github: contactGithub, linkedin: contactLinkedin });
    showToast('General configuration saved successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto selection:bg-emerald-500 selection:text-slate-900">
      
      {/* Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl my-6 flex flex-col max-h-[92vh] overflow-hidden text-slate-800 dark:text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-5 bg-slate-100 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white flex items-center justify-center shadow">
              <Settings className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Adithi A M • CMS Admin Terminal</span>
                {cms.isAdmin && (
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Authenticated Mode
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Add or edit projects, skills, and experiences effortlessly instantly without editing code.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cms.isAdmin && (
              <button
                onClick={cms.logout}
                title="Sign out of Admin Session"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Lock CMS</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-grow overflow-y-auto flex flex-col relative">
          
          {!cms.isAdmin ? (
            /* Login View */
            <div className="p-8 sm:p-16 flex-grow flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Key className="w-10 h-10 animate-bounce" />
              </div>
              <div className="space-y-2 max-w-md">
                <h4 className="text-3xl font-extrabold text-slate-900 dark:text-white">Admin Authentication Required</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Please enter the authorized administrative passcode to proceed.
                </p>
              </div>

              <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Enter admin passcode..."
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                    autoFocus
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-center text-lg tracking-wider border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                {loginError && (
                  <p className="text-xs text-rose-500 font-semibold flex items-center justify-center gap-1 animate-shake">
                    <ShieldAlert className="w-4 h-4" /> Passcode incorrect. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm shadow-lg shadow-indigo-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  Authorize Admin Login
                </button>
              </form>
            </div>
          ) : (
            /* CMS Authenticated Dashboard Layout */
            <div className="flex flex-col md:flex-row flex-grow">
              
              {/* CMS Sidebar Navigation */}
              <div className="w-full md:w-64 bg-slate-50 dark:bg-slate-950/50 p-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-row md:flex-col gap-1 overflow-x-auto shrink-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1 hidden md:block">Management Modules</span>
                
                {[
                  { id: 'projects', label: 'Projects Catalog', icon: Layers },
                  { id: 'skills', label: 'Technical Skills', icon: Flame },
                  { id: 'leadership', label: 'Leadership Timeline', icon: Award },
                  { id: 'education', label: 'Education Timeline', icon: GraduationCap },
                  { id: 'general', label: 'General Texts', icon: Settings },
                  { id: 'backup', label: 'Export & Backup', icon: Download }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as any);
                        setEditingProject(null);
                        setEditingTimeline(null);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-left whitespace-nowrap cursor-pointer ${
                        isActive 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Tab Area */}
              <div className="flex-grow p-6 sm:p-8 overflow-y-auto max-w-4xl space-y-8">
                
                {/* 1. Projects CMS Tab */}
                {activeTab === 'projects' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">Manage Featured Projects</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Instantly append new web / AI creations or update screenshots & documentation.</p>
                      </div>
                      <button
                        onClick={() => {
                          setEditingProject(null);
                          setNewProjectForm({ title: '', subtitle: '', description: '', technologies: [], category: 'AI / ML', image: '', githubUrl: '' });
                          setTechInput('');
                          setKeyFeaturesInput('');
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow transition-all cursor-pointer self-stretch sm:self-auto text-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Project Form</span>
                      </button>
                    </div>

                    {/* Add / Edit Project Form Box */}
                    <form onSubmit={handleSaveProject} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4 shadow-sm">
                      <h5 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Edit3 className="w-4 h-4 text-indigo-500" />
                        <span>{editingProject ? `Editing: ${editingProject.title}` : 'Construct New Project Entry'}</span>
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Project Title *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. DocuSynth AI"
                            value={newProjectForm.title} 
                            onChange={e => setNewProjectForm({...newProjectForm, title: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-bold border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Subtitle / Tagline *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Intelligent Document Processing"
                            value={newProjectForm.subtitle} 
                            onChange={e => setNewProjectForm({...newProjectForm, subtitle: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-medium border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Category</label>
                          <select 
                            value={newProjectForm.category} 
                            onChange={e => setNewProjectForm({...newProjectForm, category: e.target.value as any})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-black border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="AI / ML">AI / ML</option>
                            <option value="Full Stack">Full Stack</option>
                            <option value="Web App">Web App</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Technologies CSV (Comma separated)</label>
                          <input 
                            type="text" 
                            placeholder="Python, Django, FastAPI, PostgreSQL"
                            value={techInput} 
                            onChange={e => setTechInput(e.target.value)} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-mono border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Image URL (Unsplash or direct placeholder)</label>
                          <input 
                            type="url" 
                            placeholder="https://images.unsplash.com/..."
                            value={newProjectForm.image} 
                            onChange={e => setNewProjectForm({...newProjectForm, image: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-mono text-xs border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">GitHub Repo URL</label>
                          <input 
                            type="url" 
                            placeholder="https://github.com/..."
                            value={newProjectForm.githubUrl} 
                            onChange={e => setNewProjectForm({...newProjectForm, githubUrl: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-mono text-xs border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Live Web Link (Optional)</label>
                          <input 
                            type="url" 
                            placeholder="https://..."
                            value={newProjectForm.liveUrl || ''} 
                            onChange={e => setNewProjectForm({...newProjectForm, liveUrl: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-mono text-xs border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Brief Summary Description *</label>
                        <textarea 
                          rows={3} 
                          required 
                          placeholder="Provide the core problem statement and solution summary..."
                          value={newProjectForm.description} 
                          onChange={e => setNewProjectForm({...newProjectForm, description: e.target.value})} 
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-medium border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Architectural Features (One per line for deep-dive modal)</label>
                        <textarea 
                          rows={3} 
                          placeholder="Intelligent NLP search and ranking logic&#10;Role-based zero trust architecture&#10;High-speed caching with SQLite"
                          value={keyFeaturesInput} 
                          onChange={e => setKeyFeaturesInput(e.target.value)} 
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm border font-medium border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div className="flex justify-end gap-3 pt-2">
                        {editingProject && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingProject(null);
                              setNewProjectForm({ title: '', subtitle: '', description: '', technologies: [], category: 'AI / ML', image: '', githubUrl: '' });
                            }}
                            className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 font-bold text-xs cursor-pointer hover:bg-slate-300"
                          >
                            Cancel Edit
                          </button>
                        )}
                        <button
                          type="submit"
                          className="flex items-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow cursor-pointer active:scale-95 transition-all"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingProject ? 'Commit Project Changes' : 'Append Project to Live Site'}</span>
                        </button>
                      </div>
                    </form>

                    {/* Existing Projects List */}
                    <div className="space-y-4">
                      <h5 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Current Projects in Portfolio ({cms.projectsData.length})</h5>
                      <div className="grid grid-cols-1 gap-4">
                        {cms.projectsData.map((proj) => (
                          <div key={proj.id} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <img src={proj.image} alt={proj.title} className="w-16 h-16 rounded-xl object-cover shrink-0 bg-slate-900" />
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-slate-700 text-[10px] font-black text-indigo-600 dark:text-indigo-400">{proj.category}</span>
                                  <h6 className="font-extrabold text-base text-slate-900 dark:text-white">{proj.title}</h6>
                                </div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{proj.subtitle} • {proj.technologies.join(', ')}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                              <button
                                onClick={() => startEditProject(proj)}
                                title="Edit this project"
                                className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold transition-colors cursor-pointer"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Are you sure you want to delete ${proj.title}?`)) {
                                    cms.deleteProject(proj.id);
                                    showToast('Project deleted.');
                                  }
                                }}
                                title="Delete this project"
                                className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white font-bold transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* 2. Skills CMS Tab */}
                {activeTab === 'skills' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">Technical Capabilities Manager</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Append new acquired frameworks or raise percentage proficiencies instantly.</p>
                    </div>

                    {/* Add Skill Form */}
                    <form onSubmit={handleAddSkill} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
                      <h5 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-amber-500" />
                        <span>Add Verification Entry to Stack</span>
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Select Skill Category *</label>
                          <select
                            value={selectedSkillCat}
                            onChange={e => setSelectedSkillCat(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {cms.skillCategories.map(c => (
                              <option key={c.title} value={c.title}>{c.title}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Skill Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Next.js / TensorFlow"
                            value={newSkillName}
                            onChange={e => setNewSkillName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Percentage Proficiency: {newSkillLevel}%</label>
                          <div className="flex items-center gap-3 pt-1">
                            <input
                              type="range"
                              min="10"
                              max="100"
                              value={newSkillLevel}
                              onChange={e => setNewSkillLevel(Number(e.target.value))}
                              className="w-full accent-indigo-500"
                            />
                            <span className="font-black text-sm w-8">{newSkillLevel}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newSkillHighlight}
                            onChange={e => setNewSkillHighlight(e.target.checked)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="text-xs font-bold flex items-center gap-1">
                            <Flame className="w-3.5 h-3.5 text-amber-500" /> Flag as Hot / Core Skill
                          </span>
                        </label>

                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow active:scale-95 transition-all cursor-pointer"
                        >
                          Confirm & Inject Skill
                        </button>
                      </div>
                    </form>

                    {/* Skill List Editable overview */}
                    <div className="space-y-6">
                      {cms.skillCategories.map((category) => (
                        <div key={category.title} className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                          <div className="flex items-center justify-between">
                            <h6 className="font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                              <span>{category.title}</span>
                              <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-full">{category.skills.length}</span>
                            </h6>
                          </div>

                          <div className="flex flex-wrap gap-2.5">
                            {category.skills.map(skill => (
                              <div key={skill.name} className="flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold group">
                                {skill.highlight && <Flame className="w-3.5 h-3.5 text-amber-500" />}
                                <span>{skill.name}</span>
                                <span className="text-[10px] font-black px-1.5 py-0.5 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded">{skill.level}%</span>
                                
                                <button
                                  onClick={() => {
                                    cms.deleteSkillFromCategory(category.title, skill.name);
                                    showToast(`Removed ${skill.name}`);
                                  }}
                                  title="Delete this skill"
                                  className="p-1 rounded hover:bg-rose-500 hover:text-white text-slate-400 transition-colors cursor-pointer"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* 3. Leadership Timeline CMS Tab */}
                {activeTab === 'leadership' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">Leadership & Club Roles</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Append new collegiate club milestones and extracurricular impact responsibilities.</p>
                      </div>
                      <button
                        onClick={() => {
                          setEditingTimeline(null);
                          setTimelineForm({ role: '', organization: '', period: '', description: '', highlights: [], category: 'Leadership', badge: 'Leadership' });
                          setTimelineHighlightsInput('');
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Leadership Event</span>
                      </button>
                    </div>

                    {/* Timeline Event Form */}
                    <form onSubmit={e => handleSaveTimelineItem(e, 'leadership')} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
                      <h5 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-indigo-500" />
                        <span>{editingTimeline ? 'Editing Leadership Event' : 'New Leadership Milestone'}</span>
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Role / Position *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Technical Chairperson"
                            value={timelineForm.role} 
                            onChange={e => setTimelineForm({...timelineForm, role: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Club / Organization *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. IEEE Student Branch"
                            value={timelineForm.organization} 
                            onChange={e => setTimelineForm({...timelineForm, organization: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Period / Time Span</label>
                          <input 
                            type="text" 
                            placeholder="2025 - Present"
                            value={timelineForm.period} 
                            onChange={e => setTimelineForm({...timelineForm, period: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-mono border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Detailed Contribution Description *</label>
                        <textarea 
                          rows={3} 
                          required 
                          placeholder="Describe your active managerial impact, organized workshops, or technical documents archived..."
                          value={timelineForm.description} 
                          onChange={e => setTimelineForm({...timelineForm, description: e.target.value})} 
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Key Impact Highlights (One per line)</label>
                        <textarea 
                          rows={3} 
                          placeholder="Organized hackathon for 150+ students&#10;Mentored junior cohort in clean Python practices"
                          value={timelineHighlightsInput} 
                          onChange={e => setTimelineHighlightsInput(e.target.value)} 
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div className="flex justify-end gap-3 pt-2">
                        {editingTimeline && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingTimeline(null);
                              setTimelineForm({ role: '', organization: '', period: '', description: '', highlights: [] });
                            }}
                            className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 font-bold text-xs cursor-pointer hover:bg-slate-300"
                          >
                            Cancel Edit
                          </button>
                        )}
                        <button
                          type="submit"
                          className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow cursor-pointer active:scale-95 transition-all"
                        >
                          Commit Leadership Event
                        </button>
                      </div>
                    </form>

                    {/* Overview of current Leadership events */}
                    <div className="space-y-4">
                      {cms.leadershipData.map((item, index) => (
                        <div key={item.role + index} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 font-black text-base">
                              <span className="text-indigo-600 dark:text-indigo-400">{item.organization}</span>
                              <span>•</span>
                              <span>{item.role}</span>
                              <span className="text-xs font-mono font-medium text-slate-400">({item.period})</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">{item.description}</p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => startEditTimeline(index, 'leadership', item)}
                              className="p-2 rounded-xl bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('Remove this event?')) cms.deleteLeadershipItem(index);
                              }}
                              className="p-2 rounded-xl bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-300 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* 4. Education Timeline CMS Tab */}
                {activeTab === 'education' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">Academic Qualifications Manager</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Update CGPA milestones, semesters complete, and institution degrees.</p>
                      </div>
                      <button
                        onClick={() => {
                          setEditingTimeline(null);
                          setTimelineForm({ role: '', organization: '', period: '', description: '', highlights: [], category: 'Education', badge: 'Honors' });
                          setTimelineHighlightsInput('');
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Qualification</span>
                      </button>
                    </div>

                    {/* Timeline Event Form */}
                    <form onSubmit={e => handleSaveTimelineItem(e, 'education')} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
                      <h5 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-emerald-500" />
                        <span>{editingTimeline ? 'Editing Qualification' : 'New Qualification Entry'}</span>
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Degree / Certificate *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Master of Technology / Honor"
                            value={timelineForm.role} 
                            onChange={e => setTimelineForm({...timelineForm, role: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Institution / University *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Indian Institute of Science"
                            value={timelineForm.organization} 
                            onChange={e => setTimelineForm({...timelineForm, organization: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Graduation Period / Year</label>
                          <input 
                            type="text" 
                            placeholder="2026 sm: 2028"
                            value={timelineForm.period} 
                            onChange={e => setTimelineForm({...timelineForm, period: e.target.value})} 
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-mono border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Academic Summary Description *</label>
                        <textarea 
                          rows={3} 
                          required 
                          placeholder="Detail your specialized curriculum, thesis subject, or outstanding analytical focus..."
                          value={timelineForm.description} 
                          onChange={e => setTimelineForm({...timelineForm, description: e.target.value})} 
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Key Electives / Achievements (One per line)</label>
                        <textarea 
                          rows={3} 
                          placeholder="Advanced Deep Learning & Neural Architectures&#10;Published comparative study on database indexing"
                          value={timelineHighlightsInput} 
                          onChange={e => setTimelineHighlightsInput(e.target.value)} 
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div className="flex justify-end gap-3 pt-2">
                        {editingTimeline && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingTimeline(null);
                              setTimelineForm({ role: '', organization: '', period: '', description: '', highlights: [] });
                            }}
                            className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 font-bold text-xs cursor-pointer hover:bg-slate-300"
                          >
                            Cancel Edit
                          </button>
                        )}
                        <button
                          type="submit"
                          className="px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow cursor-pointer active:scale-95 transition-all"
                        >
                          Commit Academic Qualification
                        </button>
                      </div>
                    </form>

                    {/* List */}
                    <div className="space-y-4">
                      {cms.educationData.map((item, index) => (
                        <div key={item.role + index} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 font-black text-base">
                              <span className="text-emerald-600 dark:text-emerald-400">{item.organization}</span>
                              <span>•</span>
                              <span>{item.role}</span>
                              <span className="text-xs font-mono font-medium text-slate-400">({item.period})</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">{item.description}</p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => startEditTimeline(index, 'education', item)}
                              className="p-2 rounded-xl bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('Remove this qualification?')) cms.deleteEducationItem(index);
                              }}
                              className="p-2 rounded-xl bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-300 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* 5. General Configuration Tab */}
                {activeTab === 'general' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">General Information & Contact Links</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Update your hero career overview and primary networking destinations.</p>
                    </div>

                    <div className="space-y-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                      
                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Hero Professional Introduction Quote</label>
                        <textarea
                          rows={4}
                          value={heroIntro}
                          onChange={e => setHeroIntro(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 text-sm font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Contact Location</label>
                          <input
                            type="text"
                            value={contactLocation}
                            onChange={e => setContactLocation(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Primary Email Address</label>
                          <input
                            type="email"
                            value={contactEmail}
                            onChange={e => setContactEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-sm font-bold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">GitHub Profile Link</label>
                          <input
                            type="url"
                            value={contactGithub}
                            onChange={e => setContactGithub(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-xs font-mono border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">LinkedIn Profile Link</label>
                          <input
                            type="url"
                            value={contactLinkedin}
                            onChange={e => setContactLinkedin(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-xs font-mono border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          onClick={handleSaveGeneral}
                          className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm shadow cursor-pointer active:scale-95 transition-all"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save General Configuration</span>
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* 6. Export & Backup Tab */}
                {activeTab === 'backup' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">Cloud Export & Backup Suite</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Download your live updated configuration file or restore previously saved data states.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* JSON Download */}
                      <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl flex flex-col justify-between space-y-6">
                        <div className="space-y-2">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 flex items-center justify-center text-indigo-400">
                            <Download className="w-6 h-6" />
                          </div>
                          <h5 className="font-extrabold text-2xl">Export Active CMS Data</h5>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Generates a structured `adithi_portfolio_backup.json` artifact containing all your modified projects, skills, timelines, and credentials.
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(cms.exportJSON());
                            const dlAnchorElem = document.createElement('a');
                            dlAnchorElem.setAttribute("href",     dataStr);
                            dlAnchorElem.setAttribute("download", "adithi_portfolio_backup.json");
                            dlAnchorElem.click();
                            showToast('Backup file downloaded!');
                          }}
                          className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 font-extrabold text-sm shadow-lg text-center cursor-pointer active:scale-95 transition-all"
                        >
                          Download Backup JSON File
                        </button>
                      </div>

                      {/* Restore / Reset */}
                      <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                          <h5 className="font-extrabold text-xl text-slate-900 dark:text-white">Restore / Import Configuration</h5>
                          <textarea
                            rows={4}
                            placeholder="Paste your previously downloaded JSON configuration here to restore live..."
                            value={importJsonText}
                            onChange={e => setImportJsonText(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-xs font-mono border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                          />
                          <button
                            onClick={() => {
                              if (!importJsonText.trim()) return;
                              if (cms.importJSON(importJsonText)) {
                                showToast('Successfully restored configuration!');
                                setImportJsonText('');
                              } else {
                                alert('Invalid JSON payload structure.');
                              }
                            }}
                            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-extrabold text-xs shadow cursor-pointer transition-all"
                          >
                            Execute Import Payload
                          </button>
                        </div>

                        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                          <button
                            onClick={() => {
                              if (confirm('🚨 Warning: This will wipe all custom additions and reset your portfolio strictly to your original default files. Continue?')) {
                                cms.resetToDefault();
                                showToast('Reset to system defaults complete.');
                              }
                            }}
                            className="w-full py-3 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-black text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reset Site to Factory Seed Data</span>
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>
          )}

        </div>

        {/* Modal Toast Indicator */}
        {toast && (
          <div className="absolute bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-emerald-500 flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <p className="text-xs font-bold">{toast}</p>
          </div>
        )}

      </div>

    </div>
  );
};
