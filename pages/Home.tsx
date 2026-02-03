import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Sparkles, Award, Image as ImageIcon } from 'lucide-react';
import { StudentPlacement, GalleryItem } from '../types';

const Home: React.FC = () => {
  const [recentPlacements, setRecentPlacements] = useState<StudentPlacement[]>([]);
  const [recentGallery, setRecentGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const savedPlacements = localStorage.getItem('hide_placements');
    const savedGallery = localStorage.getItem('hide_gallery');
    
    if (savedPlacements) {
      setRecentPlacements(JSON.parse(savedPlacements).slice(-4).reverse());
    }
    if (savedGallery) {
      setRecentGallery(JSON.parse(savedGallery).slice(-4).reverse());
    }
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center px-4 overflow-hidden border-b border-slate-100">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24 py-12 lg:py-0">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mx-auto lg:mx-0 shadow-lg shadow-blue-200">
              <Star className="h-3 w-3 fill-blue-400 text-blue-400" />
              <span>Apex Strategic Partner</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
                SCALE <span className="text-blue-600 font-extralight block">WITHOUT</span> LIMITS.
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl xl:text-2xl text-slate-500 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
              Elite strategic management and digital transformation for modern enterprises navigating global complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start pt-4">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs lg:text-sm uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center space-x-3 group">
                <span>Start Engagement</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs lg:text-sm uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center">
                Capabilities
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative group">
              <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative overflow-hidden rounded-[4rem] shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate Excellence" 
                  className="w-full aspect-[4/5] max-h-[70vh] object-cover grayscale transition-all duration-1000 transform hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-[3rem] shadow-2xl hidden xl:block animate-bounce-slow">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-4 rounded-3xl">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1">Performance</div>
                    <div className="text-2xl font-black">UNLIMITED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Placements Section */}
      {recentPlacements.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">
                  <Award size={14} />
                  <span>Success Records</span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Recent <span className="text-blue-600 font-light">Placements.</span></h2>
              </div>
              <Link to="/placements" className="text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center group transition-colors">
                View All Records <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPlacements.map(student => (
                <div key={student.id} className="bg-white p-5 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                  <div className="relative h-48 mb-6 overflow-hidden rounded-[2rem]">
                    <img src={student.photo} alt={student.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                      {student.package}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{student.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{student.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Gallery Section */}
      {recentGallery.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-slate-900 text-[10px] font-black uppercase tracking-[0.3em]">
                  <ImageIcon size={14} />
                  <span>Portfolio Sync</span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Corporate <span className="text-slate-400 font-light">Gallery.</span></h2>
              </div>
              <Link to="/gallery" className="text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest flex items-center group transition-colors">
                Browse Archive <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {recentGallery.map(item => (
                <div key={item.id} className="relative aspect-square rounded-[2rem] overflow-hidden group">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <p className="text-[8px] text-blue-400 font-black uppercase tracking-widest mb-1">{item.category}</p>
                    <p className="text-xs text-white font-bold uppercase tracking-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Bar */}
      <section className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-8">Trusted by Global Enterprise Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
            {['FORTUNE 500', 'TECH GIANTS', 'STRATEGIC PARTNERS', 'GLOBAL INC.'].map((partner, i) => (
              <span key={i} className="text-2xl font-black text-slate-900 tracking-tighter">{partner}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;