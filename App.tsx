
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageSquare, Phone, Mail, MapPin, Globe, Award, TrendingUp, Users, ShieldCheck } from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AIConsultant from './components/AIConsultant';

const Navbar: React.FC = () => {
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
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === (link.path === '/' ? '/' : link.path) 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              Work with Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
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
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-3 py-4 rounded-md font-semibold mt-4"
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
          <p className="text-slate-400 text-sm leading-relaxed">
            Empowering visionary businesses with strategic clarity, operational excellence, and transformative growth since 2012.
          </p>
          <div className="flex space-x-4 pt-2">
            <Globe className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
            <Award className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
            <ShieldCheck className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Connect</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
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
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Newsletter</h4>
          <p className="text-slate-400 text-xs mb-4">Subscribe to receive business insights and updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-800 border-none px-4 py-2 rounded-l-md w-full text-sm focus:ring-1 focus:ring-blue-500" 
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>&copy; 2024 Hide Consultant Group. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          <span className="hover:text-slate-300 cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIConsultant />
      </div>
    </Router>
  );
};

export default App;
