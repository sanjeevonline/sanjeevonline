import React from 'react';
import { Zap, Cloud, Bot, BookOpen, Users, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const BusinessImpact: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-slate-900 bg-slate-950/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Technology Transformation */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="text-cyan-400" />
              Tech Transformations
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Driving engineering excellence and modernization at scale.
            </p>
          </div>

          <div className="space-y-6">
            <TechCard 
              icon={<Bot className="text-purple-400" size={24} />}
              title="GenAI & Agentic AI Implementation"
              stats={[
                { label: "Productivity Lift", value: "+30%" },
                { label: "Tooling", value: "Cursor/Copilot" }
              ]}
              description="Implemented agentic AI workflows and code assistants across the engineering organization, integrating directly with CI/CD pipelines to accelerate delivery."
            />
            
            <TechCard 
              icon={<Cloud className="text-blue-400" size={24} />}
              title="Cloud Modernization"
              stats={[
                { label: "Products Migrated", value: "30+" },
                { label: "Legacy Retired", value: "8 Apps" }
              ]}
              description="Led migration from on-prem to AWS. Modernized stack enabling autonomous teams, fewer handoffs, and faster TTM."
            />
            
            <TechCard 
              icon={<Zap className="text-yellow-400" size={24} />}
              title="DevOps Transformation"
              stats={[
                { label: "Dev Productivity", value: "+50%" },
                { label: "Delivery Speed", value: "300% Faster" }
              ]}
              description="Established predictable, stable environments and improved overall engineering culture through rigorous automation."
            />

          </div>
        </div>

        {/* Right Column: Business Impact */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Rocket className="text-green-400" />
              Business Impact Programs
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Delivering tangible value through product suite leadership.
            </p>
          </div>

          <div className="grid gap-4">

              <BusinessCard 
               icon={<Rocket className="text-indigo-400" />}
               title="Client Activation & Enablement"
               description="Infused AI into every part of the client workflow to accelerate activation and enhance engagement outcomes."
             />

             <BusinessCard 
               icon={<Users className="text-orange-400" />}
               title="People Process Digitization"
               description="Digitized core HR workflows including Development Feedback, Staffing/Engagement models, Pricing Transformation, and Digital Evaluation."
             />


             <BusinessCard 
               icon={<BookOpen className="text-pink-400" />}
               title="Knowledge Management"
               description="Built a comprehensive product suite managing the full lifecycle of firm knowledge—from procurement to management and dissemination."
             />
             
          </div>

          {/* Note: Core Impact Pillars moved to TelemetryDashboard for higher visibility */}
          
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ icon, title, stats, description }: any) => (
  <div className="group relative bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-all shadow-sm">
    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-800 to-transparent group-hover:from-cyan-500 transition-all rounded-l-xl"></div>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
          {icon}
        </div>
        <h3 className="font-bold text-slate-100">{title}</h3>
      </div>
    </div>
    
    <div className="flex gap-4 mb-4">
      {stats.map((stat: any, i: number) => (
        <div key={i} className="bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase font-mono">{stat.label}</div>
          <div className="text-sm font-bold text-white">{stat.value}</div>
        </div>
      ))}
    </div>

    <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-3 mt-3">
      {description}
    </p>
  </div>
);

const BusinessCard = ({ icon, title, description }: any) => (
  <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:bg-slate-900 transition-colors">
    <div className="mt-1 shrink-0 p-2 bg-slate-950 rounded-full border border-slate-800 text-slate-300">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-200 text-sm mb-1 flex items-center gap-2">
        {title}
        <ArrowRight size={12} className="text-slate-600" />
      </h3>
      <p className="text-slate-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default BusinessImpact;