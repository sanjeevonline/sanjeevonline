import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Cloud, Database, Lock, LayoutGrid, Brain, Terminal, Bot, Star } from 'lucide-react';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    id: 'lead',
    label: 'Executive Leadership',
    skills: [
      { name: 'Strategic Visioning & Execution', level: 97 },
      { name: 'Digital Transformation', level: 98 },
      { name: 'Enterprise Arch Leadership', level: 98 },
      { name: 'AI/ML Governance', level: 95 },
      { name: 'Generative & Agentic AI Implementation', level: 98 },
      { name: 'Engineering Excellence', level: 95 },
      { name: 'Developer Experience (DevEx)', level: 92 },
      { name: 'Agile & DevOps Transformation', level: 95 },
      { name: 'Portfolio Management ($15M+)', level: 95 },
      { name: 'Organizational Design', level: 90 },
      { name: 'Vendor/Partner Management', level: 92 },
      { name: 'Technical Governance', level: 95 },
      { name: 'Architecture Standards', level: 98 },
      { name: 'Risk Mitigation', level: 90 },
      { name: 'Product Management', level: 85 }
    ]
  },
  {
    id: 'ai_stack',
    label: 'AI/ML, RAG & Agentic Systems',
    skills: [
      { name: 'RAG Systems', level: 98 },
      { name: 'Agentic AI', level: 95 },
      { name: 'Multimodal LLM', level: 92 },
      { name: 'LangChain / LangGraph', level: 95 },
      { name: 'LlamaIndex', level: 92 },
      { name: 'LLM FineTuning (LoRA/QLoRA)', level: 88 },
      { name: 'TensorFlow / PyTorch', level: 85 },
      { name: 'Vector DBs (Weaviate/Pinecone)', level: 95 },
      { name: 'MLOps & Pipelines', level: 90 },
      { name: 'Cursor / Copilot', level: 98 },
      { name: 'Antigravity', level: 85 },
      { name: 'Model Context Protocol (MCP)', level: 90 }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & Enterprise Infra',
    skills: [
      { name: 'Azure / AWS / GCP', level: 95 },
      { name: 'Hybrid Cloud Architecture', level: 95 },
      { name: 'Kubernetes & Docker', level: 92 },
      { name: 'Serverless / PaaS / IaaS', level: 95 },
      { name: 'DevSecOps', level: 92 },
      { name: 'IaC (Terraform/ARM/CF)', level: 95 },
      { name: 'Networking (ExpressRoute/MPLS)', level: 88 },
      { name: 'HA / DR / BCP', level: 90 },
      { name: 'Observability & Telemetry', level: 92 }
    ]
  },
  {
    id: 'data',
    label: 'Data & Analytics Arch',
    skills: [
      { name: 'Delta Lake / Lakehouse', level: 95 },
      { name: 'Data Mesh', level: 95 },
      { name: 'MDM (Master Data Mgmt)', level: 90 },
      { name: 'Apache Iceberg', level: 88 },
      { name: 'Spark / Taxonomy / Ontology', level: 90 },
      { name: 'Snowflake', level: 92 },
      { name: 'Kafka / Event Streaming', level: 88 },
      { name: 'Graph DB (Neo4J)', level: 85 },
      { name: 'Cassandra / NoSQL', level: 88 },
      { name: 'Tableau', level: 85 }
    ]
  },
  {
    id: 'saas',
    label: 'Enterprise Apps & SaaS',
    skills: [
      { name: 'Salesforce CRM', level: 90 },
      { name: 'SAP Integration', level: 85 },
      { name: 'ServiceNow', level: 88 },
      { name: 'Oracle Ecosystem', level: 85 },
      { name: 'Alfresco / SiteCore', level: 80 }
    ]
  },
  {
    id: 'eng',
    label: 'Software Engineering',
    skills: [
      { name: 'API Architecture', level: 95 },
      { name: 'CI/CD Pipelines', level: 95 },
      { name: 'Java / J2EE', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'SQL / Database Design', level: 92 },
      { name: 'React / Angular', level: 88 },
      { name: 'Docker / Containerization', level: 92 }
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
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const coreSkills = [
    { name: 'Generative & Agentic AI Implementation', level: 98, category: 'lead' },
    { name: 'RAG Systems', level: 98, category: 'ai_stack' },
    { name: 'Enterprise Arch Leadership', level: 98, category: 'lead' },
    { name: 'Data Mesh', level: 95, category: 'data' },
    { name: 'Hybrid Cloud Architecture', level: 95, category: 'cloud' },
    { name: 'AI/ML Governance', level: 95, category: 'lead' },
    { name: 'Engineering Excellence', level: 95, category: 'lead' },
    { name: 'Cursor / Copilot', level: 98, category: 'ai_stack' },
    { name: 'API Architecture', level: 95, category: 'eng' },
    { name: 'Kubernetes & Docker', level: 92, category: 'cloud' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillData.flatMap(c => c.skills.map(s => ({...s, category: c.id})))
    : activeCategory === 'core'
    ? coreSkills
    : skillData.find(c => c.id === activeCategory)?.skills.map(s => ({...s, category: activeCategory})) || [];

  const getCategoryColor = (catId: string) => {
    switch (catId) {
      case 'lead': return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]';
      case 'ai_stack': return 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.3)]';
      case 'cloud': return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]';
      case 'data': return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.3)]';
      case 'saas': return 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.3)]';
      case 'eng': return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]';
      default: return 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.3)]';
    }
  };

  const getCategoryLabel = (catId: string) => {
    switch (catId) {
      case 'lead': return 'EXECUTIVE';
      case 'ai_stack': return 'AI_STACK';
      case 'cloud': return 'CLOUD_INFRA';
      case 'data': return 'DATA_ARCH';
      case 'saas': return 'ENT_APPS';
      case 'eng': return 'SOFTWARE';
      default: return 'SKILL';
    }
  };

  const getLabelColor = (catId: string) => {
    switch (catId) {
       case 'lead': return 'text-red-500 dark:text-red-400';
       case 'ai_stack': return 'text-purple-500 dark:text-purple-400';
       case 'cloud': return 'text-blue-500 dark:text-blue-400';
       case 'data': return 'text-yellow-600 dark:text-yellow-400';
       case 'saas': return 'text-green-600 dark:text-green-400';
       case 'eng': return 'text-orange-500 dark:text-orange-400';
       default: return 'text-cyan-600 dark:text-cyan-400';
    }
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 max-w-7xl mx-auto transition-colors duration-300" id="technical-expertise">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Cpu className="text-cyan-600 dark:text-cyan-400" />
            Executive & Technical Skill Matrix
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Bridging executive strategy with deep hands-on engineering. Interactive view of core technical proficiencies.
          </p>
        </div>

        {/* Gamified Stat Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl hidden lg:block min-w-[240px] shadow-sm">
           <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-widest font-bold">
             <Star size={10} className="text-yellow-500" />
             System Status: Optimized
           </div>
           <div className="space-y-2">
             <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400">Arch Proficiency</span>
                <span className="text-green-600 dark:text-green-400 font-bold">S-RANK</span>
             </div>
             <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400">Leadership Scale</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">45K+ USERS</span>
             </div>
             <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400">AI Readiness</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">AGENTIC_READY</span>
             </div>
           </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10 p-2 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 w-fit backdrop-blur-sm shadow-sm">
        <FilterBtn active={activeCategory === 'core'} onClick={() => setActiveCategory('core')} icon={<Star size={14} className={activeCategory === 'core' ? 'text-yellow-500' : ''} />} label="CORE_MATRIX" />
        <FilterBtn active={activeCategory === 'lead'} onClick={() => setActiveCategory('lead')} icon={<Lock size={14} />} label="LEADERSHIP" />
        <FilterBtn active={activeCategory === 'ai_stack'} onClick={() => setActiveCategory('ai_stack')} icon={<Bot size={14} />} label="AI_ENGINEERING" />
        <FilterBtn active={activeCategory === 'eng'} onClick={() => setActiveCategory('eng')} icon={<Terminal size={14} />} label="ENGINEERING" />
        <FilterBtn active={activeCategory === 'cloud'} onClick={() => setActiveCategory('cloud')} icon={<Cloud size={14} />} label="CLOUD_INFRA" />
        <FilterBtn active={activeCategory === 'data'} onClick={() => setActiveCategory('data')} icon={<Database size={14} />} label="DATA_ARCH" />
        <FilterBtn active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} icon={<LayoutGrid size={14} />} label="TOTAL_MAP" />
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
              
              <div className="w-full bg-slate-100 dark:bg-slate-950 h-2 rounded-full overflow-hidden mt-4 border border-slate-200 dark:border-slate-800/50">
                <div className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 ${getCategoryColor(skill.category)}`} style={{ width: animate ? `${skill.level}%` : '0%' }}></div>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-center mt-5">
                <span className="text-[9px] text-slate-500 dark:text-slate-500 font-mono font-bold tracking-tighter">XP_LVL: {skill.level}</span>
                <span className={`text-[9px] font-mono font-bold tracking-tighter uppercase px-1.5 py-0.5 bg-slate-50 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800/50 ${getLabelColor(skill.category)}`}>
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