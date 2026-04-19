import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import API from '../api/axios';
import toast from 'react-hot-toast';

const ProjectModal = ({ isOpen, onClose, refreshProjects }) => {
  const [formData, setFormData] = useState({
    title: '', desc: '', stack: '', liveLink: '', githubLink: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Stack string ko array mein convert karna (e.g. "React, Node" -> ["React", "Node"])
      const formattedData = {
        ...formData,
        stack: formData.stack.split(',').map(s => s.trim())
      };
      
      await API.post('/projects', formattedData);
      toast.success('Project added successfully!');
      refreshProjects();
      onClose();
    } catch (error) {
      toast.error('Failed to add project');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#112240] w-full max-w-lg rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-xl font-bold text-secondary">Add New Project</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white"><X /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input 
                type="text" placeholder="Project Title" required
                className="w-full bg-[#0a192f] border border-gray-700 p-3 rounded outline-none focus:border-secondary"
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
              <textarea 
                placeholder="Description" required
                className="w-full bg-[#0a192f] border border-gray-700 p-3 rounded outline-none focus:border-secondary h-24"
                onChange={(e) => setFormData({...formData, desc: e.target.value})}
              ></textarea>
              <input 
                type="text" placeholder="Tech Stack (comma separated: React, Node, CSS)" 
                className="w-full bg-[#0a192f] border border-gray-700 p-3 rounded outline-none focus:border-secondary"
                onChange={(e) => setFormData({...formData, stack: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="url" placeholder="Live Link" 
                  className="bg-[#0a192f] border border-gray-700 p-3 rounded outline-none focus:border-secondary"
                  onChange={(e) => setFormData({...formData, liveLink: e.target.value})}
                />
                <input 
                  type="url" placeholder="GitHub Link" 
                  className="bg-[#0a192f] border border-gray-700 p-3 rounded outline-none focus:border-secondary"
                  onChange={(e) => setFormData({...formData, githubLink: e.target.value})}
                />
              </div>
              <button className="w-full bg-secondary text-primary font-bold py-3 rounded-lg hover:bg-opacity-90 transition shadow-lg">
                Publish Project
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;