import React from 'react';
import HeroSection from './components/HeroSection';
import StrategicPillars from './components/StrategicPillars';
import CareerTimeline from './components/CareerTimeline';
import Footer from './components/Footer';
import TechnicalExpertise from './components/TechnicalExpertise';
import FlagshipProjects from './components/FlagshipProjects';
import BusinessImpact from './components/BusinessImpact';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-tighter text-slate-100">
            <span className="text-cyan-500">./</span>SK_PROFILE
          </span>
          <div className="flex gap-4">
             <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-mono">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               AVAILABLE
             </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection />
        
        {/* 1. Merged Strategic Pillars & Telemetry (The Hook & Strategy) */}
        <StrategicPillars />
        
        {/* 2. Flagship Initiatives (The "What I Built" - GenAI/Data) */}
        <FlagshipProjects />
        
        {/* 3. Business Transformation Details */}
        <BusinessImpact />
        
        {/* 4. Technical Capability Validation */}
        <TechnicalExpertise />
        
        {/* 5. Career History */}
        <CareerTimeline />
        
        {/* 6. Social Proof */}
        <SocialProof />
      </main>

      <Footer />
    </div>
  );
};

export default App;