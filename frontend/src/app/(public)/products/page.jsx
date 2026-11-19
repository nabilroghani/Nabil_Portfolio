import Link from 'next/link';
import ProductsShowcase from '@/components/ProductsShowcase';
import { Sparkles, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Enterprise Software Products & SaaS Systems | Nabil Ahmad',
  description:
    'Explore production enterprise SaaS systems engineered by Nabil Ahmad: EduNexa School Management System and PharmaLogic Pharmacy POS & Healthcare ERP.',
  keywords: [
    'EduNexa SMS',
    'EduPulse SMS',
    'PharmaLogic ERP',
    'School Management System Pakistan',
    'Pharmacy POS Software Peshawar',
    'Custom SaaS Products'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/products',
  },
  openGraph: {
    title: 'Enterprise Software Products | Nabil Ahmad',
    description:
      'Production SaaS systems built by Nabil Ahmad: School Management System and Pharmacy POS ERP.',
    url: 'https://www.nabilahmad.site/products',
    type: 'website',
  },
};

export default function ProductsPage() {
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
            Products
          </span>
        </div>

        {/* Central Card with Products Showcase */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
          <ProductsShowcase />
        </div>
      </div>
    </div>
  );
}
