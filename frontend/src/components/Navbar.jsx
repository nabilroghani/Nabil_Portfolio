import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { downloadCv } from '../utils/cvDownload';
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

  // Close sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home',     href: '/'         },
    { name: 'about', href: '#about'},
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience'},
    { name: 'Contact',  href: '#contact'  },
  ];

  const handleDownload = async () => {
    const toastId = toast.loading('Connecting to Drive...');
    try {
      await downloadCv();
      toast.success('Download started!', { id: toastId });
    } catch (err) {
      toast.error('Resume link unavailable', { id: toastId });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-[#060d1a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50'
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">

          {/* ── Logo ── */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200">
              <Code2 size={20} className="text-emerald-500" strokeWidth={2.5} />
            </div>
            <span className="text-slate-900 dark:text-white font-black text-lg tracking-tight">
              Nabil<span className="text-emerald-500">.dev</span>
            </span>
          </motion.a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-emerald-500 font-mono text-[11px] mr-1">0{i + 1}.</span>
                    {link.name}
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-700/60">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  bg-slate-100 dark:bg-slate-800
                  border border-slate-200 dark:border-slate-700
                  text-slate-600 dark:text-slate-300
                  hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400
                  transition-all duration-200"
              >
                {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
              </button>

              {/* Resume button */}
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-xl overflow-hidden
                  border border-emerald-500
                  text-emerald-600 dark:text-emerald-400
                  font-bold text-sm
                  hover:text-white dark:hover:text-white
                  transition-colors duration-300"
              >
                <span className="absolute inset-0 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300" />
                <Download size={15} strokeWidth={2.5} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </button>
            </div>
          </div>

          {/* ── Mobile right controls ── */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                text-slate-600 dark:text-slate-300
                hover:border-emerald-500/40
                transition-all duration-200"
            >
              {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="w-9 h-9 rounded-xl flex items-center justify-center
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-300
                hover:border-emerald-500/40
                transition-all duration-200"
            >
              <Menu size={18} strokeWidth={2} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 h-full w-[72%] max-w-[300px] z-[120] md:hidden flex flex-col
                bg-white dark:bg-[#0b1120]
                border-l border-slate-200 dark:border-slate-800
                shadow-2xl shadow-slate-900/20"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-900 dark:text-white font-black text-base tracking-tight">
                  Nabil<span className="text-emerald-500">.dev</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                    bg-slate-100 dark:bg-slate-800
                    border border-slate-200 dark:border-slate-700
                    text-slate-600 dark:text-slate-300
                    hover:border-red-400/40 hover:text-red-500
                    transition-all duration-200"
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                      text-slate-700 dark:text-slate-300
                      hover:bg-slate-50 dark:hover:bg-slate-800/60
                      hover:text-emerald-600 dark:hover:text-emerald-400
                      font-medium text-sm transition-all duration-200"
                  >
                    <span className="text-emerald-500 font-mono text-[11px] w-5">0{i + 1}.</span>
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-4 pb-8 space-y-3">
                <button
                  onClick={() => { handleDownload(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                    bg-emerald-500 hover:bg-emerald-400
                    text-white font-bold text-sm
                    shadow-lg shadow-emerald-500/25
                    transition-all duration-200 active:scale-95"
                >
                  <Download size={15} strokeWidth={2.5} />
                  Download Resume
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
