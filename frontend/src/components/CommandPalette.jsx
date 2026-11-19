'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  FileText,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Home,
  Package,
  Layers,
  Briefcase,
  Wrench,
  MessageSquare,
  Star,
  User,
  GraduationCap,
  Pill,
  X,
  CornerDownLeft
} from 'lucide-react';
import GithubMark from './icons/GithubMark';
import LinkedinMark from './icons/LinkedinMark';
import { useTheme } from '../context/ThemeContext';
import { downloadCv } from '../utils/cvDownload';
import toast from 'react-hot-toast';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const inputRef = useRef(null);

  // Global Ctrl+K / Cmd+K keydown listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Command items catalog
  const commands = useMemo(() => [
    // Navigation
    {
      id: 'nav-home',
      group: 'Pages',
      title: 'Home Page',
      subtitle: 'Portfolio landing page & executive overview',
      icon: Home,
      action: () => router.push('/')
    },
    {
      id: 'nav-products',
      group: 'Pages',
      title: 'Enterprise SaaS Products',
      subtitle: 'EduNexa SMS & PharmaLogic ERP',
      icon: Package,
      action: () => router.push('/products')
    },
    {
      id: 'nav-projects',
      group: 'Pages',
      title: 'Projects & Architecture Case Studies',
      subtitle: 'All 10+ production applications & filtered archive',
      icon: Layers,
      action: () => router.push('/projects')
    },
    {
      id: 'nav-experience',
      group: 'Pages',
      title: 'Experience & Technical Skills',
      subtitle: '3+ Years experience & skill proficiency breakdown',
      icon: Briefcase,
      action: () => router.push('/experience')
    },
    {
      id: 'nav-services',
      group: 'Pages',
      title: 'Services & Client Solutions',
      subtitle: 'Custom MERN apps, MVP builds & pricing models',
      icon: Wrench,
      action: () => router.push('/services')
    },
    {
      id: 'nav-reviews',
      group: 'Pages',
      title: 'Client Reviews & Endorsements',
      subtitle: 'Verified European & international feedback',
      icon: Star,
      action: () => router.push('/reviews')
    },
    {
      id: 'nav-about',
      group: 'Pages',
      title: 'About Nabil Ahmad',
      subtitle: 'Software Engineer bio & technical background',
      icon: User,
      action: () => router.push('/about')
    },
    {
      id: 'nav-contact',
      group: 'Pages',
      title: 'Contact & Hire Form',
      subtitle: 'Submit project requirements & inquiry',
      icon: MessageSquare,
      action: () => router.push('/contact')
    },

    // Live Flagship Products
    {
      id: 'prod-edunexa',
      group: 'Flagship Products',
      title: 'EduNexa SMS — Live Web App',
      subtitle: 'Open the school management system in a new tab',
      icon: GraduationCap,
      action: () => window.open('https://edu-nexa-beta.vercel.app/', '_blank')
    },
    {
      id: 'prod-pharmalogic',
      group: 'Flagship Products',
      title: 'PharmaLogic ERP — Overview',
      subtitle: 'Pharmacy POS & healthcare inventory architecture',
      icon: Pill,
      action: () => router.push('/products/pharmalogic')
    },

    // Actions & Social
    {
      id: 'act-resume',
      group: 'Recruiter Quick Actions',
      title: 'Download ATS Resume (PDF)',
      subtitle: 'Get Nabil Ahmad’s up-to-date engineering resume',
      icon: FileText,
      action: async () => {
        const tid = toast.loading('Preparing resume download...');
        try {
          await downloadCv();
          toast.success('Resume download started!', { id: tid });
        } catch {
          toast.error('Resume link unavailable', { id: tid });
        }
      }
    },
    {
      id: 'act-copy-email',
      group: 'Recruiter Quick Actions',
      title: 'Copy Email Address',
      subtitle: 'contact@nabilahmad.site',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('contact@nabilahmad.site');
        toast.success('Copied contact@nabilahmad.site to clipboard!');
      }
    },
    {
      id: 'act-whatsapp',
      group: 'Recruiter Quick Actions',
      title: 'Chat on WhatsApp',
      subtitle: '+92 304 1237882 (Instant direct messaging)',
      icon: MessageSquare,
      action: () => window.open('https://wa.me/923041237882?text=Hi%20Nabil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20role%20or%20project.', '_blank')
    },
    {
      id: 'act-github',
      group: 'Social & Code',
      title: 'GitHub Profile',
      subtitle: 'github.com/nabilroghani (Open-source code & commits)',
      icon: GithubMark,
      action: () => window.open('https://github.com/nabilroghani', '_blank')
    },
    {
      id: 'act-linkedin',
      group: 'Social & Code',
      title: 'LinkedIn Profile',
      subtitle: 'linkedin.com/in/nabil-ahmad-0750002b1',
      icon: LinkedinMark,
      action: () => window.open('https://www.linkedin.com/in/nabil-ahmad-0750002b1', '_blank')
    },
    {
      id: 'act-theme',
      group: 'Preferences',
      title: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      subtitle: `Currently in ${isDark ? 'Dark' : 'Light'} theme`,
      icon: isDark ? Sun : Moon,
      action: () => toggleTheme()
    }
  ], [router, isDark, toggleTheme]);

  // Filter based on user query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase().trim();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Arrow key navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = filteredCommands[selectedIndex];
      if (current) {
        current.action();
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-16 sm:pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-xl bg-white dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
            >
              {/* Search Input Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-[#241f42]">
                <Search size={18} className="text-slate-400 dark:text-[#a79fc9] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search (e.g. projects, resume, edunexa)..."
                  className="w-full bg-transparent text-sm text-slate-900 dark:text-[#f3efe4] placeholder-slate-400 dark:placeholder-slate-500 outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close command palette"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Commands List */}
              <div className="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-[#1c1838]">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-sm text-slate-500 dark:text-[#8a83ab]">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd, idx) => {
                      const Icon = cmd.icon;
                      const isSelected = idx === selectedIndex;

                      return (
                        <div
                          key={cmd.id}
                          onClick={() => {
                            cmd.action();
                            setIsOpen(false);
                          }}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-gold/15 dark:bg-gold/20 text-slate-950 dark:text-gold'
                              : 'text-slate-700 dark:text-[#c3bde0] hover:bg-slate-100 dark:hover:bg-[#1a1636]'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'bg-gold text-slate-950'
                                  : 'bg-slate-100 dark:bg-[#181432] text-slate-600 dark:text-[#a79fc9]'
                              }`}
                            >
                              <Icon size={16} />
                            </div>
                            <div className="truncate">
                              <p className="text-xs sm:text-sm font-semibold truncate leading-tight">
                                {cmd.title}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-[#8a83ab] truncate mt-0.5">
                                {cmd.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-[#1a1636] text-slate-600 dark:text-[#8a83ab]">
                              {cmd.group}
                            </span>
                            {isSelected && (
                              <CornerDownLeft size={13} className="text-gold" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer Guide */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-200 dark:border-[#241f42] bg-slate-50/50 dark:bg-[#0e0b1f] text-[11px] text-slate-500 dark:text-[#8a83ab]">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#1c1838] font-mono font-bold text-[10px]">
                    ↑↓
                  </span>
                  <span>to navigate</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#1c1838] font-mono font-bold text-[10px] ml-1">
                    ↵
                  </span>
                  <span>to select</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#1c1838] font-mono font-bold text-[10px]">
                    ESC
                  </span>
                  <span>to close</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
