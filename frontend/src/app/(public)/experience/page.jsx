import ExperiencePageClient from './ExperiencePageClient';

export const metadata = {
  title: 'Experience & Technical Skills | Nabil Ahmad | Full Stack MERN Developer',
  description:
    '3+ years professional software engineering experience, AWS cloud deployments, and verified MERN stack competencies of Nabil Ahmad, Founder at Nabil Tech Logic.',
  keywords: [
    'Nabil Ahmad Experience',
    'MERN Stack Skills',
    'Full Stack Engineer Peshawar',
    'AWS Cloud Architect Pakistan',
    'React 19 Developer',
    'Node.js Express MongoDB'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/experience',
  },
  openGraph: {
    title: 'Experience & Technical Skills | Nabil Ahmad',
    description:
      'Professional engineering experience, system architecture track record, and AWS cloud competencies.',
    url: 'https://www.nabilahmad.site/experience',
    type: 'website',
  },
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
