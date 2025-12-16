import React from 'react';
import { Terminal, Calendar, ArrowRight, Hash } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Why I Wrote McKinsey\'s First Architecture Decision Record (ADR)',
    excerpt: 'Scaling from 0 to 180+ products requires more than just code; it requires decision velocity. Implementing the 4+1 view model and structured ADRs to streamline governance...',
    date: '2024-03-10',
    tags: ['Architecture', 'Governance'],
    link: 'https://blog.sanjeevonline.com/why-adrs-matter'
  },
  {
    id: '2',
    title: 'AI-Assisted Engineering: The 20% Productivity Reality',
    excerpt: 'Beyond the hype of GitHub Copilot and Cursor. Analyzing the DORA metrics after rolling out AI tools to 30+ global teams. It’s not just speed; it’s cognitive load reduction.',
    date: '2024-02-15',
    tags: ['GenAI', 'DevEx'],
    link: 'https://blog.sanjeevonline.com/ai-engineering-metrics'
  },
  {
    id: '3',
    title: 'Medallion Architecture in the Age of Data Mesh',
    excerpt: 'How we standardized Gold/Silver/Bronze layers across a decentralized enterprise to enable real-time analytics without creating a monolith.',
    date: '2024-01-22',
    tags: ['Data', 'Lakehouse'],
    link: 'https://blog.sanjeevonline.com/medallion-architecture'
  }
];

const ThoughtStream: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="mb-12 flex items-center gap-4">
        <div className="bg-slate-800 p-3 rounded-lg">
          <Terminal className="text-green-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Thought Stream</h2>
          <p className="text-slate-500 font-mono text-sm">tail -f /var/log/insights.log</p>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="block group"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 transition-all duration-300 hover:border-green-500/50 hover:bg-slate-900/80">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                 <h3 className="text-xl font-bold text-slate-200 group-hover:text-green-400 transition-colors font-mono">
                   {`> ${post.title}`}
                 </h3>
                 <div className="flex items-center gap-2 text-xs text-slate-500 font-mono shrink-0">
                   <Calendar size={12} />
                   {post.date}
                 </div>
              </div>

              <p className="text-slate-400 text-sm mb-4 border-l-2 border-slate-700 pl-4 group-hover:border-green-500/30 transition-colors">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      <Hash size={10} /> {tag}
                    </span>
                  ))}
                </div>
                <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono flex items-center gap-1">
                  READ_FULL_LOG <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </a>
        ))}
        
        <div className="text-center mt-8">
           <a href="https://blog.sanjeevonline.com" className="inline-block text-slate-500 hover:text-white font-mono text-sm border-b border-transparent hover:border-white transition-all pb-1">
             View all archives @ blog.sanjeevonline.com
           </a>
        </div>
      </div>
    </section>
  );
};

export default ThoughtStream;
