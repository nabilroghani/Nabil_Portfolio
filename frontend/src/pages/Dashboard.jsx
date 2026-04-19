import { useEffect, useState } from 'react';
import API from '../api/axios';
import toast from 'react-hot-toast';
import { Trash2, Plus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Projects fetch karne ka function
  const fetchProjects = async () => {
    try {
      const { data } = await API.get('/projects');
      setProjects(data);
    } catch (error) {
      toast.error("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete project logic
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await API.delete(`/projects/${id}`);
        toast.success("Project Removed Successfully");
        fetchProjects(); // List refresh karein
      } catch (error) {
        toast.error("Error deleting project");
      }
    }
  };

  // Logout logic
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success("Logged out successfully");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-primary p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your portfolio projects efficiently.</p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-secondary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-opacity-80 transition-all shadow-lg shadow-secondary/10"
          >
            <Plus size={20} /> Add Project
          </button>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2.5 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Projects Table Section */}
      <div className="max-w-6xl mx-auto bg-[#112240] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1d355e]/30 border-b border-gray-700">
                <th className="p-5 text-secondary font-semibold uppercase text-xs tracking-wider">Project Title</th>
                <th className="p-5 text-secondary font-semibold uppercase text-xs tracking-wider">Tech Stack</th>
                <th className="p-5 text-secondary font-semibold uppercase text-xs tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {projects.length > 0 ? (
                projects.map((proj) => (
                  <tr key={proj._id} className="hover:bg-[#1d355e]/20 transition-colors">
                    <td className="p-5">
                      <span className="text-white font-medium">{proj.title}</span>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {proj.stack.map((tech, idx) => (
                          <span key={idx} className="bg-[#0a192f] text-gray-400 text-[10px] px-2 py-1 rounded border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-5 text-right">
                      <button 
                        onClick={() => handleDelete(proj._id)} 
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-full transition-all"
                        title="Delete Project"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-10 text-center text-gray-500 italic">
                    No projects found. Click "Add Project" to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Modal Integration */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        refreshProjects={fetchProjects} 
      />
    </div>
  );
};

export default Dashboard;