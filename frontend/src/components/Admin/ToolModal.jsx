import { useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';
import { X, Loader2, Cpu, Tag, Smile } from 'lucide-react';

const ToolModal = ({ isOpen, onClose, refreshTools }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', icon: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) return toast.error("Please select a category");
    
    setLoading(true);
    try {
      await API.post('/tools', formData);
      toast.success("Tool Added to Stack!");
      refreshTools();
      onClose();
      setFormData({ name: '', category: '', icon: '' }); // Reset
    } catch (err) {
      toast.error("Failed to add tool");
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      
      <div className="bg-[#112240] w-full max-w-md rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden transform animate-in zoom-in-95 duration-300">
        
        {/* --- Header --- */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
              <Cpu size={20} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Add Tech Tool</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* --- Form --- */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          
          {/* Tool Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
              <Tag size={14} /> Tool Name
            </label>
            <input 
              type="text" 
              placeholder="e.g. MongoDB, React" 
              required 
              value={formData.name}
              className="w-full bg-[#0a192f] border-2 border-white/5 p-4 rounded-2xl text-white outline-none focus:border-secondary/50 focus:ring-4 focus:ring-secondary/10 transition-all placeholder:text-slate-600" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
              <Cpu size={14} /> Category
            </label>
            <select 
              required
              value={formData.category}
              className="w-full bg-[#0a192f] border-2 border-white/5 p-4 rounded-2xl text-white outline-none focus:border-secondary/50 transition-all appearance-none cursor-pointer"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="" className="bg-[#112240]">Select Category</option>
              <option value="Frontend" className="bg-[#112240]">Frontend</option>
              <option value="Backend" className="bg-[#112240]">Backend</option>
              <option value="Tools" className="bg-[#112240]">Development Tools</option>
              <option value="Database" className="bg-[#112240]">Database</option>
            </select>
          </div>

          {/* Icon */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
              <Smile size={14} /> Icon Name / Emoji
            </label>
            <input 
              type="text" 
              placeholder="e.g. SiReact, FaNodeJs or 🚀" 
              required 
              value={formData.icon}
              className="w-full bg-[#0a192f] border-2 border-white/5 p-4 rounded-2xl text-white outline-none focus:border-secondary/50 transition-all font-mono placeholder:text-slate-600" 
              onChange={(e) => setFormData({...formData, icon: e.target.value})} 
            />
          </div>

          {/* Submit Button */}
          <button 
            disabled={loading} 
            className="w-full bg-secondary text-primary font-black py-5 rounded-2xl mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-secondary/10 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Adding...</span>
              </>
            ) : (
              "Add to Stack"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToolModal;