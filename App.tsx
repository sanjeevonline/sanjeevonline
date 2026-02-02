import React from 'react';
import HeroSection from './components/HeroSection';
import StrategicPillars from './components/StrategicPillars';
import CareerTimeline from './components/CareerTimeline';
import Footer from './components/Footer';
import TechnicalExpertise from './components/TechnicalExpertise';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200">
      
      {/* Ultra-Minimal Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[10.5px] text-slate-900 uppercase tracking-[0.15em]">Sanjeev Kumar</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
              <a href="#career" className="hover:text-blue-600 transition-colors">History</a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors">Endorsements</a>
            </nav>
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