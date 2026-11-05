import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import SmoothScroll from '@/components/SmoothScroll';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  metadataBase: new URL('https://nabil-tech.vercel.app'),
  title: {
    default: 'Nabil Ahmad | MERN Stack & AWS Cloud Developer | Full Stack Engineer',
    template: '%s | Nabil Ahmad'
  },
  description: 'Nabil Ahmad is a MERN Stack Developer & AWS Cloud Engineer with 3+ years experience building scalable web applications, SaaS MVPs, and robust cloud infrastructure using React, Next.js, Node.js, MongoDB, and AWS.',
  keywords: [
    'Nabil Ahmad',
    'MERN Stack Developer',
    'AWS Cloud Developer',
    'Full Stack Developer Pakistan',
    'React Developer',
    'Next.js Developer',
    'Node.js Engineer',
    'Hire MERN Developer',
    'SaaS MVP Development',
    'Cloud Deployment AWS',
    'Freelance Full Stack Web Developer'
  ],
  authors: [{ name: 'Nabil Ahmad', url: 'https://nabil-tech.vercel.app' }],
  creator: 'Nabil Ahmad',
  publisher: 'Nabil Ahmad',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nabil-tech.vercel.app',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://nabil-tech.vercel.app',
    title: 'Nabil Ahmad | MERN Stack & AWS Cloud Developer',
    description: 'Helping businesses scale with custom MERN Web Apps, Next.js platforms, and AWS Cloud Deployments. 3+ years experience.',
    siteName: 'Nabil Ahmad Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nabil Ahmad - MERN Stack & AWS Cloud Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabil Ahmad | MERN Stack & AWS Cloud Developer',
    description: 'Helping businesses scale with custom MERN Web Apps, Next.js platforms, and AWS Cloud Deployments. 3+ years experience.',
    images: ['/og-image.png'],
    creator: '@nabilroghani',
  },
  verification: {
    google: 'google74b13b47fed44948',
  },
  other: {
    'geo.region': 'PK-KP',
    'geo.placename': 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
    'geo.position': '34.0151;71.5249',
    'ICBM': '34.0151, 71.5249',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nabil-tech.vercel.app/#person",
      "name": "Nabil Ahmad",
      "givenName": "Nabil",
      "familyName": "Ahmad",
      "jobTitle": "MERN Stack & AWS Cloud Developer",
      "description": "Full Stack Web Developer with 3+ years experience building scalable web applications, SaaS MVPs, and robust cloud infrastructure using MongoDB, Express.js, React, Node.js, Next.js, and AWS.",
      "url": "https://nabil-tech.vercel.app/",
      "image": "https://nabil-tech.vercel.app/og-image.png",
      "email": "mailto:nabiltechlogic.dev@gmail.com",
      "telephone": "+923041237882",
      "nationality": "Pakistani",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Peshawar",
        "addressRegion": "Khyber Pakhtunkhwa",
        "addressCountry": "PK"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Peshawar"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Apptex Software Solutions"
      },
      "sameAs": [
        "https://github.com/nabilroghani",
        "https://www.linkedin.com/in/nabil-ahmad-0750002b1",
        "https://www.facebook.com/nabilroghani"
      ],
      "knowsAbout": [
        "MERN Stack",
        "React.js",
        "Node.js",
        "Next.js",
        "Express.js",
        "MongoDB",
        "Amazon Web Services (AWS)",
        "AWS EC2",
        "AWS S3",
        "REST APIs",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Docker",
        "Nginx",
        "Full Stack Web Development",
        "SaaS Development"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom MERN Stack Web Application Development",
              "description": "End-to-end full-stack web application development from database architecture to responsive UI."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AWS Cloud Architecture & Deployment",
              "description": "Setup and management of scalable cloud infrastructure using AWS EC2, S3, Nginx, PM2, and CI/CD pipelines."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SaaS MVP Development",
              "description": "Rapid development of Minimum Viable Products for startups with auth, payments, dashboards, and scalable backends."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "REST API Design & Integration",
              "description": "Secure, fast, and documented RESTful APIs with JWT authentication, role-based access, and third-party integrations."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nabil-tech.vercel.app/#website",
      "url": "https://nabil-tech.vercel.app/",
      "name": "Nabil Ahmad Portfolio",
      "description": "Official portfolio of Nabil Ahmad - MERN Stack & AWS Cloud Developer",
      "publisher": {
        "@id": "https://nabil-tech.vercel.app/#person"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://nabil-tech.vercel.app/#profilepage",
      "url": "https://nabil-tech.vercel.app/",
      "name": "Nabil Ahmad - Profile",
      "isPartOf": {
        "@id": "https://nabil-tech.vercel.app/#website"
      },
      "mainEntity": {
        "@id": "https://nabil-tech.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f3f2ef] dark:bg-[#0b0a1a] transition-colors duration-500 font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <Toaster position="bottom-right" />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
