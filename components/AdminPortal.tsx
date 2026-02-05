
import React, { useState, useEffect } from 'react';
import { Lock, X, ShieldCheck, ShieldAlert, LayoutDashboard, Activity, Database, Users, TrendingUp, ArrowRight, LogOut, Sparkles, Upload, Image as ImageIcon, Briefcase, Trash2, CheckCircle2, Award, Folder, Link as LinkIcon, Download } from 'lucide-react';
import { GalleryItem, StudentPlacement } from '../types';
import { BRAND_LOGO } from '../App';
import { ASSET_VAULT } from '../assets/images/registry';

interface AdminPortalProps {
  onClose: () => void;
}

type AdminTab = 'dashboard' | 'gallery' | 'students' | 'assets';

const AdminPortal: React.FC<AdminPortalProps> = ({ onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Management State
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [students, setStudents] = useState<StudentPlacement[]>([]);
  
  // Developer Fixed Assets from the Assets/Images/ registry
  const allFixedAssets = [
    { url: ASSET_VAULT.branding.logo, name: 'primary_identity.png', type: 'Logo', path: '/assets/images/' },
    { url: ASSET_VAULT.hero.training, name: 'hero_training.jpg', type: 'Banner', path: '/assets/images/' },
    { url: ASSET_VAULT.hero.internship, name: 'hero_internship.jpg', type: 'Banner', path: '/assets/images/' },
    { url: ASSET_VAULT.hero.placement, name: 'hero_placement.jpg', type: 'Banner', path: '/assets/images/' },
    { url: ASSET_VAULT.hero.corporate, name: 'hero_corporate.jpg', type: 'Banner', path: '/assets/images/' },
    ...ASSET_VAULT.gallery.map(g => ({ url: g.url, name: `${g.id}.jpg`, type: 'Gallery', path: '/assets/images/' }))
  ];

  useEffect(() => {
    const savedGallery = localStorage.getItem('hide_gallery');
    const savedStudents = localStorage.getItem('hide_placements');
    if (savedGallery) setGalleryItems(JSON.parse(savedGallery));
    if (savedStudents) setStudents(JSON.parse(savedStudents));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (userId === 'admin72507' && password === '1434') {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Verification Failed: Access Denied.');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'gallery' | 'student') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        if (type === 'gallery') setNewGallery(p => ({ ...p, photo: base64String }));
        else setNewStudent(p => ({ ...p, photo: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [newGallery, setNewGallery] = useState({ title: '', category: '', photo: '' });
  const [newStudent, setNewStudent] = useState({ name: '', package: 'Basic (3-5 LPA)', company: '', photo: '' });

  const saveToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const addGalleryItem = () => {
    if (!newGallery.title || !newGallery.photo) return;
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      title: newGallery.title,
      category: newGallery.category || 'General',
      url: newGallery.photo
    };
    const updated = [...galleryItems, newItem];
    setGalleryItems(updated);
    saveToLocalStorage('hide_gallery', updated);
    setNewGallery({ title: '', category: '', photo: '' });
  };

  const addStudent = () => {
    if (!newStudent.name || !newStudent.photo || !newStudent.company) return;
    const newItem: StudentPlacement = {
      id: Date.now().toString(),
      name: newStudent.name,
      package: newStudent.package,
      company: newStudent.company,
      photo: newStudent.photo,
      date: new Date().toISOString()
    };
    const updated = [...students, newItem];
    setStudents(updated);
    saveToLocalStorage('hide_placements', updated);
    setNewStudent({ name: '', package: 'Basic (3-5 LPA)', company: '', photo: '' });
  };

  const deleteItem = (id: string, type: 'gallery' | 'student') => {
    if (type === 'gallery') {
      const updated = galleryItems.filter(i => i.id !== id);
      setGalleryItems(updated);
      saveToLocalStorage('hide_gallery', updated);
    } else {
      const updated = students.filter(i => i.id !== id);
      setStudents(updated);
      saveToLocalStorage('hide_placements', updated);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={onClose}></div>
      
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden animate-in zoom-in-95 duration-300 h-[85vh] flex flex-col text-slate-300">
        <div className="bg-slate-950/80 border-b border-slate-800 px-8 py-6 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full overflow-hidden ${isAuthenticated ? 'bg-white' : 'bg-slate-800 opacity-50 grayscale'}`}>
              <img src={BRAND_LOGO} alt="Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h2 className="text-white font-black text-xs uppercase tracking-[0.25em]">TERMINAL ACCESS</h2>
              <div className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAuthenticated ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">ENCRYPTED</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-500 hover:text-white transition-colors"><X size={24} /></button>
        </div>

        <div className="flex-grow flex overflow-hidden">
          {isAuthenticated ? (
            <>
              <div className="w-64 border-r border-slate-800 p-6 flex flex-col justify-between bg-slate-950/30 shrink-0">
                <div className="space-y-3">
                  <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>
                    <LayoutDashboard size={16} /><span>Dashboard</span>
                  </button>
                  <button onClick={() => setActiveTab('gallery')} className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'gallery' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>
                    <ImageIcon size={16} /><span>Gallery</span>
                  </button>
                  <button onClick={() => setActiveTab('students')} className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'students' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>
                    <Users size={16} /><span>Placements</span>
                  </button>
                  <div className="pt-4 mt-4 border-t border-slate-800/50">
                    <button onClick={() => setActiveTab('assets')} className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'assets' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' : 'text-slate-500 hover:bg-slate-800/50'}`}>
                      <Folder size={16} /><span>Images Folder</span>
                    </button>
                  </div>
                </div>
                <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-500 hover:bg-red-950/20 transition-all border border-red-900/30">
                  <LogOut size={16} /><span>Logout</span>
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
                {activeTab === 'dashboard' && <div className="text-white font-black uppercase text-xl">System Terminal v4.0.2 Ready</div>}
                
                {activeTab === 'assets' && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
                      <div className="space-y-3">
                        <div className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
                          <Folder size={12} /><span>BACKEND ASSETS</span>
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tighter uppercase">IMAGES <span className="text-indigo-400 font-extralight">DIRECTORY.</span></h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {allFixedAssets.map((img, i) => (
                        <div key={i} className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-600 transition-all duration-500 shadow-2xl">
                          <div className="aspect-square overflow-hidden relative">
                            <img src={img.url} alt={img.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all" />
                          </div>
                          <div className="p-5">
                            <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1">{img.type}</div>
                            <h3 className="text-[11px] font-bold text-slate-200 truncate mb-4 font-mono">{img.name}</h3>
                            <div className="flex items-center space-x-2 text-slate-600">
                                <LinkIcon size={10} /><span className="text-[8px] font-bold uppercase tracking-widest">{img.path}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Other tabs implementations... */}
              </div>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center p-8 bg-slate-900">
              <form onSubmit={handleLogin} className="max-w-md w-full space-y-6 text-center">
                <img src={BRAND_LOGO} className="h-20 w-20 mx-auto object-contain mb-8" />
                <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="Admin ID" className="w-full bg-slate-950 border border-slate-800 text-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="PIN" className="w-full bg-slate-950 border border-slate-800 text-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600" />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">Login</button>
                {error && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-4">{error}</p>}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
