import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Ensure this path is correct
import API from '../api/axios';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownload = async () => {
    const toastId = toast.loading("Connecting to Drive...");
    try {
      const res = await API.get('/cv');
      if (!res.data || !res.data.driveId) throw new Error("ID not found");
      const downloadLink = `https://drive.google.com/uc?export=download&id=${res.data.driveId}`;
      const link = document.createElement('a');
      link.href = downloadLink;
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Download started!", { id: toastId });
      await API.post('/stats/download');
    } catch (err) {
      toast.error("Resume link unavailable", { id: toastId });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? 'py-3 bg-white/70 dark:bg-[#0a192f]/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-xl' 
      : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-secondary/10 p-2 rounded-lg group-hover:bg-secondary/20 transition-colors">
            <Code2 className="text-secondary" size={24} />
          </div>
          <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
            Nabil<span className="text-secondary">.dev</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-600 dark:text-gray-400 hover:text-secondary text-sm font-medium transition-all relative group">
                  <span className="text-secondary font-mono text-xs mr-1">0{i + 1}.</span>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-white/10 pl-6">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#112240] text-amber-500 dark:text-secondary hover:scale-110 transition-transform"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button onClick={handleDownload} className="group relative px-6 py-2.5 overflow-hidden rounded-full border border-secondary text-secondary font-bold text-sm transition-all hover:text-white dark:hover:text-primary">
              <span className="absolute inset-0 w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              <span className="relative flex items-center gap-2"><Download size={16} /> Resume</span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className="text-amber-500 dark:text-secondary p-2">
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="p-2 text-secondary bg-secondary/5 rounded-lg" onClick={() => setIsOpen(true)}>
                <Menu size={28} />
            </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed right-0 top-0 h-full w-[75%] max-w-xs bg-white dark:bg-[#112240] z-[120] p-10 flex flex-col md:hidden">
              <button className="self-end p-2 text-secondary mb-10" onClick={() => setIsOpen(false)}><X size={32} /></button>
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl text-slate-700 dark:text-gray-300 hover:text-secondary font-mono">
                    <span className="text-secondary text-xs mr-2">0{i + 1}.</span>{link.name}
                  </a>
                ))}
                <button onClick={handleDownload} className="mt-4 w-full py-4 border-2 border-secondary text-secondary rounded-xl font-bold flex items-center justify-center gap-2">
                  <Download size={20} /> Download CV
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;