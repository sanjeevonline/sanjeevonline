import React, { useState } from 'react';
import { Cpu, Cloud, Database, Lock, Code, LayoutGrid, Brain, Terminal, Bot, Star, Globe, Layers } from 'lucide-react';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    id: 'lead',
    label: 'Executive Leadership',
    skills: [
      { name: 'Digital Transformation', level: 98 },
      { name: 'Enterprise Arch Leadership', level: 98 },
      { name: 'AI/ML Governance', level: 95 },
      { name: 'Generative & Agentic AI Adoption', level: 98 },
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

const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('core');

  // Curated list of high-impact skills for the default landing tab
  const coreSkills = [
    { name: 'Generative & Agentic AI Adoption', level: 98, category: 'lead' },
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
      case 'lead': return 'bg-red-500';
      case 'ai_stack': return 'bg-purple-500';
      case 'cloud': return 'bg-blue-500';
      case 'data': return 'bg-yellow-500';
      case 'saas': return 'bg-green-500';
      case 'eng': return 'bg-orange-500';
      default: return 'bg-cyan-500';
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
       case 'lead': return 'text-red-400';
       case 'ai_stack': return 'text-purple-400';
       case 'cloud': return 'text-blue-400';
       case 'data': return 'text-yellow-400';
       case 'saas': return 'text-green-400';
       case 'eng': return 'text-orange-400';
       default: return 'text-cyan-400';
    }
  }

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <Cpu className="text-cyan-400" />
          Executive and Technical Expertise
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Comprehensive capability matrix bridging executive strategy with deep hands-on engineering across AI, Cloud, Data, and Enterprise Architecture.
        </p>
      </div>

      {/* Control Panel */}
      <div className="flex flex-wrap gap-2 mb-10 p-2 bg-slate-900/50 rounded-xl border border-slate-800 w-fit">
        <FilterBtn 
          active={activeCategory === 'core'} 
          onClick={() => setActiveCategory('core')} 
          icon={<Star size={14} className={activeCategory === 'core' ? 'text-yellow-400' : ''} />} 
          label="KEY_CAPABILITIES" 
        />
        <FilterBtn 
          active={activeCategory === 'lead'} 
          onClick={() => setActiveCategory('lead')} 
          icon={<Lock size={14} />} 
          label="LEADERSHIP" 
        />
         <FilterBtn 
          active={activeCategory === 'ai_stack'} 
          onClick={() => setActiveCategory('ai_stack')} 
          icon={<Bot size={14} />} 
          label="AI_&_RAG" 
        />
         <FilterBtn 
          active={activeCategory === 'eng'} 
          onClick={() => setActiveCategory('eng')} 
          icon={<Terminal size={14} />} 
          label="SOFTWARE_ENG" 
        />
        <FilterBtn 
          active={activeCategory === 'cloud'} 
          onClick={() => setActiveCategory('cloud')} 
          icon={<Cloud size={14} />} 
          label="CLOUD_INFRA" 
        />
        <FilterBtn 
          active={activeCategory === 'data'} 
          onClick={() => setActiveCategory('data')} 
          icon={<Database size={14} />} 
          label="DATA_ARCH" 
        />
        <FilterBtn 
          active={activeCategory === 'saas'} 
          onClick={() => setActiveCategory('saas')} 
          icon={<Globe size={14} />} 
          label="ENT_APPS" 
        />
        <FilterBtn 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')} 
          icon={<LayoutGrid size={14} />} 
          label="ALL" 
        />
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div 
            key={`${skill.name}-${idx}`} 
            className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-200 font-medium text-xs leading-tight">{skill.name}</span>
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ml-2 ${getCategoryColor(skill.category)}`}></div>
              </div>
              
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-3">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getCategoryColor(skill.category)}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] text-slate-500 font-mono">LVL: {skill.level}</span>
                <span className={`text-[9px] font-mono ${getLabelColor(skill.category)}`}>
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
      flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] md:text-xs font-mono tracking-wide transition-all
      ${active 
        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'}
    `}
  >
    {icon}
    {label}
  </button>
);

export default SkillsMatrix;