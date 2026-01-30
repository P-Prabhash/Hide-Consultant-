
import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    { name: "Eleanor Vance", role: "Managing Partner", img: "https://picsum.photos/seed/team1/400/500" },
    { name: "Marcus Thorne", role: "Strategy Director", img: "https://picsum.photos/seed/team2/400/500" },
    { name: "Sarah Jenkins", role: "Chief Technologist", img: "https://picsum.photos/seed/team3/400/500" },
    { name: "David Chen", role: "Financial Architect", img: "https://picsum.photos/seed/team4/400/500" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/city/1600/900" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Built on Integrity. Driven by Results.</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Learn why Hide Consultant is the trusted partner for industry giants and ambitious startups alike.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">A legacy of transformation since 2012.</h3>
              <p className="text-slate-600 leading-relaxed">
                Founded in the heart of the financial district, Hide Consultant began with a simple belief: that management consulting should be about more than just slides—it should be about execution.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over the last decade, we have helped over 500 companies navigate economic shifts, digital disruptions, and global expansions. Our team brings together diverse perspectives from Fortune 500 backgrounds, specialized tech startups, and academic institutions.
              </p>
              <div className="pt-4 flex items-center space-x-4">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Award Winning Agency</h4>
                  <p className="text-sm text-slate-500">Recognized by Forbes as a Top 10 Consulting Firm 2023.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/600/800" alt="Office" className="rounded-3xl shadow-lg mt-12" />
              <img src="https://picsum.photos/seed/office2/600/800" alt="Meeting" className="rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Our Mission", icon: <Target className="h-10 w-10" />, desc: "To demystify complex business challenges and deliver actionable strategies that foster sustainable growth." },
              { title: "Our Vision", icon: <Eye className="h-10 w-10" />, desc: "To be the catalyst for a world where every business has the clarity and tools to reach its peak potential." },
              { title: "Our Heart", icon: <Heart className="h-10 w-10" />, desc: "Deeply committed to client success, ethical business practices, and social responsibility in everything we do." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center space-y-6">
                <div className="mx-auto bg-blue-50 text-blue-600 p-4 rounded-full w-fit">{v.icon}</div>
                <h4 className="text-2xl font-bold">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase">The Brain Trust</h2>
            <h3 className="text-3xl font-bold">Guided by industry veterans</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                  <p className="text-blue-400 font-bold text-sm mb-1">{member.role}</p>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
