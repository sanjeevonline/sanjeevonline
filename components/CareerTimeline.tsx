import React from 'react';

const history = [
  {
    company: "MCKINSEY & COMPANY",
    location: "Global Consulting & Professional Services",
    period: "May 2012 – Present",
    roles: [
      {
        title: "Chief Architect - Client Activation & AI Capabilities",
        period: "Dec 2022 – Present",
        impact: "Executive owner of McKinsey’s core internal products and AI foundations for 45,000+ colleagues globally.",
        bullets: [
          "Advisor to senior leadership on AI investment strategy and platform economics.",
          "Defined enterprise AI strategy and operating model for Generative & Agentic AI.",
          "Owned a suite of AI-enabled products across 30+ global teams.",
          "Established Medallion Architecture reference model and ADR frameworks.",
          "Led high-stakes technology investment and go/no-go decisions."
        ]
      },
      {
        title: "Principal Architect II - People Systems",
        period: "Aug 2015 – Dec 2022",
        impact: "Led a $20M+ annual engineering portfolio supporting 45,000+ colleagues.",
        bullets: [
          "Modernized 50+ systems to AWS, increasing developer productivity by ~50%.",
          "Scaled a global engineering organization of 100+ members.",
          "Partnered with HR and Finance leadership to translate complex models into scalable digital experiences."
        ]
      },
      {
        title: "Principal Architect - Knowledge Systems",
        period: "May 2012 – Aug 2015",
        impact: "Product and architecture leader for McKinsey’s digital knowledge and research ecosystem.",
        bullets: [
          "Built 30+ bespoke knowledge and research products used globally.",
          "Reduced time-to-market 6X by leading enterprise-wide Agile and DevOps transformation.",
          "Launched a nearshore engineering center to increase delivery capacity and reduce cost."
        ]
      }
    ]
  },
  {
    company: "SELECTED EARLY CAREER HIGHLIGHTS",
    location: "Capgemini • Tech Mahindra • Otto",
    period: "2001 – 2012",
    roles: [
      {
        title: "Strategic Engineering & Architecture Roles",
        period: "2001 – 2012",
        bullets: [
          "Architect (Tech Mahindra): Designed a national taxation platform for the Finance Ministry of Belgium.",
          "Solution Architect (Capgemini): Led global credit-card origination systems for HSBC.",
          "Core Engineering: Deep technical roots in Java, API Design, and high-performance computing."
        ]
      }
    ]
  }
];

const CareerTimeline: React.FC = () => {
  return (
    <section className="py-8 border-none">
      <div className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-500">Professional Experience</h2>
        
        <div className="space-y-12">
          {history.map((comp, ci) => (
            <div key={ci} className="space-y-6">
              <div className="border-l-4 border-slate-900 dark:border-white pl-4">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{comp.company}</h3>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{comp.location} — {comp.period}</div>
              </div>

              <div className="space-y-8 pl-4">
                {comp.roles.map((role, ri) => (
                  <div key={ri} className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">{role.title}</h4>
                      <span className="text-xs font-mono text-slate-500">{role.period}</span>
                    </div>
                    
                    {role.impact && <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-2 border-blue-600 dark:border-blue-500 pl-4">{role.impact}</p>}
                    
                    <ul className="space-y-1.5">
                      {role.bullets.map((bullet, bi) => (
                        <li key={bi} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-[1px] bg-slate-400 shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;