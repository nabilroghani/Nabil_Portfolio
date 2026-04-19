import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

const ProjectModal = ({ isOpen, onClose, refreshProjects }) => {
  const [formData, setFormData] = useState({
    title: '', desc: '', stack: '', liveLink: '', githubLink: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!imageFile) return toast.error("Please select an image first!");

  const data = new FormData();
  data.append('title', formData.title);
  data.append('desc', formData.desc);
  data.append('liveLink', formData.liveLink);
  data.append('githubLink', formData.githubLink);
  
  // CRITICAL: Name MUST be 'image' because of upload.single('image')
  data.append('image', imageFile); 
  
  // Stack ko handle karna
  const stackArray = formData.stack.split(',').map(s => s.trim());
  data.append('stack', JSON.stringify(stackArray));

  try {
    await API.post('/projects', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    toast.success("Project Uploaded!");
    refreshProjects();
    onClose();
  } catch (err) {
    console.log(err.response?.data); // Isse browser console mein real error dikhega
    toast.error("Server Error: Check Console");
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            className="bg-[#112240] w-full max-w-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            
            <div className="flex justify-between items-center p-6 bg-[#1d355e]/20">
              <h2 className="text-2xl font-bold text-secondary">New Project</h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform"><X /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="group relative border-2 border-dashed border-gray-700 rounded-xl p-4 hover:border-secondary transition-colors text-center">
                <input type="file" accept="image/*" required className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => setImageFile(e.target.files[0])} />
                {imageFile ? (
                  <p className="text-secondary text-sm font-mono">{imageFile.name}</p>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <Upload size={30} />
                    <span className="text-sm">Click to upload project thumbnail</span>
                  </div>
                )}
              </div>

              <input type="text" placeholder="Project Title" required className="w-full bg-[#0a192f] border border-gray-700 p-4 rounded-xl focus:ring-2 ring-secondary/20 outline-none"
                onChange={(e) => setFormData({...formData, title: e.target.value})} />
              
              <textarea placeholder="Tell the story of this project..." required className="w-full bg-[#0a192f] border border-gray-700 p-4 rounded-xl h-28 focus:ring-2 ring-secondary/20 outline-none"
                onChange={(e) => setFormData({...formData, desc: e.target.value})} />

              <div className="grid grid-cols-2 gap-4">
                <input type="url" placeholder="Live Demo Link" className="bg-[#0a192f] border border-gray-700 p-4 rounded-xl outline-none"
                  onChange={(e) => setFormData({...formData, liveLink: e.target.value})} />
                <input type="url" placeholder="GitHub Code Link" className="bg-[#0a192f] border border-gray-700 p-4 rounded-xl outline-none"
                  onChange={(e) => setFormData({...formData, githubLink: e.target.value})} />
              </div>

              <input type="text" placeholder="Stack (React, Node, Tailwind)" className="w-full bg-[#0a192f] border border-gray-700 p-4 rounded-xl outline-none"
                onChange={(e) => setFormData({...formData, stack: e.target.value})} />

              <button disabled={loading} className="w-full bg-secondary text-primary font-black py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-secondary/20 disabled:opacity-50">
                {loading ? 'UPLOADING...' : 'PUBLISH PROJECT'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;