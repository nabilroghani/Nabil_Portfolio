import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-[#112240] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group flex flex-col h-full"
    >
      {/* Project Image Container */}
      <div className="relative h-52 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-[#0a192f] flex items-center justify-center text-gray-600 font-mono italic">
            No Preview Available
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           {/* Links displayed on image hover */}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 text-gray-400">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-secondary transition-all">
                <FaGithub size={20} />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:text-secondary transition-all">
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack && project.stack.map((tech, i) => (
            <span 
              key={i} 
              className="text-[10px] font-mono text-secondary bg-secondary/5 border border-secondary/20 px-2 py-1 rounded-md"
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