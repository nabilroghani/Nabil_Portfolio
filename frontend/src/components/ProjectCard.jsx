import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { optimizedImage } from '../utils/cloudinaryUrl';
import GithubMark from './icons/GithubMark';

const READ_MORE_THRESHOLD = 110;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const desc = project.desc || '';
  const isLong = desc.length > READ_MORE_THRESHOLD;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotate: -1.5, scale: 1.015 }}
      style={{ transformPerspective: 800 }}
      className="group flex flex-col h-full
        bg-white dark:bg-[#151228]/70
        border border-slate-200 dark:border-[#2a2450]
        hover:border-gold/40 dark:hover:border-gold/30
        rounded-2xl overflow-hidden
        shadow-md shadow-slate-200/60 dark:shadow-black/30
        hover:shadow-xl hover:shadow-gold/5 dark:hover:shadow-gold/10
        transition-all duration-300"
    >
      {/* ── Image ── */}
      <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-100 dark:bg-[#1a1730] flex-shrink-0">
        {project.category && (
          <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-bold uppercase tracking-wide
            text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        )}
        {project.image ? (
          <>
            <img
              src={optimizedImage(project.image)}
              alt={project.title}
              width={400}
              height={160}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover overlay with links */}
            <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <GithubMark size={13} />
                  Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-gold/90 hover:bg-gold text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <ExternalLink size={12} strokeWidth={2.5} />
                  Live
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

        {/* Title + icon links */}
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-base font-display text-ink dark:text-[#f3efe4] font-semibold group-hover:text-gold dark:group-hover:text-gold transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <div className="flex gap-2.5 text-slate-400 dark:text-slate-500 flex-shrink-0 mt-0.5">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-700 dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubMark size={16} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold dark:hover:text-gold transition-colors duration-200"
                aria-label="Live Demo"
              >
                <ExternalLink size={15} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={`text-slate-500 dark:text-[#a79fc9] text-sm leading-relaxed mb-1.5 ${expanded ? '' : 'line-clamp-2'}`}>
          {desc}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="self-start flex items-center gap-1 text-xs font-semibold text-gold hover:text-gold-soft transition-colors mb-3"
          >
            {expanded ? 'Show less' : 'Read more'}
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        )}
        {!isLong && <div className="mb-3" />}

        {/* Tech stack */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack && project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold
                text-[#9c7a3a] dark:text-gold-soft
                bg-gold/5 dark:bg-gold/10
                border border-gold/20 dark:border-gold/20
                px-2.5 py-1 rounded-full
                transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
