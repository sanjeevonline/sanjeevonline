import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Database, Briefcase, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `> INITIALIZING EXECUTIVE PROFILE...
> LOAD MODULE: DIRECTOR_ENGINEERING
> LOAD MODULE: ENTERPRISE_ARCHITECTURE
> LOAD MODULE: STRATEGIC_TRANSFORMATION
> AUTH: SANJEEV KUMAR
> STATUS: ONLINE
> READY TO ENGAGE....`;

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
    <section className="relative w-full py-12 md:py-20 px-4 md:px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 flex justify-center transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl z-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl z-0 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Terminal */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl shadow-black/50 overflow-hidden font-mono text-sm md:text-base transform transition-transform hover:scale-[1.01] w-full max-w-2xl mx-auto lg:mx-0">
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
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Briefcase size={14} />
            Global Technology Executive
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Sanjeev Kumar
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Leading the future of enterprise intelligence. Transforming organizations through <span className="text-slate-900 dark:text-slate-200 font-medium">Strategic Modernization</span>, <span className="text-slate-900 dark:text-slate-200 font-medium">AI Implementation</span>, and <span className="text-slate-900 dark:text-slate-200 font-medium">Operational Excellence</span>.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Database className="text-blue-600 dark:text-blue-400" size={18} />
                Data Strategy
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-blue-600 dark:text-blue-400" size={18} />
                Engineering Excellence
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="text-blue-600 dark:text-blue-400" size={18} />
                AI Transformation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;