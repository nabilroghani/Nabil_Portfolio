import { useEffect, useState } from 'react';
import API from '../api/axios';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import GithubCard from '../components/GithubCard';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { motion } from 'framer-motion';
import About from '../components/About';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const AllIcons = { ...FaIcons, ...SiIcons };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProj, resTools] = await Promise.all([
          API.get('/projects'),
          API.get('/tools')
        ]);
        setProjects(resProj.data);
        setTools(resTools.data);
      } catch (err) {
        console.error("Data fetch error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a192f] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 font-sans">
        <Hero />

        {/* --- Section 01: Projects --- */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 flex items-center">
            <span className="text-secondary font-mono text-xl mr-2">01.</span> Built Projects
            <div className="h-[1px] bg-slate-200 dark:bg-gray-800 flex-grow ml-6"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => <ProjectCard key={p._id} project={p} />)}
          </div>
        </section>

        {/* --- Section 02: GitHub Stats --- */}
        <section className="py-24">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 flex items-center">
            <span className="text-secondary font-mono text-xl mr-2">02.</span> Live Activity
            <div className="h-[1px] bg-slate-200 dark:bg-gray-800 flex-grow ml-6"></div>
          </h2>
          <GithubCard username="nabilroghani" /> 
        </section>

        {/* --- Section 03: Tech Stack --- */}
        <section className="py-24 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 flex items-center">
            <span className="text-secondary font-mono text-xl mr-2">03.</span> Tech Stack
            <div className="h-[1px] bg-slate-200 dark:bg-gray-800 flex-grow ml-6"></div>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool) => {
              const Icon = AllIcons[tool.icon] || FaIcons.FaCode;
              return (
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  key={tool._id} 
                  className="bg-white dark:bg-[#112240]/50 p-6 rounded-2xl flex flex-col items-center border border-slate-200 dark:border-white/5 hover:border-secondary/20 hover:bg-slate-100 dark:hover:bg-[#112240] transition-all duration-300 group shadow-sm dark:shadow-none"
                >
                  <div className="w-12 h-12 bg-slate-50 dark:bg-[#0a192f] rounded-xl flex items-center justify-center mb-4 shadow-inner group-hover:text-secondary transition-colors">
                    <Icon size={24} className="text-gray-500 dark:text-gray-400 group-hover:text-secondary" />
                  </div>
                  <span className="text-slate-700 dark:text-gray-200 font-bold text-[13px] text-center mb-1">{tool.name}</span>
                  <span className="text-[9px] text-slate-400 dark:text-gray-500 uppercase font-mono tracking-widest">{tool.category}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section>
          <About/>
        </section>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
