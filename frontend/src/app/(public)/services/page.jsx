import Link from 'next/link';
import ServicesAndFAQ from '@/components/ServicesAndFAQ';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Web Development & Cloud Services | Nabil Ahmad | Nabil Tech Logic',
  description:
    'Custom MERN web application development, SaaS MVP rapid builds in 3-4 weeks, AWS cloud deployment, and performance optimization services by Nabil Ahmad.',
  keywords: [
    'Hire MERN Developer',
    'SaaS MVP Development Pakistan',
    'AWS Cloud Architecture Services',
    'Custom Web App Development Peshawar',
    'Full Stack Consulting Nabil Tech Logic',
    'API Performance Optimization'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/services',
  },
  openGraph: {
    title: 'Web Development & Cloud Services | Nabil Ahmad',
    description:
      'High-performance engineering tailored for founders, startups, and growing companies.',
    url: 'https://www.nabilahmad.site/services',
    type: 'website',
  },
};

export default function ServicesPage() {
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
            Services &amp; FAQ
          </span>
        </div>

        {/* Central Card */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
          <ServicesAndFAQ />
        </div>
      </div>
    </div>
  );
}
