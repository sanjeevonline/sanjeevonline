import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';
import { CareerNode } from '../types';

const history: CareerNode[] = [
  {
    id: 'chief-arch',
    role: 'Chief Architect (Executive Owner)',
    company: 'McKinsey & Company',
    period: 'Dec 2022 - Present',
    description: 'Executive owner of core internal products used by 45,000+ colleagues. Directing firmwide internal product and platform strategy.',
    achievements: [
      'Owned the firmwide strategy spanning Cloud, Data, and AI underpinning knowledge and delivery workflows.',
      'Launched AI-powered internal products embedded into daily consultant and staff workflows.',
      'Built AI-ready knowledge and data foundation connecting structured and unstructured content.',
      'Established product and platform guardrails (data, interoperability, security, cost controls).',
      'Led product investment go/no-go decisions, declining low-code when undermining scalability.'
    ],
    techStack: ['Internal Product Strategy', 'Enterprise AI', 'Cloud-Native', 'Investment Governance']
  },
  {
    id: 'principal-ii',
    role: 'Principal Architect II (General Manager)',
    company: 'McKinsey & Company',
    period: 'Aug 2015 - Dec 2022',
    description: 'General Manager for Employee Experience and Talent Product Portfolio supporting 45,000+ colleagues.',
    achievements: [
      'Directed a $15M annual portfolio supporting colleagues across staffing, recruiting, and mobility.',
      'Led end-to-end modernization of 50+ employee-facing systems into cloud-native platforms on AWS/Azure.',
      'Built and scaled global product & engineering organization (100+ engineers) with clear ownership.',
      'Partnered with HR and Firm Leadership to translate complex people models into digital experiences.',
      'Established internal developer platforms (IDP), CI/CD, and DevEx tooling.'
    ],
    techStack: ['Portfolio Management', 'Org Building', 'Employee Experience', 'Cloud Migration']
  },
  {
    id: 'principal-i',
    role: 'Principal Architect (Product Leader)',
    company: 'McKinsey & Company',
    period: 'May 2012 - Aug 2015',
    description: 'Product leader for digital knowledge and research ecosystem. Founding lead for first enterprise knowledge graph.',
    achievements: [
      'Built a suite of 30+ knowledge products enabling consultants to find expertise and intellectual capital.',
      'Created firm’s first enterprise knowledge graph enabling semantic search across millions of documents.',
      'Led DevOps and developer productivity transformation, cutting time-to-market by ~50%.',
      'Launched a nearshore engineering center to increase delivery capacity and reduce cost.'
    ],
    techStack: ['Knowledge Graph', 'DevOps Transformation', 'Nearshore Engineering', 'Product Leadership']
  },
  {
    id: 'early-career',
    role: 'Strategic Engineering Roles',
    company: 'Tech Mahindra • Capgemini • NIIT • Otto Burlington',
    period: 'May 2001 - Aug 2012',
    description: 'Led architecture for high-stakes enterprise systems including national taxation and global credit systems.',
    achievements: [
      'Orchestrated taxation platform for Finance Ministry of Belgium (High Availability & Compliance).',
      'Led global credit-card origination system design for HSBC (Complex J2EE Integrations).',
      'Spearheaded large-scale Learning Management Systems (LMS) serving millions of users.',
      'Developed deep-domain expertise in Java/J2EE, API Design, and High-Performance Computing.'
    ],
    techStack: ['Java/J2EE', 'Distributed Systems', 'API Design', 'Architecture Rigor']
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
        <p className="text-slate-600 dark:text-slate-400 mt-2">~14 years of transformation leadership within McKinsey & Company</p>
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