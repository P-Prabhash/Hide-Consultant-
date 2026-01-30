
import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Strategy', 'Technology', 'Financial', 'Team'];
  
  const items = [
    { title: "Tech Startup Scale-up", category: "Technology", url: "https://picsum.photos/seed/p1/800/600" },
    { title: "M&A Integration", category: "Financial", url: "https://picsum.photos/seed/p2/800/600" },
    { title: "Annual Partner Retreat", category: "Team", url: "https://picsum.photos/seed/p3/800/600" },
    { title: "Market Entry: Singapore", category: "Strategy", url: "https://picsum.photos/seed/p4/800/600" },
    { title: "Digital Banking Overhaul", category: "Technology", url: "https://picsum.photos/seed/p5/800/600" },
    { title: "Brand Identity Workshop", category: "Strategy", url: "https://picsum.photos/seed/p6/800/600" },
    { title: "Global CFO Summit", category: "Financial", url: "https://picsum.photos/seed/p7/800/600" },
    { title: "New Headquarters", category: "Team", url: "https://picsum.photos/seed/p8/800/600" },
  ];

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">Portfolio & Highlights</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Take a glimpse into our world—from high-stakes boardrooms to technical breakthroughs and our vibrant team culture.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === c 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-slate-100 shadow-sm transition-all hover:shadow-2xl">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-md mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center space-x-2 text-white/70 text-sm font-medium">
                  <ExternalLink size={14} />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
