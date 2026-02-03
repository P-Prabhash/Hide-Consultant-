import React, { useState, useEffect } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([
    { id: '1', title: "Tech Startup Scale-up", category: "Technology", url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" },
    { id: '2', title: "M&A Integration", category: "Financial", url: "https://images.unsplash.com/photo-1454165833767-02a6e3099033?q=80&w=2070&auto=format&fit=crop" },
    { id: '3', title: "Annual Partner Retreat", category: "Team", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" },
    { id: '4', title: "Market Entry: Singapore", category: "Strategy", url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop" },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('hide_gallery');
    if (saved) {
      const dynamicItems = JSON.parse(saved);
      setItems(prev => [...prev, ...dynamicItems]);
    }
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col bg-white px-4 md:px-8 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full space-y-6">
        
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={10} />
              <span>PORTFOLIO</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              VISUAL <span className="text-slate-400 font-extralight">IMPACT.</span>
            </h1>
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">
            Curated Strategic Highlights
          </div>
        </div>

        <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4 overflow-y-auto">
          {items.map((item, i) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden bg-slate-100 shadow-sm aspect-[4/5]">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white leading-tight mb-2">{item.title}</h3>
                <div className="flex items-center text-[8px] font-black text-white/50 uppercase tracking-widest">
                  <ExternalLink size={10} className="mr-1" />
                  <span>View Case</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;