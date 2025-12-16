import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, ShieldCheck, Database, Briefcase } from 'lucide-react';

const TerminalHero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `> INITIALIZING EXECUTIVE PROFILE...
> LOAD MODULE: DIRECTOR_ENGINEERING
> LOAD MODULE: ENTERPRISE_ARCHITECTURE
> LOAD MODULE: STRATEGIC_TRANSFORMATION
> AUTH: SANJEEV KUMAR
> STATUS: ONLINE
> READY TO ENGAGE...`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Terminal */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl shadow-black/50 overflow-hidden font-mono text-sm md:text-base transform transition-transform hover:scale-[1.01]">
          <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-slate-400 text-xs">root@executive-console:~</span>
          </div>
          <div className="p-6 text-green-400 min-h-[250px] whitespace-pre-wrap">
            {text}
            <span className="animate-blink inline-block w-2 h-5 bg-green-400 align-middle ml-1"></span>
          </div>
        </div>

        {/* Right: Intro Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Briefcase size={14} />
            Director of Engineering & Architecture
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Sanjeev Kumar
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Leading the future of enterprise intelligence. Transforming organizations through <span className="text-slate-200 font-medium">Strategic Modernization</span>, <span className="text-slate-200 font-medium">AI Adoption</span>, and <span className="text-slate-200 font-medium">Operational Excellence</span>.
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <Database className="text-blue-400" size={18} />
              Data Strategy
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-400" size={18} />
              Engineering Excellence
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="text-blue-400" size={18} />
              AI Transformation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;