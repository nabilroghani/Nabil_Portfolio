import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Client Reviews & Verified Testimonials | Nabil Ahmad',
  description:
    'Read verified client endorsements and measurable outcomes delivered for European and international commercial production systems by Nabil Ahmad.',
  keywords: [
    'Nabil Ahmad Reviews',
    'Client Testimonials Software Engineer',
    'Accurit Accountancy Review',
    'Galeas Kitchen Review',
    'Penitans Consultation Review',
    'Verified Developer Ratings Pakistan'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/reviews',
  },
  openGraph: {
    title: 'Client Reviews & Testimonials | Nabil Ahmad',
    description:
      'Verified endorsements and measurable outcomes delivered for commercial European and international production systems.',
    url: 'https://www.nabilahmad.site/reviews',
    type: 'website',
  },
};

export default function ReviewsPage() {
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
            Client Reviews
          </span>
        </div>

        {/* Central Card */}
        <div className="bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
