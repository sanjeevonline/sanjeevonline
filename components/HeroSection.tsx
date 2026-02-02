
import React from 'react';
import { Mail, Linkedin, MapPin, Globe, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pb-4 border-none">
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-tight text-slate-900 leading-none uppercase tracking-[0.15em] whitespace-nowrap">
            Sanjeev Kumar
          </h1>
          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.1em] pb-1">
            Global Enterprise Architect & AI Platform Leader
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1"><MapPin size={12} /> Edison, NJ</span>
            <span className="flex items-center gap-1"><Mail size={12} /> sk@sanjeevonline.com</span>
            <a href="https://linkedin.com/in/sanjeevsprofile" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Linkedin size={12} /> LinkedIn
            </a>
            <a href="https://github.com/sanjeevonline" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              {/* Fixed typo: changed 開Github to Github */}
              <Github size={12} /> GitHub
            </a>
            <a href="https://techradar.sanjeevonline.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Globe size={12} /> AI Radar
            </a>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="text-base text-slate-600 leading-relaxed">
            With 20+ years of experience driving digital transformation for organizations with <strong>45,000+ users</strong>. 
            I bridge the gap between complex engineering and measurable business value, overseeing <strong>$20M+ annual portfolios</strong> 
            and leading global teams of <strong>100+ engineers</strong>. Pioneer in <strong>Generative and Agentic AI</strong> adoption, architecting enterprise-grade platforms that balance rapid 
            innovation with rigorous governance, safety, and cost control.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <StatBox label="Years Exp" value="20+" />
          <StatBox label="Engineers Led" value="100+" />
          <StatBox label="Portfolio" value="$20M+" />
          <StatBox label="User Base" value="45k+" />
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value: string }) => (
  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
    <div className="text-xl font-bold text-slate-900 tracking-tight leading-none">{value}</div>
    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mt-1">{label}</div>
  </div>
);

export default HeroSection;
