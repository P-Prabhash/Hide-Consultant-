
import React, { useState, useEffect } from 'react';
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

const WelcomeScreen: React.FC<{ onStart: () => void, onAdmin: () => void }> = ({ onStart, onAdmin }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-between py-20 px-4 overflow-hidden font-sans">
      {/* Hidden Admin Button Area (Top Right) */}
      <div className="absolute top-6 right-6 z-[210] group py-6 px-6">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
          <button 
            onClick={onAdmin}
            className="flex items-center space-x-2 text-[10px] font-bold text-slate-500 hover:text-blue-400 uppercase tracking-[0.2em] border border-slate-800/50 hover:border-blue-900/30 px-4 py-2 rounded-full bg-slate-900/30 backdrop-blur-md shadow-2xl transition-all"
          >
            <Lock size={12} className="opacity-50" />
            <span>Secure Terminal</span>
          </button>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-2xl animate-in fade-in zoom-in duration-1000">
        <div className="bg-blue-600 p-5 rounded-3xl shadow-2xl shadow-blue-500/20 mb-4">
          <TrendingUp className="text-white h-12 w-12" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight">
            HIDE<span className="text-blue-500 font-light">CONSULTANT</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed">
            Welcome to the apex of strategic excellence.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full text-blue-400 text-sm font-semibold">
          <Sparkles className="h-4 w-4" />
          <span>Powered by SKILLTECH SOFTWARE SOLUTIONS</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-xs flex flex-col items-center space-y-6">
        <button 
          onClick={onStart}
          className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-blue-600/20 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3"
        >
          <span>Get Started</span>
          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="text-center">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
            Est. MMXII
          </p>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<{ onAdmin: () => void }> = ({ onAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight uppercase">HIDE<span className="text-blue-600 font-light">CONSULTANT</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${
                    location.pathname === (link.path === '/' ? '/' : link.path) || (link.path === '/services' && location.pathname.startsWith('/services'))
                    ? 'text-blue-600' 
                    : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-100">
                Work with Us
              </Link>
              
              {/* Hidden Admin Button Area */}
              <div className="group relative py-4 px-2">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <button 
                    onClick={onAdmin}
                    className="flex items-center space-x-2 text-[10px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-widest border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-lg bg-white shadow-sm"
                  >
                    <Lock size={12} />
                    <span>Admin</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Secret Admin Trigger */}
            <button onClick={onAdmin} className="p-2 opacity-10 active:opacity-100 transition-opacity">
               <Lock size={16} className="text-slate-900" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-3 py-4 rounded-xl font-bold uppercase tracking-widest mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-blue-400 h-6 w-6" />
            <span className="text-xl font-bold tracking-tight text-white uppercase">HIDE<span className="text-blue-400 font-light">CONSULTANT</span></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Empowering visionary businesses with strategic clarity, operational excellence, and transformative growth since 2012.
          </p>
          <div className="flex space-x-4 pt-2">
            <Globe className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
            <Award className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
            <ShieldCheck className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.3em]">Company</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-semibold">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.3em]">Connect</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-semibold">
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hello@hideconsultant.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 234-5678</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>123 Executive Plaza,<br />New York, NY 10001</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.3em]">Newsletter</h4>
          <p className="text-slate-400 text-xs mb-4 font-medium uppercase tracking-wider">Strategic insights delivered weekly.</p>
          <div className="flex bg-slate-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none px-4 py-3 w-full text-sm text-white placeholder-slate-500 focus:outline-none" 
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex flex-col space-y-2 mb-4 md:mb-0 text-center md:text-left">
          <p className="text-slate-600 font-semibold tracking-[0.2em] flex items-center justify-center md:justify-start">
            <Sparkles size={10} className="mr-1.5 text-blue-500" />
            DEVELOPED BY SKILLTECH SOFTWARE SOLUTIONS
          </p>
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          <span className="hover:text-slate-300 cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const sessionStarted = sessionStorage.getItem('hide_consultant_started');
    if (sessionStarted) {
      setHasStarted(true);
    }
  }, []);

  const handleStart = () => {
    setHasStarted(true);
    sessionStorage.setItem('hide_consultant_started', 'true');
  };

  const openAdmin = () => setIsAdminOpen(true);
  const closeAdmin = () => setIsAdminOpen(false);

  if (!hasStarted) {
    return <WelcomeScreen onStart={handleStart} onAdmin={openAdmin} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col animate-in fade-in duration-700">
        <Navbar onAdmin={openAdmin} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIConsultant />
        
        {/* Global Admin Portal Modal */}
        {isAdminOpen && <AdminPortal onClose={closeAdmin} />}
      </div>
    </Router>
  );
};

export default App;
