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
    <section className="py-8 border-none">
      <div className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-500">Career Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1 shrink-0">
                <h.icon size={20} className="text-slate-400" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white">{h.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;