import React from 'react';
import { MessageSquareQuote, Linkedin, UserCheck, ShieldCheck } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    name: "Michael Sioufas",
    role: "Executive Leadership",
    company: "Former Manager",
    date: "Recent",
    text: "Sanjeev consistently provided expert architecture guidance to product managers, engineers, and business leaders, advising on strategic decisions and ensuring sustainable, scalable outcomes. Recognized as an exceptional technical leader, thought partner, and trusted advisor."
  },
  {
    id: 2,
    name: "Niraj Bhandari",
    role: "Product Leader",
    company: "McKinsey & Company",
    date: "October 2014",
    text: "Sanjeev is one of the rare technologists who understands and talks the language of the business. With him around, the discussion is always around how to ensure value maximization for end users... He is one of those gems who can turn any situation on its head."
  },
  {
    id: 3,
    name: "Luc Vanlathem",
    role: "Solution Architect",
    company: "Client Partner",
    date: "January 2012",
    text: "I hired Sanjeev on a multi-million dollar project for his good analytical skills... He managed successfully a number of projects from a design point of view and lead the development team in an efficient and correct way. He was key to making the offshore development factory a success."
  },
  {
    id: 4,
    name: "Ketan Patel",
    role: "Technical Leader",
    company: "McKinsey & Company",
    date: "October 2014",
    text: "He is a true Software Craftsman and a passionate technologist. Sanjeev has been instrumental in leading migration of various legacy applications to modern, flexible technology stacks while building high performing agile teams."
  },
  {
    id: 5,
    name: "Prashant Tripathi",
    role: "Director & Head - IoT",
    company: "Pentair Water India",
    date: "December 2011",
    text: "His contribution in project success & customer handling has been exceptional. He is man of lots of innovative ideas and is technically very sound... His ability to design and architect complex business applications is great."
  },
  {
    id: 6,
    name: "Paul Malatesta",
    role: "Supply Chain Lead",
    company: "McKinsey & Company",
    date: "July 2015",
    text: "Sanjeev had a good grasp of the technologies supporting our applications... By utilizing these skills and partnering closely with the business, Sanjeev was able to deliver against a number of key projects to improve the knowledge management capabilities."
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-slate-900 bg-slate-950">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wider uppercase">
          <ShieldCheck size={14} />
          Verified Logs
        </div>
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <UserCheck className="text-cyan-400" />
          Peer Endorsements
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Validated feedback from executive leadership, peers, and engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl relative hover:border-slate-600 transition-all duration-300 group flex flex-col justify-between">
            {/* Quote Icon Background */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquareQuote size={40} className="text-cyan-500" />
            </div>

            <div className="mb-6 relative z-10">
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{rec.text}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-slate-400 font-bold text-xs">
                  {rec.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{rec.name}</h4>
                  <p className="text-slate-500 text-xs">{rec.role}, {rec.company}</p>
                </div>
              </div>
              
              <div className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity">
                <Linkedin size={16} />
              </div>
            </div>
            
            <div className="mt-2 text-[10px] text-slate-600 font-mono text-right">
              TIMESTAMP: {rec.date}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://www.linkedin.com/in/sanjeevsprofile/details/recommendations/?detailScreenTabIndex=0" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-slate-500 pb-0.5"
        >
          <Linkedin size={14} />
          View all recommendations on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default SocialProof;