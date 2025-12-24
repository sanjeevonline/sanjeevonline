import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Wallet, Brain, Activity, Target, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

const performanceData = [
  { name: 'Legacy', value: 40, label: 'Efficiency' },
  { name: 'Modern', value: 95, label: 'Efficiency' },
];

const teamData = [
  { month: 'Start', engineers: 30 },
  { month: 'Y1', engineers: 55 },
  { month: 'Y2', engineers: 80 },
  { month: 'Current', engineers: 110 },
];

const aiData = [
  { stage: 'Pilot', usage: 20 },
  { stage: 'Beta', usage: 45 },
  { stage: 'Launch', usage: 65 },
  { stage: 'Scale', usage: 95 },
];

interface PillarDetail {
  id: string;
  title: string;
  metric: string;
  subtext: string;
  icon: React.ElementType;
  color: string;
  chart: React.ReactNode;
  strategy: {
    heading: string;
    description: string;
    points: string[];
    tags: string[];
  };
}

const StrategicPillars: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const pillars: PillarDetail[] = [
    {
      id: 'portfolio',
      title: 'Portfolio Modernization',
      metric: '$15M',
      subtext: 'Value Under Management',
      icon: Wallet,
      color: 'text-cyan-600 dark:text-cyan-400',
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData} layout="vertical" barSize={20}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={50} tick={{fill: '#64748b', fontSize: 10}} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                <Cell fill="#cbd5e1" />
                <Cell fill="#06b6d4" />
              </Bar>
          </BarChart>
        </ResponsiveContainer>
      ),
      strategy: {
        heading: 'Legacy Modernization Strategy',
        description: 'Executing a rigorous de-risking strategy for a massive legacy portfolio while transitioning to modern cloud-native architectures.',
        points: [
          'De-risking $15M Portfolio via Strangler Fig pattern',
          'Legacy Retirement Strategy (Sunset 8+ Core Apps)',
          'Security & Compliance Hardening',
          'Managed 180+ Products Lifecycle'
        ],
        tags: ['Risk Mgmt', 'Cloud Migration', 'Cost Optimization']
      }
    },
    {
      id: 'org',
      title: 'Organizational Scale',
      metric: '100+',
      subtext: 'Global Engineering Team',
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400',
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={teamData}>
            <defs>
              <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="engineers" stroke="#3b82f6" strokeWidth={2} fill="url(#colorEng)" />
          </AreaChart>
        </ResponsiveContainer>
      ),
      strategy: {
        heading: 'Engineering Leadership & Culture',
        description: 'Building high-performance, distributed engineering teams through culture, autonomy, and clear technical governance.',
        points: [
          'Scaled organization from 30 to 110+ engineers',
          'Implemented Spotify Squad Model for autonomy',
          'Managed $15M+ Operational Budget',
          'Strategic Vendor Partnerships (AWS, Azure, Databricks)'
        ],
        tags: ['Leadership', 'Scaling', 'Culture']
      }
    },
    {
      id: 'ai',
      title: 'AI/ML & Data Innovation',
      metric: '>50%',
      subtext: 'GenAI Adoption',
      icon: Brain,
      color: 'text-purple-600 dark:text-purple-400',
      chart: (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={aiData}>
              <Line type="monotone" dataKey="usage" stroke="#a855f7" strokeWidth={3} dot={{fill: '#a855f7', r: 4}} />
            </LineChart>
        </ResponsiveContainer>
      ),
      strategy: {
        heading: 'Enterprise Intelligence Roadmap',
        description: 'Operationalizing Generative AI and Data Mesh to create a self-service intelligence layer for the enterprise.',
        points: [
          'GenAI Adoption Strategy (Copilot/Cursor)',
          'Data Mesh Implementation (Gold/Silver/Bronze)',
          'Corporate AI Governance & Ethics',
          'RAG Platform for 45k+ Users'
        ],
        tags: ['GenAI', 'Data Mesh', 'Governance']
      }
    },
    {
      id: 'ops',
      title: 'Engineering Excellence',
      metric: '+50%',
      subtext: 'Developer Productivity',
      icon: Activity,
      color: 'text-green-600 dark:text-green-400',
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={[{v:20},{v:40},{v:35},{v:50},{v:65},{v:85}]}>
             <defs>
              <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2} fill="url(#colorProd)" />
          </AreaChart>
        </ResponsiveContainer>
      ),
      strategy: {
        heading: 'DevEx & Platform Engineering',
        description: 'Reducing cognitive load for developers through platform engineering, automation, and superior tooling.',
        points: [
          'DORA Metrics Optimization',
          'Developer Experience (DevEx) Portal',
          'Technical Debt Governance',
          'CI/CD Standardization'
        ],
        tags: ['DevOps', 'Platform Eng', 'Efficiency']
      }
    }
  ];

  const activePillar = pillars.find(p => p.id === activeId);

  const renderStrategyContent = (pillar: PillarDetail) => (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden text-left shadow-sm transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 ${pillar.color}`}>
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {pillar.strategy.heading}
                </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              {pillar.strategy.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {pillar.strategy.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/50">
                  <CheckCircle2 size={18} className="text-cyan-600 dark:text-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-8 lg:pt-0 lg:pl-12">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Focus Areas</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {pillar.strategy.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="p-4 rounded bg-blue-500/5 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                <div className="text-blue-600 dark:text-blue-400 text-xs font-mono mb-2 uppercase tracking-tight">Impact Verification</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm">
                  Metrics are derived from real-time telemetry across the enterprise portfolio.
                </div>
              </div>
          </div>
        </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900 transition-colors duration-300" id="strategic-pillars">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <Target className="text-cyan-600 dark:text-cyan-500" />
            Strategic Pillars & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            A unified view of performance telemetry and the strategic architecture driving these outcomes. 
            <span className="text-cyan-600 dark:text-cyan-400 ml-1 font-medium">Click on any metrics card to inspect the underlying strategy.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => {
            const isActive = activeId === pillar.id;
            const Icon = pillar.icon;
            
            return (
              <React.Fragment key={pillar.id}>
                <button 
                  onClick={() => setActiveId(isActive ? null : pillar.id)}
                  className={`
                    text-left relative p-6 rounded-xl border transition-all duration-300 group outline-none
                    ${isActive 
                      ? 'bg-white dark:bg-slate-900 border-cyan-500 shadow-[0_4px_20px_rgba(6,182,212,0.1)] dark:shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50' 
                      : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900'}
                  `}
                >
                  {isActive && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-900 border-r border-b border-slate-200 dark:border-cyan-500 transform rotate-45 z-20 hidden md:block"></div>
                  )}

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className={`text-sm font-medium transition-colors ${isActive ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                        {pillar.title}
                      </p>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{pillar.metric}</h3>
                    </div>
                    <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 ${pillar.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="h-24 w-full mb-2 opacity-80">
                    {pillar.chart}
                  </div>
                  
                  <p className="text-xs text-slate-500 font-medium flex items-center justify-between">
                    {pillar.subtext}
                    {isActive && <ChevronDown size={14} className="text-cyan-500 animate-bounce md:hidden" />}
                  </p>
                </button>

                <div className={`
                  md:hidden col-span-1 overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive ? 'max-h-[1200px] opacity-100 mb-6' : 'max-h-0 opacity-0'}
                `}>
                   <div className="pt-2">
                     {renderStrategyContent(pillar)}
                   </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className={`
           hidden md:block overflow-hidden transition-all duration-500 ease-in-out
           ${activeId ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          {activePillar && renderStrategyContent(activePillar)}
        </div>

      </div>
    </section>
  );
};

export default StrategicPillars;