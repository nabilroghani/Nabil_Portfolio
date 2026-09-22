import { useEffect, useState } from 'react';
import API from '../api/axios';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import GithubCard from '../components/GithubCard';
import { motion } from 'framer-motion';
import About from '../components/About';
import Experience from '../components/Experience';
import WavyDivider from '../components/WavyDivider';
import ScrollRevealText from '../components/ScrollRevealText';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const SectionHeading = ({ eyebrow, title, accent }) => (
  <motion.div {...fadeUp} className="text-center mb-16">
    <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
      — {eyebrow} —
    </span>
    <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
      {title} <span className="italic text-gold">{accent}</span>
    </h2>
  </motion.div>
);

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState(null);

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
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // react-icons' fa/si sets are huge — only needed to resolve a tool's icon
    // by name, so load them in a separate chunk instead of the main bundle.
    Promise.all([import('react-icons/fa'), import('react-icons/si')]).then(
      ([fa, si]) => setIcons({ ...fa, ...si, _fallback: fa.FaCode })
    );
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-ink transition-colors duration-500 font-sans">
      {/* Full-bleed sections — each manages its own inner max-width */}
      <Hero />

      <ScrollRevealText lines={['Built With', 'Obsessive Craft']} />

      <div className="max-w-6xl mx-auto px-6">
        {/* --- Projects --- */}
        <section id="projects" className="py-16">
          <SectionHeading eyebrow="Selected Work" title="Built" accent="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-80 rounded-2xl bg-slate-100 dark:bg-[#151228]/60 animate-pulse" />
                ))
              : Array.isArray(projects) && projects.map((p) => <ProjectCard key={p._id} project={p} />)}
          </div>
        </section>

        <WavyDivider flip className="text-slate-200 dark:text-[#241f42]" />

        {/* --- GitHub Stats --- */}
        <section className="py-16">
          <SectionHeading eyebrow="On GitHub" title="Live" accent="Activity" />
          <GithubCard username="nabilroghani" />
        </section>

        <WavyDivider className="text-slate-200 dark:text-[#241f42]" />

        {/* --- Tech Stack --- */}
        <section className="py-16 text-center">
          <SectionHeading eyebrow="Toolbox" title="Tech" accent="Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {(loading || !icons) && Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 rounded-2xl bg-slate-100 dark:bg-[#151228]/60 animate-pulse" />
            ))}
            {!loading && icons && tools.map((tool) => {
              const Icon = icons[tool.icon] || icons._fallback;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03, rotate: -2 }}
                  key={tool._id}
                  className="bg-white dark:bg-[#151228]/50 p-6 rounded-2xl flex flex-col items-center border border-slate-200 dark:border-[#2a2450] hover:border-gold/30 hover:bg-slate-50 dark:hover:bg-[#1a1730] transition-all duration-300 group shadow-sm dark:shadow-none"
                >
                  <div className="w-12 h-12 bg-slate-50 dark:bg-[#0f0e22] rounded-full flex items-center justify-center mb-4 shadow-inner group-hover:text-gold transition-colors">
                    <Icon size={24} className="text-gray-500 dark:text-[#a79fc9] group-hover:text-gold" />
                  </div>
                  <span className="text-slate-700 dark:text-[#e5e1f2] font-semibold text-[13px] text-center mb-1">{tool.name}</span>
                  <span className="text-[9px] text-slate-400 dark:text-[#8a83ab] uppercase tracking-widest">{tool.category}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      <WavyDivider flip className="text-slate-200 dark:text-[#241f42]" />

      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
