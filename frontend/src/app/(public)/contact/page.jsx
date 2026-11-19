import Link from 'next/link';
import Contact from '@/components/Contact';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Contact & Hire Nabil Ahmad | Full Stack MERN Developer',
  description:
    'Get in touch with Nabil Ahmad for full-time engineering roles, high-impact software contracts, custom MERN web applications, or cloud infrastructure.',
  keywords: [
    'Contact Nabil Ahmad',
    'Hire Full Stack Developer Peshawar',
    'Hire MERN Developer Pakistan',
    'Software Engineer Hiring',
    'Full Stack Remote Developer'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/contact',
  },
  openGraph: {
    title: 'Contact & Hire Nabil Ahmad | Full Stack Developer',
    description:
      'Available for full-time software engineering roles, technical contracts, and architectural consulting.',
    url: 'https://www.nabilahmad.site/contact',
    type: 'website',
  },
};

export default function ContactPage() {
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
            Contact &amp; Hire
          </span>
        </div>

        {/* Central Card */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
          <Contact />
        </div>
      </div>
    </div>
  );
}
