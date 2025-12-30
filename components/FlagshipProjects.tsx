import React from 'react';
import { Project } from '../types';
import { Database, Cloud, Brain, Shield, Code2, Workflow, Rocket, Lock, Activity } from 'lucide-react';

const projects: Project[] = [
  {
    id: 'ai-platform',
    title: 'Enterprise GenAI Brain',
    type: 'ai',
    description: 'Architected a secure RAG platform for 45,000+ users. Integrated internal Knowledge with OpenAI to reduce information retrieval time by 30%.',
    tech: ['LangChain', 'LangGraph', 'Pinecone', 'Weaviate', 'OpenAI', 'React']
  },
  {
    id: 'devex-accel',
    title: 'AI-First Engineering',
    type: 'process',
    description: 'Led the adoption of Agentic code assistants like GitHub Copilot, Cursor and Antigravity across 30+ global teams, achieving a measurable 20% increase in developer velocity and code quality.',
    tech: ['GitHub Copilot', 'Cursor', 'AntiGravity', 'DORA Metrics', 'Governance']
  },
  {
    id: 'data-mesh',
    title: 'Medallion Data Fabric',
    type: 'data',
    description: 'Designed the "Gold/Silver/Bronze" architecture standard for 180+ products, creating a unified data mesh for real-time analytics and reporting.',
    tech: ['Databricks', 'Delta Lake', 'Unity Catalog', 'Python', 'Data Mesh', 'Airflow', 'Iceberg']
  }
];

const FlagshipProjects: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Rocket className="text-cyan-600 dark:text-cyan-500" />
              Flagship Initiatives
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Architectural blueprints of successfully delivered enterprise-scale transformations. These represent finalized high-impact systems.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded border border-slate-200 dark:border-slate-800">
             <div className="text-right font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
               <div>VERIFICATION: ARCH_LOCKED</div>
               <div>SYSTEM_STATUS: PROD</div>
             </div>
             <Shield className="text-green-500" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col h-full cursor-default shadow-sm">
      
      {/* Visual Blueprint Header */}
      <div className="h-48 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="relative z-10 transition-transform duration-700">
           {renderBlueprint(project.type)}
        </div>
        
        {/* Technical Label */}
        <div className="absolute top-4 left-4">
           <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 tracking-widest uppercase backdrop-blur-sm">
             {project.type}_SPEC_FINAL
           </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={14} className="text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="pt-5 border-t border-slate-100 dark:border-slate-800/50">
          <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest font-bold">Stack Manifest:</div>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderBlueprint = (type: string) => {
  if (type === 'ai') {
    return (
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-1 text-blue-500 dark:text-blue-400">
            <Database size={20} />
            <span className="text-[8px] font-mono opacity-50">KNOWLEDGE</span>
        </div>
        <div className="w-8 border-t border-slate-300 dark:border-slate-700 border-dashed"></div>
        <div className="p-4 border border-purple-500/20 rounded-2xl bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative">
            <Brain size={36} className="text-purple-600 dark:text-purple-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
        </div>
        <div className="w-8 border-t border-slate-300 dark:border-slate-700 border-dashed"></div>
        <div className="flex flex-col items-center gap-1 text-cyan-600 dark:text-cyan-400">
            <Workflow size={20} />
            <span className="text-[8px] font-mono opacity-50">AGENTS</span>
        </div>
      </div>
    );
  }
  if (type === 'data') {
    return (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-1 text-amber-800/60 dark:text-amber-800/50">
            <Database size={18} />
            <span className="text-[7px] font-mono">BRONZE</span>
        </div>
        <div className="w-4 h-[1px] bg-slate-300 dark:bg-slate-700"></div>
        <div className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <Database size={26} />
            <span className="text-[7px] font-mono">SILVER</span>
        </div>
        <div className="w-4 h-[1px] bg-slate-300 dark:bg-slate-700"></div>
        <div className="flex flex-col items-center gap-1 text-amber-500 dark:text-amber-400">
            <Database size={38} className="drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
            <span className="text-[7px] font-mono font-bold">GOLD_MASTER</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4">
       <div className="flex flex-col items-center gap-1 text-indigo-500 dark:text-indigo-400">
        <Code2 size={20} />
        <span className="text-[8px] font-mono opacity-50">REPOS</span>
       </div>
       <div className="h-px w-6 bg-slate-300 dark:bg-slate-700"></div>
       <div className="p-3 border border-blue-500/20 rounded-xl bg-blue-500/5 dark:bg-blue-500/10">
         <Workflow size={32} className="text-blue-600 dark:text-blue-400" />
       </div>
       <div className="h-px w-6 bg-slate-300 dark:bg-slate-700"></div>
       <div className="flex flex-col items-center gap-1 text-emerald-600 dark:text-emerald-400">
        <Cloud size={20} />
        <span className="text-[8px] font-mono opacity-50">PROD</span>
       </div>
    </div>
  );
};

export default FlagshipProjects;