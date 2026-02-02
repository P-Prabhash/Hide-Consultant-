import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col items-center justify-center bg-white px-4">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Contact Details */}
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              <MessageCircle size={12} />
              <span>ENGAGE NOW</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
              LET'S <span className="text-blue-600 font-extralight block">CONNECT.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 group cursor-pointer">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div className="text-sm font-bold text-slate-600">hello@hide.com</div>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 group cursor-pointer">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div className="text-sm font-bold text-slate-600">+1 (212) 555-0198</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 group cursor-pointer">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div className="text-sm font-bold text-slate-600">Manhattan, NY HQ</div>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 group cursor-pointer">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Clock size={18} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">Response &lt; 4 Hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Compact Form */}
        <div className="animate-in fade-in slide-in-from-right duration-1000">
          <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-blue-50 relative overflow-hidden">
            {submitted ? (
              <div className="text-center space-y-6 py-12">
                <div className="bg-blue-50 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">ENQUIRY LOGGED.</h3>
                <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Our partners will reach out shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]"
                >
                  NEW MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-400 transition-all text-sm font-medium" />
                  <input type="email" placeholder="Work Email" required className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-400 transition-all text-sm font-medium" />
                </div>
                <select className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-400 transition-all text-sm font-medium cursor-pointer appearance-none">
                  <option>Strategic Audit</option>
                  <option>Growth Scaling</option>
                  <option>Digital Transformation</option>
                  <option>Capital Advisory</option>
                </select>
                <textarea rows={3} placeholder="Tell us about your challenge..." required className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-400 transition-all text-sm font-medium resize-none"></textarea>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-3 shadow-xl shadow-blue-100 disabled:opacity-50"
                >
                  {isSubmitting ? <span>PROCESSING...</span> : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;