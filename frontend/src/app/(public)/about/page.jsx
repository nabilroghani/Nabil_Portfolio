import Link from 'next/link';
import About from '@/components/About';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'About Nabil Ahmad | Full Stack MERN Developer & AWS Cloud Engineer',
  description:
    'Learn about Nabil Ahmad, Full Stack MERN Developer, AWS Cloud Engineer, and Enterprise SaaS Architect based in Peshawar, Khyber Pakhtunkhwa, Pakistan.',
  keywords: [
    'About Nabil Ahmad',
    'Full Stack Developer Peshawar',
    'MERN Stack Engineer Pakistan',
    'AWS Cloud Architect Peshawar',
    'University of Peshawar Computer Science',
    'Software Engineer Bio'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/about',
  },
  openGraph: {
    title: 'About Nabil Ahmad | Full Stack MERN Developer & Cloud Architect',
    description:
      'The person behind the code — MERN Stack Developer, AWS Cloud Engineer, and builder of enterprise SaaS platforms.',
    url: 'https://www.nabilahmad.site/about',
    type: 'website',
  },
};

export default function AboutPage() {
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
            About Me
          </span>
        </div>

        {/* Central Card */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
          <About />
        </div>
      </div>
    </div>
  );
}
