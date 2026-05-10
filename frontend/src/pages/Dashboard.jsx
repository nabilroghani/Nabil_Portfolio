import { useEffect, useState } from 'react';
import API from '../api/axios';
import toast from 'react-hot-toast';
import { Plus, Mail, Calendar, Trash2, Eye, Download, BarChart3, MessageSquare } from 'lucide-react';

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
    // Background color changed from #020617 (too dark) to a richer Slate-950
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* --- PREMIUM NAVBAR --- */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo Section */}
            <div className="w-11 h-11 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/20 text-xl">
              NA
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Admin Control</h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">System Online</p>
              </div>
            </div>
          </div>

          {['projects', 'tools'].includes(activeTab) && (
            <button 
              onClick={() => activeTab === 'projects' ? setIsProjModalOpen(true) : setIsToolModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-900/20 active:scale-95"
            >
              <Plus size={18} strokeWidth={2.5} /> Add {activeTab === 'projects' ? 'Project' : 'Tool'}
            </button>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        
        {/* --- SIDEBAR --- */}
        <aside className="lg:w-64">
          <AdminSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            messageCount={messages.length} 
          />
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 space-y-6">
          
          {/* ANALYTICS SECTION */}
          {activeTab !== 'messages' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
                <div className="relative z-10">
                  <div className="bg-indigo-500/10 w-10 h-10 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                    <Eye size={20} />
                  </div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Visits</p>
                  <h2 className="text-4xl font-bold text-white mt-1">{stats.pageVisits.toLocaleString()}</h2>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-violet-500/50 transition-all">
                <div className="relative z-10">
                  <div className="bg-violet-500/10 w-10 h-10 rounded-lg flex items-center justify-center text-violet-400 mb-4">
                    <Download size={20} />
                  </div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Resume Downloads</p>
                  <h2 className="text-4xl font-bold text-white mt-1">{stats.resumeDownloads.toLocaleString()}</h2>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT AREA */}
          <div className="bg-slate-900 rounded-[2rem] border border-white/5 shadow-sm overflow-hidden min-h-[500px]">
            
            {activeTab === 'cv' && <div className="p-6"><CvManager /></div>}

            {activeTab === 'messages' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  Inbox <span className="text-xs font-mono bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">{messages.length}</span>
                </h2>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-20">
                        <MessageSquare size={40} className="mx-auto text-slate-700 mb-3" />
                        <p className="text-slate-500">No messages found.</p>
                    </div>
                  ) : (
                    messages.map(m => (
                      <div key={m._id} className="bg-slate-950/40 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group relative">
                        <button 
                          onClick={() => handleDelete('messages', m._id)}
                          className="absolute top-6 right-6 p-2 rounded-lg bg-red-500/10 text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <div className="flex gap-4 mb-4 text-[11px] font-bold text-indigo-400 uppercase tracking-tighter">
                            <span className="flex items-center gap-1"><Mail size={12}/> {m.email}</span>
                            <span className="flex items-center gap-1 text-slate-500"><Calendar size={12}/> {new Date(m.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{m.name}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{m.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {(activeTab === 'projects' || activeTab === 'tools') && (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/[0.02]">
                    <tr>
                      <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-widest">Name & Info</th>
                      <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-widest">Tags / Tech</th>
                      <th className="p-6 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {activeTab === 'projects' ? (
                      projects.map(p => (
                        <tr key={p._id} className="hover:bg-white/[0.01] transition-colors group">
                          <td className="p-6">
                            <div className="font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{p.title}</div>
                            <div className="text-xs text-slate-500 line-clamp-1 italic">{p.desc}</div>
                          </td>
                          <td className="p-6">
                            <div className="flex flex-wrap gap-1.5">
                              {p.stack?.map((s, i) => (
                                <span key={i} className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-white/5">{s}</span>
                              ))}
                            </div>
                          </td>
                          <td className="p-6 text-right">
                            <button onClick={() => handleDelete('projects', p._id)} className="text-slate-600 hover:text-red-500 transition-colors p-2"><Trash2 size={18}/></button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      tools.map(t => (
                        <tr key={t._id} className="hover:bg-white/[0.01] transition-colors">
                          <td className="p-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl">{t.icon}</div>
                            <span className="font-bold text-white">{t.name}</span>
                          </td>
                          <td className="p-6">
                            <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full uppercase font-black">{t.category}</span>
                          </td>
                          <td className="p-6 text-right">
                            <button onClick={() => handleDelete('tools', t._id)} className="text-slate-600 hover:text-red-500 transition-colors p-2"><Trash2 size={18}/></button>
                          </td>
                        </tr>
                      ))
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