import React from 'react';

const history = [
  {
    company: "MCKINSEY & COMPANY",
    location: "Global Consulting",
    period: "2012 – Present",
    roles: [
      {
        title: "Chief Architect - Client Activation & AI Capabilities",
        period: "2022 – Present",
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
        period: "2015 – 2022",
        impact: "Led a $20M+ annual engineering portfolio supporting 45,000+ colleagues.",
        bullets: [
          "Modernized 50+ systems to AWS, increasing developer productivity by ~50%.",
          "Scaled a global engineering organization of 100+ members.",
          "Partnered with HR and Finance leadership to translate complex models into scalable digital experiences."
        ]
      },
      {
        title: "Principal Architect - Knowledge Systems",
        period: "2012 – 2015",
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
    company: "EARLY CAREER HIGHLIGHTS",
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
    <section className="py-4 border-none">
      <div className="space-y-6">
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Professional History</h2>
        
        <div className="space-y-8">
          {history.map((comp, ci) => (
            <div key={ci} className="space-y-4">
              <div className="border-l-2 border-slate-900 pl-3">
                <h3 className="text-base font-black text-slate-900 tracking-tight leading-tight">{comp.company}</h3>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">{comp.location} — {comp.period}</div>
              </div>

              <div className="space-y-6 pl-3">
                {comp.roles.map((role, ri) => (
                  <div key={ri} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-[13px] font-bold text-slate-900">{role.title}</h4>
                      <span className="text-[10px] font-mono text-slate-400">{role.period}</span>
                    </div>
                    
                    {role.impact && <p className="text-[11px] font-medium text-slate-600 leading-relaxed italic border-l-2 border-blue-100 pl-3">{role.impact}</p>}
                    
                    <ul className="space-y-1">
                      {role.bullets.map((bullet, bi) => (
                        <li key={bi} className="text-[11px] text-slate-500 flex items-start gap-1.5">
                          <span className="mt-1.5 w-1 h-[1px] bg-slate-300 shrink-0"></span>
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