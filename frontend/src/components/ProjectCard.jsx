import { FaGithub, FaExternalLinkAlt, FaRegFolder } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#112240] p-8 rounded-xl transition-all duration-300 hover:-translate-y-3 border border-transparent hover:border-[#64ffda]/30 shadow-2xl overflow-hidden relative">
      {/* Background Glow on Hover */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#64ffda]/5 rounded-full blur-3xl group-hover:bg-[#64ffda]/10 transition-all"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <FaRegFolder className="text-[#64ffda] text-4xl" />
          <div className="flex gap-5 text-gray-400">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-[#64ffda] transition-colors"><FaGithub size={22} /></a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:text-[#64ffda] transition-colors"><FaExternalLinkAlt size={20} /></a>
            )}
          </div>
        </div>

        <h3 className="text-[#e6f1ff] text-2xl font-bold mb-3 group-hover:text-[#64ffda] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#8892b0] text-sm leading-relaxed mb-6">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.stack && project.stack.map((tech, i) => (
            <span key={i} className="text-[#64ffda] font-mono text-[11px] bg-[#64ffda]/5 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;