'use client';

import { useEffect, useState } from 'react';
import API from '@/api/axios';
import ProjectsGrid from '@/components/ProjectsGrid';
import Link from 'next/link';
import { ChevronRight, Layers, Sparkles } from 'lucide-react';

export default function ProjectsPageClient() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get('/projects');
        setProjects(res.data || []);
      } catch (err) {
        console.error('Projects fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="w-full pt-20 pb-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#a79fc9]">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-slate-800 dark:text-[#f3efe4] font-semibold">
            Projects
          </span>
        </div>

        {/* Central Card */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
              — Selected Engineering Work —
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink dark:text-[#f3efe4]">
              Built <span className="italic text-gold">Projects &amp; Case Studies</span>
            </h1>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-[#a79fc9] leading-relaxed">
              Explore full-stack web applications, SaaS platforms, and distributed systems engineered with React, Next.js, Node.js, and AWS cloud infrastructure.
            </p>
          </div>

          <ProjectsGrid projects={Array.isArray(projects) ? projects : []} loading={loading} />
        </div>
      </div>
    </div>
  );
}
