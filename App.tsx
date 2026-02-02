import React, { useState, useEffect } from 'react';
import { Sun, Moon, Radar, Mail, Linkedin, MapPin } from 'lucide-react';
import HeroSection from './components/HeroSection';
import StrategicPillars from './components/StrategicPillars';
import CareerTimeline from './components/CareerTimeline';
import Footer from './components/Footer';
import TechnicalExpertise from './components/TechnicalExpertise';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
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
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-200 transition-colors duration-200">
      
      {/* Ultra-Minimal Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[10.5px] text-slate-900 dark:text-white uppercase tracking-[0.15em]">Sanjeev Kumar</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              <a href="#expertise" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Expertise</a>
              <a href="#career" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">History</a>
              <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Endorsements</a>
            </nav>
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-12">
        <HeroSection />
        <StrategicPillars />
        <div id="expertise">
          <TechnicalExpertise />
        </div>
        <div id="career">
          <CareerTimeline />
        </div>
        <div id="testimonials">
          <SocialProof />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;