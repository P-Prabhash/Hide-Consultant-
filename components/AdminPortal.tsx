import React, { useState, useEffect } from 'react';
import { Lock, X, ShieldCheck, ShieldAlert, LayoutDashboard, Activity, Database, Users, TrendingUp, ArrowRight, LogOut, Sparkles, Upload, Image as ImageIcon, Briefcase, Trash2, CheckCircle2, Award } from 'lucide-react';
import { GalleryItem, StudentPlacement } from '../types';

interface AdminPortalProps {
  onClose: () => void;
}

type AdminTab = 'dashboard' | 'gallery' | 'students';

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
  
  // Form State
  const [newGallery, setNewGallery] = useState({ title: '', category: '', photo: '' });
  const [newStudent, setNewStudent] = useState({ name: '', package: 'Basic (3-5 LPA)', company: '', photo: '' });

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
      // Secure credentials provided by developer: admin72507 / 1434
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
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden animate-in zoom-in-95 duration-300 h-[85vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-slate-950/80 border-b border-slate-800 px-8 py-6 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <div className={`p-2.5 rounded-xl ${isAuthenticated ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'bg-slate-800 text-slate-400'}`}>
              {isAuthenticated ? <ShieldCheck size={20} /> : <Lock size={20} />}
            </div>
            <div>
              <h2 className="text-white font-black text-xs uppercase tracking-[0.25em]">
                {isAuthenticated ? 'HIDE EXECUTIVE TERMINAL' : 'AUTHORIZED ACCESS ONLY'}
              </h2>
              <div className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAuthenticated ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                <span className={`${isAuthenticated ? 'text-blue-500' : 'text-slate-500'} text-[9px] font-black uppercase tracking-widest`}>
                  {isAuthenticated ? 'SECURE SESSION ACTIVE' : 'SYSTEM ENCRYPTED'}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow flex overflow-hidden">
          {isAuthenticated ? (
            <>
              {/* Sidebar Navigation */}
              <div className="w-64 border-r border-slate-800 p-6 flex flex-col justify-between bg-slate-950/30">
                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800/50'}`}
                  >
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('gallery')}
                    className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'gallery' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800/50'}`}
                  >
                    <ImageIcon size={16} />
                    <span>Upload Gallery</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('students')}
                    className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'students' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800/50'}`}
                  >
                    <Users size={16} />
                    <span>Upload Placements</span>
                  </button>
                </div>
                
                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-500 hover:bg-red-950/20 transition-all border border-red-900/30"
                >
                  <LogOut size={16} />
                  <span>Terminate Session</span>
                </button>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
                {activeTab === 'dashboard' && (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { label: "Gallery Assets", value: galleryItems.length + 4, icon: <ImageIcon size={18} />, color: "text-blue-500" },
                        { label: "Elite Placements", value: students.length, icon: <Award size={18} />, color: "text-emerald-500" },
                        { label: "Sync Latency", value: "0.2ms", icon: <Activity size={18} />, color: "text-slate-400" },
                        { label: "Server Status", value: "Optimal", icon: <Database size={18} />, color: "text-slate-400" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-800/30 border border-slate-800 p-6 rounded-[2rem] hover:border-slate-700 transition-all group">
                          <div className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                          <div className="text-3xl font-black text-white">{stat.value}</div>
                          <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-600/10 rounded-[2.5rem] border border-blue-900/30 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-white font-black text-lg uppercase tracking-widest">Global Terminal Synchronization</h4>
                        <p className="text-slate-400 text-xs font-medium max-w-md">Uploaded records are pushed directly to the end-user homepage and dedicated section pages. Verify data integrity before commitment.</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-3">
                           {[1,2,3].map(n => <div key={n} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 shadow-xl"></div>)}
                        </div>
                        <div className="text-blue-500 font-black text-[10px] uppercase tracking-widest">+ 24/7 Live</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-slate-800/40 p-10 rounded-[2.5rem] border border-slate-800">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="p-3 bg-blue-600 rounded-2xl"><Upload size={20} className="text-white" /></div>
                        <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">Upload Corporate Photo</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <input 
                            type="text" placeholder="Photo Label/Title" 
                            value={newGallery.title} onChange={e => setNewGallery(p => ({...p, title: e.target.value}))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white text-sm focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                          />
                          <input 
                            type="text" placeholder="Strategic Category" 
                            value={newGallery.category} onChange={e => setNewGallery(p => ({...p, category: e.target.value}))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white text-sm focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="block w-full cursor-pointer bg-slate-950 border-2 border-dashed border-slate-800 rounded-2xl p-6 text-center hover:border-blue-600 transition-all group">
                            <input type="file" accept="image/*" className="hidden" onChange={e => handleFileUpload(e, 'gallery')} />
                            {newGallery.photo ? <CheckCircle2 className="mx-auto text-emerald-500 mb-2" size={32} /> : <ImageIcon className="mx-auto text-slate-700 mb-2 group-hover:text-blue-600 transition-colors" size={32} />}
                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block">
                              {newGallery.photo ? 'PHOTO LOADED' : 'BROWSE FILES'}
                            </span>
                          </label>
                          <button 
                            onClick={addGalleryItem}
                            disabled={!newGallery.title || !newGallery.photo}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-blue-900/20 transition-all disabled:opacity-50"
                          >PUSH TO GALLERY</button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {galleryItems.map(item => (
                        <div key={item.id} className="relative aspect-square rounded-[2rem] overflow-hidden border border-slate-800 group shadow-xl">
                          <img src={item.url} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                          <button 
                            onClick={() => deleteItem(item.id, 'gallery')}
                            className="absolute top-4 right-4 p-3 bg-red-600 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                          >
                            <Trash2 size={16} />
                          </button>
                          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <p className="text-[10px] text-white font-black uppercase tracking-widest truncate">{item.title}</p>
                            <p className="text-[8px] text-blue-500 font-bold uppercase tracking-widest">{item.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'students' && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-slate-800/40 p-10 rounded-[2.5rem] border border-slate-800">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="p-3 bg-emerald-600 rounded-2xl"><Users size={20} className="text-white" /></div>
                        <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">Record Commitment: Placement</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <input 
                            type="text" placeholder="Candidate Legal Name" 
                            value={newStudent.name} onChange={e => setNewStudent(p => ({...p, name: e.target.value}))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white text-sm focus:ring-2 focus:ring-emerald-600 transition-all outline-none"
                          />
                          <input 
                            type="text" placeholder="Hiring Organization" 
                            value={newStudent.company} onChange={e => setNewStudent(p => ({...p, company: e.target.value}))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white text-sm focus:ring-2 focus:ring-emerald-600 transition-all outline-none"
                          />
                          <div className="space-y-1">
                            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-4">Basic Pay Bracket</label>
                            <select 
                              value={newStudent.package} onChange={e => setNewStudent(p => ({...p, package: e.target.value}))}
                              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white text-sm focus:ring-2 focus:ring-emerald-600 transition-all outline-none cursor-pointer appearance-none"
                            >
                              <option>Basic (3-5 LPA)</option>
                              <option>Executive (6-12 LPA)</option>
                              <option>Pro (13-25 LPA)</option>
                              <option>Elite (25+ LPA)</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <label className="block w-full cursor-pointer bg-slate-950 border-2 border-dashed border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-600 transition-all group">
                            <input type="file" accept="image/*" className="hidden" onChange={e => handleFileUpload(e, 'student')} />
                            {newStudent.photo ? <CheckCircle2 className="mx-auto text-emerald-500 mb-2" size={32} /> : <Users className="mx-auto text-slate-700 mb-2 group-hover:text-emerald-600 transition-colors" size={32} />}
                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block">
                              {newStudent.photo ? 'PHOTO ENCRYPTED' : 'UPLOAD CANDIDATE PHOTO'}
                            </span>
                          </label>
                          <button 
                            onClick={addStudent}
                            disabled={!newStudent.name || !newStudent.photo || !newStudent.company}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-emerald-900/20 transition-all disabled:opacity-50"
                          >COMMIT PLACEMENT</button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">Commitment Registry</h4>
                        <div className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">{students.length} Records Discovered</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {students.map(student => (
                          <div key={student.id} className="flex items-center space-x-5 bg-slate-800/30 p-5 rounded-[2rem] border border-slate-800 group hover:border-slate-700 transition-all">
                            <img src={student.photo} className="w-16 h-16 rounded-full object-cover border-4 border-slate-900 shadow-xl" />
                            <div className="flex-grow">
                              <p className="text-white font-black text-xs uppercase tracking-tight">{student.name}</p>
                              <p className="text-emerald-500 text-[9px] uppercase font-black tracking-widest mt-1">{student.company}</p>
                              <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest mt-0.5">Pay: {student.package}</p>
                            </div>
                            <button 
                              onClick={() => deleteItem(student.id, 'student')}
                              className="text-slate-700 hover:text-red-500 transition-colors p-2"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Login Form */
            <div className="flex-grow flex items-center justify-center p-8 md:p-12 bg-slate-900">
              <div className="max-w-md w-full space-y-12">
                <div className="text-center space-y-6 animate-in fade-in duration-700">
                  <div className="inline-flex bg-slate-800/50 p-6 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                    <ShieldAlert className="text-blue-600 h-16 w-16" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Access Protocol</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                      Partner Credentials Required
                    </p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center ml-2">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em]">Identification Code</label>
                      <Lock size={10} className="text-slate-700" />
                    </div>
                    <input 
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="User ID"
                      className="w-full bg-slate-950 border border-slate-800 text-white px-6 py-5 rounded-[1.5rem] focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-800 text-sm font-bold uppercase tracking-widest outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center ml-2">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em]">Security Phrase</label>
                      <ShieldCheck size={10} className="text-slate-700" />
                    </div>
                    <input 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-950 border border-slate-800 text-white px-6 py-5 rounded-[1.5rem] focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-800 text-sm outline-none"
                      required
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-2xl flex items-center space-x-4 text-red-500 text-[10px] font-black uppercase tracking-widest animate-in slide-in-from-top-2">
                      <div className="p-1.5 bg-red-500 rounded-lg text-white"><ShieldAlert size={14} /></div>
                      <span>{error}</span>
                    </div>
                  )}

                  <button 
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl shadow-blue-900/20 disabled:opacity-50 flex items-center justify-center space-x-4 group"
                  >
                    {isLoading ? (
                      <span className="flex items-center space-x-3">
                         <Database className="animate-spin h-4 w-4" />
                         <span>Decrypting...</span>
                      </span>
                    ) : (
                      <>
                        <span>Validate Session</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-center text-[8px] text-slate-700 font-black uppercase tracking-[0.4em]">
                  Managed by Skilltech Intelligence Systems
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;