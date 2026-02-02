import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageSquare, Phone, Mail, MapPin, Globe, Award, TrendingUp, Users, ShieldCheck, ArrowRight, Sparkles, Lock, ShieldAlert, LayoutDashboard, Activity, Database } from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AIConsultant from './components/AIConsultant';
import AdminPortal from './components/AdminPortal';

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
    { name: 'Contact', path: '/contact' },
  ];

  const updateIndicator = (index: number | null) => {
    const targetIndex = index !== null ? index : navLinks.findIndex(l => 
      location.pathname === (l.path === '/' ? '/' : l.path) || (l.path === '/services' && location.pathname.startsWith('/services'))
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
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <div className="flex items-center justify-center">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight uppercase">HIDE<span className="text-blue-600 font-light">CONSULTANT</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 relative mr-4">
              {/* Sliding Indicator Overlay */}
              <div 
                className="absolute h-10 bg-blue-50 rounded-xl transition-all duration-300 ease-out pointer-events-none"
                style={indicatorStyle}
              />
              
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  ref={el => navRefs.current[idx] = el}
                  to={link.path}
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    updateIndicator(idx);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    updateIndicator(null);
                  }}
                  className={`relative z-10 px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                    location.pathname === (link.path === '/' ? '/' : link.path) || 
                    (link.path === '/services' && location.pathname.startsWith('/services')) ||
                    hoveredIndex === idx
                    ? 'text-blue-600' 
                    : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/about" 
                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-100 flex items-center space-x-2"
              >
                <span>About Us</span>
              </Link>
              
              <div className="group relative py-4 px-2">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <button 
                    onClick={onAdmin}
                    className="flex items-center space-x-2 text-[10px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-widest border border-slate-200 hover:border-blue-300 px-3 py-1.5 rounded-lg bg-white shadow-sm"
                  >
                    <Lock size={12} />
                    <span>Admin</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={onAdmin} className="p-2 opacity-10 active:opacity-100 transition-opacity">
               <Lock size={16} className="text-slate-900" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-3 py-4 rounded-xl font-bold uppercase tracking-widest mt-4"
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const CopyrightBar: React.FC = () => (
  <div className="bg-blue-600 py-3 flex justify-center items-center shadow-[0_-4px_20px_rgba(37,99,235,0.1)]">
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
      © {new Date().getFullYear()} SKILL TECH SOFTWARE SOLUTIONS PVT LTD
    </p>
  </div>
);

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const openAdmin = () => setIsAdminOpen(true);
  const closeAdmin = () => setIsAdminOpen(false);

  return (
    <Router>
      <div className="h-screen flex flex-col overflow-hidden animate-in fade-in duration-700 bg-white">
        <Navbar onAdmin={openAdmin} />
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <CopyrightBar />
        <AIConsultant />
        {isAdminOpen && <AdminPortal onClose={closeAdmin} />}
      </div>
    </Router>
  );
};

export default App;