'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { getLenis } from './SmoothScroll';

const FILTERS = ['All', 'Personal', 'Team', 'Client', 'Other'];
const PAGE_SIZE = 6;

const ProjectsGrid = ({ projects, loading }) => {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => (p.category || 'Personal') === filter);
  }, [projects, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 whenever the filter (or the underlying data) changes.
  useEffect(() => { setPage(1); }, [filter, projects]);

  const availableFilters = useMemo(() => {
    const present = new Set(projects.map((p) => p.category || 'Personal'));
    return FILTERS.filter((f) => f === 'All' || present.has(f));
  }, [projects]);

  // Smooth scroll to top of projects section so client is never disoriented
  const handlePageChange = (newPage) => {
    if (newPage === page) return;
    setPage(newPage);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo('#projects', { offset: -90, duration: 0.7 });
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Filter pills */}
      {!loading && availableFilters.length > 2 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {availableFilters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                const lenis = getLenis();
                if (lenis) {
                  lenis.scrollTo('#projects', { offset: -90, duration: 0.6 });
                }
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                filter === f
                  ? 'bg-gold text-ink border-gold shadow-md shadow-gold/20'
                  : 'bg-transparent text-slate-500 dark:text-[#a79fc9] border-slate-300 dark:border-[#3a3560] hover:border-gold hover:text-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Grid container with min-height to prevent sudden height jumps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[360px]">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-72 rounded-2xl bg-slate-100 dark:bg-[#151228]/60 animate-pulse" />
            ))
          : pageItems.map((p) => <ProjectCard key={p._id} project={p} />)}
      </div>

      {!loading && filtered.length === 0 && (
        <p className="text-center text-slate-400 dark:text-[#8a83ab] py-10">
          No projects in this category yet.
        </p>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            aria-label="Previous page"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300 dark:border-[#3a3560] text-slate-500 dark:text-[#a79fc9] hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-500 transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Number Buttons */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-9 h-9 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                page === i + 1
                  ? 'bg-gold text-ink shadow-md shadow-gold/20'
                  : 'text-slate-500 dark:text-[#a79fc9] hover:text-gold'
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300 dark:border-[#3a3560] text-slate-500 dark:text-[#a79fc9] hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-500 transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
