import React from 'react';
import { Project } from '../types';
import { FolderGit2, ArrowUpRight, Database, Cloud, Brain, Server, Shield, FileText, Code2, Workflow, Rocket } from 'lucide-react';

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
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Rocket className="text-cyan-600 dark:text-cyan-500" />
              Flagship Initiatives
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              High-impact technical blueprints driving enterprise value. Hover to inspect implementation details.
            </p>
          </div>
          <div className="hidden md:block text-right font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-tight">
            <div>SECURE CONNECTION ESTABLISHED</div>
            <div>ACCESS LEVEL: PUBLIC</div>
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
    <div className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-900/10 flex flex-col h-full">
      
      {/* Visual Blueprint Header */}
      <div className="h-48 bg-white dark:bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-slate-800 shrink-0 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
           {renderBlueprint(project.type)}
        </div>
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           <span className="text-[10px] font-mono text-green-600 dark:text-green-400">DEPLOYED</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const renderBlueprint = (type: string) => {
  if (type === 'ai') {
    return (
      <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
        <div className="flex flex-col items-center gap-1">
            <Database size={24} />
            <span className="text-[8px] font-mono">KNOWLEDGE</span>
        </div>
        <div className="w-8 border-t border-dashed border-slate-300 dark:border-slate-600 animate-pulse"></div>
        <div className="p-3 border border-purple-500/20 dark:border-purple-500/30 rounded-full bg-purple-500/5 dark:bg-purple-500/10">
            <Brain size={40} className="text-purple-600 dark:text-purple-400" />
        </div>
        <div className="w-8 border-t border-dashed border-slate-300 dark:border-slate-600 animate-pulse"></div>
        <div className="flex flex-col items-center gap-1">
            <FileText size={24} />
            <span className="text-[8px] font-mono">RESPONSE</span>
        </div>
      </div>
    );
  }
  if (type === 'data') {
    return (
      <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
        <div className="flex flex-col items-center">
            <Database size={24} className="text-yellow-700" />
            <span className="text-[8px] font-mono mt-1 uppercase">Bronze</span>
        </div>
        <ArrowUpRight size={16} className="text-slate-300 dark:text-slate-600" />
        <div className="flex flex-col items-center">
            <Database size={32} className="text-slate-500 dark:text-slate-400" />
            <span className="text-[8px] font-mono mt-1 uppercase">Silver</span>
        </div>
        <ArrowUpRight size={16} className="text-slate-300 dark:text-slate-600" />
        <div className="flex flex-col items-center">
            <Database size={40} className="text-yellow-600 dark:text-yellow-500" />
            <span className="text-[8px] font-mono mt-1 uppercase">Gold</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
       <div className="flex flex-col items-center gap-1">
        <Code2 size={24} />
        <span className="text-[8px] font-mono">CODE</span>
       </div>
       <div className="h-px w-6 bg-slate-300 dark:bg-slate-600"></div>
       <div className="p-2 border border-blue-500/20 dark:border-blue-500/30 rounded bg-blue-500/5 dark:bg-blue-500/10">
         <Workflow size={32} className="text-blue-600 dark:text-blue-400" />
       </div>
       <div className="h-px w-6 bg-slate-300 dark:bg-slate-600"></div>
       <div className="flex flex-col items-center gap-1">
        <Cloud size={24} />
        <span className="text-[8px] font-mono uppercase">Prod</span>
       </div>
    </div>
  );
};

export default FlagshipProjects;