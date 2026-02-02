import React from 'react';
import { ExternalLink } from 'lucide-react';

const recommendations = [
  {
    name: "Michael Sioufas",
    role: "Senior Director, Digital Technology",
    text: "Sanjeev consistently provided expert architecture guidance to product managers, engineers, and business leaders, advising on strategic decisions and ensuring sustainable, scalable outcomes. Recognized as an exceptional technical leader, thought partner, and trusted advisor, he combined deep technical insight with a focused commitment to delivery."
  },
  {
    name: "Vivek Kumar",
    role: "Product Leader",
    text: "Sanjeev is a seasoned enterprise architect. He independently led the architecture for a large and complex domain. He’s personable, skillful at navigating senior stakeholders with competing priorities, and a great addition to any team looking to rapidly scale their digital transformation."
  },
  {
    name: "Niraj Bhandari",
    role: "Product Leader",
    text: "Sanjeev is one of the rare technologists who understands and talks the language of the business. With him around, the discussion is always around how to ensure value maximization for end users. You can always trust him to come up with a solution which is technically sound and stands the test of time."
  },
  {
    name: "Ketan Patel",
    role: "Technology Leader",
    text: "Sanjeev is a true Software Craftsman and a passionate technologist. He has been instrumental in leading migration of various legacy applications to modern, flexible technology stack while building high performing agile teams. He demonstrates comfort working with immediate team members, clients and senior leadership."
  },
  {
    name: "Vineet Agarwal",
    role: "Principal Architect",
    text: "He is one of the few hands-on architects who is always updated on the latest in technology. Very flexible and agile in his approach and an exceptional problem solver. He helped multiple teams in following best engineering practices and played a vital role in Github adoption in the firm."
  },
  {
    name: "Yash Sikarwar",
    role: "Software Architect",
    text: "Sanjeev is an outstanding mentor with excellent technical and managerial skills. He is always updated with the latest cutting edge technologies and introduces them innovatively to solve business problems. Always focused on code quality, he never compromises with the architecture."
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-8 border-none">
      <div className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-500">Peer Endorsements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed mb-6">"{rec.text}"</p>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{rec.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">{rec.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center pt-4">
          <a 
            href="https://www.linkedin.com/in/sanjeevsprofile/details/recommendations/?detailScreenTabIndex=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors duration-200"
          >
            View all recommendations on LinkedIn
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;