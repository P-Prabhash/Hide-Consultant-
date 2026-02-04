import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, GraduationCap, Briefcase, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-white flex flex-col lg:flex-row relative">
      {/* Strategic Core (Left Half - 50%) */}
      <div className="w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center px-8 md:px-16 lg:pr-16 lg:pl-20 bg-white overflow-hidden text-center">
        {/* Abstract Background Accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
        
        <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom duration-700 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-200">
            <Star className="h-3 w-3 fill-blue-400 text-blue-400" />
            <span>Apex Strategic Partner</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              SCALE <span className="text-blue-600 font-extralight block">WITHOUT</span> LIMITS.
            </h1>
          </div>
          
          <p className="text-lg lg:text-xl text-slate-500 max-w-md leading-relaxed font-medium">
            Elite strategic management for modern enterprises navigating global complexity. Trusted by over 500+ global brands.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center space-x-3 group min-w-[200px]">
              <span>Start Engagement</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center min-w-[200px]">
              Capabilities
            </Link>
          </div>
        </div>

        {/* Minimal Integrated Trust Bar */}
        <div className="absolute bottom-12 left-0 right-0 px-8 animate-in fade-in duration-1000 delay-500 flex flex-col items-center">
          <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Trusted by Market Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-40">
            {['FORTUNE 500', 'TECH GIANTS', 'GLOBAL INC.'].map((partner, i) => (
              <span key={i} className="text-sm font-black text-slate-900 tracking-tighter whitespace-nowrap">{partner}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Central Blue Split Line - Full height divider perfectly in the middle */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-blue-600/20 z-20">
        {/* Solid Blue Line Core */}
        <div className="absolute inset-y-0 left-0 w-full bg-blue-600/60"></div>
        {/* Glowing Central Indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
           <div className="w-4 h-4 bg-white rounded-full border-2 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
           <div className="absolute w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Program Pillar Cards (Right Half - 50%) */}
      <div className="w-full lg:w-1/2 h-full bg-slate-50 p-4 lg:py-8 lg:pl-16 lg:pr-8 flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full lg:h-[90%]">
          
          {/* Card 1: Training */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group">
            <div className="relative h-2/5 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional Training" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                <GraduationCap size={18} className="text-white" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-auto">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[8px] font-black uppercase tracking-widest mb-4">
                  Tier 1 Skillset
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3 leading-none text-left">Training</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-wider text-left">
                  Elite technical mastery and strategic leadership training protocols for global market dominance.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1,2,3].map(n => <div key={n} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${n+10}`} alt="Expert" className="w-full h-full object-cover" />
                  </div>)}
                </div>
                <Link to="/services" className="text-blue-600 p-2 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Internship */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group">
            <div className="relative h-2/5 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Internship" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                <Briefcase size={18} className="text-white" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-auto">
                <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[8px] font-black uppercase tracking-widest mb-4">
                  Corporate Immersion
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3 leading-none text-left">Internship</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-wider text-left">
                  Direct industry immersion with Fortune 500 partners to bridge technical gaps and master enterprise tools.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[4,5,6].map(n => <div key={n} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${n+20}`} alt="Mentor" className="w-full h-full object-cover" />
                  </div>)}
                </div>
                <Link to="/contact" className="text-indigo-600 p-2 bg-indigo-50 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Placements */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group">
            <div className="relative h-2/5 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Executive Placements" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                <Award size={18} className="text-white" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-auto">
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[8px] font-black uppercase tracking-widest mb-4">
                  Global Execution
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3 leading-none text-left">Placements</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-wider text-left">
                  Unrivaled global network ensuring elite career placements with high-growth firms and multinationals.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[7,8,9].map(n => <div key={n} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${n+30}`} alt="Placed" className="w-full h-full object-cover" />
                  </div>)}
                </div>
                <Link to="/placements" className="text-emerald-600 p-2 bg-emerald-50 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;