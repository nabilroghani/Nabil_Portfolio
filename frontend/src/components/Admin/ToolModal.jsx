import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import API from '../../api/axios';
import toast from 'react-hot-toast';
import { X, Loader2, Cpu, Tag, Smile, Plus } from 'lucide-react';

const ToolModal = ({ isOpen, onClose, refreshTools }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', icon: '' });
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) return toast.error('Please select a category');
    setLoading(true);
    try {
      await API.post('/tools', formData);
      toast.success('Tool Added to Stack!');
      refreshTools();
      onClose();
      setFormData({ name: '', category: '', icon: '' });
    } catch (err) {
      toast.error('Failed to add tool');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-slate-50 dark:bg-slate-800/50
     text-slate-800 dark:text-white
     placeholder:text-slate-400 dark:placeholder:text-slate-500
     border rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200
     ${focused === field
       ? 'border-emerald-500 ring-2 ring-emerald-500/15 bg-white dark:bg-slate-800'
       : 'border-slate-200 dark:border-slate-700'}`;

  const labelClass = 'flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4
            bg-black/50 dark:bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-700/60
              rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/60
              overflow-hidden"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5
              border-b border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Cpu size={18} className="text-emerald-500" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-slate-900 dark:text-white font-black text-base">Add Tech Tool</h2>
                  <p className="text-slate-400 dark:text-slate-500 text-xs">Add a new skill to your stack</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  bg-slate-100 dark:bg-slate-800
                  border border-slate-200 dark:border-slate-700
                  text-slate-500 dark:text-slate-400
                  hover:border-red-400/40 hover:text-red-500
                  transition-all duration-200"
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">

              {/* Tool Name */}
              <div>
                <label className={labelClass}>
                  <Tag size={12} /> Tool Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. MongoDB, React"
                  required
                  value={formData.name}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass('name')}
                />
              </div>

              {/* Category */}
              <div>
                <label className={labelClass}>
                  <Cpu size={12} /> Category
                </label>
                <select
                  required
                  value={formData.category}
                  onFocus={() => setFocused('category')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={`${inputClass('category')} cursor-pointer`}
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Tools">Development Tools</option>
                  <option value="Database">Database</option>
                </select>
              </div>

              {/* Icon */}
              <div>
                <label className={labelClass}>
                  <Smile size={12} /> Icon Name / Emoji
                </label>
                <input
                  type="text"
                  placeholder="e.g. SiReact, FaNodeJs or 🚀"
                  required
                  value={formData.icon}
                  onFocus={() => setFocused('icon')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className={`${inputClass('icon')} font-mono`}
                />
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 ml-1">
                  Use react-icons name or any emoji
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl font-bold text-sm
                    border border-slate-200 dark:border-slate-700
                    text-slate-600 dark:text-slate-300
                    hover:border-slate-300 dark:hover:border-slate-600
                    bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800
                    transition-all duration-200 active:scale-[0.98]"
                >
                  Cancel
                </button>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.01 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm
                    transition-all duration-200
                    ${loading
                      ? 'bg-emerald-400 cursor-not-allowed text-white'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25'
                    }`}
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <Plus size={15} strokeWidth={2.5} />
                      Add to Stack
                    </>
                  )}
                </motion.button>
              </div>

            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToolModal;
