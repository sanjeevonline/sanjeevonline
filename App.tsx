import React, { useState, useEffect } from 'react';
import { Sun, Moon, Radar } from 'lucide-react';
import HeroSection from './components/HeroSection';
import StrategicPillars from './components/StrategicPillars';
import CareerTimeline from './components/CareerTimeline';
import Footer from './components/Footer';
import TechnicalExpertise from './components/TechnicalExpertise';
import FlagshipProjects from './components/FlagshipProjects';
import BusinessImpact from './components/BusinessImpact';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark' || prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-100 transition-colors duration-300">
      
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-slate-100">
              <span className="text-cyan-600 dark:text-cyan-500">./</span>SK_PROFILE
            </span>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="https://techradar.sanjeevonline.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase py-1 border-b border-transparent hover:border-cyan-500/50"
              >
                <Radar size={14} />
                TECH_RADAR
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
             {/* Mobile-only Radar Link Icon */}
             <a 
                href="https://techradar.sanjeevonline.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="md:hidden p-2 rounded-lg text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400"
                aria-label="Tech Radar"
             >
               <Radar size={18} />
             </a>

             <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                aria-label="Toggle theme"
             >
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-xs text-green-600 dark:text-green-400 font-mono">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               AVAILABLE
             </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection />
        <StrategicPillars />
        <FlagshipProjects />
        <BusinessImpact />
        <TechnicalExpertise />
        <CareerTimeline />
        <SocialProof />
      </main>

      <Footer />
    </div>
  );
};

export default App;