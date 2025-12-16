import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Wallet, Brain } from 'lucide-react';

const performanceData = [
  { name: 'Legacy', value: 40, label: 'Efficiency' },
  { name: 'Cloud Native', value: 90, label: 'Efficiency' },
];

const teamData = [
  { month: 'Start', engineers: 30 },
  { month: 'Y1', engineers: 55 },
  { month: 'Y2', engineers: 80 },
  { month: 'Current', engineers: 110 },
];

const aiData = [
  { stage: 'Pilot', usage: 20 },
  { stage: 'Beta', usage: 45 },
  { stage: 'Launch', usage: 65 },
  { stage: 'Scale', usage: 95 },
];

const TelemetryDashboard: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <TrendingUp className="text-green-400" />
            Performance Telemetry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Performance Boost */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">System Performance</p>
                <h3 className="text-3xl font-bold text-white mt-1">50% <span className="text-green-500 text-base">▲</span></h3>
              </div>
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                <ActivityIcon />
              </div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} layout="vertical">
                   <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" width={80} tick={{fill: '#94a3b8', fontSize: 10}} />
                   <Tooltip 
                    contentStyle={{backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc'}}
                    cursor={{fill: 'transparent'}}
                   />
                   <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      <Cell fill="#64748b" />
                      <Cell fill="#22c55e" />
                   </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">Legacy On-Prem vs. AWS/Azure Cloud Migration</p>
          </div>

          {/* Card 2: Org Scale */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">Eng. Organization</p>
                <h3 className="text-3xl font-bold text-white mt-1">100+</h3>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Users size={20} />
              </div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={teamData}>
                  <defs>
                    <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="month" tick={{fill: '#94a3b8', fontSize: 10}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc'}} />
                  <Area type="monotone" dataKey="engineers" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEng)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
             <p className="text-xs text-slate-500 mt-2">Scaled global teams & architects across regions</p>
          </div>

          {/* Card 3: AI Impact (New) */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
             <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">AI Adoption</p>
                <h3 className="text-3xl font-bold text-white mt-1">&gt;50% <span className="text-purple-500 text-base">▲</span></h3>
              </div>
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Brain size={20} />
              </div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={aiData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="stage" tick={{fill: '#94a3b8', fontSize: 10}} />
                    <Tooltip contentStyle={{backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc'}} />
                    <Line type="monotone" dataKey="usage" stroke="#a855f7" strokeWidth={3} dot={{fill: '#a855f7'}} />
                 </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">Increase in consultant engagement via Enterprise RAG</p>
          </div>

          {/* Card 4: Portfolio */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
             
             <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">Portfolio Value</p>
                <h3 className="text-3xl font-bold text-white mt-1">$15M</h3>
              </div>
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <Wallet size={20} />
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <MetricRow label="Users" value="45k+" />
              <MetricRow label="Products" value="180+" />
              <MetricRow label="Teams" value="30+" />
            </div>
            
            <p className="text-xs text-slate-500 mt-6 border-t border-slate-800 pt-4">
              Strategic oversight of critical tech portfolios.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const MetricRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-slate-400 text-xs">{label}</span>
    <span className="text-white font-mono font-semibold text-sm">{value}</span>
  </div>
);

// Simple SVG icon wrapper
const ActivityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default TelemetryDashboard;
