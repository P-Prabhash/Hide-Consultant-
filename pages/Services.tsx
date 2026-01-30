
import React from 'react';
import { Briefcase, TrendingUp, Cpu, Landmark, ShieldCheck, Zap, Globe, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const serviceList = [
    { title: "Strategic Management", icon: <Briefcase />, desc: "High-level board advisory and long-term organizational planning to secure your market position." },
    { title: "Growth Optimization", icon: <TrendingUp />, desc: "Identifying friction in your sales funnel and implementing scale-ready revenue strategies." },
    { title: "Digital Transformation", icon: <Cpu />, desc: "Modernizing legacy infrastructure and integrating AI/ML to drive operational efficiency." },
    { title: "Financial Advisory", icon: <Landmark />, desc: "Mergers & acquisitions support, capital raising strategies, and robust risk management." },
    { title: "Cybersecurity & Risk", icon: <ShieldCheck />, desc: "Protecting your digital assets and ensuring compliance with global data standards." },
    { title: "Product Innovation", icon: <Zap />, desc: "R&D consulting to help you launch market-disrupting products with speed and precision." },
    { title: "International Expansion", icon: <Globe />, desc: "Localized market entry strategies for EMEA, APAC, and LATAM regions." },
    { title: "Data & Analytics", icon: <BarChart />, desc: "Transforming raw data into executive-level dashboards for real-time decision making." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Expertise</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We offer a broad spectrum of consulting services designed to support businesses at every stage of their lifecycle. From initial market entry to complex global operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceList.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-600 text-white p-3 rounded-2xl w-fit mb-6 shadow-lg shadow-blue-100">
                  {/* Fixed TypeScript error by casting s.icon to React.ReactElement<any> to allow className prop */}
                  {React.cloneElement(s.icon as React.ReactElement<any>, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <button className="text-blue-600 font-bold text-sm hover:underline flex items-center">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our 4-Step Methodology</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>
            {[
              { step: "01", title: "Discovery", desc: "Immersion into your business ecosystem and challenges." },
              { step: "02", title: "Analysis", desc: "Data-driven research and strategy formulation." },
              { step: "03", title: "Execution", desc: "Phased implementation with milestone tracking." },
              { step: "04", title: "Scale", desc: "Optimizing results for long-term sustainability." }
            ].map((p, i) => (
              <div key={i} className="relative z-10 text-center space-y-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold border-4 border-slate-900">
                  {p.step}
                </div>
                <h4 className="text-xl font-bold">{p.title}</h4>
                <p className="text-slate-400 text-sm px-4">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
