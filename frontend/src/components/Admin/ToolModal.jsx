import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import API from '../../api/axios';
import toast from 'react-hot-toast';
import { X, Loader2, Cpu, Tag, Smile, Plus } from 'lucide-react';

const ToolModal = ({ isOpen, onClose, refreshTools }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', icon: '' });
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

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
    } catch {
      toast.error('Failed to add tool');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-slate-50 dark:bg-[#1a1730]/60
     text-slate-800 dark:text-[#f3efe4]
     placeholder:text-slate-400 dark:placeholder:text-[#6f6890]
     border rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200
     ${focused === field
       ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
       : 'border-slate-200 dark:border-[#3a3560]'}`;

  const labelClass = 'flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-[#a79fc9] uppercase tracking-widest mb-1.5';

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
            role="dialog"
            aria-modal="true"
            aria-label="Add tech tool"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md
              bg-white dark:bg-[#151228]
              border border-slate-200 dark:border-[#3a3560]/60
              rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/60
              overflow-hidden"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5
              border-b border-slate-100 dark:border-[#241f42]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Cpu size={18} className="text-gold" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-display text-ink dark:text-[#f3efe4] text-base">Add Tech Tool</h2>
                  <p className="text-slate-400 dark:text-[#8a83ab] text-xs">Add a new skill to your stack</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  bg-slate-100 dark:bg-[#1a1730]
                  border border-slate-200 dark:border-[#3a3560]
                  text-slate-500 dark:text-[#a79fc9]
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
                <p className="text-xs text-slate-400 dark:text-[#8a83ab] mt-1.5 ml-1">
                  Use react-icons name or any emoji
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-full font-semibold text-sm
                    border border-slate-200 dark:border-[#3a3560]
                    text-slate-600 dark:text-[#c3bde0]
                    hover:border-slate-300 dark:hover:border-[#3a3560]
                    bg-transparent hover:bg-slate-50 dark:hover:bg-[#1a1730]
                    transition-all duration-200 active:scale-[0.98]"
                >
                  Cancel
                </button>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.01 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm
                    transition-all duration-200
                    ${loading
                      ? 'bg-gold-soft cursor-not-allowed text-ink'
                      : 'bg-gold hover:bg-gold-soft text-ink shadow-lg shadow-gold/25'
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
