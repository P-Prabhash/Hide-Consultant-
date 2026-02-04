import React, { useState, useEffect } from 'react';
import { Award, Briefcase, TrendingUp, Sparkles, User } from 'lucide-react';
import { StudentPlacement } from '../types';

const Placements: React.FC = () => {
  const [placements, setPlacements] = useState<StudentPlacement[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hide_placements');
    if (saved) {
      setPlacements(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col bg-white px-4 md:px-8 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={10} />
              <span>SELECTED STUDENTS</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              CAREER <span className="text-blue-600 font-extralight">MILESTONES.</span>
            </h1>
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">
            Our Elite Placement Record
          </div>
        </div>

        <div className="flex-grow overflow-y-auto pb-10">
          {placements.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <div className="p-6 bg-white rounded-full shadow-lg text-slate-300">
                <User size={48} />
              </div>
              <div className="text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest">No placements recorded yet.</p>
                <p className="text-slate-300 text-xs uppercase tracking-tighter">Admin updates pending.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {placements.map((student) => (
                <div 
                  key={student.id} 
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex flex-col"
                >
                  {/* Photo Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={student.photo} 
                      alt={student.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-1 shadow-lg">
                        {student.package}
                      </div>
                      <h3 className="text-white font-black text-xl leading-tight uppercase tracking-tighter">{student.name}</h3>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-slate-500">
                        <div className="p-2 bg-slate-50 rounded-lg">
                          <Briefcase size={14} className="text-blue-600" />
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Placed at:</div>
                      </div>
                      <div className="text-lg font-bold text-slate-900 uppercase tracking-tight">{student.company}</div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Selected {new Date(student.date).toLocaleDateString()}</span>
                      </div>
                      <TrendingUp size={14} className="text-slate-200" />
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