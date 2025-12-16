import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Wallet, Brain } from 'lucide-react';

const performanceData = [
  { name: 'Legacy', value: 40, label: 'Efficiency' },
  { name: 'Modern', value: 95, label: 'Efficiency' },
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
    <section className="py-20 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <TrendingUp className="text-green-500" />
            Performance Telemetry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Portfolio (Moved to First) */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden shadow-lg">
             {/* Decorative Background */}
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl opacity-50"></div>
             
             <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">Portfolio Value</p>
                <h3 className="text-3xl font-bold text-white mt-1">$15M</h3>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg text-cyan-400">
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

          {/* Card 2: Org Scale */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">Eng. Organization</p>
                <h3 className="text-3xl font-bold text-white mt-1">100+</h3>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                <Users size={20} />
              </div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={teamData}>
                  <defs>
                    <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" tick={{fill: '#64748b', fontSize: 10}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px'}} />
                  <Area type="monotone" dataKey="engineers" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEng)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
             <p className="text-xs text-slate-500 mt-2">Scaled global teams & architects across regions</p>
          </div>

          {/* Card 3: AI Adoption (Moved to Third) */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
             <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">AI Adoption</p>
                <h3 className="text-3xl font-bold text-white mt-1">&gt;50% <span className="text-purple-400 text-base">▲</span></h3>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg text-purple-400">
                <Brain size={20} />
              </div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={aiData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="stage" tick={{fill: '#64748b', fontSize: 10}} />
                    <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px'}} />
                    <Line type="monotone" dataKey="usage" stroke="#a855f7" strokeWidth={3} dot={{fill: '#a855f7'}} />
                 </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">Increase in consultant engagement via Enterprise RAG</p>
          </div>

          {/* Card 4: Platform Efficiency (Renamed) */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">Platform Efficiency</p>
                <h3 className="text-3xl font-bold text-white mt-1">50% <span className="text-green-400 text-base">▲</span></h3>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg text-green-400">
                <ActivityIcon />
              </div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} layout="vertical">
                   <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" width={50} tick={{fill: '#64748b', fontSize: 10}} />
                   <Tooltip 
                    contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px'}}
                    cursor={{fill: 'transparent'}}
                   />
                   <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      <Cell fill="#334155" />
                      <Cell fill="#22c55e" />
                   </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">Legacy On-Prem vs. Cloud Migration Velocity</p>
          </div>

        </div>
      </div>
    </section>
  );
};

const MetricRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-slate-400 text-xs">{label}</span>
    <span className="text-slate-200 font-mono font-semibold text-sm">{value}</span>
  </div>
);

// Simple SVG icon wrapper
const ActivityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default TelemetryDashboard;