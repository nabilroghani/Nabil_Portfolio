import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Rocket,
  Cloud,
  Layers,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Custom MERN & Next.js Web Apps',
    desc: 'End-to-end full-stack web applications built with clean architecture, responsive Tailwind UI, and robust MongoDB/Express/Node backends.',
    features: ['React 19 & Next.js', 'Clean RESTful APIs', 'Role-Based Authentication', 'Fast & Responsive UI'],
    badge: 'Core Expertise'
  },
  {
    icon: Rocket,
    title: 'SaaS MVP Development for Startups',
    desc: 'Turn your product idea into a working MVP in 3-4 weeks. Complete with user management, subscriptions, dashboards, and automated workflows.',
    features: ['Rapid 3-4 Week Launch', 'Subscription & Stripe Integration', 'Multi-tenant Data Architecture', 'Scalable Codebase'],
    badge: 'High Demand'
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Architecture & Deployment',
    desc: 'Production-ready cloud deployment on AWS (EC2, S3) with Nginx reverse proxy, custom domain mapping, SSL certificates, and CI/CD automation.',
    features: ['AWS EC2 & S3 Setup', 'Nginx & PM2 Configuration', 'Free SSL & Domain Linking', 'Zero-Downtime Deployment'],
    badge: 'Cloud Specialized'
  },
  {
    icon: Layers,
    title: 'Performance & API Optimization',
    desc: 'Auditing existing codebases to eliminate bottlenecks, cut page load times under 1 second, optimize MongoDB indexing, and secure APIs.',
    features: ['Sub-Second Load Times', 'Database Query Optimization', 'Security & Rate Limiting', 'Core Web Vitals Boost'],
    badge: 'Performance'
  }
];

const FAQS = [
  {
    q: 'How long does a typical project take from start to finish?',
    a: 'Small to medium MVPs typically take 2-4 weeks, while larger full-scale platforms take 6-10 weeks. Every project is broken into weekly milestones with live staging previews so you are always updated on progress.'
  },
  {
    q: 'Can you handle both the frontend, backend, and AWS cloud deployment?',
    a: 'Yes, 100%! As a full-stack MERN & AWS engineer, I handle the complete lifecycle: UI/UX implementation, database modeling, secure API design, and deploying live onto AWS EC2/S3 with custom domains and SSL.'
  },
  {
    q: 'What is your pricing and engagement model?',
    a: 'I work on both fixed-price milestone contracts (ideal for MVPs with defined scope) and dedicated monthly retainers (ideal for ongoing product development and scaling). Pricing is transparent with zero hidden costs.'
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Absolutely. Every project includes 30 days of free bug-fixing and warranty support after launch. I also offer monthly maintenance packages for cloud monitoring, feature updates, and performance tuning.'
  },
  {
    q: 'How do we get started on my project?',
    a: 'Simply scroll down to the Contact form or email me at nabiltechlogic.dev@gmail.com with a short summary of your requirements. I respond within 24 hours to set up a free 15-minute discovery call to discuss scope, timeline, and budget.'
  }
];

const ServicesAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="services" className="py-16 px-6 sm:px-10 bg-transparent">
      {/* ── Services Heading ── */}
      <div className="text-center mb-14">
        <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
          — Client Solutions —
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
          How I Can Help <span className="italic text-gold">Your Business Scale</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-[#a79fc9] max-w-xl mx-auto">
          High-performance engineering tailored for founders, startups, and growing companies.
        </p>
      </div>

      {/* ── Services Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {SERVICES.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-slate-50/70 dark:bg-[#100e21] border border-slate-200 dark:border-[#2a2450] hover:border-gold/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] flex items-center justify-center text-gold shadow-sm group-hover:scale-105 transition-transform">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-semibold text-gold bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900 dark:text-[#f3efe4] mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-600 dark:text-[#a79fc9] text-xs sm:text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
              </div>

              <div>
                <div className="space-y-2 border-t border-slate-200/60 dark:border-[#241f42] pt-4 mb-5">
                  {s.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-[#d3cde8]">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a66c2] dark:text-[#70b5f9] group-hover:gap-2.5 transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={13} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Client FAQ Section (Optimized for AEO & Trust) ── */}
      <div className="border-t border-slate-200/70 dark:border-[#241f42] pt-16">
        <div className="text-center mb-10">
          <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-2">
            — Frequently Asked Questions —
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-[#f3efe4]">
            Everything You Need <span className="italic text-gold">To Know</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-[#a79fc9]">
            Common questions clients ask before hiring me.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="border border-slate-200 dark:border-[#2a2450] bg-slate-50/50 dark:bg-[#100e21] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 dark:hover:bg-[#151228] transition-colors"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-[#f3efe4]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-gold' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9] leading-relaxed border-t border-slate-100 dark:border-[#241f42] pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Client trust banner */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-blue-500/5 via-gold/5 to-emerald-500/5 border border-slate-200 dark:border-[#2a2450] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-[#f3efe4]">
                100% Satisfaction &amp; Clean Code Guarantee
              </p>
              <p className="text-xs text-slate-500 dark:text-[#a79fc9]">
                Tested code, documented APIs, Git workflow, and post-launch warranty included.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#0a66c2] hover:bg-[#004182] text-white text-xs sm:text-sm font-semibold active:scale-95 transition-all shadow-sm shrink-0"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndFAQ;

