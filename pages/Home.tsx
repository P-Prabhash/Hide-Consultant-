
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, PieChart, Users2, Rocket, Star, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Star className="h-3 w-3 fill-blue-600" />
                <span>Premier Business Consulting</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                Accelerate Your <span className="text-blue-600">Business Growth</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                We provide high-impact strategy and operational excellence consulting to help modern enterprises navigate complexity and unlock sustainable value.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center space-x-2">
                  <span>Start a Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/services" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                  Our Services
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900 block">500+ Clients Trust Us</span>
                  <span className="text-slate-500">Global presence across 20+ countries</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
              <img 
                src="https://picsum.photos/seed/consult/800/1000" 
                alt="Business Meeting" 
                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-xs text-slate-500 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-slate-900">12+</div>
              <div className="text-slate-500 font-medium">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-slate-900">$2.4B</div>
              <div className="text-slate-500 font-medium">Revenue Optimized</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-slate-900">150+</div>
              <div className="text-slate-500 font-medium">Expert Consultants</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-500 font-medium">Strategic Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Hide Consultant</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Tailored solutions for every business challenge</h3>
            <p className="text-slate-600">We don't believe in one-size-fits-all. Our approach is data-driven, human-centric, and focused on tangible ROI.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Market Analysis", icon: <BarChart3 className="h-6 w-6" />, desc: "Deep dives into your industry landscape and competitor movements." },
              { title: "Financial Strategy", icon: <PieChart className="h-6 w-6" />, desc: "Optimizing capital structures and improving overall profitability." },
              { title: "Team Alignment", icon: <Users2 className="h-6 w-6" />, desc: "Cultural transformation and building high-performance organizations." },
              { title: "Scale-up Support", icon: <Rocket className="h-6 w-6" />, desc: "Guiding transitions from local players to global market leaders." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all group">
                <div className="bg-slate-50 text-slate-900 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -mr-48 -mt-48 opacity-40"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ready to transform your business trajectory?</h2>
                <p className="text-blue-100 text-lg">Schedule a free 30-minute strategic audit with one of our senior partners today.</p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">
                  Book Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
