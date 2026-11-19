import Link from 'next/link';
import {
  GraduationCap,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Calendar,
  Users,
  FileText,
  Clock,
  Sparkles,
  PhoneCall,
  Laptop,
  Check,
  Building2,
  ChevronRight,
  Layers,
  BarChart3,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

export const metadata = {
  title: 'EduNexa SMS | Enterprise School & Student Management System | Nabil Ahmad',
  description:
    'EduNexa SMS engineered by Nabil Ahmad is a multi-tenant cloud school management system automating student admissions, monthly fee vouchers, biometric attendance, exams, and parent SMS alerts.',
  keywords: [
    'EduNexa',
    'EduNexa SMS',
    'EduPulse SMS',
    'School Management System Pakistan',
    'Student Management System SaaS',
    'School Fee Voucher Generator Software',
    'School Attendance SMS Alert Software',
    'Exam Grading and Report Card Software',
    'School ERP Software Peshawar'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/products/edupulse',
  },
  openGraph: {
    title: 'EduNexa SMS — Enterprise School & Student Management System',
    description:
      'Multi-tenant campus ERP automating student fee vouchers in under 3 seconds, attendance alerts, and exam grading report cards.',
    url: 'https://www.nabilahmad.site/products/edupulse',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "EduNexa SMS (School & Student Management System)",
  "operatingSystem": "Web, Cloud SaaS, All Browsers",
  "applicationCategory": "EducationalApplication",
  "url": "https://edu-nexa-beta.vercel.app/",
  "offers": {
    "@type": "Offer",
    "price": "Custom",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Nabil Ahmad",
    "url": "https://www.nabilahmad.site/"
  },
  "description": "Multi-tenant cloud school management system automating student admissions, fee voucher generation, attendance SMS alerts, and report cards."
};

const MODULES = [
  {
    icon: CreditCard,
    title: 'Automated Fee Vouchers & Ledger',
    badge: 'Core Financial Engine',
    desc: 'Eliminate manual billing errors with batch generation of barcoded monthly PDF fee challans in under 3 seconds.',
    points: [
      'Custom institutional fee heads (Tuition, Transport, Lab, Exam fees)',
      'Automated scholarship, sibling discounts, and fee concessions',
      'Defaulter tracking with automated overdue penalty calculations',
      'Real-time collection reconciliation for cashier & executive accounts'
    ]
  },
  {
    icon: Users,
    title: 'Student Admissions & Digital Vault',
    badge: 'Enrollment Lifecycle',
    desc: 'Paperless student onboarding with centralized record keeping from nursery admission to graduation alumni records.',
    points: [
      'Unique auto-generated Student Registration Number (SRN) & QR ID',
      'Digital document vault for birth certificates, photos, and B-Forms',
      'Family link mapping to track siblings across different grades',
      'One-click export of complete student academic & health history'
    ]
  },
  {
    icon: Calendar,
    title: 'Smart Attendance & Parent SMS',
    badge: 'Communication Gateway',
    desc: 'Seamless daily attendance tracking with automated WhatsApp and SMS gateways for instant absent notifications.',
    points: [
      'Biometric fingerprint/RFID machine integration and manual mobile marking',
      'Automated absent SMS triggered directly to parent phones within minutes',
      'Monthly attendance percentage tracking for exam eligibility rules',
      'Teacher & administrative staff attendance with leave balance logs'
    ]
  },
  {
    icon: FileText,
    title: 'Exam Engine & GPA Report Cards',
    badge: 'Academic Analytics',
    desc: 'End-to-end examination management from date sheets to auto-generated printable term report cards.',
    points: [
      'Flexible custom grading schemes (Percentages, Letter Grades, GPA)',
      'Automated calculation of marks, class positions, and section ranks',
      'Single-click batch PDF generation of branded institutional report cards',
      'Historical academic performance comparison and progress graphs'
    ]
  },
  {
    icon: Layers,
    title: 'Timetable & Class Allocation',
    badge: 'Operations Scheduler',
    desc: 'Algorithmic class scheduling preventing teacher conflict and balancing subject workload across periods.',
    points: [
      'Automated teacher-period collision detection',
      'Subject-wise period allocation according to curriculum guidelines',
      'Substitute teacher assignment with one-click re-allocations',
      'Printable master timetable for notice boards and individual teacher schedules'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Granular Multi-Role Permissions',
    badge: 'Enterprise Security',
    desc: 'Strict role-based isolation keeping financial data, student marks, and administrative controls completely secure.',
    points: [
      'Super Admin, Principal, Accountant, Teacher, and Parent portals',
      'Comprehensive audit log recording every fee update or mark change',
      'Daily automated cloud database backup with 99.99% data safety',
      'Encrypted password storage and session timeout protection'
    ]
  }
];

export default function EduPulseProductPage() {
  return (
    <div className="w-full pt-20 pb-20 px-3 sm:px-6 lg:px-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto space-y-16">
        {/* ── Breadcrumb & Back Link ── */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#a79fc9]">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/#products-showcase" className="hover:text-gold transition-colors">
            Products
          </Link>
          <ChevronRight size={14} />
          <span className="text-slate-800 dark:text-[#f3efe4] font-semibold">
            EduPulse SMS
          </span>
        </div>

        {/* ── Product Hero Banner ── */}
        <div className="relative rounded-3xl bg-white dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] p-6 sm:p-12 shadow-xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={13} className="text-emerald-500" />
              <span>Production SaaS — Engineered by Nabil Ahmad</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-[#f3efe4] leading-tight">
              EduNexa <span className="italic text-gold">SMS</span>
            </h1>
            <p className="mt-2 text-base sm:text-xl font-medium text-slate-700 dark:text-[#c3bde0]">
              The Modern Enterprise School &amp; Student Management SaaS (EduPulse)
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-[#a79fc9] leading-relaxed">
              Designed from the ground up for K-12 private schools, colleges, and academies. EduNexa SMS centralizes admissions, automates barcoded monthly fee voucher generation, triggers instant parent attendance alerts, and computes term report cards with 100% mathematical accuracy.
            </p>

            {/* Metrics Pills */}
            <div className="grid grid-cols-3 gap-3 mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-[#181432] border border-slate-200/80 dark:border-[#2a2450] text-center">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-gold tracking-tight">
                  &lt;3 Seconds
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                  Batch Fee Vouchers
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-gold tracking-tight">
                  80% Saved
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                  Admin Paperwork
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-gold tracking-tight">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                  Automated Grading
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 flex-wrap">
              <a
                href="https://edu-nexa-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#0a66c2] hover:bg-[#004182] text-white shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                <ExternalLink size={16} strokeWidth={2.4} />
                <span>Open Live Web App (EduNexa)</span>
              </a>

              <a
                href="https://wa.me/923041237882?text=Hi%20Nabil,%20I%20am%20interested%20in%20a%20live%20demo%20and%20pricing%20for%20EduNexa%20School%20Management%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-green-500/20 transition-all cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Demo</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-gold hover:bg-gold-soft text-slate-950 transition-colors cursor-pointer shadow-sm"
              >
                <span>Submit Inquiry Form</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Complete Modular Breakdown ── */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              — End-to-End Capabilities —
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-[#f3efe4] mt-1">
              Everything Your Institution Needs Under One Roof
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9] mt-2">
              No more switching between scattered spreadsheets, manual registers, or disjointed accounting files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded-2xl bg-white dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#1d173d] text-slate-700 dark:text-[#c3bde0]">
                      {m.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-[#f3efe4]">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9] mt-1">
                      {m.desc}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#221c45]">
                    {m.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-[#c3bde0]">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── System Architecture & Technology Specs ── */}
        <div className="rounded-3xl bg-slate-50 dark:bg-[#100e21] border border-slate-200 dark:border-[#2a2450] p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center">
              <Laptop size={20} />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Technical Architecture &amp; Reliability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9]">
                Engineered for speed, offline tolerance, and multi-tenant scaling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                Frontend Layer
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Next.js &amp; React 19
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Optimistic UI state, responsive Tailwind UI, and instant client filtering.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                API Engine
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Node.js &amp; Express
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                RESTful endpoints with sub-100ms latency, rate limiting, and JWT tokens.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                Database Tier
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                MongoDB Aggregations
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Compound indexing for fast student ledger reconciliation &amp; records.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                PDF Microservice
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Automated Print Engine
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Headless voucher rendering capable of printing 1,000+ fee slips in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Booking CTA Banner ── */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600/10 via-gold/10 to-blue-600/10 border border-emerald-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f3efe4]">
              Transform Your School Operations Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9]">
              Schedule a personalized 15-minute live demo with <strong>Nabil Ahmad</strong> to see EduNexa SMS in action.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://edu-nexa-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#0a66c2] hover:bg-[#004182] text-white shadow-md transition-all cursor-pointer"
            >
              <ExternalLink size={15} strokeWidth={2.4} />
              <span>Launch Live App</span>
            </a>

            <a
              href="https://wa.me/923041237882?text=Hi%20Nabil,%20I%20would%20like%20to%20schedule%20a%2015-minute%20demo%20for%20EduNexa%20SMS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-md transition-all cursor-pointer"
            >
              <PhoneCall size={15} />
              <span>Connect on WhatsApp (+92 304 1237882)</span>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-white dark:bg-[#1a1636] border border-slate-300 dark:border-[#383163] text-slate-800 dark:text-white hover:border-gold transition-colors cursor-pointer"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
