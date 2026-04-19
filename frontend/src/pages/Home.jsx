import { useEffect, useState } from 'react';
import API from '../api/axios';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Contact } from 'lucide-react';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await API.get('/projects');
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="pb-20">
      <Hero />
      
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-white flex items-center mb-12">
          <span className="text-secondary font-mono text-xl mr-2">01.</span> Some Things I’ve Built
          <div className="h-[1px] bg-gray-700 flex-grow ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
      <div>
        {<Contact/>}
      </div>
    </div>
  );
};

export default Home;