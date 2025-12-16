import React, { useState } from 'react';
import { Cpu, Cloud, Database, Lock, Code, LayoutGrid, Brain, Terminal, Bot } from 'lucide-react';
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
    id: 'ai_stack',
    label: 'AI/ML Engineering',
    skills: [
      { name: 'RAG & Agentic Systems', level: 98 },
      { name: 'LangChain / LlamaIndex / LangGraph', level: 95 },
      { name: 'Fine-Tuning (LoRA/QLoRA)', level: 90 },
      { name: 'PyTorch / TensorFlow', level: 88 },
      { name: 'Vector DBs (Weaviate/Pinecone)', level: 95 },
      { name: 'MLOps & Data Pipelines', level: 92 },
      { name: 'AI Dev Tools (Cursor/Copilot)', level: 98 },
      { name: 'Multimodal LLMs', level: 90 }
    ]
  },
  {
    id: 'stack',
    label: 'Core Engineering Stack',
    skills: [
      { name: 'Python Ecosystem', level: 98 },
      { name: 'TypeScript / React', level: 95 },
      { name: 'Java / Kotlin', level: 90 },
      { name: 'Go (Golang)', level: 85 },
      { name: 'Kubernetes / Helm', level: 92 },
      { name: 'Terraform / IaC', level: 95 },
      { name: 'Kafka / Event Mesh', level: 88 },
      { name: 'GraphQL / Federation', level: 90 }
    ]
  },
  {
    id: 'ai',
    label: 'AI Strategy & Gov',
    skills: [
      { name: 'AI Governance Strategy', level: 98 },
      { name: 'GenAI Adoption', level: 95 },
      { name: 'Corporate AI Policy', level: 92 },
      { name: 'Model Context Protocol (MCP)', level: 90 },
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
          Technical & Executive Capability Matrix
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Bridging the gap between high-level executive strategy and deep hands-on engineering expertise in AI, Cloud, and Data.
        </p>
      </div>

      {/* Control Panel */}
      <div className="flex flex-wrap gap-2 mb-10 p-2 bg-slate-900/50 rounded-xl border border-slate-800 w-fit">
        <FilterBtn 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')} 
          icon={<LayoutGrid size={14} />} 
          label="ALL" 
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
          label="AI_ENGINEERING" 
        />
         <FilterBtn 
          active={activeCategory === 'stack'} 
          onClick={() => setActiveCategory('stack')} 
          icon={<Terminal size={14} />} 
          label="CORE_STACK" 
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
                 skill.category === 'ai_stack' ? 'bg-purple-400' :
                 skill.category === 'data' ? 'bg-yellow-500' :
                 skill.category === 'lead' ? 'bg-red-500' :
                 skill.category === 'stack' ? 'bg-orange-500' :
                 'bg-green-500'
              }`}></div>
            </div>
            
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-3">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  skill.category === 'cloud' ? 'bg-blue-500' :
                  skill.category === 'ai' ? 'bg-purple-500' :
                  skill.category === 'ai_stack' ? 'bg-purple-400' :
                  skill.category === 'data' ? 'bg-yellow-500' :
                  skill.category === 'lead' ? 'bg-red-500' :
                  skill.category === 'stack' ? 'bg-orange-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] text-slate-500 font-mono">LEVEL: {skill.level}</span>
                <span className={`text-[9px] font-mono ${
                    skill.category === 'stack' || skill.category === 'ai_stack' ? 'text-orange-400' : 'text-cyan-500'
                }`}>
                    {skill.category === 'stack' || skill.category === 'ai_stack' ? 'HANDS_ON' : 'EXPERT'}
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
