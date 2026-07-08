import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminPortal } from './components/AdminPortal';
import { CMSProvider, useCMS } from './context/CMSContext';

const MainApp: React.FC = () => {
  const cms = useCMS();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('adithi_theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('adithi_theme', nextTheme);
    document.body.classList.toggle('dark', nextTheme === 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-indigo-500 selection:text-white">
      
      {/* Premium Floating Navigation Bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenAdmin={() => setAdminPortalOpen(true)}
        isAdmin={cms.isAdmin}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Services */}
        <Services />

        {/* 5. Featured Projects */}
        <Projects />

        {/* 6. Leadership & Campus Involvement */}
        <Leadership />

        {/* 7. Education */}
        <Education />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer 
        onOpenAdmin={() => setAdminPortalOpen(true)}
        isAdmin={cms.isAdmin}
      />

      {/* Dedicated Admin Portal Modal */}
      <AdminPortal 
        isOpen={adminPortalOpen}
        onClose={() => setAdminPortalOpen(false)}
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CMSProvider>
      <MainApp />
    </CMSProvider>
  );
};

export default App;
