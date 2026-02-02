import React from 'react';
import { ExternalLink } from 'lucide-react';

const recommendations = [
  {
    name: "Michael Sioufas",
    role: "Senior Director, Digital Technology",
    text: "Sanjeev consistently provided expert architecture guidance to product managers, engineers, and business leaders, advising on strategic decisions and ensuring sustainable, scalable outcomes."
  },
  {
    name: "Vivek Kumar",
    role: "Product Leader",
    text: "Sanjeev is a seasoned enterprise architect. He independently led the architecture for a large and complex domain. He’s personable and skillful at navigating senior stakeholders."
  },
  {
    name: "Niraj Bhandari",
    role: "Product Leader",
    text: "Sanjeev is one of the rare technologists who understands and talks the language of the business. You can always trust him to come up with a technically sound solution."
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-4 border-none">
      <div className="space-y-4">
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Peer Endorsements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded border border-slate-100 flex flex-col justify-between">
              <p className="text-[11px] text-slate-600 italic leading-relaxed mb-3">"{rec.text}"</p>
              <div>
                <div className="text-[11px] font-bold text-slate-900">{rec.name}</div>
                <div className="text-[9px] text-slate-400 font-medium">{rec.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center pt-2">
          <a 
            href="https://www.linkedin.com/in/sanjeevsprofile/details/recommendations/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors duration-200"
          >
            View all on LinkedIn
            <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;