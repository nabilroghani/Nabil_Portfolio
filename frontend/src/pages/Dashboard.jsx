import { useEffect, useState } from 'react';
import API from '../api/axios';
import toast from 'react-hot-toast';
import { Plus, Mail, Calendar, Trash2, Eye, Download, BarChart3, Layers, Settings, MessageSquare } from 'lucide-react';

// Sub-Components Imports
import AdminSidebar from '../components/Admin/AdminSidebar';
import CvManager from '../components/admin/CvManager';
import ProjectModal from '../components/admin/ProjectModal';
import ToolModal from '../components/admin/ToolModal';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ pageVisits: 0, resumeDownloads: 0 });
  const [activeTab, setActiveTab] = useState('projects');
  const [isProjModalOpen, setIsProjModalOpen] = useState(false);
  const [isToolModalOpen, setIsToolModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const [resP, resT, resM, resS] = await Promise.all([
        API.get('/projects'),
        API.get('/tools'),
        API.get('/messages'),
        API.get('/stats')
      ]);
      setProjects(resP.data);
      setTools(resT.data);
      setMessages(resM.data);
      setStats(resS.data || { pageVisits: 0, resumeDownloads: 0 });
    } catch (err) {
      console.error("Dashboard error:", err);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (type, id) => {
    if (!window.confirm(`Permanently delete this ${type.slice(0, -1)}?`)) return;
    try {
      await API.delete(`/${type}/${id}`);
      toast.success("Removed successfully");
      fetchData(); 
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-secondary/30">
      {/* --- PREMIUM NAVBAR --- */}
      <nav className="bg-[#0f172a]/60 backdrop-blur-md border-b border-white/5 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center text-primary font-black shadow-lg shadow-secondary/20 text-2xl transition-transform hover:rotate-6">
              N
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">Console</h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">Live Session</p>
              </div>
            </div>
          </div>

          {['projects', 'tools'].includes(activeTab) && (
            <button 
              onClick={() => activeTab === 'projects' ? setIsProjModalOpen(true) : setIsToolModalOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-2xl font-bold text-sm flex items-center gap-3 transition-all shadow-xl shadow-secondary/10 hover:-translate-y-1 active:scale-95"
            >
              <Plus size={20} strokeWidth={3} /> New {activeTab === 'projects' ? 'Project' : 'Tool'}
            </button>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        
        {/* --- SIDEBAR --- */}
        <div className="lg:w-72">
          <AdminSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            messageCount={messages.length} 
          />
        </div>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 space-y-8">
          
          {/* ANALYTICS SECTION */}
          {activeTab !== 'messages' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0f172a] p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-secondary/30 transition-all">
                <div className="absolute -right-6 -bottom-6 text-secondary/5 group-hover:text-secondary/10 transition-transform group-hover:scale-110 duration-500">
                    <Eye size={160} />
                </div>
                <div className="relative z-10">
                  <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center text-secondary mb-4">
                    <Eye size={24} />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Visits</p>
                  <h2 className="text-5xl font-black text-white mt-2 tabular-nums tracking-tight">{stats.pageVisits.toLocaleString()}</h2>
                </div>
              </div>

              <div className="bg-[#0f172a] p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
                <div className="absolute -right-6 -bottom-6 text-blue-500/5 group-hover:text-blue-500/10 transition-transform group-hover:scale-110 duration-500">
                    <Download size={160} />
                </div>
                <div className="relative z-10">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                    <Download size={24} />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Resumes Saved</p>
                  <h2 className="text-5xl font-black text-secondary mt-2 tabular-nums tracking-tight">{stats.resumeDownloads.toLocaleString()}</h2>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] text-slate-400 font-mono">
                      <BarChart3 size={12} /> CR: {stats.pageVisits > 0 ? ((stats.resumeDownloads / stats.pageVisits) * 100).toFixed(1) : 0}%
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TABLE/CONTENT CONTAINER */}
          <div className="bg-[#0f172a] rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden min-h-[500px] backdrop-blur-sm">
            
            {activeTab === 'cv' && <div className="p-4"><CvManager /></div>}

            {activeTab === 'messages' && (
              <div className="p-10">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-4">
                    Inquiries <span className="text-sm font-mono bg-white/5 text-slate-400 px-4 py-1 rounded-full border border-white/5">{messages.length}</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-20 flex flex-col items-center gap-4">
                        <MessageSquare size={48} className="text-slate-800" />
                        <p className="text-slate-600 font-medium">Your inbox is empty for now.</p>
                    </div>
                  ) : (
                    messages.map(m => (
                      <div key={m._id} className="bg-[#020617]/50 p-8 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all group relative">
                        <button 
                          onClick={() => handleDelete('messages', m._id)}
                          className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={18} />
                        </button>
                        <div className="flex flex-wrap items-center gap-6 mb-6">
                            <div className="flex items-center gap-2 text-xs font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg">
                                <Mail size={14}/> {m.email}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                <Calendar size={14}/> {new Date(m.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{m.name}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-2xl">{m.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {(activeTab === 'projects' || activeTab === 'tools') && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-0">
                  <thead>
                    <tr className="bg-slate-900/50">
                      <th className="p-8 text-xs font-black text-slate-500 uppercase tracking-[0.2em] border-b border-white/5">Asset Details</th>
                      <th className="p-8 text-xs font-black text-slate-500 uppercase tracking-[0.2em] border-b border-white/5">Configuration / Tags</th>
                      <th className="p-8 text-right text-xs font-black text-slate-500 uppercase tracking-[0.2em] border-b border-white/5">Manage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {activeTab === 'projects' ? (
                      projects.length === 0 ? (
                        <tr><td colSpan="3" className="py-20 text-center text-slate-600 font-medium">No projects added yet.</td></tr>
                      ) : (
                        projects.map(p => (
                          <tr key={p._id} className="hover:bg-white/[0.01] transition-colors group">
                            <td className="p-8">
                              <div className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-1">{p.title}</div>
                              <div className="text-xs text-slate-500 line-clamp-1 italic">{p.desc}</div>
                            </td>
                            <td className="p-8">
                              <div className="flex flex-wrap gap-2">
                                {p.stack?.map((s, i) => (
                                  <span key={i} className="text-[10px] font-bold bg-white/5 text-slate-400 px-3 py-1 rounded-lg border border-white/10">{s}</span>
                                ))}
                              </div>
                            </td>
                            <td className="p-8 text-right">
                              <button onClick={() => handleDelete('projects', p._id)} className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-slate-600 hover:bg-red-500/10 hover:text-red-500 transition-all"><Trash2 size={20}/></button>
                            </td>
                          </tr>
                        ))
                      )
                    ) : (
                      tools.length === 0 ? (
                        <tr><td colSpan="3" className="py-20 text-center text-slate-600 font-medium">No tools registered.</td></tr>
                      ) : (
                        tools.map(t => (
                          <tr key={t._id} className="hover:bg-white/[0.01] transition-colors">
                            <td className="p-8">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl shadow-inner">{t.icon}</div>
                                <span className="font-bold text-white text-lg">{t.name}</span>
                              </div>
                            </td>
                            <td className="p-8">
                              <span className="text-[10px] bg-secondary/10 text-secondary px-4 py-1.5 rounded-full uppercase font-black tracking-widest">{t.category}</span>
                            </td>
                            <td className="p-8 text-right">
                              <button onClick={() => handleDelete('tools', t._id)} className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-slate-600 hover:bg-red-500/10 hover:text-red-500 transition-all"><Trash2 size={20}/></button>
                            </td>
                          </tr>
                        ))
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      <ProjectModal isOpen={isProjModalOpen} onClose={() => setIsProjModalOpen(false)} refreshProjects={fetchData} />
      <ToolModal isOpen={isToolModalOpen} onClose={() => setIsToolModalOpen(false)} refreshTools={fetchData} />
    </div>
  );
};

export default Dashboard;