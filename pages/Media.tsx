
import React from 'react';
import { Folder, Image as ImageIcon, Link as LinkIcon, Download, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

const Media: React.FC = () => {
  const allImages = [
    { url: ASSETS.logos.primary, name: 'Brand Identity - Primary', type: 'Logo' },
    { url: ASSETS.hero.training, name: 'Hero - Training', type: 'Abstract' },
    { url: ASSETS.hero.internship, name: 'Hero - Internship', type: 'Abstract' },
    { url: ASSETS.hero.placement, name: 'Hero - Placement', type: 'Abstract' },
    { url: ASSETS.hero.corporate, name: 'Hero - Corporate', type: 'Abstract' },
    ...ASSETS.gallery.map(g => ({ url: g.url, name: g.title, type: g.category }))
  ];

  return (
    <div className="h-full w-full bg-slate-50 overflow-y-auto px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-200">
              <Folder size={12} />
              <span>CENTRAL ASSET REPOSITORY</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase">
              IMAGE <span className="text-blue-600 font-extralight">VAULT.</span>
            </h1>
          </div>
          <p className="text-sm text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6 py-2">
            A comprehensive directory of all verified visual assets used across the Hidden Hire IT digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allImages.map((img, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
              <div className="aspect-square overflow-hidden relative">
                <img src={img.url} alt={img.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                   <button className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                      <ImageIcon size={20} />
                   </button>
                   <button className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                      <Download size={20} />
                   </button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{img.type}</div>
                <h3 className="text-sm font-bold text-slate-900 truncate mb-4">{img.name}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <LinkIcon size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Fixed Path</span>
                  </div>
                  <Sparkles size={14} className="text-slate-100 group-hover:text-blue-100 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
