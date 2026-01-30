
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Side */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-5xl font-extrabold text-slate-900">Let's build <span className="text-blue-600">together.</span></h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Every great strategy starts with a conversation. Whether you're scaling a startup or re-organizing a multinational, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-500">partnerships@hideconsultant.com</p>
                    <p className="text-slate-500">support@hideconsultant.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-slate-500">+1 (212) 555-0198</p>
                    <p className="text-slate-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-50 p-4 rounded-2xl text-purple-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Visit Us</h4>
                    <p className="text-slate-500">123 Executive Tower, 42nd Floor</p>
                    <p className="text-slate-500">Manhattan, NY 10001, USA</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <Clock className="absolute top-4 right-4 h-24 w-24 text-white/5" />
                <h4 className="text-xl font-bold mb-4">Urgent Consultation?</h4>
                <p className="text-slate-400 text-sm mb-6">Our priority partners receive dedicated 24/7 access to our response team. Apply for partnership today.</p>
                <button className="flex items-center space-x-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>Connect on WhatsApp Business</span>
                </button>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 p-8 md:p-12 border border-slate-100">
              {submitted ? (
                <div className="text-center py-20 space-y-6">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-500">A strategy consultant will reach out within 4 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Work Email</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-slate-50 border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Required</label>
                    <select className="w-full bg-slate-50 border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all">
                      <option>Strategic Planning</option>
                      <option>Digital Transformation</option>
                      <option>Financial Advisory</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Website</label>
                    <input 
                      type="url" 
                      placeholder="https://yourcompany.com" 
                      className="w-full bg-slate-50 border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">How can we help?</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Tell us about your challenges..." 
                      className="w-full bg-slate-50 border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none" 
                    ></textarea>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-1">
                    Send Inquiry
                  </button>
                  <p className="text-xs text-slate-400 text-center">By submitting, you agree to our privacy policy and terms of service.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-200 grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3">
            <MapPin className="text-red-600 h-6 w-6" />
            <span className="font-bold text-slate-900">Visit Our New York HQ</span>
          </div>
        </div>
        <img src="https://picsum.photos/seed/map/1600/500" className="w-full h-full object-cover opacity-50" alt="Map Location" />
      </section>
    </div>
  );
};

export default Contact;
