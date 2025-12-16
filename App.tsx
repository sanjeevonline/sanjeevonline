import React from 'react';
import TerminalHero from './components/TerminalHero';
import ArchitectureMap from './components/ArchitectureMap';
import TelemetryDashboard from './components/TelemetryDashboard';
import DeploymentLog from './components/DeploymentLog';
import ContactFooter from './components/ContactFooter';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectControl from './components/ProjectControl';
import ThoughtStream from './components/ThoughtStream';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Header / Nav (Simplified for visual cleaniness) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-tighter text-white">
            <span className="text-cyan-400">./</span>SK_PROFILE
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
        <TerminalHero />
        <TelemetryDashboard />
        <SkillsMatrix />
        <ArchitectureMap />
        <ProjectControl />
        <DeploymentLog />
        <ThoughtStream />
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;
