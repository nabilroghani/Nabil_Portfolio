import { useEffect, useMemo, useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';
import {
  Save,
  Link2,
  ExternalLink,
  Copy,
  FileText,
  ShieldAlert
} from 'lucide-react';

const CvManager = () => {
  const [driveId, setDriveId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCv = async () => {
      try {
        const res = await API.get('/cv');
        if (res.data?.driveId) setDriveId(res.data.driveId);
      } catch {
        console.log('No CV found');
      }
    };
    fetchCv();
  }, []);

  const previewLink = useMemo(() =>
    driveId ? `https://drive.google.com/file/d/${driveId}/view` : '',
    [driveId]);

  const handleSave = async () => {
    if (!driveId.trim()) return toast.error('Please enter a Drive ID');
    setLoading(true);
    try {
      await API.post('/cv/upload', { driveId: driveId.trim() });
      toast.success('CV Link Updated!');
    } catch {
      toast.error('Failed to update');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!previewLink) return toast.error('Add ID first');
    navigator.clipboard.writeText(previewLink);
    toast.success('Link Copied!');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 sm:p-0">

      {/* --- Main Settings Form --- */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white dark:bg-[#151228] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-white/10 shadow-sm transition-all">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gold/15 rounded-2xl text-gold">
              <FileText size={28} />
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink dark:text-[#f3efe4]">CV Management</h2>
              <p className="text-sm text-slate-500 dark:text-[#a79fc9]">Manage your resume source link</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-[#c3bde0] uppercase tracking-wider">
                Google Drive File ID
              </label>
              <div className="relative group">
                <input
                  type="text"
                  value={driveId}
                  onChange={(e) => setDriveId(e.target.value)}
                  placeholder="Paste ID here..."
                  className="w-full 
    /* Light Mode */
    bg-slate-50 border-slate-300 text-slate-900 
    /* Dark Mode - High Contrast */
    dark:bg-[#1a1730] dark:border-gold/20 dark:text-[#f3efe4] dark:placeholder:text-[#6f6890]
    /* Layout & Effects */
    border-2 rounded-2xl px-6 py-5 outline-none 
    focus:border-gold focus:ring-2 focus:ring-gold/20
    transition-all text-lg font-mono"
                />
                <Link2 className="absolute right-6 top-5 text-slate-400 group-focus-within:text-gold transition-colors" size={24} />
              </div>
              <p className="text-xs text-slate-500 dark:text-[#8a83ab] mt-3 flex items-center gap-2 px-1">
                <span className="text-gold font-bold">ID:</span>
                Everything between /d/ and /view in your Drive URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex-[2] bg-gold hover:bg-gold-soft text-ink font-bold py-5 rounded-full transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-gold/10"
              >
                <Save size={20} />
                {loading ? 'SAVING...' : 'UPDATE CV LINK'}
              </button>
              <button
                onClick={handleCopy}
                className="flex-1 px-6 py-5 border-2 border-slate-200 dark:border-white/10 rounded-2xl text-slate-700 dark:text-[#e5e1f2] font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-3 rounded-full"
              >
                <Copy size={20} />
                COPY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Sidebar Status --- */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-[#151228] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-sm">
          <h3 className="text-[11px] font-bold text-slate-400 dark:text-[#8a83ab] uppercase tracking-[0.2em] mb-6">Live Status</h3>

          <div className={`flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed transition-all ${driveId ? 'border-gold/30 bg-gold/5' : 'border-amber-500/30 bg-amber-500/5'}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${driveId ? 'bg-gold text-ink shadow-xl shadow-gold/20' : 'bg-amber-500 text-white'}`}>
              {driveId ? <FileText size={32} /> : <ShieldAlert size={32} />}
            </div>
            <p className={`text-lg font-black ${driveId ? 'text-emerald-500' : 'text-amber-500'}`}>
              {driveId ? 'CV CONNECTED' : 'ID MISSING'}
            </p>
          </div>

          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full py-5 bg-ink dark:bg-white text-white dark:text-ink rounded-2xl flex items-center justify-center gap-3 font-black text-sm hover:scale-[1.02] transition-all shadow-xl shadow-black/10"
            >
              PREVIEW LIVE FILE
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="bg-gold/10 dark:bg-gold/5 border-2 border-gold/20 rounded-3xl p-6">
          <h4 className="font-bold text-xs text-gold uppercase tracking-widest mb-2">Important!</h4>
          <p className="text-[13px] leading-relaxed text-slate-600 dark:text-[#a79fc9]">
            Make sure your Google Drive file share settings are set to <b>&quot;Anyone with the link&quot;</b>. If it&apos;s private, the download button on your portfolio won&apos;t work for visitors.
          </p>
        </div>
      </div>

    </div>
  );
};

export default CvManager;