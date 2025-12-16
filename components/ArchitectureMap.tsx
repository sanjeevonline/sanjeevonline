import React, { useState } from 'react';
import { Server, Database, Brain, Globe, Layers, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { ArchitectureNode } from '../types';

const nodes: ArchitectureNode[] = [
  {
    id: 'legacy',
    label: 'Modernization Strategy',
    type: 'data',
    description: 'Risk Reduction',
    details: ['De-risking $15M Portfolio', 'Legacy Retirement Strategy', 'Security & Compliance'],
    x: 0,
    y: 0
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    type: 'process',
    description: 'Scalability',
    details: ['Multi-Cloud Adoption (AWS/Azure)', 'Cost Optimization (FinOps)', 'Platform Engineering'],
    x: 1,
    y: 0
  },
  {
    id: 'data',
    label: 'Enterprise Data Strategy',
    type: 'data',
    description: 'Intelligence',
    details: ['Data Mesh Implementation', 'Governance Standards', 'Democratized Analytics'],
    x: 1,
    y: 1
  },
  {
    id: 'ai',
    label: 'AI Innovation Roadmap',
    type: 'ai',
    description: 'Transformation',
    details: ['GenAI Adoption Strategy', 'Corporate AI Governance', 'Productivity Uplift (20%)'],
    x: 2,
    y: 0
  },
  {
    id: 'ops',
    label: 'Engineering Excellence',
    type: 'process',
    description: 'Culture',
    details: ['DORA Metrics Optimization', 'Developer Experience (DevEx)', 'Technical Debt Governance'],
    x: 2,
    y: 1
  },
  {
    id: 'scale',
    label: 'Organizational Leadership',
    type: 'output',
    description: 'Growth',
    details: ['Global Team Scaling (100+)', 'Budget Mgmt ($15M+)', 'Strategic Vendor Partnerships'],
    x: 3,
    y: 0.5
  }
];

const ArchitectureMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<ArchitectureNode | null>(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <Activity className="text-cyan-400" />
          Strategic Pillars & Competencies
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Interactive map of strategic focus areas. Click on any node to inspect the leadership initiatives and business outcomes delivered at McKinsey & Company.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Visualization Area */}
        <div className="lg:col-span-2 bg-slate-900/50 rounded-xl border border-slate-800 p-8 relative min-h-[500px] flex items-center justify-center overflow-hidden">
          
          {/* Animated Background Data Flow */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Column 1: Source */}
            <div className="flex flex-col gap-12">
              <NodeButton node={nodes[0]} active={activeNode?.id === nodes[0].id} onClick={setActiveNode} icon={<Server />} />
            </div>

            <ArrowRight className="text-slate-600 hidden md:block" />

            {/* Column 2: Platform */}
            <div className="flex flex-col gap-12">
              <NodeButton node={nodes[1]} active={activeNode?.id === nodes[1].id} onClick={setActiveNode} icon={<Globe />} />
              <NodeButton node={nodes[2]} active={activeNode?.id === nodes[2].id} onClick={setActiveNode} icon={<Database />} />
            </div>

            <ArrowRight className="text-slate-600 hidden md:block" />

            {/* Column 3: Intelligence */}
            <div className="flex flex-col gap-12">
               <NodeButton node={nodes[3]} active={activeNode?.id === nodes[3].id} onClick={setActiveNode} icon={<Brain />} />
               <NodeButton node={nodes[4]} active={activeNode?.id === nodes[4].id} onClick={setActiveNode} icon={<Layers />} />
            </div>

            <ArrowRight className="text-slate-600 hidden md:block" />

            {/* Column 4: Value */}
            <div className="flex flex-col gap-12">
              <NodeButton node={nodes[5]} active={activeNode?.id === nodes[5].id} onClick={setActiveNode} icon={<TrendingUp />} />
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-1">
          <div className={`h-full bg-slate-900 border border-slate-700 rounded-xl p-6 transition-all duration-300 ${activeNode ? 'opacity-100 translate-x-0' : 'opacity-50'}`}>
            {activeNode ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    {activeNode.type === 'ai' ? <Brain size={24}/> : activeNode.type === 'data' ? <Database size={24}/> : <Server size={24}/>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeNode.label}</h3>
                    <p className="text-slate-400 text-sm">{activeNode.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Strategic Outcomes</h4>
                  <ul className="space-y-3">
                    {activeNode.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                   <div className="text-xs text-slate-500 font-mono">
                     ID: {activeNode.id.toUpperCase()}_STRATEGY<br/>
                     STATUS: ACTIVE<br/>
                     AUTHORITY: EXECUTIVE_DIR
                   </div>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center p-8">
                <Activity size={48} className="mb-4 opacity-20" />
                <p>Select a strategic pillar in the map to view leadership initiatives and business metrics.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const NodeButton: React.FC<{ node: ArchitectureNode; active: boolean; onClick: (n: ArchitectureNode) => void; icon: React.ReactNode }> = ({ node, active, onClick, icon }) => (
  <button
    onClick={() => onClick(node)}
    className={`
      relative group flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl border transition-all duration-300
      ${active 
        ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105' 
        : 'bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-750'}
    `}
  >
    <div className={`mb-2 transition-colors ${active ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
      {icon}
    </div>
    <span className={`text-xs text-center px-2 font-medium ${active ? 'text-white' : 'text-slate-400'}`}>
      {node.label}
    </span>
    
    {/* Connector Dots for visual effect */}
    <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-slate-900 border border-slate-600 rounded-full"></div>
    <div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-slate-900 border border-slate-600 rounded-full"></div>
  </button>
);

export default ArchitectureMap;
