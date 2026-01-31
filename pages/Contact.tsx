
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  service: string;
  website: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    service: 'Strategic Planning',
    website: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your challenges.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message is too short (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        service: 'Strategic Planning',
        website: '',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
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
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 p-8 md:p-12 border border-slate-100 transition-all duration-500">
              {submitted ? (
                <div className="text-center py-20 space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-500">A strategy consultant will reach out within 4 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text" 
                        placeholder="John Doe" 
                        className={`w-full bg-slate-50 border px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.fullName ? 'border-red-500 bg-red-50' : 'border-transparent'
                        }`} 
                      />
                      {errors.fullName && (
                        <div className="flex items-center space-x-1 text-red-600 text-xs font-medium mt-1 animate-in slide-in-from-top-1">
                          <AlertCircle size={12} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email</label>
                      <input 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@company.com" 
                        className={`w-full bg-slate-50 border px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-transparent'
                        }`} 
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-1 text-red-600 text-xs font-medium mt-1 animate-in slide-in-from-top-1">
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Required</label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-transparent px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      <option>Strategic Planning</option>
                      <option>Digital Transformation</option>
                      <option>Financial Advisory</option>
                      <option>Cybersecurity & Risk</option>
                      <option>Product Innovation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-bold text-slate-700">Company Website (Optional)</label>
                    <input 
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      type="url" 
                      placeholder="https://yourcompany.com" 
                      className="w-full bg-slate-50 border border-transparent px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">How can we help?</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="Tell us about your challenges..." 
                      className={`w-full bg-slate-50 border px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-transparent'
                      }`} 
                    ></textarea>
                    {errors.message && (
                      <div className="flex items-center space-x-1 text-red-600 text-xs font-medium mt-1 animate-in slide-in-from-top-1">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
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
          <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 z-10 hover:scale-105 transition-transform cursor-default">
            <MapPin className="text-red-600 h-6 w-6" />
            <span className="font-bold text-slate-900 uppercase tracking-wide">Visit Our New York HQ</span>
          </div>
        </div>
        <img src="https://picsum.photos/seed/map/1600/500" className="w-full h-full object-cover opacity-50" alt="Map Location" />
      </section>
    </div>
  );
};

export default Contact;
