'use client';

import { useEffect, useState } from 'react';
import API from '@/api/axios';
import Experience from '@/components/Experience';
import Link from 'next/link';
import { ChevronRight, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { getToolIcon } from '@/utils/toolIcons';

export default function ExperiencePageClient() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/tools')
      .then((res) => setTools(res.data || []))
      .catch((err) => console.error('Tools fetch error:', err))
      .finally(() => setLoading(false));
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
            Experience &amp; Skills
          </span>
        </div>

        {/* Central Card */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden divide-y divide-slate-200/70 dark:divide-[#241f42]">
          <Experience />

          {/* Tech Stack Toolbox */}
          <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-10 text-center">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
                — Developer Toolbox —
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink dark:text-[#f3efe4]">
                Technologies &amp; <span className="italic text-gold">Frameworks</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
              {loading &&
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-32 rounded-2xl bg-slate-100 dark:bg-[#151228]/60 animate-pulse" />
                ))}
              {!loading &&
                tools.map((tool) => {
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
                      <span className="text-slate-800 dark:text-[#e5e1f2] font-semibold text-xs text-center mb-1">
                        {tool.name}
                      </span>
                      <span className="text-[9px] text-slate-600 dark:text-[#8a83ab] uppercase tracking-widest font-semibold">
                        {tool.category}
                      </span>
                    </motion.div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
