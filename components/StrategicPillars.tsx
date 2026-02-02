import React from 'react';
import { Brain, Cloud, Shield, Scaling } from 'lucide-react';

const StrategicPillars: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Transformation",
      description: "Architected firmwide Generative & Agentic AI strategy, increasing productivity by 15–20% via LLM-driven RAG workflows."
    },
    {
      icon: Scaling,
      title: "Scale & Impact",
      description: "Executive owner of 20+ products, optimizing investment discipline to maximize adoption, ROI, and long-term platform leverage."
    },
    {
      icon: Cloud,
      title: "Cloud Modernization",
      description: "Directed migration of 50+ legacy systems to AWS, achieving 50% performance gains and retiring high-risk technical debt."
    },
    {
      icon: Shield,
      title: "Technical Governance",
      description: "Established foundational standards including Medallion Architecture, ADR frameworks, and the 4+1 documentation model."
    }
  ];

  return (
    <section className="py-4 border-none">
      <div className="space-y-4">
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Career Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-3">
              <div className="mt-0.5 shrink-0">
                <h.icon size={16} className="text-slate-400" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900">{h.title}</h3>
                <p className="text-xs text-slate-600 leading-normal">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;