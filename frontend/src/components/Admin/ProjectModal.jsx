import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

const CATEGORIES = ['Personal', 'Team', 'Client', 'Other'];

const ProjectModal = ({ isOpen, onClose, refreshProjects }) => {
  const [formData, setFormData] = useState({
    title: '', desc: '', stack: '', liveLink: '', githubLink: '', category: 'Personal'
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const inputClass = (field) =>
    `w-full bg-slate-50 dark:bg-[#0f0e22]
     text-slate-800 dark:text-[#f3efe4]
     placeholder:text-slate-400 dark:placeholder:text-[#6f6890]
     border rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200
     ${focused === field
       ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
       : 'border-slate-200 dark:border-[#3a3560]'}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Please select an image first!");

    const data = new FormData();
    data.append('title', formData.title);
    data.append('desc', formData.desc);
    data.append('liveLink', formData.liveLink);
    data.append('githubLink', formData.githubLink);
    data.append('category', formData.category);

    // CRITICAL: Name MUST be 'image' because of upload.single('image')
    data.append('image', imageFile);

    // Stack ko handle karna
    const stackArray = formData.stack.split(',').map(s => s.trim());
    data.append('stack', JSON.stringify(stackArray));

    setLoading(true);
    try {
      await API.post('/projects', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Project Uploaded!");
      refreshProjects();
      setFormData({ title: '', desc: '', stack: '', liveLink: '', githubLink: '', category: 'Personal' });
      setImageFile(null);
      onClose();
    } catch (err) {
      console.log(err.response?.data); // Isse browser console mein real error dikhega
      toast.error("Server Error: Check Console");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="New project"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            className="bg-white dark:bg-[#151228] w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden my-8"
          >

            <div className="flex justify-between items-center p-6 bg-gold/5">
              <h2 className="text-2xl font-bold text-gold">New Project</h2>
              <button type="button" onClick={onClose} className="text-slate-500 dark:text-[#a79fc9] hover:text-red-500 hover:rotate-90 transition-all"><X /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="group relative border-2 border-dashed border-slate-300 dark:border-gray-700 rounded-xl p-4 hover:border-gold transition-colors text-center">
                <input type="file" accept="image/*" required className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => setImageFile(e.target.files[0])} />
                {imageFile ? (
                  <p className="text-gold text-sm">{imageFile.name}</p>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-gray-500">
                    <Upload size={30} />
                    <span className="text-sm">Click to upload project thumbnail</span>
                  </div>
                )}
              </div>

              <input
                type="text" placeholder="Project Title" required
                value={formData.title}
                onFocus={() => setFocused('title')} onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={inputClass('title')}
              />

              <textarea
                placeholder="Tell the story of this project..." required
                value={formData.desc}
                onFocus={() => setFocused('desc')} onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                className={`${inputClass('desc')} h-28 resize-none`}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="url" placeholder="Live Demo Link"
                  value={formData.liveLink}
                  onFocus={() => setFocused('liveLink')} onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                  className={inputClass('liveLink')}
                />
                <input
                  type="url" placeholder="GitHub Code Link"
                  value={formData.githubLink}
                  onFocus={() => setFocused('githubLink')} onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                  className={inputClass('githubLink')}
                />
              </div>

              <input
                type="text" placeholder="Stack (React, Node, Tailwind)"
                value={formData.stack}
                onFocus={() => setFocused('stack')} onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                className={inputClass('stack')}
              />

              <select
                value={formData.category}
                onFocus={() => setFocused('category')} onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className={`${inputClass('category')} cursor-pointer`}
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>

              <button disabled={loading} className="w-full bg-gold text-ink font-bold py-4 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-gold/20 disabled:opacity-50">
                {loading ? 'UPLOADING...' : 'PUBLISH PROJECT'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
