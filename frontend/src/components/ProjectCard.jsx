'use client';

import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { optimizedImage } from '../utils/cloudinaryUrl';
import GithubMark from './icons/GithubMark';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

const READ_MORE_THRESHOLD = 110;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const desc = project.desc || '';
  const isLong = desc.length > READ_MORE_THRESHOLD;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="group flex flex-col h-full bg-white dark:bg-[#151228]/80 border border-slate-200 dark:border-[#2a2450] hover:border-gold/40 dark:hover:border-gold/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1"
      >
        {/* ── Image ── */}
        <div
          onClick={() => setModalOpen(true)}
          className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 dark:bg-[#1a1730] flex-shrink-0 cursor-pointer"
        >
          {project.category && (
            <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-bold uppercase tracking-wide text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          )}
          {project.image ? (
            <>
              <img
                src={optimizedImage(project.image, 600)}
                alt={project.title}
                width={600}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform-gpu transition-transform duration-300 ease-out group-hover:scale-105"
              />
              {/* Hover overlay with links */}
              <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2.5 p-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                >
                  <Layers size={13} />
                  Case Study
                </button>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 bg-gold hover:bg-gold-soft text-ink text-xs font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm"
                  >
                    <ExternalLink size={13} strokeWidth={2.5} />
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                  >
                    <GithubMark size={13} />
                    Code
                  </a>
                )}
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-slate-400 dark:text-slate-600 font-mono text-xs italic">
                No Preview Available
              </p>
            </div>
          )}
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-grow p-4 sm:p-5">
          <div className="flex justify-between items-start gap-3 mb-2">
            <h3
              onClick={() => setModalOpen(true)}
              className="text-base font-display text-ink dark:text-[#f3efe4] font-semibold group-hover:text-gold dark:group-hover:text-gold transition-colors duration-200 leading-snug cursor-pointer"
            >
              {project.title}
            </h3>
            <div className="flex gap-1.5 text-slate-500 dark:text-slate-400 flex-shrink-0 -mt-1">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-[#1f1a3a] hover:text-slate-800 dark:hover:text-white transition-colors duration-200"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <GithubMark size={16} />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold/10 hover:text-gold dark:hover:text-gold transition-colors duration-200"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink size={16} strokeWidth={2} />
                </a>
              )}
            </div>
          </div>

          <p className={`text-slate-600 dark:text-[#a79fc9] text-sm leading-relaxed mb-2 ${expanded ? '' : 'line-clamp-2'}`}>
            {desc}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="self-start flex items-center gap-1 text-xs font-semibold text-gold hover:text-gold-soft transition-colors mb-2 cursor-pointer"
            >
              {expanded ? 'Show less' : 'Read more'}
              {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          )}

          {/* Interactive Case Study Trigger Button */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="self-start inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-soft transition-colors mb-3 cursor-pointer group/cs"
          >
            <Layers size={13} className="text-gold group-hover/cs:rotate-12 transition-transform" />
            <span>Architecture &amp; Case Study</span>
            <ArrowRight size={12} className="group-hover/cs:translate-x-0.5 transition-transform" />
          </button>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-[#201a40]">
            {project.stack && project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold text-[#825916] dark:text-gold-soft bg-gold/10 dark:bg-gold/10 border border-gold/25 px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
