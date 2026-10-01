import { useEffect, useState } from 'react';
import API from '../api/axios';
import toast from 'react-hot-toast';
import { Plus, Mail, Calendar, Trash2, Pencil, Eye, Download, MessageSquare, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Sub-Components Imports
import AdminSidebar from '../components/Admin/AdminSidebar';
import CvManager from '../components/Admin/CvManager';
import ProjectModal from '../components/Admin/ProjectModal';
import ToolModal from '../components/Admin/ToolModal';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ pageVisits: 0, resumeDownloads: 0 });
  const [activeTab, setActiveTab] = useState('projects');
  const [isProjModalOpen, setIsProjModalOpen] = useState(false);
  const [isToolModalOpen, setIsToolModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [editingTool, setEditingTool] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  const openAddProject = () => { setEditingProject(null); setIsProjModalOpen(true); };
  const openEditProject = (p) => { setEditingProject(p); setIsProjModalOpen(true); };
  const openAddTool = () => { setEditingTool(null); setIsToolModalOpen(true); };
  const openEditTool = (t) => { setEditingTool(t); setIsToolModalOpen(true); };

  const fetchData = async () => {
    // Each section loads independently — one failing endpoint (e.g. an
    // expired token on /stats) should not blank out the others.
    const [resP, resT, resM, resS] = await Promise.allSettled([
      API.get('/projects'),
      API.get('/tools'),
      API.get('/messages'),
      API.get('/stats')
    ]);

    if (resP.status === 'fulfilled') setProjects(resP.value.data);
    else console.error('Failed to load projects:', resP.reason);

    if (resT.status === 'fulfilled') setTools(resT.value.data);
    else console.error('Failed to load tools:', resT.reason);

    if (resM.status === 'fulfilled') setMessages(resM.value.data);
    else console.error('Failed to load messages:', resM.reason);

    if (resS.status === 'fulfilled') setStats(resS.value.data || { pageVisits: 0, resumeDownloads: 0 });
    else console.error('Failed to load stats:', resS.reason);

    const failed = [resP, resT, resM, resS].filter((r) => r.status === 'rejected');
    if (failed.length > 0) {
      toast.error(`Some dashboard data failed to load (${failed.length}/4). Check console for details.`);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (type, id) => {
    if (!window.confirm(`Permanently delete this ${type.slice(0, -1)}?`)) return;
    try {
      await API.delete(`/${type}/${id}`);
      toast.success("Removed successfully");
      fetchData();
    } catch {
      toast.error("Failed to remove item");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] dark:bg-ink text-slate-700 dark:text-[#c3bde0] font-sans selection:bg-gold/30 transition-colors duration-300">

      {/* --- NAVBAR --- */}
      <nav className="bg-white/80 dark:bg-[#151228]/80 backdrop-blur-xl border-b border-slate-200 dark:border-gold/10 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo Section */}
            <div className="w-11 h-11 bg-gradient-to-tr from-gold to-[#c98f6f] rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-gold/20 text-xl">
              NA
            </div>
            <div>
              <h1 className="font-display text-lg text-ink dark:text-[#f3efe4] leading-tight">Admin Control</h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">System Online</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full flex items-center justify-center
                border border-slate-300 dark:border-[#3a3560]
                text-slate-600 dark:text-[#c3bde0]
                hover:border-gold hover:text-gold
                transition-all duration-200"
            >
              {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
            </button>

            {['projects', 'tools'].includes(activeTab) && (
              <button
                onClick={() => activeTab === 'projects' ? openAddProject() : openAddTool()}
                className="bg-gold hover:bg-gold-soft text-ink px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-gold/20 active:scale-95"
              >
                <Plus size={18} strokeWidth={2.5} /> Add {activeTab === 'projects' ? 'Project' : 'Tool'}
              </button>
            )}
          </div>
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
              <div className="bg-white dark:bg-[#151228] p-6 rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:border-gold/50 transition-all shadow-sm dark:shadow-none">
                <div className="relative z-10">
                  <div className="bg-gold/10 w-10 h-10 rounded-full flex items-center justify-center text-gold mb-4">
                    <Eye size={20} />
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Visits</p>
                  <h2 className="font-display text-4xl text-ink dark:text-[#f3efe4] mt-1">{stats.pageVisits.toLocaleString()}</h2>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white dark:bg-[#151228] p-6 rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:border-violet/50 transition-all shadow-sm dark:shadow-none">
                <div className="relative z-10">
                  <div className="bg-violet/10 w-10 h-10 rounded-full flex items-center justify-center text-violet mb-4">
                    <Download size={20} />
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider">Resume Downloads</p>
                  <h2 className="font-display text-4xl text-ink dark:text-[#f3efe4] mt-1">{stats.resumeDownloads.toLocaleString()}</h2>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT AREA */}
          <div className="bg-white dark:bg-[#151228] rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-sm overflow-hidden min-h-[500px]">

            {activeTab === 'cv' && <div className="p-6"><CvManager /></div>}

            {activeTab === 'messages' && (
              <div className="p-8">
                <h2 className="font-display text-2xl text-ink dark:text-[#f3efe4] mb-8 flex items-center gap-3">
                  Inbox <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">{messages.length}</span>
                </h2>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-20">
                        <MessageSquare size={40} className="mx-auto text-slate-300 dark:text-slate-700 mb-3" />
                        <p className="text-slate-500">No messages found.</p>
                    </div>
                  ) : (
                    messages.map(m => (
                      <div key={m._id} className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-gold/30 transition-all group relative">
                        <button
                          onClick={() => handleDelete('messages', m._id)}
                          className="absolute top-6 right-6 p-2 rounded-lg bg-red-500/10 text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <div className="flex gap-4 mb-4 text-[11px] font-bold text-gold uppercase tracking-tighter">
                            <span className="flex items-center gap-1"><Mail size={12}/> {m.email}</span>
                            <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500"><Calendar size={12}/> {new Date(m.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h3 className="font-display text-lg text-ink dark:text-[#f3efe4] mb-2">{m.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{m.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {(activeTab === 'projects' || activeTab === 'tools') && (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-white/[0.02]">
                    <tr>
                      <th className="p-6 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Name & Info</th>
                      <th className="p-6 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Tags / Tech</th>
                      <th className="p-6 text-right text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {activeTab === 'projects' ? (
                      projects.map(p => (
                        <tr key={p._id} className="hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-colors group">
                          <td className="p-6">
                            <div className="font-semibold text-ink dark:text-[#f3efe4] mb-1 group-hover:text-gold transition-colors">{p.title}</div>
                            <div className="text-xs text-slate-400 dark:text-slate-500 line-clamp-1 italic">{p.desc}</div>
                          </td>
                          <td className="p-6">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="text-[10px] font-bold bg-gold/10 text-gold px-2 py-0.5 rounded-md border border-gold/20">{p.category || 'Personal'}</span>
                              {p.stack?.map((s, i) => (
                                <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/5">{s}</span>
                              ))}
                            </div>
                          </td>
                          <td className="p-6 text-right whitespace-nowrap">
                            <button onClick={() => openEditProject(p)} className="text-slate-400 dark:text-slate-600 hover:text-gold transition-colors p-2"><Pencil size={17}/></button>
                            <button onClick={() => handleDelete('projects', p._id)} className="text-slate-400 dark:text-slate-600 hover:text-red-500 transition-colors p-2"><Trash2 size={18}/></button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      tools.map(t => (
                        <tr key={t._id} className="hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-colors">
                          <td className="p-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xl">{t.icon}</div>
                            <span className="font-semibold text-ink dark:text-[#f3efe4]">{t.name}</span>
                          </td>
                          <td className="p-6">
                            <span className="text-[10px] bg-gold/10 text-gold px-3 py-1 rounded-full uppercase font-bold">{t.category}</span>
                          </td>
                          <td className="p-6 text-right whitespace-nowrap">
                            <button onClick={() => openEditTool(t)} className="text-slate-400 dark:text-slate-600 hover:text-gold transition-colors p-2"><Pencil size={17}/></button>
                            <button onClick={() => handleDelete('tools', t._id)} className="text-slate-400 dark:text-slate-600 hover:text-red-500 transition-colors p-2"><Trash2 size={18}/></button>
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

      <ProjectModal
        isOpen={isProjModalOpen}
        onClose={() => setIsProjModalOpen(false)}
        refreshProjects={fetchData}
        editingProject={editingProject}
      />
      <ToolModal
        isOpen={isToolModalOpen}
        onClose={() => setIsToolModalOpen(false)}
        refreshTools={fetchData}
        editingTool={editingTool}
      />
    </div>
  );
};

export default Dashboard;
