import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import SmoothScroll from '@/components/SmoothScroll';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  metadataBase: new URL('https://www.nabilahmad.site'),
  title: {
    default: 'Nabil Ahmad | MERN Stack & AWS Cloud Developer | Full Stack Engineer',
    template: '%s | Nabil Ahmad'
  },
  description: 'Nabil Ahmad is a MERN Stack Developer & AWS Cloud Engineer with 3+ years experience building scalable web applications, SaaS MVPs, and robust cloud infrastructure using React, Next.js, Node.js, MongoDB, and AWS.',
  keywords: [
    'Nabil Ahmad',
    'Best Developer in Peshawar',
    'Best MERN Stack Developer in Peshawar',
    'Top Full Stack Developer in Pakistan',
    'Best Web Developer Peshawar',
    'Software Engineer Peshawar',
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
  authors: [{ name: 'Nabil Ahmad', url: 'https://www.nabilahmad.site' }],
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
    canonical: 'https://www.nabilahmad.site',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://www.nabilahmad.site',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
      "@id": "https://www.nabilahmad.site/#person",
      "name": "Nabil Ahmad",
      "givenName": "Nabil",
      "familyName": "Ahmad",
      "jobTitle": "MERN Stack & AWS Cloud Developer",
      "description": "Full Stack Web Developer with 3+ years experience building scalable web applications, SaaS MVPs, and robust cloud infrastructure using MongoDB, Express.js, React, Node.js, Next.js, and AWS.",
      "url": "https://www.nabilahmad.site/",
      "image": "https://www.nabilahmad.site/og-image.png",
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
      "@type": "ProfessionalService",
      "@id": "https://www.nabilahmad.site/#service-biz",
      "name": "Nabil Ahmad - Full Stack & Cloud Engineering Services",
      "alternateName": "Best MERN Stack & Full Stack Developer in Peshawar",
      "image": "https://www.nabilahmad.site/og-image.png",
      "url": "https://www.nabilahmad.site/",
      "telephone": "+923041237882",
      "email": "nabiltechlogic.dev@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "University of Peshawar",
        "addressLocality": "Peshawar",
        "addressRegion": "Khyber Pakhtunkhwa",
        "postalCode": "25000",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0151,
        "longitude": 71.5249
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Peshawar"
        },
        {
          "@type": "Country",
          "name": "Pakistan"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Worldwide (Remote)"
        }
      ],
      "founder": {
        "@id": "https://www.nabilahmad.site/#person"
      },
      "knowsLanguage": ["English", "Urdu", "Pashto"],
      "openingHours": "Mo-Sa 09:00-21:00"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nabilahmad.site/#website",
      "url": "https://www.nabilahmad.site/",
      "name": "Nabil Ahmad Portfolio",
      "description": "Official portfolio of Nabil Ahmad - MERN Stack & AWS Cloud Developer",
      "publisher": {
        "@id": "https://www.nabilahmad.site/#person"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.nabilahmad.site/#profilepage",
      "url": "https://www.nabilahmad.site/",
      "name": "Nabil Ahmad - Profile",
      "isPartOf": {
        "@id": "https://www.nabilahmad.site/#website"
      },
      "mainEntity": {
        "@id": "https://www.nabilahmad.site/#person"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.nabilahmad.site/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a typical project take from start to finish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small to medium MVPs typically take 2-4 weeks, while larger full-scale platforms take 6-10 weeks. Every project is broken into weekly milestones with live staging previews so you are always updated on progress."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle both the frontend, backend, and AWS cloud deployment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 100%! As a full-stack MERN & AWS engineer, I handle the complete lifecycle: UI/UX implementation, database modeling, secure API design, and deploying live onto AWS EC2/S3 with custom domains and SSL."
          }
        },
        {
          "@type": "Question",
          "name": "What is your pricing and engagement model?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I work on both fixed-price milestone contracts (ideal for MVPs with defined scope) and dedicated monthly retainers (ideal for ongoing product development and scaling). Pricing is transparent with zero hidden costs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Every project includes 30 days of free bug-fixing and warranty support after launch. I also offer monthly maintenance packages for cloud monitoring, feature updates, and performance tuning."
          }
        },
        {
          "@type": "Question",
          "name": "How do we get started on my project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply scroll down to the Contact form or email me at nabiltechlogic.dev@gmail.com with a short summary of your requirements. I respond within 24 hours to set up a free 15-minute discovery call to discuss scope, timeline, and budget."
          }
        }
      ]
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
