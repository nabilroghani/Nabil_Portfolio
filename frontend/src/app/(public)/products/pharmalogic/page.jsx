import Link from 'next/link';
import {
  Pill,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Barcode,
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
  AlertTriangle,
  Receipt,
  Truck,
  Search
} from 'lucide-react';

export const metadata = {
  title: 'PharmaLogic ERP | Pharmacy POS & Healthcare Inventory System | Nabil Ahmad',
  description:
    'PharmaLogic ERP engineered by Nabil Ahmad is a high-speed pharmacy management software featuring FEFO batch expiry date alarms, sub-500ms barcode checkout, distributor ledgers, and real-time profit analytics.',
  keywords: [
    'Pharmacy Management Software Pakistan',
    'Pharmacy POS System Peshawar',
    'Medical Store Billing Software',
    'Medicine Expiry Tracking Software',
    'PharmaLogic ERP',
    'Pharmacy Inventory Software with Barcode',
    'Pharmacy Software with Formula Search'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/products/pharmalogic',
  },
  openGraph: {
    title: 'PharmaLogic ERP — Pharmacy POS & Healthcare Inventory System',
    description:
      'High-speed pharmacy POS billing system with FEFO batch expiry date alarms, barcode scanning, and distributor ledger accounting.',
    url: 'https://www.nabilahmad.site/products/pharmalogic',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PharmaLogic ERP",
  "operatingSystem": "Web, Cloud, Offline-POS, Windows, Linux",
  "applicationCategory": "BusinessApplication",
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
  "description": "High-speed pharmacy POS billing system with FEFO batch expiry date alerts, barcode scanning, and distributor ledger accounting."
};

const PHARMA_MODULES = [
  {
    icon: AlertTriangle,
    title: 'FEFO Batch & Expiry Date Management',
    badge: 'Waste Elimination Engine',
    desc: 'Protect your bottom line with First-Expiry-First-Out dispensing logic and automated advance expiry warning triggers.',
    points: [
      'Proactive 30, 60, and 90-day medicine expiration warning alarms',
      'Automatic suggestion of earliest-expiring batch during POS sale',
      'One-click return voucher generation for expiring stock back to distributors',
      'Batch-wise purchase price and retail pricing history'
    ]
  },
  {
    icon: Barcode,
    title: 'Sub-Second Barcode POS & Thermal Billing',
    badge: 'High-Speed Checkout',
    desc: 'Eliminate customer lines during rush hours with keyboard-first shortcuts and instant barcode scanner recognition.',
    points: [
      'Sub-500ms barcode scan-to-cart latency for ultra-rapid counter operations',
      'Support for 58mm and 80mm thermal receipt printers with custom store logo',
      'Split payment modes: Cash, Credit Card, Debit Card, or Client Account',
      'Item-wise and bill-level flat or percentage discount controls with security PIN'
    ]
  },
  {
    icon: Clock,
    title: 'Low-Stock Alarms & Auto-Reordering',
    badge: 'Inventory Protection',
    desc: 'Never run out of life-saving medicines with dynamic re-order level monitoring and stock shortage notifications.',
    points: [
      'Configurable minimum threshold levels per medicine and dosage type',
      'Automated purchase requisition list generated based on current sales velocity',
      'Dead-stock detection identifying slow-moving products tying up capital',
      'Physical stock audit reconciliation mode with barcode audit scanning'
    ]
  },
  {
    icon: Truck,
    title: 'Distributor & Supplier Ledgers',
    badge: 'Commercial Accounting',
    desc: 'Complete control over wholesale medicine purchases, delivery invoice verification, and supplier payment balances.',
    points: [
      'Double-entry distributor credit/debit account ledger tracking',
      'Purchase order creation with invoice verification against physical delivery',
      'Automated bonus/scheme calculation from pharmaceutical distributors',
      'Supplier payment scheduling and cheque/cash payout receipts'
    ]
  },
  {
    icon: BarChart3,
    title: 'Daily Profit Margins & Sales Analytics',
    badge: 'Executive Intelligence',
    desc: 'Understand exactly how much money your pharmacy is generating daily, weekly, and monthly in real-time.',
    points: [
      'Instant gross and net profit margin calculations per product & total sales',
      'Daily cashier cash drawer opening, cash-in/out, and shift closing audits',
      'Top-selling brands, high-margin categories, and sales trends breakdown',
      'FBR / Tax invoice compliance and exportable financial reports (Excel/PDF)'
    ]
  },
  {
    icon: Search,
    title: 'Formula & Generic Substitute Search',
    badge: 'Pharmacist Assistant',
    desc: 'Empower pharmacists to suggest reliable generic alternatives when a specific brand is temporarily unavailable.',
    points: [
      'Salt/Formula-based cross-indexing across thousands of registered medicines',
      'Instant alternative brand lookup with exact dosage comparison and prices',
      'Prescription digital archive storing customer doctor slips for refilling',
      'Controlled / narcotic drug sales register for medical regulatory compliance'
    ]
  }
];

export default function PharmaLogicProductPage() {
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
            PharmaLogic ERP
          </span>
        </div>

        {/* ── Product Hero Banner ── */}
        <div className="relative rounded-3xl bg-white dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] p-6 sm:p-12 shadow-xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={13} className="text-cyan-500" />
              <span>Production SaaS — Engineered by Nabil Ahmad</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-[#f3efe4] leading-tight">
              PharmaLogic <span className="italic text-gold">ERP</span>
            </h1>
            <p className="mt-2 text-base sm:text-xl font-medium text-slate-700 dark:text-[#c3bde0]">
              The High-Speed Pharmacy POS &amp; Healthcare Inventory System
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-[#a79fc9] leading-relaxed">
              Built specifically for modern retail pharmacies, hospital chemist stores, and wholesale medicine distributors. PharmaLogic ERP eliminates expired stock financial losses through First-Expiry-First-Out (FEFO) allocation, cuts checkout queues with sub-500ms barcode scanning, and gives owners real-time profit visibility.
            </p>

            {/* Metrics Pills */}
            <div className="grid grid-cols-3 gap-3 mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-[#181432] border border-slate-200/80 dark:border-[#2a2450] text-center">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-gold tracking-tight">
                  &lt;500ms
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                  POS Scan Checkout
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-gold tracking-tight">
                  Zero Losses
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                  Expired Stock Waste
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-gold tracking-tight">
                  99.9%
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 dark:text-[#8a83ab] uppercase tracking-wider font-semibold">
                  Stock Audit Accuracy
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
              <a
                href="https://wa.me/923041237882?text=Hi%20Nabil,%20I%20am%20interested%20in%20a%20live%20demo%20and%20pricing%20for%20PharmaLogic%20Pharmacy%20Management%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-green-500/20 transition-all cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Request Live Demo on WhatsApp</span>
              </a>

              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-gold hover:bg-gold-soft text-ink transition-colors cursor-pointer shadow-sm"
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
              — Specialized Pharmacy Architecture —
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-[#f3efe4] mt-1">
              Engineered for Speed, Accuracy &amp; Financial Control
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9] mt-2">
              Every feature is built around the daily realities of busy medicine counters and complex pharmaceutical supplier terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHARMA_MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded-2xl bg-white dark:bg-[#120f24] border border-slate-200 dark:border-[#2a2450] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
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
                        <CheckCircle2 size={15} className="text-cyan-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Hardware Compatibility & Offline-First Specs ── */}
        <div className="rounded-3xl bg-slate-50 dark:bg-[#100e21] border border-slate-200 dark:border-[#2a2450] p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center">
              <Laptop size={20} />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Hardware Compatibility &amp; POS Stack
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9]">
                Plug and play with standard retail hardware without expensive proprietary equipment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                POS Hardware
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Thermal Printers &amp; Scanners
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Works with USB/Bluetooth 1D &amp; 2D barcode scanners and 58mm/80mm ESC/POS printers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                Offline Tolerance
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Local IndexedDB Cache
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Keep ringing up customer bills even during temporary internet disconnections.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                Data Security
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Encrypted Cloud Sync
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Automated continuous cloud database backups ensure your ledger is safe against PC crashes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#181432] border border-slate-200/80 dark:border-[#27204e]">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                Multi-Branch Ready
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-[#e5e1f2]">
                Centralized Control
              </p>
              <p className="text-[11px] text-slate-600 dark:text-[#8a83ab] mt-1">
                Manage multiple medical store branches with centralized inventory transfers and reporting.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Booking CTA Banner ── */}
        <div className="rounded-3xl bg-gradient-to-r from-cyan-600/10 via-gold/10 to-emerald-600/10 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#f3efe4]">
              Ready to Upgrade Your Pharmacy Operations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a79fc9]">
              Schedule a personalized 15-minute live demo with <strong>Nabil Ahmad</strong> to explore PharmaLogic ERP for your store.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923041237882?text=Hi%20Nabil,%20I%20would%20like%20to%20schedule%20a%2015-minute%20demo%20for%20PharmaLogic%20ERP."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-md transition-all cursor-pointer"
            >
              <PhoneCall size={15} />
              <span>Connect on WhatsApp (+92 304 1237882)</span>
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-white dark:bg-[#1a1636] border border-slate-300 dark:border-[#383163] text-slate-800 dark:text-white hover:border-gold transition-colors cursor-pointer"
            >
              <span>Back to Portfolio Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
