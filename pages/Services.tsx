import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import { 
  Briefcase, TrendingUp, Cpu, Landmark, 
  ShieldCheck, Zap, Globe, BarChart, ArrowRight, Sparkles 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Briefcase, TrendingUp, Cpu, Landmark, 
  ShieldCheck, Zap, Globe, BarChart
};

const Services: React.FC = () => {
  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col bg-white px-4 md:px-8 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full space-y-8">
        
        {/* Tight Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-slate-50 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-slate-100">
              <Sparkles size={12} />
              <span>CAPABILITIES</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase">
              STRATEGIC <span className="text-slate-400 font-extralight">PROTOCOLS.</span>
            </h1>
          </div>
          <p className="text-sm text-slate-500 max-w-sm font-medium hidden md:block">
            Engineering long-term operational dominance through surgical implementation of high-leverage growth strategies.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4 overflow-hidden">
          {services.map((s) => {
            const Icon = iconMap[s.iconName] || Briefcase;
            return (
              <Link 
                key={s.id} 
                to={`/services/${s.id}`}
                className="group relative bg-white rounded-3xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-900/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:scale-125 transition-all">
                  <Icon size={64} className="text-slate-900" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="bg-slate-900 text-white p-3 rounded-xl w-fit group-hover:bg-black transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-slate-600 transition-colors">{s.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{s.description}</p>
                </div>

                <div className="flex items-center text-[9px] font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-widest mt-4">
                  <span>Explore engagement</span>
                  <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;