
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/servicesData';
import { 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Landmark, 
  ShieldCheck, 
  Zap, 
  Globe, 
  BarChart,
  ArrowLeft,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Briefcase,
  TrendingUp,
  Cpu,
  Landmark,
  ShieldCheck,
  Zap,
  Globe,
  BarChart
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Service not found</h2>
        <Link to="/services" className="text-blue-600 hover:underline flex items-center space-x-2">
          <ArrowLeft size={16} />
          <span>Back to Services</span>
        </Link>
      </div>
    );
  }

  const IconComponent = iconMap[service.iconName] || Briefcase;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate('/services')}
          className="group flex items-center space-x-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit shadow-xl shadow-blue-100 mb-6">
                <IconComponent size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                {service.longDescription}
              </p>
              <div className="pt-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 inline-flex items-center space-x-2">
                  <span>Discuss Your Project</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl -rotate-2 scale-105 opacity-50"></div>
              <img 
                src={`https://picsum.photos/seed/${service.id}/800/600`} 
                alt={service.title} 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Core Expertise & Focus</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <span className="text-slate-700 font-semibold">{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Business Outcomes</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] -mr-32 -mt-32 opacity-20"></div>
                <ul className="space-y-6 relative z-10">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-4">
                      <div className="h-2 w-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-slate-800 text-slate-400 text-sm italic">
                  *Results based on historical project averages and client feedback.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">See this expertise in action.</h3>
              <p className="text-slate-500">
                Explore our recent success stories where we implemented {service.title} for market leaders and rapidly scaling startups.
              </p>
            </div>
            <Link to="/gallery" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center space-x-2 whitespace-nowrap">
              <span>View Case Studies</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
