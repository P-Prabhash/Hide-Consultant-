import React, { useState, useEffect } from 'react';
import { Award, Briefcase, TrendingUp, Sparkles, User } from 'lucide-react';
import { StudentPlacement } from '../types';

const BRAND_LOGO = "https://drive.google.com/uc?export=view&id=1m9TkHT6vKKCqimvyx4PAAVghznKvln8P";

const Placements: React.FC = () => {
  const [placements, setPlacements] = useState<StudentPlacement[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hide_placements');
    if (saved) {
      setPlacements(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col bg-white px-4 md:px-8 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={10} />
              <span>SELECTED STUDENTS</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              CAREER <span className="text-blue-600 font-extralight">MILESTONES.</span>
            </h1>
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">
            Elite Placement Record Registry
          </div>
        </div>

        <div className="flex-grow overflow-y-auto pb-4 custom-scrollbar">
          {placements.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 py-12 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
              <div className="p-6 bg-white rounded-full shadow-lg">
                <img src={BRAND_LOGO} alt="HH IT" className="w-20 h-20 object-contain opacity-40" />
              </div>
              <div className="text-center">
                <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">Registry Sync Pending</p>
                <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest mt-1">Authenticating placement data with the board.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pr-2">
              {placements.map((student) => (
                <div 
                  key={student.id} 
                  className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-fit"
                >
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img 
                      src={student.photo} 
                      alt={student.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-4">
                      <div className="bg-blue-600 text-white px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest mb-1">
                        {student.package}
                      </div>
                      <h3 className="text-white font-black text-base leading-tight uppercase tracking-tighter">{student.name}</h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-slate-500">
                        <Briefcase size={12} className="text-blue-600" />
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Placed at:</div>
                      </div>
                      <div className="text-base font-bold text-slate-900 uppercase tracking-tight truncate">{student.company}</div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                          {new Date(student.date).toLocaleDateString()}
                        </span>
                      </div>
                      <TrendingUp size={12} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Placements;