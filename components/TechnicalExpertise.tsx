import React from 'react';

const TechnicalExpertise: React.FC = () => {
  const categories = [
    {
      title: "Executive Leadership & Strategy",
      skills: [
        "Enterprise Architecture & Platform Strategy",
        "AI Transformation & Operating Models",
        "Portfolio & Investment Governance ($20M+)",
        "Organization Design & Scaling (100+ Engineers)",
        "Product-Centric Delivery & Value Realization",
        "Executive Advisory, Risk & Decision Governance"
      ]
    },
    {
      title: "AI, Data & Intelligent Platforms",
      skills: [
        "Generative & Agentic AI",
        "Retrieval-Augmented Generation (RAG) Systems",
        "LLM Enablement, Safety & Governance",
        "MLOps, Vector Databases & Model Lifecycle",
        "Data Lakehouse & Medallion Architecture",
        "Advanced Analytics & Knowledge Platforms"
      ]
    },
    {
      title: "Cloud, Engineering & Platforms",
      skills: [
        "Cloud-Native Architecture (AWS, Azure, Multi-Cloud)",
        "Kubernetes, Microservices & Event-Driven Systems",
        "Internal Developer Platforms (IDP) & DevEx",
        "DevSecOps, CI/CD & Platform Engineering",
        "Distributed Systems, APIs & Integration",
        "Java, Python, SQL"
      ]
    }
  ];

  return (
    <section className="py-4 border-none">
      <div className="space-y-4">
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Executive & Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-[11px] font-bold text-slate-900 border-b border-slate-100 pb-1">{cat.title}</h3>
              <ul className="space-y-1">
                {cat.skills.map((skill, si) => (
                  <li key={si} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;