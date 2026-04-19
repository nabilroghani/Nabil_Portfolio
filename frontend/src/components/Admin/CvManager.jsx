import { useState, useEffect } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';
import { Save, ExternalLink, Link2 } from 'lucide-react';

const CvManager = () => {
  const [driveId, setDriveId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCv = async () => {
      try {
        const res = await API.get('/cv');
        if (res.data) setDriveId(res.data.driveId);
      } catch (err) { console.log("No ID found"); }
    };
    fetchCv();
  }, []);

  const handleSave = async () => {
    if (!driveId) return toast.error("Please enter a Drive ID");
    setLoading(true);
    try {
      await API.post('/cv/upload', { driveId });
      toast.success("Drive ID saved successfully!");
    } catch (err) {
      toast.error("Failed to save ID");
    } finally { setLoading(false); }
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
      <div className="bg-[#0a192f] p-8 rounded-3xl border border-white/5 w-full max-w-md">
        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
          <Link2 className="text-secondary" /> Google Drive Settings
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-2 block">Google Drive File ID</label>
            <input 
              type="text" 
              value={driveId}
              onChange={(e) => setDriveId(e.target.value)}
              placeholder="e.g. 1aBcDeFgHiJkLmNoP..."
              className="w-full bg-[#112240] border border-gray-800 p-4 rounded-xl text-secondary outline-none focus:border-secondary/50 transition-all"
            />
          </div>

          <button 
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Save size={18} /> {loading ? "Saving..." : "Update Drive ID"}
          </button>

          {driveId && (
            <a 
              href={`https://drive.google.com/file/d/${driveId}/view`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-secondary mt-4 transition-colors"
            >
              Test Link <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CvManager;