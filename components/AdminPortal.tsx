
import React, { useState } from 'react';
// Added Sparkles to the import list from lucide-react
import { Lock, X, ShieldCheck, ShieldAlert, LayoutDashboard, Activity, Database, Users, TrendingUp, ArrowRight, LogOut, Sparkles } from 'lucide-react';

interface AdminPortalProps {
  onClose: () => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate backend delay
    setTimeout(() => {
      if (userId === 'ADMN-2507' && password === '1434') {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Unauthorized Access: Invalid Credentials Detected');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserId('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header Bar */}
        <div className="bg-slate-950/50 border-b border-slate-800 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${isAuthenticated ? 'bg-green-600/20 text-green-500' : 'bg-blue-600/20 text-blue-500'}`}>
              {isAuthenticated ? <ShieldCheck size={20} /> : <Lock size={20} />}
            </div>
            <div>
              <h2 className="text-white font-black text-sm uppercase tracking-[0.2em]">
                {isAuthenticated ? 'Admin Executive Terminal' : 'Secure Command Center'}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  {isAuthenticated ? 'Authorized Session Active' : 'Restricted Access Protocol'}
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

        <div className="p-8 md:p-12">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto space-y-10">
              <div className="text-center space-y-4">
                <div className="inline-flex bg-slate-800 p-4 rounded-3xl mb-4">
                  <ShieldAlert className="text-blue-500 h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">System Verification Required</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
                  Access is strictly limited to partners of Hide Consultant Group. Authentication is monitored.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">User Identification</label>
                  <input 
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter ID (e.g. ADMN-XXXX)"
                    className="w-full bg-slate-800/50 border border-slate-700 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Security Pass-Phrase</label>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Secure Code"
                    className="w-full bg-slate-800/50 border border-slate-700 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center space-x-3 text-red-500 text-xs font-bold animate-in slide-in-from-top-2">
                    <ShieldAlert size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button 
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-900/20 disabled:opacity-50 flex items-center justify-center space-x-3"
                >
                  {isLoading ? (
                    <span className="flex items-center space-x-2">
                       <Database className="animate-spin h-4 w-4" />
                       <span>Decrypting...</span>
                    </span>
                  ) : (
                    <>
                      <span>Initialize Access</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in duration-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Strategic Dashboard</h3>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Global Operational Integrity: 100%</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-slate-800 hover:bg-red-900/20 hover:text-red-400 text-slate-400 px-6 py-3 rounded-xl transition-all font-bold text-xs uppercase tracking-widest border border-slate-700"
                >
                  <LogOut size={16} />
                  <span>Terminate Session</span>
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Engagements", value: "482", icon: <Users size={18} />, color: "text-blue-500" },
                  { label: "Market Cap Growth", value: "+22.4%", icon: <TrendingUp size={18} />, color: "text-green-500" },
                  { label: "AI Decision Sync", value: "0.4ms", icon: <Activity size={18} />, color: "text-purple-500" },
                  { label: "System Uptime", value: "99.99%", icon: <Database size={18} />, color: "text-amber-500" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-3xl hover:border-slate-600 transition-colors">
                    <div className={`${stat.color} mb-4`}>{stat.icon}</div>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-800/30 rounded-[2rem] border border-slate-800 p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Active Partner Audits</h4>
                    <span className="text-[10px] text-blue-500 font-bold uppercase bg-blue-500/10 px-2 py-1 rounded">Real-time</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Global Logistics Corp", status: "Strategic Audit", progress: "75%" },
                      { name: "NeoFintech Ventures", status: "M&A Advisory", progress: "40%" },
                      { name: "Summit Biotech", status: "Scale-up Support", progress: "92%" }
                    ].map((audit, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                        <div>
                          <p className="text-white font-bold text-sm">{audit.name}</p>
                          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{audit.status}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-500 font-black text-xs">{audit.progress}</p>
                          <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-2">
                             <div className="h-full bg-blue-500 rounded-full" style={{ width: audit.progress }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-transparent rounded-[2rem] border border-blue-500/20 p-8 flex flex-col justify-between">
                  <div>
                    {/* Fixed error: added missing Sparkles import from lucide-react */}
                    <Sparkles className="text-blue-500 mb-6 h-8 w-8" />
                    <h4 className="text-white font-bold text-xl mb-4 leading-tight">AI Insights Terminal</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      "Market volatility in EMEA suggests a reallocation of capital towards sustainable infrastructure protocols."
                    </p>
                  </div>
                  <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-black text-xs uppercase tracking-widest mt-8 hover:bg-blue-50 transition-all">
                    Generate Strategy Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
