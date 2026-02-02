import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-full relative overflow-hidden flex flex-col items-center justify-center bg-white px-4">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
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
            <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 lg:px-12 lg:py-6 rounded-2xl font-black text-xs lg:text-sm uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center space-x-3 group">
              <span>Start Engagement</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 lg:px-12 lg:py-6 rounded-2xl font-black text-xs lg:text-sm uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center">
              Capabilities
            </Link>
          </div>
        </div>
        
        {/* Right Side: Imagery/Visual */}
        <div className="lg:w-1/2 relative hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative group">
            {/* Ambient Shadow/Glow */}
            <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative overflow-hidden rounded-[4rem] shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Excellence" 
                className="w-full aspect-[4/5] max-h-[70vh] object-cover grayscale transition-all duration-1000 transform hover:scale-105" 
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Element */}
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
  );
};

export default Home;