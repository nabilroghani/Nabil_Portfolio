import Link from 'next/link';
import Contact from '@/components/Contact';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Contact & Hire Nabil Ahmad | Founder @ Nabil Tech Logic',
  description:
    'Start a project with Nabil Ahmad. Inquire about custom MERN web app development, SaaS MVPs, EduNexa School System, PharmaLogic POS, or cloud infrastructure.',
  keywords: [
    'Contact Nabil Ahmad',
    'Hire Full Stack Developer Peshawar',
    'Hire MERN Developer Pakistan',
    'Nabil Tech Logic Contact',
    'Software Project Inquiry'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/contact',
  },
  openGraph: {
    title: 'Contact & Hire Nabil Ahmad | Nabil Tech Logic',
    description:
      'Start your project today — share your scope or connect via WhatsApp for an immediate response.',
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
