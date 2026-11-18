import ProjectsPageClient from './ProjectsPageClient';

export const metadata = {
  title: 'Built Projects & Engineering Case Studies | Nabil Ahmad',
  description:
    'Explore production web applications, SaaS platforms, and cloud infrastructure engineered by Nabil Ahmad using React, Next.js, Node.js, MongoDB, and AWS.',
  keywords: [
    'Nabil Ahmad Projects',
    'MERN Stack Projects',
    'Full Stack Portfolio Pakistan',
    'MedPulse AI Case Study',
    'BeanVerse Food Marketplace',
    'Accurit Accountancy Web App',
    'Penitans Consultation Platform',
    'React Next.js Developer Work'
  ],
  alternates: {
    canonical: 'https://www.nabilahmad.site/projects',
  },
  openGraph: {
    title: 'Built Projects & Case Studies | Nabil Ahmad',
    description:
      'Production-ready full-stack applications and cloud platforms engineered by Nabil Ahmad.',
    url: 'https://www.nabilahmad.site/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
