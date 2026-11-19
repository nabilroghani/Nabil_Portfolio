'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Feather, Download, Sun, Moon, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { downloadCv } from '../utils/cvDownload';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();

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

  // Close mobile drawer on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Compact 6-item primary navigation
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDownload = async () => {
    const toastId = toast.loading('Connecting to Drive...');
    try {
      await downloadCv();
      toast.success('Download started!', { id: toastId });
    } catch {
      toast.error('Resume link unavailable', { id: toastId });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'py-2.5 bg-[#f3f2ef]/92 dark:bg-[#0b0a1a]/92 backdrop-blur-xl border-b border-slate-200 dark:border-[#241f42] shadow-sm shadow-slate-200/50 dark:shadow-black/30'
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="Nabil Ahmad Portfolio Home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gold/15 dark:bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-200">
              <Feather size={18} className="text-gold" strokeWidth={2.4} />
            </div>
            <span className="font-display text-ink dark:text-[#f3efe4] text-lg tracking-tight">
              Nabil<span className="italic text-gold"> Ahmad</span>
            </span>
          </Link>

          {/* ── Desktop links with High-Contrast Active Pill ── */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            <ul className="flex items-center gap-1 p-1 rounded-full bg-slate-200/60 dark:bg-[#151228] border border-slate-300/50 dark:border-[#2a2450] shadow-inner">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname?.startsWith(`${link.href}/`);

                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`px-3.5 py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-all duration-200 block ${
                        isActive
                          ? 'bg-gold text-slate-950 font-bold shadow-md shadow-gold/30 scale-105'
                          : 'text-slate-700 dark:text-[#c3bde0] hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-300 dark:border-[#2a2450]">
              {/* Command Palette Trigger Button */}
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
                }}
                aria-label="Open command palette (Ctrl+K)"
                title="Quick Search & Actions (Ctrl+K)"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  bg-white/80 dark:bg-[#151228]
                  border border-slate-300 dark:border-[#3a3560]
                  text-slate-600 dark:text-[#a79fc9]
                  hover:border-gold hover:text-gold
                  transition-all duration-200 cursor-pointer shadow-sm text-xs font-medium"
              >
                <Search size={13} className="text-gold" />
                <span className="font-mono text-[10px] px-1 py-0.5 rounded bg-slate-200/80 dark:bg-[#252044] text-slate-700 dark:text-slate-300 font-bold">⌘K</span>
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-full flex items-center justify-center
                  bg-white/80 dark:bg-[#151228]
                  border border-slate-300 dark:border-[#3a3560]
                  text-slate-700 dark:text-[#c3bde0]
                  hover:border-gold hover:text-gold
                  transition-all duration-200 cursor-pointer shadow-sm"
              >
                {!mounted ? <span className="w-4 h-4 inline-block" /> : isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
              </button>

              {/* Resume button */}
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full overflow-hidden
                  border border-gold
                  text-gold
                  font-bold text-xs lg:text-sm
                  hover:text-slate-950
                  transition-colors duration-300 cursor-pointer"
              >
                <span className="absolute inset-0 w-0 bg-gold group-hover:w-full transition-all duration-300" />
                <Download size={14} strokeWidth={2.5} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </button>
            </div>
          </div>

          {/* ── Mobile right controls (44px+ touch targets) ── */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Search Trigger */}
            <button
              onClick={() => {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
              }}
              aria-label="Quick search and actions"
              className="w-11 h-11 rounded-full flex items-center justify-center
                bg-white/80 dark:bg-[#151228]
                border border-slate-300 dark:border-[#3a3560]
                text-slate-700 dark:text-[#c3bde0]
                hover:border-gold
                transition-all duration-200 cursor-pointer shadow-sm"
            >
              <Search size={18} />
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-11 h-11 rounded-full flex items-center justify-center
                bg-white/80 dark:bg-[#151228]
                border border-slate-300 dark:border-[#3a3560]
                text-slate-700 dark:text-[#c3bde0]
                hover:border-gold
                transition-all duration-200 cursor-pointer shadow-sm"
            >
              {!mounted ? <span className="w-4 h-4 inline-block" /> : isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="w-11 h-11 rounded-full flex items-center justify-center
                bg-white/80 dark:bg-[#151228]
                border border-slate-300 dark:border-[#3a3560]
                text-slate-800 dark:text-[#c3bde0]
                hover:border-gold
                transition-all duration-200 cursor-pointer shadow-sm"
            >
              <Menu size={20} strokeWidth={2.2} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Sidebar Drawer ── */}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 h-full w-[78%] max-w-[320px] z-[120] md:hidden flex flex-col
                bg-[#faf7f0] dark:bg-[#0f0e22]
                border-l border-slate-200 dark:border-[#241f42]
                shadow-2xl shadow-black/30"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-[#241f42]">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="font-display text-ink dark:text-[#f3efe4] text-base tracking-tight"
                >
                  Nabil<span className="italic text-gold"> Ahmad</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-11 h-11 rounded-full flex items-center justify-center
                    bg-transparent
                    border border-slate-300 dark:border-[#3a3560]
                    text-slate-700 dark:text-[#c3bde0]
                    hover:border-red-400 hover:text-red-500
                    transition-all duration-200 cursor-pointer"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1.5 px-4 py-5 flex-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname === link.href || pathname?.startsWith(`${link.href}/`);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 min-h-[44px] ${
                        isActive
                          ? 'bg-gold text-slate-950 font-bold shadow-md shadow-gold/25'
                          : 'text-slate-700 dark:text-[#c3bde0] hover:bg-gold/10 hover:text-gold'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                      )}
                    </Link>
                  );
                })}

                {/* Secondary navigation for Reviews & About */}
                <div className="pt-3 mt-2 border-t border-slate-200/60 dark:border-[#241f42]/60 space-y-1">
                  <p className="px-4 text-[10px] font-bold text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider">
                    More Pages
                  </p>
                  <Link
                    href="/reviews"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                      pathname === '/reviews'
                        ? 'bg-gold text-slate-950 font-bold'
                        : 'text-slate-600 dark:text-[#a79fc9] hover:text-gold hover:bg-gold/5'
                    }`}
                  >
                    <span>Client Reviews &amp; Trust Wall</span>
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                      pathname === '/about'
                        ? 'bg-gold text-slate-950 font-bold'
                        : 'text-slate-600 dark:text-[#a79fc9] hover:text-gold hover:bg-gold/5'
                    }`}
                  >
                    <span>About Nabil Ahmad</span>
                  </Link>
                </div>
              </nav>

              {/* Drawer footer */}
              <div className="px-4 pb-8 space-y-3 border-t border-slate-200 dark:border-[#241f42] pt-4">
                <button
                  onClick={() => { handleDownload(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full
                    bg-gold hover:bg-gold-soft
                    text-slate-950 font-bold text-sm
                    shadow-lg shadow-gold/20
                    transition-all duration-200 active:scale-95 cursor-pointer min-h-[48px]"
                >
                  <Download size={16} strokeWidth={2.5} />
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
