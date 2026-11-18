'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Pill,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  BarChart3,
  Calendar,
  CreditCard,
  Barcode,
  Clock,
  ExternalLink
} from 'lucide-react';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';
import { CASE_STUDIES } from '../data/caseStudiesData';

const PRODUCTS = [
  {
    id: 'edupulse',
    name: 'EduNexa SMS',
    subtitle: 'Enterprise School & Student Management System',
    type: 'EdTech Enterprise SaaS',
    agency: 'Nabil Tech Logic',
    icon: GraduationCap,
    accentColor: 'emerald',
    liveLink: 'https://edu-nexa-beta.vercel.app/',
    description:
      'A multi-tenant institutional operations SaaS that eliminates administrative chaos by automating admissions, student fee challans, examination grading, and daily parent attendance alerts.',
    features: [
      {
        title: 'Automated Fee Vouchers & Ledger',
        desc: 'Batch generation of barcoded monthly PDF fee challans, concession management, and real-time revenue collection audits.'
      },
      {
        title: 'Student Admissions & Digital Vault',
        desc: 'Complete enrollment lifecycle, family link tracking, academic history, and document archive.'
      },
      {
        title: 'Attendance & One-Click Parent SMS',
        desc: 'Biometric and manual daily attendance tracking with automated WhatsApp/SMS notifications for absent students.'
      },
      {
        title: 'Exam Engine & Automated Report Cards',
        desc: 'Custom institutional grading schemes, automatic GPA/position calculations, and one-click printable term reports.'
      },
      {
        title: 'Granular Multi-Role Portals',
        desc: 'Dedicated dashboards for Super Admin, Principal, Accountants, Class Teachers, and Parents.'
      }
    ],
    metrics: [
      { label: 'Fee Voucher Speed', value: '<3s / Batch' },
      { label: 'Admin Time Saved', value: '80% Monthly' },
      { label: 'Report Card Grading', value: '100% Automated' }
    ],
    stack: ['Next.js / React 19', 'Node.js', 'Express', 'MongoDB Aggregations', 'PDF Microservice', 'SMS Gateway']
  },

  {
    id: 'pharmalogic',
    name: 'PharmaLogic ERP',
    subtitle: 'Pharmacy POS & Healthcare Inventory System',
    type: 'Healthcare Retail ERP',
    agency: 'Nabil Tech Logic',
    icon: Pill,
    accentColor: 'cyan',
    description:
      'A high-speed offline-resilient pharmacy management and POS ecosystem built to eliminate expired medicine write-offs with FEFO batch tracking, sub-500ms barcode checkout, and distributor accounting.',
    features: [
      {
        title: 'FEFO Batch & Expiry Date Management',
        desc: 'Strict First-Expiry-First-Out dispensing logic with proactive 30, 60, and 90-day medicine expiration warning alarms.'
      },
      {
        title: 'Sub-Second Barcode POS & Billing',
        desc: 'Keyboard-first POS interface with thermal receipt printing, split payment modes (cash/card), and barcode scanner support.'
      },
      {
        title: 'Low-Stock Alarms & Replenishment',
        desc: 'Instant alarms when essential medicine stocks reach critical minimum thresholds to prevent drug stockouts.'
      },
      {
        title: 'Supplier & Distributor Accounting',
        desc: 'Comprehensive double-entry distributor ledger tracking deliveries, return adjustments, and purchase invoices.'
      },
      {
        title: 'Real-Time Financial & Profit Analytics',
        desc: 'Instant gross and net profit margin calculations, daily cash drawer reconciliation, and top-selling brand reports.'
      }
    ],
    metrics: [
      { label: 'POS Checkout Latency', value: '<500ms' },
      { label: 'Expired Stock Waste', value: 'Zero Losses' },
      { label: 'Stock Audit Accuracy', value: '99.9%' }
    ],
    stack: ['MERN Stack', 'Socket.io', 'Tailwind CSS', 'Barcode API', 'IndexedDB Offline Cache', 'PDF Invoicing']
  }
];

const ProductsShowcase = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleOpenModal = (prodId) => {
    const study = CASE_STUDIES[prodId];
    const prod = PRODUCTS.find((p) => p.id === prodId);
    if (study) {
      setActiveModalProject({
        title: study.title,
        desc: study.overview,
        stack: study.stack || (prodId === 'edupulse' ? PRODUCTS[0].stack : PRODUCTS[1].stack),
        category: study.category,
        liveLink: study.liveLink || prod?.liveLink || '',
        githubLink: study.githubLink || ''
      });
    }
  };

  const handleInquireProduct = (productName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products-showcase" className="py-12 sm:py-16 px-4 sm:px-8 md:px-10 bg-transparent">
      {/* ── Section Heading ── */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold uppercase tracking-wider mb-3.5">
          <Sparkles size={13} className="text-gold" />
          <span>Proprietary Products — Nabil Tech Logic</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
          Flagship Enterprise <span className="italic text-gold">Software Systems</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-[#a79fc9] max-w-2xl mx-auto leading-relaxed">
          Engineered and maintained in-house under <strong>Nabil Tech Logic</strong>. Built to solve mission-critical operational challenges for educational institutions and healthcare enterprises.
        </p>
      </div>

      {/* ── 2 Flagship Products Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {PRODUCTS.map((prod) => {
          const Icon = prod.icon;
          const isEdu = prod.id === 'edupulse';
          const themeBadgeColor = isEdu
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
            : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300';
          const iconBg = isEdu
            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
            : 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400';

          return (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col bg-slate-50/70 dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] hover:border-gold/40 dark:hover:border-gold/30 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${iconBg}`}>
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#f3efe4]">
                        {prod.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold/15 text-gold border border-gold/25 uppercase tracking-wide">
                        By Nabil Tech Logic
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-[#a79fc9]">
                      {prod.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tag / Category Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${themeBadgeColor}`}>
                  <Zap size={12} />
                  <span>{prod.type}</span>
                </span>
              </div>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#c3bde0] leading-relaxed mb-6">
                {prod.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-3 mb-6 flex-grow">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#8a83ab]">
                  Core Operational Modules
                </p>
                <div className="space-y-2.5">
                  {prod.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <span className="font-bold text-slate-800 dark:text-[#e5e1f2]">
                          {feat.title}:{' '}
                        </span>
                        <span className="text-slate-600 dark:text-[#a79fc9]">
                          {feat.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#2a2450] text-center mb-6">
                {prod.metrics.map((m, mi) => (
                  <div key={mi}>
                    <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-gold tracking-tight">
                      {m.value}
                    </p>
                    <p className="text-[10px] text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/70 dark:border-[#221c42] mb-6">
                {prod.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-semibold text-[#825916] dark:text-gold-soft bg-gold/10 border border-gold/25 px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card CTA Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-auto pt-2 flex-wrap">
                {prod.liveLink && (
                  <a
                    href={prod.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-[#0a66c2] hover:bg-[#004182] text-white shadow-sm transition-all cursor-pointer"
                  >
                    <ExternalLink size={13} strokeWidth={2.4} />
                    <span>Live Web App</span>
                  </a>
                )}

                <Link
                  href={`/products/${prod.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-[#1a1636] dark:hover:bg-[#221c45] text-slate-800 dark:text-[#f3efe4] hover:text-gold dark:hover:text-gold transition-colors cursor-pointer"
                >
                  <span>Overview</span>
                </Link>

                <button
                  type="button"
                  onClick={() => handleOpenModal(prod.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-[#15112e] border border-slate-300 dark:border-[#383163] text-slate-700 dark:text-[#c3bde0] hover:border-gold hover:text-gold transition-colors cursor-pointer"
                >
                  <Layers size={13} className="text-gold" />
                  <span>Architecture</span>
                </button>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-gold hover:bg-gold-soft text-slate-950 transition-colors cursor-pointer shadow-sm sm:ml-auto"
                >
                  <span>Book Demo</span>
                  <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectCaseStudyModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default ProductsShowcase;
