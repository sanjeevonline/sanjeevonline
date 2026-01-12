import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';
import { CareerNode } from '../types';

const history: CareerNode[] = [
  {
    id: 'chief-arch',
    role: 'Chief Architect (Executive Product Owner)',
    company: 'McKinsey & Company',
    period: 'Dec 2022 - Present',
    description: 'Executive owner of core internal products used by 45,000+ colleagues. Directing firmwide internal product and platform strategy spanning Cloud, Data, and AI.',
    achievements: [
      'Launched AI-powered internal products embedded into daily consultant workflows for research & decision-making.',
      'Built AI-ready knowledge foundation connecting structured/unstructured content for explainable experiences.',
      'Established product guardrails (data, security, cost) allowing autonomous team innovation.',
      'Led product investment go/no-go decisions, declining point solutions to protect long-term economics.',
      'Governing internal product strategy across 30+ global teams in regulated environments.'
    ],
    techStack: ['Internal Product Strategy', 'AI-Powered Workflows', 'Investment Discipline', 'Enterprise AI']
  },
  {
    id: 'principal-ii',
    role: 'Principal Architect II (General Manager)',
    company: 'McKinsey & Company',
    period: 'Aug 2015 - Dec 2022',
    description: 'General Manager for Employee Experience and Talent Product Portfolio. Directed a $15M annual portfolio supporting 45,000+ colleagues.',
    achievements: [
      'Translated complex people models into simple, scalable digital experiences for staffing & learning.',
      'Led end-to-end modernization of 50+ employee-facing systems into cloud-native platforms.',
      'Built and scaled global product & engineering organizations (100+ engineers) with clear ownership.',
      'Established internal developer platforms (IDP), CI/CD, and DevEx tooling to accelerate delivery.'
    ],
    techStack: ['Employee Experience', 'Talent Products', 'Org Scaling', 'Cloud-Native Platforms']
  },
  {
    id: 'principal-i',
    role: 'Principal Architect (Product Leader)',
    company: 'McKinsey & Company',
    period: 'May 2012 - Aug 2015',
    description: 'Product leader for the firm’s digital knowledge and research ecosystem. Founding lead for firm’s first knowledge graph.',
    achievements: [
      'Built a suite of 30+ knowledge products enabling consultants to find expertise & reuse intellectual capital.',
      'Created firm’s first enterprise knowledge graph enabling semantic search across millions of documents.',
      'Led DevOps and developer productivity transformation, cutting time-to-market by ~50%.',
      'Launched a nearshore engineering center to increase delivery capacity and improve resilience.'
    ],
    techStack: ['Knowledge Graphs', 'Semantic Search', 'Agile Delivery', 'Nearshore Scaling']
  },
  {
    id: 'early-career',
    role: 'Early Career Strategist',
    company: 'Tech Mahindra • NIIT Ltd. • Capgemini',
    period: '2001 - 2012',
    description: 'Strategic engineering roles delivering high-stakes enterprise systems for Finance Ministry of Belgium and HSBC.',
    achievements: [
      'Orchestrated architectural design for national taxation platforms and global credit-card systems.',
      'Developed deep-domain expertise in Java/J2EE, API Design, and High-Performance Computing.'
    ],
    techStack: ['J2EE', 'Distributed Systems', 'API Design', 'Technical Rigor']
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
        <p className="text-slate-600 dark:text-slate-400 mt-2">13+ years of progressive product leadership within McKinsey & Company</p>
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