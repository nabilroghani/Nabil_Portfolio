'use client';

import { useEffect, useState } from 'react';
import API from '@/api/axios';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import Contact from '@/components/Contact';
import GithubCard from '@/components/GithubCard';
import { motion } from 'framer-motion';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ServicesAndFAQ from '@/components/ServicesAndFAQ';
import { getToolIcon } from '@/utils/toolIcons';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const SectionHeading = ({ eyebrow, title, accent }) => (
  <motion.div {...fadeUp} className="text-center mb-14">
    <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
      — {eyebrow} —
    </span>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
      {title} <span className="italic text-gold">{accent}</span>
    </h2>
  </motion.div>
);

export default function HomePage() {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProj, resTools] = await Promise.all([
          API.get('/projects'),
          API.get('/tools')
        ]);
        setProjects(resProj.data || []);
        setTools(resTools.data || []);
      } catch (err) {
        console.error("Data fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    API.post('/stats/visit').catch(() => {});
  }, []);

  return (
    <div className="w-full pt-16 sm:pt-20 pb-16 px-2 sm:px-6 lg:px-8">
      {/* ── Continuous Central White Column (Matches Hero Left & Right Borders) ── */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden divide-y divide-slate-200/70 dark:divide-[#241f42]">
        {/* --- Hero Section at top of the card --- */}
        <Hero />

        {/* --- Projects Section --- */}
        <section id="projects" className="py-12 sm:py-16 px-4 sm:px-8 md:px-10">
          <SectionHeading eyebrow="Selected Work" title="Built" accent="Projects" />
          <ProjectsGrid projects={Array.isArray(projects) ? projects : []} loading={loading} />
        </section>

        {/* --- GitHub Stats Section --- */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-10">
          <SectionHeading eyebrow="On GitHub" title="Live" accent="Activity" />
          <GithubCard username="nabilroghani" />
        </section>

        {/* --- Tech Stack Section --- */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-10 text-center">
          <SectionHeading eyebrow="Toolbox" title="Tech" accent="Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
            {loading && Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 rounded-2xl bg-slate-100 dark:bg-[#151228]/60 animate-pulse" />
            ))}
            {!loading && tools.map((tool) => {
              const Icon = getToolIcon(tool.icon, tool.name);
              return (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  key={tool._id}
                  className="bg-slate-50/70 dark:bg-[#100e21] p-5 rounded-2xl flex flex-col items-center border border-slate-200 dark:border-[#2a2450] hover:border-gold/40 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-12 h-12 bg-white dark:bg-[#0b0a1a] rounded-full flex items-center justify-center mb-3 shadow-inner group-hover:text-gold transition-colors">
                    <Icon size={22} className="text-slate-600 dark:text-[#a79fc9] group-hover:text-gold" />
                  </div>
                  <span className="text-slate-800 dark:text-[#e5e1f2] font-semibold text-xs text-center mb-1">{tool.name}</span>
                  <span className="text-[9px] text-slate-400 dark:text-[#8a83ab] uppercase tracking-widest">{tool.category}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- Experience Section --- */}
        <Experience />

        {/* --- Services & Client FAQ (AEO & Conversion Optimization) --- */}
        <ServicesAndFAQ />

        {/* --- About Section --- */}
        <About />

        {/* --- Contact Section --- */}
        <Contact />
      </div>
    </div>
  );
}
