import React from 'react';
import { Target, Eye, Heart, Award, ShieldCheck, Sparkles } from 'lucide-react';

const BRAND_LOGO = "https://drive.google.com/uc?export=view&id=1m9TkHT6vKKCqimvyx4PAAVghznKvln8P";

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
            <span>ESTABLISHED EXCELLENCE</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
            INTEGRITY <span className="text-blue-600 font-extralight block">DRIVES</span> PERFORMANCE.
          </h1>

          <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
            Hidden Hire IT Consultancy & Services is a premier strategic advisory and technology firm. We bridge the gap between complex board-level vision and surgical execution for the world's most ambitious enterprises.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            {[
              { title: "Mission", icon: <Target className="text-blue-600" size={20} /> },
              { title: "Vision", icon: <Eye className="text-blue-600" size={20} /> },
              { title: "Integrity", icon: <ShieldCheck className="text-blue-600" size={20} /> }
            ].map((v, i) => (
              <div key={i} className="space-y-3 text-center md:text-left">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mx-auto md:mx-0">{v.icon}</div>
                <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{v.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Branding - Using the Logo as the main asset */}
        <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-50 aspect-[4/5] flex items-center justify-center border border-slate-100 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>
            
            <img 
              src={BRAND_LOGO} 
              alt="Hidden Hire IT Identity" 
              className="w-4/5 h-4/5 object-contain drop-shadow-2xl transition-all duration-700 transform group-hover:scale-105" 
            />
            
            <div className="absolute bottom-10 left-10 text-slate-900">
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Corporate Identity</div>
              <div className="text-3xl font-black uppercase tracking-tighter">Hidden Hire IT <br />Master Brand</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;