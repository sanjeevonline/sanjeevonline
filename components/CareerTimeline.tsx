import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';
import { CareerNode } from '../types';

const history: CareerNode[] = [
  {
    id: 'chief-arch',
    role: 'Chief Architect - Client Activation & Capabilities Domain',
    company: 'McKinsey & Company',
    period: 'Dec 2022 - Present',
    description: 'Directing enterprise-wide cloud and AI strategies with accountability for investment outcomes, platform standards, and global engineering alignment.',
    achievements: [
      'Directed firmwide Cloud & AI strategy for 30+ global engineering teams in regulated environments.',
      'Accountable for Enterprise GenAI/Agentic platforms, integrating RAG & LLMs into firm knowledge ecosystem.',
      'Governed standards (Medallion Architecture, Interoperability) across 180+ products.',
      'Instituted firmwide architecture governance (ADRs, 4+1 model) boosting delivery velocity.',
      'Led investment go/no-go decisions, declining low-code where it conflicted with scalability objectives.'
    ],
    techStack: ['Executive Governance', 'GenAI Strategy', 'Platform Standards', 'Investment Strategy']
  },
  {
    id: 'principal-ii',
    role: 'Principal Architect II - People Portfolio',
    company: 'McKinsey & Company',
    period: 'Aug 2015 - Dec 2022',
    description: 'Executive technology leadership for a $15M annual portfolio supporting 45,000+ colleagues.',
    achievements: [
      'Built and scaled a global engineering organization to 100+ engineers with defined leadership layers.',
      'Led the migration of 50+ legacy applications to AWS/Azure, improving performance by 50%.',
      'Spearheaded enterprise DevOps initiatives (CI/CD, observability) for multi-cloud platforms.',
      'Implemented IaC automation using Terraform and CloudFormation at enterprise scale.'
    ],
    techStack: ['Org Scaling', 'Cloud Migration', 'DevSecOps', 'Portfolio Mgmt']
  },
  {
    id: 'principal-i',
    role: 'Principal Architect - Knowledge Portfolio',
    company: 'McKinsey & Company',
    period: 'May 2012 - Aug 2015',
    description: 'Founding architecture lead for the firm’s first knowledge graph and knowledge applications backbone.',
    achievements: [
      'Built a suite of 30+ knowledge applications forming the backbone of firm knowledge architecture.',
      'Achieved 50% reduction in time-to-market via Agile and DevOps transformation programs.',
      'Launched a nearshore development center to optimize cost and mitigate delivery risk.'
    ],
    techStack: ['Knowledge Graph', 'Agile Transformation', 'Global Delivery']
  },
  {
    id: 'early-career',
    role: 'Early Career Highlights',
    company: 'Tech Mahindra • NIIT Ltd. • Capgemini • Otto Burlington',
    period: '2001 - 2012',
    description: 'Delivered large-scale systems for the Finance Ministry of Belgium, HSBC (credit-card origination), and NIIT.',
    achievements: [
      'Extensive experience in Java/J2EE, distributed systems, and enterprise platform engineering.',
      'Proven track record of building complex business applications from the ground up.'
    ],
    techStack: ['Java/J2EE', 'Distributed Systems', 'Solution Architecture']
  }
];

const CareerTimeline: React.FC = () => {
  return (
    <section className="py-10 md:py-16 px-4 max-w-5xl mx-auto transition-colors duration-300">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <GitCommit className="text-purple-600 dark:text-purple-500" />
          Executive Milestones
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">13+ years of progressive leadership within McKinsey & Company</p>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-12 space-y-10 md:space-y-12">
        {history.map((item, index) => (
          <div key={item.id} className="relative pl-8 md:pl-12 group">
            
            <div className={`
              absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 
              ${index === 0 ? 'bg-green-500 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-purple-500'}
              transition-colors duration-300
            `}></div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 md:p-6 hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm dark:shadow-lg">
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