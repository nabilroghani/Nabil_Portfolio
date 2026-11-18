'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import API from '@/api/axios';
import Hero from '@/components/Hero';
import ProductsShowcase from '@/components/ProductsShowcase';
import ProjectCard from '@/components/ProjectCard';
import GithubCard from '@/components/GithubCard';
import { motion } from 'framer-motion';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import { getToolIcon } from '@/utils/toolIcons';
import { ArrowRight, Mail, MessageCircle, Sparkles, Layers } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const SectionHeading = ({ eyebrow, title, accent, subtitle }) => (
  <motion.div {...fadeUp} className="text-center mb-10 sm:mb-12">
    <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
      — {eyebrow} —
    </span>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
      {title} <span className="italic text-gold">{accent}</span>
    </h2>
    {subtitle && (
      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9] max-w-xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
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

  // Filter top 4 flagship/commercial projects for executive landing showcase
  const topProjects = Array.isArray(projects) ? projects.slice(0, 4) : [];

  return (
    <div className="w-full pt-16 sm:pt-20 pb-16 px-2 sm:px-6 lg:px-8">
      {/* ── Continuous Central White Column (Matches Hero Left & Right Borders) ── */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden divide-y divide-slate-200/70 dark:divide-[#241f42]">
        
        {/* --- 1. Hero Section at top of the card --- */}
        <Hero />

        {/* --- 2. Flagship Proprietary Products by Nabil Tech Logic --- */}
        <ProductsShowcase />

        {/* --- 3. Featured Projects (Best 4 Projects Only) --- */}
        <section id="projects" className="py-12 sm:py-16 px-4 sm:px-8 md:px-10">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured"
            accent="Projects"
            subtitle="Handpicked production web applications and SaaS platforms engineered for high performance, reliability, and scale."
          />

          {/* 2x2 Grid of Top 4 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-80 rounded-2xl bg-slate-100 dark:bg-[#151228]/60 animate-pulse" />
                ))
              : topProjects.map((p) => <ProjectCard key={p._id} project={p} />)}
          </div>

          {/* Eye-catching CTA button linking to dedicated /projects page */}
          <div className="text-center pt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-slate-950 font-bold text-sm shadow-lg shadow-gold/20 hover:gap-3.5 transition-all active:scale-95 cursor-pointer"
            >
              <Layers size={16} strokeWidth={2.4} />
              <span>Explore All Built Projects &amp; Architecture Case Studies</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </section>

        {/* --- 4. GitHub Stats Section --- */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-10">
          <SectionHeading eyebrow="On GitHub" title="Live" accent="Activity" />
          <GithubCard username="nabilroghani" />
        </section>

        {/* --- 5. Tech Stack Section --- */}
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
                  <span className="text-[9px] text-slate-600 dark:text-[#8a83ab] uppercase tracking-widest font-semibold">{tool.category}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Direct CTA to Experience page */}
          <div className="pt-8">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-soft transition-colors group cursor-pointer"
            >
              <span>Explore Full Experience, Skill Metrics &amp; Architecture Track Record</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* --- 6. Client Testimonials & Social Proof (Phase 1 Trust Wall) --- */}
        <section className="bg-transparent">
          <Testimonials />
          <div className="text-center pb-12 -mt-4">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-soft transition-colors group cursor-pointer"
            >
              <span>Read All Verified European &amp; International Client Reviews</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* --- 7. About Section --- */}
        <section className="bg-transparent">
          <About />
        </section>

        {/* --- 8. Executive Consultation CTA Banner (Clean & High-Converting) --- */}
        <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-12 text-center bg-gradient-to-b from-transparent via-gold/[0.04] to-gold/[0.07] dark:via-gold/[0.02] dark:to-gold/[0.05]">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              — Let&apos;s Build Something Exceptional —
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
              Ready to Scale Your Next <span className="italic text-gold">Web Project?</span>
            </h2>
            <p className="text-slate-600 dark:text-[#a79fc9] text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Whether you need a custom MERN web application, proprietary enterprise SaaS platform (like EduNexa SMS or PharmaLogic ERP), or scalable AWS cloud infrastructure, I am ready to help you launch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#0a66c2] hover:bg-[#004182] text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Mail size={16} strokeWidth={2.2} />
                <span>Start Project Inquiry</span>
              </Link>
              <a
                href="https://wa.me/923041237882?text=Hi%20Nabil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle size={16} strokeWidth={2.2} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-slate-600 dark:text-[#a79fc9] pt-1">
              Average response time: &lt; 2 hours · Free 15-minute technical discovery call
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
