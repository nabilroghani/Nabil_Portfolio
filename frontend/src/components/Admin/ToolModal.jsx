import { useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';
import { X, Loader2 } from 'lucide-react';

const ToolModal = ({ isOpen, onClose, refreshTools }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', icon: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/tools', formData);
      toast.success("Tool Added to Stack!");
      refreshTools();
      onClose();
    } catch (err) {
      toast.error("Failed to add tool");
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#112240] w-full max-w-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1d355e]/20">
          <h2 className="text-xl font-bold text-white">Add Tech Tool</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block ml-1">Tool Name</label>
            <input type="text" placeholder="e.g. MongoDB" required className="w-full bg-[#0a192f] border border-gray-800 p-3 rounded-xl focus:border-secondary outline-none" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>

          <div>
            <label className="text-xs text-gray-500 mb-1 block ml-1">Category</label>
            <select className="w-full bg-[#0a192f] border border-gray-800 p-3 rounded-xl focus:border-secondary outline-none"
              onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option value="">Select Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Tools">Development Tools</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-500 mb-1 block ml-1">Lucide Icon Name or Emoji</label>
            <input type="text" placeholder="e.g. 🚀 or icon-name" required className="w-full bg-[#0a192f] border border-gray-800 p-3 rounded-xl focus:border-secondary outline-none" 
              onChange={(e) => setFormData({...formData, icon: e.target.value})} />
          </div>

          <button disabled={loading} className="w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] transition-all flex items-center justify-center gap-2">
            {loading ? <Loader2 className="animate-spin" /> : "Add to Stack"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToolModal;