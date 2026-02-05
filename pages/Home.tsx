
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Award } from 'lucide-react';
import { BRAND_LOGO } from '../App';
import { ASSET_VAULT } from '../assets/images/registry';

const Home: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-white flex flex-col lg:flex-row relative">
      {/* Strategic Core (Left Half) */}
      <div className="w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center px-8 md:px-16 lg:pr-12 lg:pl-16 bg-white overflow-hidden text-center">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
        
        <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom duration-700 flex flex-col items-center">
          <div className="animate-in zoom-in duration-1000">
            <div className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[80px] animate-pulse"></div>
              <img 
                src={BRAND_LOGO} 
                alt="Hidden Hire IT Official Logo" 
                className="relative w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.15)] hover:scale-105 transition-transform duration-700 animate-float"
              />
            </div>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black leading-[1.1] tracking-tight uppercase max-w-xl mx-auto flex flex-col items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-950">
                HIDDEN HIRE
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400 py-1">
                IT
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-950">
                CONSULTANCY & SERVICES.
              </span>
            </h1>
            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.5em]">Unlock Hidden Opportunities</p>
          </div>
        </div>
      </div>

      {/* Program Pillar Cards */}
      <div className="w-full lg:w-1/2 h-full bg-slate-50 p-6 lg:pl-16 lg:pr-10 flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full h-[90%]">
          
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col group cursor-pointer">
            <div className="relative h-[35%] overflow-hidden shrink-0">
              <img 
                src={ASSET_VAULT.hero.training} 
                alt="Professional Training" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-blue-600/20 backdrop-blur-md p-1.5 rounded-lg border border-blue-400/30">
                <GraduationCap size={14} className="text-white" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3">
                <div className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[7px] font-black uppercase tracking-widest mb-3">
                  Tier 1 Skillset
                </div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none mb-2 group-hover:text-blue-600 transition-colors">Training</h2>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <Link to="/services" className="text-blue-600 p-1.5 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col group cursor-pointer">
            <div className="relative h-[35%] overflow-hidden shrink-0">
              <img 
                src={ASSET_VAULT.hero.internship} 
                alt="Industrial Internship" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-blue-600/20 backdrop-blur-md p-1.5 rounded-lg border border-blue-400/30">
                <Briefcase size={14} className="text-white" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3">
                <div className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[7px] font-black uppercase tracking-widest mb-3">
                  Corporate Immersion
                </div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none mb-2 group-hover:text-blue-600 transition-colors">Internship</h2>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <Link to="/contact" className="text-blue-600 p-1.5 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col group cursor-pointer">
            <div className="relative h-[35%] overflow-hidden shrink-0">
              <img 
                src={ASSET_VAULT.hero.placement} 
                alt="Executive Placements" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-blue-600/20 backdrop-blur-md p-1.5 rounded-lg border border-blue-400/30">
                <Award size={14} className="text-white" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3">
                <div className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[7px] font-black uppercase tracking-widest mb-3">
                  Global Execution
                </div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none mb-2 group-hover:text-blue-600 transition-colors">Placements</h2>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <Link to="/placements" className="text-blue-600 p-1.5 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
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
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
