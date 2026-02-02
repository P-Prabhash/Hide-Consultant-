import React from 'react';
import { Target, Eye, Heart, Award, ShieldCheck, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col items-center justify-center bg-white px-4">
      {/* Background Accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Narrative */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center space-x-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-slate-100">
            <Sparkles size={12} />
            <span>Founded MMXII</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
            INTEGRITY <span className="text-slate-400 font-extralight block">DRIVES</span> PERFORMANCE.
          </h1>

          <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
            Hide Consultant is a premier strategic advisory firm. We bridge the gap between complex board-level vision and surgical execution for the world's most ambitious enterprises.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            {[
              { title: "Mission", icon: <Target className="text-slate-900" size={20} /> },
              { title: "Vision", icon: <Eye className="text-slate-900" size={20} /> },
              { title: "Integrity", icon: <ShieldCheck className="text-slate-900" size={20} /> }
            ].map((v, i) => (
              <div key={i} className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl w-fit">{v.icon}</div>
                <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{v.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual/Team Focus */}
        <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop" 
              alt="Our Strategy Team" 
              className="w-full aspect-[4/5] object-cover grayscale transition-all duration-1000 transform group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 text-white">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">The Brain Trust</div>
              <div className="text-3xl font-black uppercase tracking-tighter">Global Elite <br />Consultants</div>
            </div>
            
            <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black text-white">500+</div>
                <div className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Client Successes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;