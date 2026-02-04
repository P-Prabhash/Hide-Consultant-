import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Award } from 'lucide-react';
import { BRAND_LOGO } from '../App';

const Home: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-white flex flex-col lg:flex-row relative">
      {/* Strategic Core (Left Half) */}
      <div className="w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center px-8 md:px-16 lg:pr-12 lg:pl-16 bg-white overflow-hidden text-center">
        {/* Abstract Background Accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
        
        <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom duration-700 flex flex-col items-center">
          <div className="animate-in zoom-in duration-1000">
            <div className="relative w-56 h-56 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-[80px] animate-pulse"></div>
              <img 
                src={BRAND_LOGO} 
                alt="Hidden Hire IT Official Logo" 
                className="relative w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform duration-700 animate-float"
              />
            </div>
          </div>
          
          <div className="space-y-4 flex flex-col items-center">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              SCALE <span className="text-blue-600 font-extralight block">WITHOUT</span> LIMITS.
            </h1>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Elite Business Consultancy Protocol Active</p>
          </div>
        </div>
      </div>

      {/* Central Split Line */}
      <div className="hidden lg:block absolute left-1/2 top-[1.5cm] bottom-[1.5cm] -translate-x-1/2 w-[6px] bg-blue-50/50 z-20 overflow-hidden rounded-full">
        <div className="absolute inset-y-0 left-0 w-full bg-blue-600/30"></div>
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-blue-600"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="w-8 h-8 bg-white rounded-full border-[2px] border-blue-600 shadow-xl flex items-center justify-center z-30">
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></div>
           </div>
        </div>
      </div>

      {/* Program Pillar Cards (Right Half) */}
      <div className="w-full lg:w-1/2 h-full bg-slate-50 p-6 lg:pl-16 lg:pr-10 flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full h-[90%]">
          
          {/* Card 1: Training */}
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
            <div className="relative h-[35%] overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional Training" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/30">
                <GraduationCap size={14} className="text-white" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3">
                <div className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[7px] font-black uppercase tracking-widest mb-3">
                  Tier 1 Skillset
                </div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">Training</h2>
                <p className="text-[9px] text-slate-500 font-bold uppercase leading-relaxed tracking-wider line-clamp-3">
                  Elite technical mastery and strategic leadership training for global market dominance.
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex -space-x-1.5">
                  {[1,2,3].map(n => <div key={n} className="w-5 h-5 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${n+10}`} alt="Expert" className="w-full h-full object-cover" />
                  </div>)}
                </div>
                <Link to="/services" className="text-blue-600 p-1.5 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Internship */}
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
            <div className="relative h-[35%] overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Internship" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/30">
                <Briefcase size={14} className="text-white" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3">
                <div className="inline-block px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[7px] font-black uppercase tracking-widest mb-3">
                  Corporate Immersion
                </div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">Internship</h2>
                <p className="text-[9px] text-slate-500 font-bold uppercase leading-relaxed tracking-wider line-clamp-3">
                  Direct industry immersion with Fortune 500 partners to master enterprise tools.
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex -space-x-1.5">
                  {[4,5,6].map(n => <div key={n} className="w-5 h-5 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${n+20}`} alt="Mentor" className="w-full h-full object-cover" />
                  </div>)}
                </div>
                <Link to="/contact" className="text-indigo-600 p-1.5 bg-indigo-50 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Placements */}
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
            <div className="relative h-[35%] overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Executive Placements" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/30">
                <Award size={14} className="text-white" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3">
                <div className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-[7px] font-black uppercase tracking-widest mb-3">
                  Global Execution
                </div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">Placements</h2>
                <p className="text-[9px] text-slate-500 font-bold uppercase leading-relaxed tracking-wider line-clamp-3">
                  Unrivaled network ensuring elite career placements with high-growth firms.
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex -space-x-1.5">
                  {[7,8,9].map(n => <div key={n} className="w-5 h-5 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${n+30}`} alt="Placed" className="w-full h-full object-cover" />
                  </div>)}
                </div>
                <Link to="/placements" className="text-emerald-600 p-1.5 bg-emerald-50 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.01); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;