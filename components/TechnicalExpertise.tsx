
import React, { useState, useEffect, useRef } from 'react';
// Added missing Briefcase and Users icons to the imports from lucide-react
import { Cpu, Cloud, Database, Lock, LayoutGrid, Brain, Terminal, Bot, Star, Shield, Layout, Globe, Briefcase, Users } from 'lucide-react';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    id: 'leadership',
    label: 'Enterprise Product Leadership',
    skills: [
      { name: 'Internal Product Strategy', level: 98 },
      { name: 'Portfolio Investment Discipline', level: 97 },
      { name: 'Managers-of-Managers Leadership', level: 98 },
      { name: 'Executive Hiring & Talent Pipeline', level: 92 },
      { name: 'Product & Platform Operating Models', level: 95 },
      { name: 'Vendor & Ecosystem Strategy', level: 94 }
    ]
  },
  {
    id: 'ai_strategy',
    label: 'AI, ML & Workflow Innovation',
    skills: [
      { name: 'Generative & Agentic AI Platforms', level: 98 },
      { name: 'AI Governance & Safety Standards', level: 96 },
      { name: 'RAG Architecture Foundation', level: 98 },
      { name: 'LangChain & LangGraph Orchestration', level: 92 },
      { name: 'LLM Fine-Tuning & Lifecycle Mgmt', level: 90 },
      { name: 'Semantic Search & Knowledge Graphs', level: 95 }
    ]
  },
  {
    id: 'cloud_infra',
    label: 'Cloud, Infrastructure & Reliability',
    skills: [
      { name: 'Hybrid Cloud Platform Strategy', level: 98 },
      { name: 'Modernization & Legacy Retirement', level: 95 },
      { name: 'Availability & Resilience Engineering', level: 94 },
      { name: 'Infrastructure-as-Code Models', level: 95 },
      { name: 'Business Continuity & Disaster Recovery', level: 90 },
      { name: 'Enterprise Observability', level: 92 }
    ]
  },
  {
    id: 'saas',
    label: 'SAAS Platforms & Interoperability',
    skills: [
      { name: 'Microsoft 365 Enterprise', level: 95 },
      { name: 'Salesforce & CRM Strategy', level: 92 },
      { name: 'ServiceNow Platform Governance', level: 90 },
      { name: 'SAP Integration Frameworks', level: 88 },
      { name: 'API & Service Platform Strategy', level: 96 }
    ]
  },
  {
    id: 'data_analytics',
    label: 'Data & Analytics Platforms',
    skills: [
      { name: 'Enterprise Data Strategy', level: 97 },
      { name: 'Lakehouse (Snowflake/Databricks)', level: 98 },
      { name: 'Data Mesh & Medallion Fabric', level: 98 },
      { name: 'Data Governance & Master Data Mgmt', level: 90 },
      { name: 'AI-Ready Data Pipelines', level: 95 }
    ]
  },
  {
    id: 'governance',
    label: 'Architecture & Governance',
    skills: [
      { name: 'Enterprise Architecture Leadership', level: 98 },
      { name: 'ADR & 4+1 Decision Frameworks', level: 97 },
      { name: 'Platform Interoperability Standards', level: 95 },
      { name: 'TOGAF / Zachman Methodologies', level: 90 },
      { name: 'Platform Guardrails & Standards', level: 98 }
    ]
  },
  {
    id: 'engineering',
    label: 'Employee & Developer Experience',
    skills: [
      { name: 'Internal Developer Platforms (IDP)', level: 95 },
      { name: 'Developer Experience (DevEx)', level: 98 },
      { name: 'CI/CD & Engineering Excellence', level: 97 },
      { name: 'Global Delivery Org Building', level: 98 },
      { name: 'Full-Stack Technical Oversight', level: 95 }
    ]
  }
];

const TechnicalExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('core');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const coreSkills = [
    { name: 'Internal Product Strategy', level: 98, category: 'leadership' },
    { name: 'Managers-of-Managers Leadership', level: 98, category: 'leadership' },
    { name: 'Generative & Agentic AI Platforms', level: 98, category: 'ai_strategy' },
    { name: 'Lakehouse (Snowflake/Databricks)', level: 98, category: 'data_analytics' },
    { name: 'Developer Experience (DevEx)', level: 98, category: 'engineering' },
    { name: 'Portfolio Investment Discipline', level: 97, category: 'leadership' },
    { name: 'Hybrid Cloud Platform Strategy', level: 98, category: 'cloud_infra' },
    { name: 'Platform Guardrails & Standards', level: 98, category: 'governance' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillData.flatMap(c => c.skills.map(s => ({...s, category: c.id})))
    : activeCategory === 'core'
    ? coreSkills
    : skillData.find(c => c.id === activeCategory)?.skills.map(s => ({...s, category: activeCategory})) || [];

  const getCategoryColor = (catId: string) => {
    switch (catId) {
      case 'leadership': return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]';
      case 'ai_strategy': return 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.3)]';
      case 'cloud_infra': return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]';
      case 'saas': return 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.3)]';
      case 'data_analytics': return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.3)]';
      case 'governance': return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]';
      case 'engineering': return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]';
      default: return 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.3)]';
    }
  };

  const getCategoryLabel = (catId: string) => {
    switch (catId) {
      case 'leadership': return 'PRODUCT_EXEC';
      case 'ai_strategy': return 'AI_INNOVATION';
      case 'cloud_infra': return 'CLOUD_PLATFORM';
      case 'saas': return 'SAAS_DOMAIN';
      case 'data_analytics': return 'DATA_SYSTEMS';
      case 'governance': return 'GOVERNANCE';
      case 'engineering': return 'EXP_STRATEGY';
      default: return 'SKILL';
    }
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-16 px-4 max-w-7xl mx-auto transition-colors duration-300" id="technical-expertise">
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Cpu className="text-cyan-600 dark:text-cyan-400" />
            Executive & Technical Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Synthesizing product vision with deep technical foresight. Validated through 45,000+ daily active users.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl hidden lg:block min-w-[240px] shadow-sm">
           <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-widest font-bold">
             <Star size={10} className="text-yellow-500" />
             Strategic Readiness
           </div>
           <div className="space-y-2">
             <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400">Products</span>
                <span className="text-green-600 dark:text-green-400 font-bold">180+ LIVE</span>
             </div>
             <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400">Experience</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">EMPLOYEE-FIRST</span>
             </div>
             <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400">Budget Lock</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">$20M+ ANNUAL</span>
             </div>
           </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 md:mb-10 p-2 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 w-fit backdrop-blur-sm shadow-sm">
        <FilterBtn active={activeCategory === 'core'} onClick={() => setActiveCategory('core')} icon={<Star size={14} />} label="CORE_EXECUTIVE" />
        <FilterBtn active={activeCategory === 'leadership'} onClick={() => setActiveCategory('leadership')} icon={<Briefcase size={14} />} label="PRODUCT_LEAD" />
        <FilterBtn active={activeCategory === 'ai_strategy'} onClick={() => setActiveCategory('ai_strategy')} icon={<Bot size={14} />} label="AI_WORKFLOWS" />
        <FilterBtn active={activeCategory === 'saas'} onClick={() => setActiveCategory('saas')} icon={<Globe size={14} />} label="SAAS_DOMAINS" />
        <FilterBtn active={activeCategory === 'engineering'} onClick={() => setActiveCategory('engineering')} icon={<Users size={14} />} label="EXP_STRATEGY" />
        <FilterBtn active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} icon={<LayoutGrid size={14} />} label="ALL_DOMAINS" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div key={`${skill.name}-${idx}`} className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-cyan-900/20 flex flex-col justify-between overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-800 dark:text-slate-100 font-bold text-[11px] leading-tight tracking-tight uppercase group-hover:text-cyan-700 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ml-2 animate-pulse ${getCategoryColor(skill.category)}`}></div>
              </div>
              
              <div className="w-full bg-slate-100 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden mt-4">
                <div className={`h-full rounded-full transition-all duration-1000 ease-out ${getCategoryColor(skill.category)}`} style={{ width: animate ? `${skill.level}%` : '0%' }}></div>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-center mt-5">
                <span className="text-[9px] text-slate-500 dark:text-slate-500 font-mono font-bold tracking-tighter">LVL: {skill.level}</span>
                <span className={`text-[9px] font-mono font-bold tracking-tighter uppercase px-1.5 py-0.5 bg-slate-50 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800/50`}>
                    {getCategoryLabel(skill.category)}
                </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FilterBtn = ({ active, onClick, icon, label }: any) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] font-mono tracking-widest transition-all uppercase
      ${active 
        ? 'bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 border border-transparent'}
    `}
  >
    {icon}
    {label}
  </button>
);

export default TechnicalExpertise;
