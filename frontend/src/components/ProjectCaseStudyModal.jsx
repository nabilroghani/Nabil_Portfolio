'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle2,
  Clock,
  User,
  Building2,
  TrendingUp,
  ArrowRight,
  Code2
} from 'lucide-react';
import { getCaseStudyForProject } from '../data/caseStudiesData';
import { optimizedImage } from '../utils/cloudinaryUrl';
import GithubMark from './icons/GithubMark';

const ProjectCaseStudyModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const cs = getCaseStudyForProject(project);

  const handleInquire = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/80 dark:bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Close Button */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 bg-white/95 dark:bg-[#120f24]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-[#241f42]">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                {cs.category}
              </span>
              <span className="text-xs text-slate-400 dark:text-[#8a83ab] hidden sm:inline">
                Architecture &amp; Case Study
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1d1838] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
            {/* Title & Metadata */}
            <div>
              <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white leading-tight mb-3">
                {cs.title}
              </h2>

              <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-[#a79fc9]">
                <div className="flex items-center gap-1.5">
                  <Building2 size={14} className="text-gold" />
                  <span>{cs.client}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-cyan-500" />
                  <span>Timeline: {cs.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-emerald-500" />
                  <span>{cs.role}</span>
                </div>
              </div>
            </div>

            {/* Key Metrics Banner */}
            {cs.metrics && cs.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#171330] border border-slate-200/70 dark:border-[#28214d]">
                {cs.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-base sm:text-xl font-black text-slate-900 dark:text-gold tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-[#8a83ab] font-medium leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Image Preview (if present) */}
            {project.image && (
              <div className="relative h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#1a1633] border border-slate-200/60 dark:border-[#28214d]">
                <img
                  src={optimizedImage(project.image, 800)}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* The Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-[#15112e] border border-slate-200/60 dark:border-[#241f42]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                  <span>The Challenge</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#c3bde0] leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-[#15112e] border border-slate-200/60 dark:border-[#241f42]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                  <span>The Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#c3bde0] leading-relaxed">
                  {cs.solution}
                </p>
              </div>
            </div>

            {/* System Architecture Breakdown */}
            {cs.architecture && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers size={16} className="text-gold" />
                  <span>System Architecture Breakdown</span>
                </h3>

                <div className="space-y-2">
                  {cs.architecture.map((arch, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-3.5 rounded-xl bg-slate-50/50 dark:bg-[#131028] border border-slate-200/50 dark:border-[#221c45] flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3"
                    >
                      <span className="text-xs font-bold text-slate-800 dark:text-gold shrink-0 sm:w-44">
                        {arch.layer}:
                      </span>
                      <span className="text-xs text-slate-600 dark:text-[#a79fc9] leading-relaxed">
                        {arch.details}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Highlights */}
            {cs.highlights && (
              <div className="space-y-2.5">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp size={16} className="text-emerald-500" />
                  <span>Key Engineering Deliverables</span>
                </h3>

                <ul className="space-y-2">
                  {cs.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#c3bde0]">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            {project.stack && project.stack.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#8a83ab] mb-2.5">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gold/10 text-gold border border-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer with Action Buttons */}
          <div className="sticky bottom-0 z-20 px-5 sm:px-8 py-4 bg-slate-50/95 dark:bg-[#141029]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-[#241f42] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold hover:bg-gold-soft text-ink text-xs font-bold transition-all shadow-md shadow-gold/20"
                >
                  <ExternalLink size={14} strokeWidth={2.5} />
                  <span>Launch Live System</span>
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200/70 hover:bg-slate-300 dark:bg-[#201a40] dark:hover:bg-[#28214f] text-slate-700 dark:text-white text-xs font-bold transition-all"
                >
                  <GithubMark size={14} />
                  <span>Inspect Code</span>
                </a>
              )}
            </div>

            <button
              onClick={handleInquire}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-[#a79fc9] hover:text-gold dark:hover:text-gold transition-colors ml-auto cursor-pointer"
            >
              <span>Build a Similar Project</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;

