
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import { 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Landmark, 
  ShieldCheck, 
  Zap, 
  Globe, 
  BarChart,
  ChevronRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Explicit mapping of string keys from servicesData.ts to Lucide components
const iconMap: Record<string, any> = {
  Briefcase,
  TrendingUp,
  Cpu,
  Landmark,
  ShieldCheck,
  Zap,
  Globe,
  BarChart
};

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Header Section */}
      <section className="bg-white py-24 lg:py-32 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 bg-indigo-50 rounded-full blur-[100px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-600/5 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-blue-100">
              <Sparkles size={12} className="animate-pulse" />
              <span>Executive Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">
              STRATEGIC <span className="text-blue-600 font-extralight block md:inline">SOLUTIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
              We translate complexity into clarity. Our modular services are engineered to scale operations, protect assets, and accelerate growth for the next generation of industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* High-Impact Services Grid */}
      <section className="py-24 lg:py-32 relative">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((s) => {
              const IconComponent = iconMap[s.iconName] || Briefcase;
              return (
                <Link 
                  key={s.id} 
                  to={`/services/${s.id}`}
                  className="group bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                >
                  {/* Hover Accent Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <div className="mb-10 relative">
                    <div className="absolute -inset-4 bg-slate-50 rounded-2xl group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="relative text-slate-900 group-hover:text-white transition-colors duration-500">
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
                    {s.title}
                  </h3>
                  
                  <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow font-medium">
                    {s.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-slate-400 group-hover:text-blue-600 font-bold text-sm tracking-widest uppercase transition-all">
                    <span className="mr-3 group-hover:mr-4 transition-all">Case Study</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Methodology Section: Dark Mode */}
      <section className="py-24 lg:py-32 bg-slate-950 text-white overflow-hidden relative">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-blue-500 font-bold text-sm tracking-[0.3em] uppercase">The Hide Protocol</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">OUR ARCHITECTURE FOR SUCCESS</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting line (Desktop Only) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent z-0"></div>
            
            {[
              { step: "01", title: "Discovery", desc: "Immersion into your business ecosystem to identify hidden friction points." },
              { step: "02", title: "Strategy", desc: "Data-driven architectural design focused on high-leverage growth outcomes." },
              { step: "03", title: "Execution", desc: "Surgical implementation of protocols with real-time performance tracking." },
              { step: "04", title: "Legacy", desc: "Transitioning to self-sustaining systems for long-term operational dominance." }
            ].map((p, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="mb-8 relative flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-2xl font-black group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-500 shadow-2xl relative z-10">
                    {p.step}
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-blue-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-bold tracking-tight mb-4">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Outreach CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-blue-900/20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="text-center lg:text-left space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">Ready to redefine <br /><span className="text-blue-200">your trajectory?</span></h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium max-w-xl">
                Our partners are currently reviewing new consultancy engagements for Q3 and Q4. Secure your strategic audit today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center group">
                <span>Book Audit</span>
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
