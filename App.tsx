import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageSquare, Phone, Mail, MapPin, Globe, Award, TrendingUp, Users, ShieldCheck, ArrowRight, Sparkles, Lock, ShieldAlert, LayoutDashboard, Activity, Database, Terminal } from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Placements from './pages/Placements';
import AIConsultant from './components/AIConsultant';
import AdminPortal from './components/AdminPortal';

export const BRAND_LOGO = "https://drive.google.com/uc?export=view&id=1m9TkHT6vKKCqimvyx4PAAVghznKvln8P";

const Navbar: React.FC<{ onAdmin: () => void }> = ({ onAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const updateIndicator = (index: number | null) => {
    const targetIndex = index !== null ? index : navLinks.findIndex(l => 
      location.pathname === (l.path === '/' ? '/' : l.path) || 
      (l.path !== '/' && location.pathname.startsWith(l.path))
    );

    if (targetIndex !== -1 && navRefs.current[targetIndex]) {
      const el = navRefs.current[targetIndex];
      if (el) {
        setIndicatorStyle({
          left: `${el.offsetLeft}px`,
          width: `${el.offsetWidth}px`,
          opacity: 1,
        });
      }
    } else if (index === null) {
      setIndicatorStyle({ ...indicatorStyle, opacity: 0 });
    }
  };

  useEffect(() => {
    updateIndicator(null);
  }, [location.pathname]);

  return (
    <nav className="bg-white border-b border-slate-200 h-20 shrink-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group py-2">
              <div className="bg-white p-0.5 rounded-full group-hover:scale-110 transition-transform flex items-center justify-center">
                <img src={BRAND_LOGO} alt="Hidden Hire IT Logo" className="h-14 w-14 object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 relative mr-2">
              <div 
                className="absolute h-10 bg-blue-50 rounded-xl transition-all duration-300 ease-out pointer-events-none"
                style={indicatorStyle}
              />
              
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  ref={el => { navRefs.current[idx] = el; }}
                  to={link.path}
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    updateIndicator(idx);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    updateIndicator(null);
                  }}
                  className={`relative z-10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                    location.pathname === (link.path === '/' ? '/' : link.path) || 
                    (link.path !== '/' && location.pathname.startsWith(link.path)) ||
                    hoveredIndex === idx
                    ? 'text-blue-600' 
                    : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={onAdmin}
              className="p-2 text-slate-300 hover:text-slate-900 transition-colors"
              title="Terminal Access"
            >
              <Lock size={16} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-2xl animate-in slide-in-from-top duration-300 border-b border-slate-100 z-50">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-4 text-xs font-black rounded-2xl uppercase tracking-[0.25em] ${
                   location.pathname === (link.path === '/' ? '/' : link.path) ||
                   (link.path !== '/' && location.pathname.startsWith(link.path))
                   ? 'text-blue-600 bg-blue-50' 
                   : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar onAdmin={() => setIsAdminOpen(true)} />
        
        <main className="flex-grow overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-slate-950 h-14 shrink-0 border-t border-slate-900 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em]">System Secure</span>
            </div>
            <div className="hidden lg:flex items-center space-x-4 border-l border-slate-800 pl-6">
              <Link to="/services" className="text-slate-600 hover:text-blue-400 text-[8px] font-black uppercase tracking-widest transition-colors">Directives</Link>
              <Link to="/gallery" className="text-slate-600 hover:text-blue-400 text-[8px] font-black uppercase tracking-widest transition-colors">Portfolio</Link>
              <span className="text-slate-800 text-[8px] font-black uppercase tracking-widest">Protocols Monitored</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-slate-500 text-[8px] font-black uppercase tracking-[0.3em]">
              © 2024 SKILLTECH SOFTWARE SOLUTIONS PVT LTD
            </div>
            <div className="flex items-center space-x-4 border-l border-slate-800 pl-8">
              <ShieldCheck size={12} className="text-slate-600" />
              <Activity size={12} className="text-slate-600" />
              <Terminal size={12} className="text-slate-600" />
            </div>
          </div>
        </footer>

        <AIConsultant />
        {isAdminOpen && <AdminPortal onClose={() => setIsAdminOpen(false)} />}
      </div>
    </Router>
  );
};

export default App;