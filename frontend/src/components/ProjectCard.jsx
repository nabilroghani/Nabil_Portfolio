import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col h-full
        bg-white dark:bg-slate-900/70
        border border-slate-200 dark:border-slate-700/50
        hover:border-emerald-500/40 dark:hover:border-emerald-500/30
        rounded-2xl overflow-hidden
        shadow-md shadow-slate-200/60 dark:shadow-slate-900/30
        hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-500/10
        transition-all duration-300"
    >
      {/* ── Image ── */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
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
                  <FaGithub size={13} />
                  Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-emerald-500/90 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200"
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
      <div className="flex flex-col flex-grow p-5 sm:p-6">

        {/* Title + icon links */}
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
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
                <FaGithub size={17} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
          {project.desc}
        </p>

        {/* Tech stack */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack && project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono font-semibold
                text-emerald-700 dark:text-emerald-400
                bg-emerald-50 dark:bg-emerald-500/10
                border border-emerald-200 dark:border-emerald-500/20
                px-2.5 py-1 rounded-md
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
