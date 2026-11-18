'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Feather, Download, Sun, Moon } from 'lucide-react';
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About', href: '/about' },
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
          ? 'py-3 bg-[#f3f2ef]/90 dark:bg-[#0b0a1a]/90 backdrop-blur-xl border-b border-slate-200 dark:border-[#241f42] shadow-sm shadow-slate-200/50 dark:shadow-black/30'
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="Nabil Ahmad Portfolio Home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 dark:bg-gold/15 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-200">
              <Feather size={18} className="text-gold" strokeWidth={2.2} />
            </div>
            <span className="font-display text-ink dark:text-[#f3efe4] text-lg tracking-tight">
              Nabil<span className="italic text-gold"> Ahmad</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname?.startsWith(`${link.href}/`);

                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 group block ${
                        isActive
                          ? 'text-gold dark:text-gold font-bold'
                          : 'text-slate-700 dark:text-[#a79fc9] hover:text-ink dark:hover:text-[#f3efe4]'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gold transition-transform duration-300 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 pl-4 lg:pl-6 border-l border-slate-200 dark:border-[#2a2450]">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-full flex items-center justify-center
                  bg-transparent
                  border border-slate-300 dark:border-[#3a3560]
                  text-slate-700 dark:text-[#c3bde0]
                  hover:border-gold hover:text-gold
                  transition-all duration-200 cursor-pointer"
              >
                {!mounted ? <span className="w-4 h-4 inline-block" /> : isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
              </button>

              {/* Resume button */}
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full overflow-hidden
                  border border-gold
                  text-gold
                  font-semibold text-sm
                  hover:text-ink
                  transition-colors duration-300 cursor-pointer"
              >
                <span className="absolute inset-0 w-0 bg-gold group-hover:w-full transition-all duration-300" />
                <Download size={15} strokeWidth={2.5} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </button>
            </div>
          </div>

          {/* ── Mobile right controls (Optimized 44px+ tap targets) ── */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-11 h-11 rounded-full flex items-center justify-center
                bg-transparent
                border border-slate-300 dark:border-[#3a3560]
                text-slate-700 dark:text-[#c3bde0]
                hover:border-gold
                transition-all duration-200 cursor-pointer"
            >
              {!mounted ? <span className="w-4 h-4 inline-block" /> : isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="w-11 h-11 rounded-full flex items-center justify-center
                bg-transparent
                border border-slate-300 dark:border-[#3a3560]
                text-slate-800 dark:text-[#c3bde0]
                hover:border-gold
                transition-all duration-200 cursor-pointer"
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
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
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
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 min-h-[44px] ${
                        isActive
                          ? 'bg-gold/15 text-gold font-bold shadow-sm'
                          : 'text-slate-700 dark:text-[#c3bde0] hover:bg-gold/5 hover:text-gold'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-gold" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="px-4 pb-8 space-y-3 border-t border-slate-200 dark:border-[#241f42] pt-4">
                <button
                  onClick={() => { handleDownload(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full
                    bg-gold hover:bg-gold-soft
                    text-ink font-bold text-sm
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
