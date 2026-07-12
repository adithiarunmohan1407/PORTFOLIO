import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  HERO_DATA, 
  ABOUT_DATA, 
  SKILL_CATEGORIES, 
  TECHNICAL_INDICATORS, 
  SERVICES_DATA, 
  PROJECTS_DATA, 
  LEADERSHIP_DATA, 
  EDUCATION_DATA, 
  CONTACT_INFO,
  Project,
  SkillCategory,
  ServiceItem,
  TimelineItem 
} from '../data';

interface CMSContextType {
  isAdmin: boolean;
  login: (passcode: string) => boolean;
  logout: () => void;
  
  // Dynamic Data
  heroData: typeof HERO_DATA;
  aboutData: typeof ABOUT_DATA;
  skillCategories: SkillCategory[];
  technicalIndicators: typeof TECHNICAL_INDICATORS;
  servicesData: ServiceItem[];
  projectsData: Project[];
  leadershipData: TimelineItem[];
  educationData: TimelineItem[];
  contactInfo: typeof CONTACT_INFO;

  // Modifiers
  updateHeroData: (newHero: typeof HERO_DATA) => void;
  updateAboutData: (newAbout: typeof ABOUT_DATA) => void;
  updateContactInfo: (newContact: typeof CONTACT_INFO) => void;

  // Projects
  addProject: (proj: Project) => void;
  updateProject: (proj: Project) => void;
  deleteProject: (id: string) => void;

  // Skills
  addSkillToCategory: (categoryTitle: string, skill: { name: string; level: number; highlight?: boolean }) => void;
  updateSkillInCategory: (categoryTitle: string, oldSkillName: string, skill: { name: string; level: number; highlight?: boolean }) => void;
  deleteSkillFromCategory: (categoryTitle: string, skillName: string) => void;
  addNewSkillCategory: (cat: SkillCategory) => void;

  // Leadership & Experience
  addLeadershipItem: (item: TimelineItem) => void;
  updateLeadershipItem: (index: number, item: TimelineItem) => void;
  deleteLeadershipItem: (index: number) => void;

  // Education
  addEducationItem: (item: TimelineItem) => void;
  updateEducationItem: (index: number, item: TimelineItem) => void;
  deleteEducationItem: (index: number) => void;

  // Services
  addServiceItem: (item: ServiceItem) => void;
  updateServiceItem: (item: ServiceItem) => void;
  deleteServiceItem: (id: string) => void;

  // Utility
  resetToDefault: () => void;
  exportJSON: () => string;
  importJSON: (jsonString: string) => boolean;
}

const CMSContext = createContext<CMSContextType | null>(null);

const STORAGE_KEY = 'adithi_portfolio_cms_data_v6';
const ADMIN_AUTH_KEY = 'adithi_portfolio_admin_auth';

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });

  const [heroData, setHeroData] = useState<typeof HERO_DATA>(HERO_DATA);
  const [aboutData, setAboutData] = useState<typeof ABOUT_DATA>(ABOUT_DATA);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(SKILL_CATEGORIES);
  const [technicalIndicators, setTechnicalIndicators] = useState<typeof TECHNICAL_INDICATORS>(TECHNICAL_INDICATORS);
  const [servicesData, setServicesData] = useState<ServiceItem[]>(SERVICES_DATA);
  const [projectsData, setProjectsData] = useState<Project[]>(PROJECTS_DATA);
  const [leadershipData, setLeadershipData] = useState<TimelineItem[]>(LEADERSHIP_DATA);
  const [educationData, setEducationData] = useState<TimelineItem[]>(EDUCATION_DATA);
  const [contactInfo, setContactInfo] = useState<typeof CONTACT_INFO>(CONTACT_INFO);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.heroData) setHeroData(parsed.heroData);
        if (parsed.aboutData) setAboutData(parsed.aboutData);
        if (parsed.skillCategories) setSkillCategories(parsed.skillCategories);
        if (parsed.technicalIndicators) setTechnicalIndicators(parsed.technicalIndicators);
        if (parsed.servicesData) setServicesData(parsed.servicesData);
        if (parsed.projectsData) setProjectsData(parsed.projectsData);
        if (parsed.leadershipData) setLeadershipData(parsed.leadershipData);
        if (parsed.educationData) setEducationData(parsed.educationData);
        if (parsed.contactInfo) setContactInfo(parsed.contactInfo);
      }
    } catch (e) {
      console.error("Error loading CMS data from localStorage:", e);
    }
  }, []);

  // Sync to local storage whenever data changes
  const saveAllToStorage = (newData: Partial<{
    heroData: typeof HERO_DATA;
    aboutData: typeof ABOUT_DATA;
    skillCategories: SkillCategory[];
    technicalIndicators: typeof TECHNICAL_INDICATORS;
    servicesData: ServiceItem[];
    projectsData: Project[];
    leadershipData: TimelineItem[];
    educationData: TimelineItem[];
    contactInfo: typeof CONTACT_INFO;
  }>) => {
    try {
      const currentPayload = {
        heroData,
        aboutData,
        skillCategories,
        technicalIndicators,
        servicesData,
        projectsData,
        leadershipData,
        educationData,
        contactInfo,
        ...newData
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPayload));
    } catch (e) {
      console.error("Error saving CMS data to localStorage:", e);
    }
  };

  const login = (passcode: string): boolean => {
    // strict password authentication for Adithi
    if (passcode === 'adithi2026') {
      setIsAdmin(true);
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
  };

  // Modifiers with autosave
  const updateHeroData = (newHero: typeof HERO_DATA) => {
    setHeroData(newHero);
    saveAllToStorage({ heroData: newHero });
  };

  const updateAboutData = (newAbout: typeof ABOUT_DATA) => {
    setAboutData(newAbout);
    saveAllToStorage({ aboutData: newAbout });
  };

  const updateContactInfo = (newContact: typeof CONTACT_INFO) => {
    setContactInfo(newContact);
    saveAllToStorage({ contactInfo: newContact });
  };

  // Project Modifiers
  const addProject = (proj: Project) => {
    const updated = [proj, ...projectsData];
    setProjectsData(updated);
    saveAllToStorage({ projectsData: updated });
  };

  const updateProject = (proj: Project) => {
    const updated = projectsData.map(p => p.id === proj.id ? proj : p);
    setProjectsData(updated);
    saveAllToStorage({ projectsData: updated });
  };

  const deleteProject = (id: string) => {
    const updated = projectsData.filter(p => p.id !== id);
    setProjectsData(updated);
    saveAllToStorage({ projectsData: updated });
  };

  // Skill Modifiers
  const addSkillToCategory = (categoryTitle: string, skill: { name: string; level: number; highlight?: boolean }) => {
    const updated = skillCategories.map(cat => {
      if (cat.title === categoryTitle) {
        // filter out if already exists, or append
        const filtered = cat.skills.filter(s => s.name.toLowerCase() !== skill.name.toLowerCase());
        return {
          ...cat,
          skills: [...filtered, skill]
        };
      }
      return cat;
    });
    setSkillCategories(updated);
    saveAllToStorage({ skillCategories: updated });
  };

  const updateSkillInCategory = (categoryTitle: string, oldSkillName: string, skill: { name: string; level: number; highlight?: boolean }) => {
    const updated = skillCategories.map(cat => {
      if (cat.title === categoryTitle) {
        const newSkills = cat.skills.map(s => s.name === oldSkillName ? skill : s);
        return { ...cat, skills: newSkills };
      }
      return cat;
    });
    setSkillCategories(updated);
    saveAllToStorage({ skillCategories: updated });
  };

  const deleteSkillFromCategory = (categoryTitle: string, skillName: string) => {
    const updated = skillCategories.map(cat => {
      if (cat.title === categoryTitle) {
        return { ...cat, skills: cat.skills.filter(s => s.name !== skillName) };
      }
      return cat;
    });
    setSkillCategories(updated);
    saveAllToStorage({ skillCategories: updated });
  };

  const addNewSkillCategory = (cat: SkillCategory) => {
    const updated = [...skillCategories, cat];
    setSkillCategories(updated);
    saveAllToStorage({ skillCategories: updated });
  };

  // Leadership & Experience Modifiers
  const addLeadershipItem = (item: TimelineItem) => {
    const updated = [item, ...leadershipData];
    setLeadershipData(updated);
    saveAllToStorage({ leadershipData: updated });
  };

  const updateLeadershipItem = (index: number, item: TimelineItem) => {
    const updated = [...leadershipData];
    updated[index] = item;
    setLeadershipData(updated);
    saveAllToStorage({ leadershipData: updated });
  };

  const deleteLeadershipItem = (index: number) => {
    const updated = leadershipData.filter((_, i) => i !== index);
    setLeadershipData(updated);
    saveAllToStorage({ leadershipData: updated });
  };

  // Education Modifiers
  const addEducationItem = (item: TimelineItem) => {
    const updated = [item, ...educationData];
    setEducationData(updated);
    saveAllToStorage({ educationData: updated });
  };

  const updateEducationItem = (index: number, item: TimelineItem) => {
    const updated = [...educationData];
    updated[index] = item;
    setEducationData(updated);
    saveAllToStorage({ educationData: updated });
  };

  const deleteEducationItem = (index: number) => {
    const updated = educationData.filter((_, i) => i !== index);
    setEducationData(updated);
    saveAllToStorage({ educationData: updated });
  };

  // Services Modifiers
  const addServiceItem = (item: ServiceItem) => {
    const updated = [...servicesData, item];
    setServicesData(updated);
    saveAllToStorage({ servicesData: updated });
  };

  const updateServiceItem = (item: ServiceItem) => {
    const updated = servicesData.map(s => s.id === item.id ? item : s);
    setServicesData(updated);
    saveAllToStorage({ servicesData: updated });
  };

  const deleteServiceItem = (id: string) => {
    const updated = servicesData.filter(s => s.id !== id);
    setServicesData(updated);
    saveAllToStorage({ servicesData: updated });
  };

  // Reset & Utility
  const resetToDefault = () => {
    setHeroData(HERO_DATA);
    setAboutData(ABOUT_DATA);
    setSkillCategories(SKILL_CATEGORIES);
    setTechnicalIndicators(TECHNICAL_INDICATORS);
    setServicesData(SERVICES_DATA);
    setProjectsData(PROJECTS_DATA);
    setLeadershipData(LEADERSHIP_DATA);
    setEducationData(EDUCATION_DATA);
    setContactInfo(CONTACT_INFO);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportJSON = () => {
    const payload = {
      heroData,
      aboutData,
      skillCategories,
      technicalIndicators,
      servicesData,
      projectsData,
      leadershipData,
      educationData,
      contactInfo
    };
    return JSON.stringify(payload, null, 2);
  };

  const importJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed) {
        if (parsed.heroData) setHeroData(parsed.heroData);
        if (parsed.aboutData) setAboutData(parsed.aboutData);
        if (parsed.skillCategories) setSkillCategories(parsed.skillCategories);
        if (parsed.technicalIndicators) setTechnicalIndicators(parsed.technicalIndicators);
        if (parsed.servicesData) setServicesData(parsed.servicesData);
        if (parsed.projectsData) setProjectsData(parsed.projectsData);
        if (parsed.leadershipData) setLeadershipData(parsed.leadershipData);
        if (parsed.educationData) setEducationData(parsed.educationData);
        if (parsed.contactInfo) setContactInfo(parsed.contactInfo);
        saveAllToStorage(parsed);
        return true;
      }
    } catch (e) {
      console.error("Error importing JSON:", e);
    }
    return false;
  };

  return (
    <CMSContext.Provider value={{
      isAdmin,
      login,
      logout,
      heroData,
      aboutData,
      skillCategories,
      technicalIndicators,
      servicesData,
      projectsData,
      leadershipData,
      educationData,
      contactInfo,
      updateHeroData,
      updateAboutData,
      updateContactInfo,
      addProject,
      updateProject,
      deleteProject,
      addSkillToCategory,
      updateSkillInCategory,
      deleteSkillFromCategory,
      addNewSkillCategory,
      addLeadershipItem,
      updateLeadershipItem,
      deleteLeadershipItem,
      addEducationItem,
      updateEducationItem,
      deleteEducationItem,
      addServiceItem,
      updateServiceItem,
      deleteServiceItem,
      resetToDefault,
      exportJSON,
      importJSON
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
};
