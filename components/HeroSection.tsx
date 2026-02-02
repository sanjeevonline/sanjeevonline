import React from 'react';
import { Mail, Linkedin, MapPin, Globe, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pb-8 border-none">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Global Enterprise Architect & AI Platform Leader
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Edison, NJ</span>
            <span className="flex items-center gap-1.5"><Mail size={14} /> sk@sanjeevonline.com</span>
            <a href="https://linkedin.com/in/sanjeevsprofile" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://github.com/sanjeevonline" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Github size={14} /> GitHub
            </a>
            <a href="https://techradar.sanjeevonline.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Globe size={14} /> AI Radar
            </a>
          </div>
        </div>

        <div className="max-w-2xl prose dark:prose-invert prose-slate">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            With 20+ years of experience driving digital transformation for organizations with <strong>45,000+ users</strong>. 
            I bridge the gap between complex engineering and measurable business value, overseeing <strong>$20M+ annual portfolios </strong> 
            and leading global teams of <strong>100+ engineers</strong>. Pioneer in <strong>Generative and Agentic AI</strong> adoption, architecting enterprise-grade platforms that balance rapid 
            innovation with rigorous governance, safety, and cost control.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
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
  <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded">
    <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</div>
    <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 font-semibold">{label}</div>
  </div>
);

export default HeroSection;