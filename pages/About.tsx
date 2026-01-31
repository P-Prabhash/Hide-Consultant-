
import React, { useState } from 'react';
import { Target, Eye, Heart, Award, X, Linkedin, Mail, Briefcase, GraduationCap } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  expertise: string[];
  education: string;
  experience: string;
}

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    { 
      name: "Eleanor Vance", 
      role: "Managing Partner", 
      img: "https://picsum.photos/seed/team1/400/500",
      bio: "Eleanor is a visionary leader with over 20 years of experience in global strategy. She has guided multiple Fortune 100 companies through complex mergers and digital transformations. Her philosophy centers on 'Execution over Ideation,' ensuring that strategic plans translate into measurable market impact.",
      expertise: ["Global Strategy", "M&A Integration", "Executive Leadership"],
      education: "MBA, Harvard Business School",
      experience: "Former Senior Partner at McKinsey & Co."
    },
    { 
      name: "Marcus Thorne", 
      role: "Strategy Director", 
      img: "https://picsum.photos/seed/team2/400/500",
      bio: "Marcus specializes in identifying operational efficiencies and growth levers for scaling enterprises. With a background in data science and business operations, he bridges the gap between technical possibility and commercial reality.",
      expertise: ["Operational Excellence", "Growth Strategy", "Data Analytics"],
      education: "MSc in Management, INSEAD",
      experience: "15 years in Enterprise Strategy across EMEA and APAC."
    },
    { 
      name: "Sarah Jenkins", 
      role: "Chief Technologist", 
      img: "https://picsum.photos/seed/team3/400/500",
      bio: "Sarah leads our digital transformation practice. She is a pioneer in integrating AI and Machine Learning into legacy business processes. Her work has redefined digital customer experiences for some of the world's leading retail and financial brands.",
      expertise: ["AI/ML Strategy", "Cloud Infrastructure", "Digital Product Design"],
      education: "PhD in Computer Science, MIT",
      experience: "Ex-Google Cloud Architecture Lead."
    },
    { 
      name: "David Chen", 
      role: "Financial Architect", 
      img: "https://picsum.photos/seed/team4/400/500",
      bio: "David brings rigorous analytical depth to our financial advisory services. He is an expert in capital structure optimization and risk management, helping firms secure the funding and stability needed for aggressive expansion.",
      expertise: ["Capital Raising", "Financial Modeling", "Risk Management"],
      education: "CFA Charterholder; BSc Finance, Wharton",
      experience: "Former VP of Investment Banking at Goldman Sachs."
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/city/1600/900" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Built on Integrity. <span className="text-blue-400">Driven by Results.</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">Learn why Hide Consultant is the trusted partner for industry giants and ambitious startups alike.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs tracking-widest uppercase rounded-full">Our Story</div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">A legacy of transformation since 2012.</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded in the heart of the financial district, Hide Consultant began with a simple belief: that management consulting should be about more than just slides—it should be about execution.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over the last decade, we have helped over 500 companies navigate economic shifts, digital disruptions, and global expansions. Our team brings together diverse perspectives from Fortune 500 backgrounds, specialized tech startups, and academic institutions.
              </p>
              <div className="pt-4 flex items-center space-x-4">
                <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-100">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Award Winning Agency</h4>
                  <p className="text-sm text-slate-500">Recognized by Forbes as a Top 10 Consulting Firm 2023.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/600/800" alt="Office" className="rounded-[2.5rem] shadow-2xl mt-12 transform -rotate-1 hover:rotate-0 transition-transform duration-500" />
              <img src="https://picsum.photos/seed/office2/600/800" alt="Meeting" className="rounded-[2.5rem] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Our Mission", icon: <Target className="h-10 w-10" />, desc: "To demystify complex business challenges and deliver actionable strategies that foster sustainable growth." },
              { title: "Our Vision", icon: <Eye className="h-10 w-10" />, desc: "To be the catalyst for a world where every business has the clarity and tools to reach its peak potential." },
              { title: "Our Heart", icon: <Heart className="h-10 w-10" />, desc: "Deeply committed to client success, ethical business practices, and social responsibility in everything we do." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200/50 text-center space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="mx-auto bg-slate-900 text-white p-5 rounded-3xl w-fit shadow-xl">{v.icon}</div>
                <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase italic">The Brain Trust</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">GUIDED BY INDUSTRY VETERANS</h3>
            <p className="text-slate-500 max-w-xl mx-auto">Click on a partner to explore their professional background and expertise.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedMember(member)}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] text-left focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-blue-400 font-bold text-xs mb-1 uppercase tracking-widest">{member.role}</p>
                  <h4 className="text-2xl font-black tracking-tight">{member.name}</h4>
                  <div className="mt-4 flex items-center space-x-2 text-white/60 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Profile</span>
                    <div className="h-px flex-grow bg-white/20"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 fade-in duration-500 max-h-[90vh]">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="md:w-2/5 relative">
              <img 
                src={selectedMember.img} 
                alt={selectedMember.name} 
                className="w-full h-full object-cover md:min-h-[500px]" 
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <p className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] mb-2">{selectedMember.role}</p>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">{selectedMember.name}</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                    <div className="w-4 h-px bg-slate-200 mr-2"></div>
                    Professional Biography
                  </h5>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                      <Briefcase size={14} className="mr-2" />
                      Background
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">Experience</p>
                        <p className="text-slate-700 text-sm font-medium">{selectedMember.experience}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">Education</p>
                        <p className="text-slate-700 text-sm font-medium">{selectedMember.education}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      Expertise
                    </h5>
                    <ul className="space-y-2">
                      {selectedMember.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 text-sm font-semibold">
                          <ChevronRight size={14} className="text-blue-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center space-x-2"
                >
                  <span>Consult with {selectedMember.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default About;
