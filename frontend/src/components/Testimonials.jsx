'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Building2, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 'accurit',
    client: 'Director of Operations',
    company: 'Accurit Accountancy',
    location: 'Malta, Europe',
    link: 'https://accuritaccountancy.com',
    service: 'Corporate Web System & WCAG 2.2 Accessibility',
    rating: 5,
    quote:
      'Nabil engineered our entire corporate platform from the ground up with unmatched professionalism. His focus on strict European accessibility standards (WCAG 2.2) and automated Playwright testing meant our site was lightning-fast, compliant, and rock-solid from day one. An absolute pleasure to work with!',
    impact: '100% WCAG 2.2 Level AA Compliance & Zero Cross-Browser Regressions'
  },
  {
    id: 'galeas',
    client: 'Management Team',
    company: "Galea's Kitchen",
    location: 'Malta, Europe',
    link: 'https://galeaskitchen.com',
    service: 'Table Reservation Web App & API Integration',
    rating: 5,
    quote:
      'We needed a custom booking system integrated seamlessly with CeleryHQ and automated confirmations for our restaurant. Nabil delivered the project ahead of schedule, with an elegant UI and flawless state management. Our customer reservations increased immediately.',
    impact: 'Automated 100% of Booking Workflows with Zero Manual Delays'
  },
  {
    id: 'penitans',
    client: 'Product Lead',
    company: 'Penitans Consultation',
    location: 'International Client',
    link: 'https://penitans.com',
    service: 'Real-Time Consultation Platform & WebSockets',
    rating: 5,
    quote:
      'Handling real-time video sessions, chat WebSockets, and Stripe payments across international clients is difficult, but Nabil made the architecture look effortless. His proactive communication and deep full-stack expertise saved our team weeks of development time.',
    impact: 'Sub-second Real-Time Video/Chat Sync with Stripe Integration'
  },
  {
    id: 'paklearners',
    client: 'Founder & CEO',
    company: 'PAK Learners',
    location: 'Pakistan',
    link: 'https://paklearners.com',
    service: 'Educational Examination Platform & Linux VPS',
    rating: 5,
    quote:
      'Nabil deployed our online assessment platform on a custom Linux VPS with PM2 and Nginx. The system has handled thousands of concurrent test sessions during peak exam hours without a single hiccup. His database indexing and server architecture are top-tier.',
    impact: '99.9% Uptime under High-Concurrency Student Traffic'
  }
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-8 md:px-10 bg-transparent">
      {/* ── Section Heading ── */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
          — Client Trust &amp; Results —
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
          What Clients <span className="italic text-gold">Say</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-[#8a83ab] max-w-xl mx-auto">
          Verified endorsements and measurable outcomes delivered for commercial European and international production systems.
        </p>
      </div>

      {/* ── Featured Testimonial Card ── */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative bg-slate-50/80 dark:bg-[#100e21] border border-slate-200/80 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg shadow-slate-200/50 dark:shadow-black/40 overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Top Row: Quote Icon & Rating Stars */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-gold/10 dark:bg-gold/15 flex items-center justify-center text-gold">
              <Quote size={22} className="rotate-180" />
            </div>
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={17} className="fill-gold text-gold" />
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              <p className="text-slate-700 dark:text-[#d3cee6] text-sm sm:text-base md:text-lg leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Verified Outcome Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                <span>{current.impact}</span>
              </div>

              {/* Client Info & Project Tag */}
              <div className="pt-4 border-t border-slate-200/70 dark:border-[#241f42] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {current.client}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#8a83ab] mt-0.5">
                    <span className="font-semibold text-slate-700 dark:text-[#c3bde0]">{current.company}</span>
                    <span>•</span>
                    <span>{current.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-200/60 dark:bg-[#1a1633] text-slate-600 dark:text-[#a79fc9]">
                    {current.service}
                  </span>
                  {current.link && (
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-gold transition-colors p-1"
                      title="Visit Client Website"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-[#1d1838] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIdx ? 'w-8 bg-gold' : 'w-2 bg-slate-300 dark:bg-[#342e58] hover:bg-gold/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full border border-slate-300 dark:border-[#2a2450] flex items-center justify-center text-slate-600 dark:text-[#a79fc9] hover:border-gold hover:text-gold transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full border border-slate-300 dark:border-[#2a2450] flex items-center justify-center text-slate-600 dark:text-[#a79fc9] hover:border-gold hover:text-gold transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Client Logos / Trust Badges Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-[#100e21]/60 border border-slate-200/50 dark:border-[#241f42]">
            <span className="block text-lg font-black text-slate-800 dark:text-white">100%</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Client Satisfaction</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-[#100e21]/60 border border-slate-200/50 dark:border-[#241f42]">
            <span className="block text-lg font-black text-slate-800 dark:text-white">10+</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Production Apps</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-[#100e21]/60 border border-slate-200/50 dark:border-[#241f42]">
            <span className="block text-lg font-black text-slate-800 dark:text-white">WCAG 2.2</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">EU Accessibility</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-[#100e21]/60 border border-slate-200/50 dark:border-[#241f42]">
            <span className="block text-lg font-black text-slate-800 dark:text-white">&lt;200ms</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">API Latency Target</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
