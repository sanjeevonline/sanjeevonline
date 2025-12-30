import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';
import { CareerNode } from '../types';

const history: CareerNode[] = [
  {
    id: 'current',
    role: 'Chief Architect - Client Activation & Capabilities',
    company: 'McKinsey & Company',
    period: 'Jan 2023 - Present',
    description: 'Orchestrating enterprise technology strategy, AI transformation, and operational governance for global platforms.',
    achievements: [
      'Operationalized firmwide Generative & Agentic AI governance for 45,000+ users.',
      'Directed AI engineering adoption (Copilot/Cursor), boosting productivity by 20%.',
      'Defined Enterprise Data Strategy (Medallion Architecture) for 180+ products.',
      'Established executive technical governance (ADRs) to accelerate decision velocity.'
    ],
    techStack: ['Strategic Planning', 'AI Governance', 'Org Transformation', 'Budget Mgmt']
  },
  {
    id: 'principal-ii',
    role: 'Principal Architect II - People Portfolio',
    company: 'McKinsey & Company',
    period: 'Aug 2015 - Dec 2022',
    description: 'Executive technology leadership for a $15M annual portfolio supporting 45k+ colleagues globally.',
    achievements: [
      'Led Cloud Transformation strategy, migrating 50+ legacy systems to AWS/Azure.',
      'Scaled engineering organization to 100+ members, mentoring 15+ leaders.',
      'Established firmwide Technical Debt Governance program.',
      'Managed $15M budget and strategic vendor partnerships.'
    ],
    techStack: ['Cloud Strategy', 'Team Scaling', 'Vendor Management', 'DevSecOps']
  },
  {
    id: 'principal-i',
    role: 'Principal Architect - Knowledge Portfolio',
    company: 'McKinsey & Company',
    period: 'May 2012 - Aug 2015',
    description: 'Strategic roadmap definition and delivery for the firm\'s global knowledge ecosystem.',
    achievements: [
      'Delivered 30+ mission-critical applications through Agile/DevOps transformation.',
      'Reduced time-to-market by 50% via process optimization.',
      'Established nearshore development centers to optimize delivery costs.'
    ],
    techStack: ['Agile Transformation', 'Global Delivery', 'Roadmap Planning']
  },
  {
    id: 'early-career',
    role: 'Early Career Highlights',
    company: 'Tech Mahindra • NIIT Ltd. • Capgemini • Otto Burlington',
    period: '2001 - 2012',
    description: 'Progressively senior engineering and architecture roles delivering large-scale enterprise systems including taxation platforms for the Finance Ministry of Belgium, credit-card origination systems for HSBC, and large LMS platforms for NIIT.',
    achievements: [
      'Extensive experience in Java/J2EE, distributed systems, solution design, and enterprise platform engineering.'
    ],
    techStack: ['Java/J2EE', 'Distributed Systems', 'Solution Architecture', 'Platform Eng']
  }
];

const CareerTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto transition-colors duration-300">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <GitCommit className="text-purple-600 dark:text-purple-500" />
          Career Progression
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Timeline of executive milestones and organizational impact</p>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-12 space-y-12">
        {history.map((item, index) => (
          <div key={item.id} className="relative pl-8 md:pl-12 group">
            
            <div className={`
              absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 
              ${index === 0 ? 'bg-green-500 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-purple-500'}
              transition-colors duration-300
            `}></div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm dark:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{item.company}</div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-950 px-3 py-1 rounded border border-slate-200 dark:border-slate-800 transition-colors">
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 italic border-l-2 border-slate-200 dark:border-slate-700 pl-4 transition-colors">
                "{item.description}"
              </p>

              <div className="space-y-3 mb-6">
                {item.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {item.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;