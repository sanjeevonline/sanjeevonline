import React, { useState } from 'react';
import { Cpu, Cloud, Database, Lock, Code, LayoutGrid, Brain } from 'lucide-react';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    id: 'lead',
    label: 'Executive Leadership',
    skills: [
      { name: 'Org Scaling (100+)', level: 98 },
      { name: 'Tech Strategy', level: 98 },
      { name: 'Budget Mgmt ($15M+)', level: 95 },
      { name: 'Vendor Strategy', level: 92 },
      { name: 'Agile Transformation', level: 95 },
      { name: 'Talent Development', level: 95 }
    ]
  },
  {
    id: 'ai',
    label: 'AI & Innovation',
    skills: [
      { name: 'AI Governance Strategy', level: 98 },
      { name: 'GenAI Adoption', level: 95 },
      { name: 'RAG Architecture', level: 92 },
      { name: 'Bedrock/OpenAI', level: 90 },
      { name: 'Prompt Eng. Standards', level: 90 },
      { name: 'DevEx Optimization', level: 95 }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud Strategy',
    skills: [
      { name: 'Multi-Cloud Strategy', level: 95 },
      { name: 'AWS Ecosystem', level: 95 },
      { name: 'FinOps/Cost Mgmt', level: 90 },
      { name: 'Infrastructure as Code', level: 92 },
      { name: 'Resilience Engineering', level: 90 },
      { name: 'Cloud Migration', level: 98 }
    ]
  },
  {
    id: 'data',
    label: 'Data Strategy',
    skills: [
      { name: 'Enterprise Data Mesh', level: 95 },
      { name: 'Medallion Arch', level: 98 },
      { name: 'Data Governance', level: 92 },
      { name: 'Snowflake/Databricks', level: 88 },
      { name: 'Analytics Enablement', level: 90 },
      { name: 'Data Privacy', level: 95 }
    ]
  },
  {
    id: 'arch',
    label: 'Core Architecture',
    skills: [
      { name: 'Microservices Pattern', level: 98 },
      { name: 'Domain Driven Design', level: 92 },
      { name: 'System Integration', level: 95 },
      { name: 'Event-Driven Arch', level: 90 },
      { name: 'Legacy Modernization', level: 98 }
    ]
  }
];

const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillData.flatMap(c => c.skills.map(s => ({...s, category: c.id})))
    : skillData.find(c => c.id === activeCategory)?.skills.map(s => ({...s, category: activeCategory})) || [];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <Cpu className="text-cyan-400" />
          Executive Capability Matrix
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Visualizing executive leadership capabilities alongside deep technical expertise. Demonstrating the ability to bridge business strategy with engineering execution.
        </p>
      </div>

      {/* Control Panel */}
      <div className="flex flex-wrap gap-2 mb-10 p-2 bg-slate-900/50 rounded-xl border border-slate-800 w-fit">
        <FilterBtn 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')} 
          icon={<LayoutGrid size={14} />} 
          label="ALL_AREAS" 
        />
        <FilterBtn 
          active={activeCategory === 'lead'} 
          onClick={() => setActiveCategory('lead')} 
          icon={<Lock size={14} />} 
          label="LEADERSHIP" 
        />
        <FilterBtn 
          active={activeCategory === 'ai'} 
          onClick={() => setActiveCategory('ai')} 
          icon={<Brain size={14} />} 
          label="AI_STRATEGY" 
        />
        <FilterBtn 
          active={activeCategory === 'cloud'} 
          onClick={() => setActiveCategory('cloud')} 
          icon={<Cloud size={14} />} 
          label="CLOUD" 
        />
        <FilterBtn 
          active={activeCategory === 'data'} 
          onClick={() => setActiveCategory('data')} 
          icon={<Database size={14} />} 
          label="DATA" 
        />
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div 
            key={`${skill.name}-${idx}`} 
            className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-200 font-medium text-xs md:text-sm">{skill.name}</span>
              <div className={`w-1.5 h-1.5 rounded-full ${
                 skill.category === 'cloud' ? 'bg-blue-500' :
                 skill.category === 'ai' ? 'bg-purple-500' :
                 skill.category === 'data' ? 'bg-yellow-500' :
                 skill.category === 'lead' ? 'bg-red-500' :
                 'bg-green-500'
              }`}></div>
            </div>
            
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-3">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  skill.category === 'cloud' ? 'bg-blue-500' :
                  skill.category === 'ai' ? 'bg-purple-500' :
                  skill.category === 'data' ? 'bg-yellow-500' :
                  skill.category === 'lead' ? 'bg-red-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] text-slate-500 font-mono">LEVEL: {skill.level}</span>
                <span className="text-[9px] text-cyan-500 font-mono">EXPERT</span>
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
