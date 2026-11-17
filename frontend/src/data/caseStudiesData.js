// Detailed Case Studies and Architecture specifications for Nabil Ahmad's projects
export const CASE_STUDIES = {
  medpulse: {
    title: 'MedPulse AI — Intelligent Clinical Management SaaS',
    category: 'Full-Stack AI & Healthcare SaaS',
    client: 'Healthcare / Clinical Workflows',
    timeline: '4 Weeks',
    role: 'Full-Stack Systems Architect & AI Engineer',
    overview:
      'A multi-tenant healthcare operations platform connecting Clinic Administrators, Physicians, Receptionists, and Patients into a unified, secure real-time workspace with grounded AI assistance.',
    challenge:
      'Clinic workflows were bogged down by manual paperwork and non-standardized triage. Crucially, non-English speaking patients frequently struggled to understand dense medical prescriptions, leading to treatment non-compliance and communication errors.',
    solution:
      'Architected a full-stack platform using Node.js, Express, React, and MongoDB. Integrated Google Gemini 2.0 with a domain-grounded Retrieval-Augmented Generation (RAG) pipeline to generate instant, grounded symptom triage and one-click bilingual (English & Urdu) prescription simplifications.',
    architecture: [
      {
        layer: 'Frontend & UI',
        details: 'React.js with role-based dynamic dashboards, Tailwind CSS, and optimistic UI updates for clinical appointments.'
      },
      {
        layer: 'AI & RAG Pipeline',
        details: 'Google Gemini 2.0 API with MongoDB vector grounding, ensuring factual clinical context and zero ungrounded hallucinations.'
      },
      {
        layer: 'Security & Backend',
        details: 'Node.js/Express REST APIs with JWT authentication, granular Role-Based Access Control (RBAC), and bcrypt password encryption.'
      },
      {
        layer: 'Document Microservice',
        details: 'Serverless PDF generation engine for instant patient history reports and prescription exports.'
      }
    ],
    highlights: [
      'Bilingual (English/Urdu) AI prescription translation and simplified medical guidance.',
      'Grounded clinical symptom triage assisting physicians in preliminary evaluations.',
      'Comprehensive audit trails and role-based permissions (Admin, Doctor, Receptionist, Patient).'
    ],
    metrics: [
      { label: 'Patient Comprehension', value: '95%+' },
      { label: 'Clinical Triage Speed', value: '4x Faster' },
      { label: 'Audit Trail Accuracy', value: '100%' }
    ]
  },

  beanverse: {
    title: 'BeanVerse — Real-Time Multi-Role Food Marketplace',
    category: 'Real-Time Distributed Systems',
    client: 'On-Demand Delivery & Retail',
    timeline: '6 Weeks',
    role: 'Backend Architect & Real-Time Engineer',
    overview:
      'A high-concurrency event-driven delivery marketplace synchronizing three simultaneous user personas—Customers, Kitchen Merchants, and Dispatch Riders—with real-time state tracking.',
    challenge:
      'Managing high-frequency order state transitions across concurrent users without order desynchronization, stale kitchen inventory, or sluggish API latencies during peak meal hours.',
    solution:
      'Engineered a WebSocket-first architecture using Socket.io and Node.js. Optimized MongoDB schema indexing and eliminated relationship population overhead to achieve blazing sub-200ms API response latencies. Implemented cryptographic OTP delivery verification handshakes.',
    architecture: [
      {
        layer: 'Real-Time Event Layer',
        details: 'Socket.io WebSocket channels handling live order lifecycles and rider dispatch notifications.'
      },
      {
        layer: 'Database & Caching',
        details: 'MongoDB Atlas with compound index strategies, projection pruning, and sub-200ms query latency.'
      },
      {
        layer: 'Transactional Security',
        details: 'Stripe API payment processing with webhook reconciliation and cryptographic OTP physical handshakes.'
      }
    ],
    highlights: [
      'Bidirectional WebSocket event streaming with automatic reconnection fallback.',
      'Optimized MongoDB aggregation pipelines keeping 99th percentile API responses under 200ms.',
      'Cryptographic OTP verification protocol between rider and customer.'
    ],
    metrics: [
      { label: 'API Response Latency', value: '<200ms' },
      { label: 'Order State Sync Delay', value: '<50ms' },
      { label: 'Transaction Integrity', value: '100%' }
    ]
  },

  accurit: {
    title: 'Accurit Accountancy — European Corporate Web Architecture',
    category: 'European Client / Web Engineering',
    client: 'Accurit Accountancy (Malta, Europe)',
    timeline: '3 Weeks',
    role: 'Lead Frontend Engineer & Quality Specialist',
    overview:
      'An enterprise corporate web application engineered for a prestigious Malta-based financial consultancy, adhering strictly to European accessibility mandates (WCAG 2.2 Level AA).',
    challenge:
      'The client required an ultra-clean corporate digital presence compliant with stringent European Union accessibility laws (WCAG 2.2), requiring automated verification, bulletproof validation, and zero cross-browser display bugs.',
    solution:
      'Built with Next.js 16 (App Router, Server Components) and TypeScript. Implemented automated axe-core accessibility auditing in the CI/CD pipeline, comprehensive Playwright end-to-end (E2E) testing across Chromium, Firefox, and WebKit, and Vitest unit testing.',
    architecture: [
      {
        layer: 'Core Framework',
        details: 'Next.js 16 with Server Components, delivering pre-rendered, SEO-optimized, sub-second initial page loads.'
      },
      {
        layer: 'Accessibility Engineering',
        details: 'Semantic HTML5, ARIA landmark roles, and continuous axe-core testing achieving 100% WCAG 2.2 Level AA compliance.'
      },
      {
        layer: 'Automated Testing',
        details: 'Playwright multi-browser test suites and Vitest component testing preventing visual and functional regressions.'
      }
    ],
    highlights: [
      'Verified 100% WCAG 2.2 Level AA compliance with zero accessibility violations.',
      'Automated multi-browser E2E testing across mobile, tablet, and desktop viewports.',
      'Zod-validated contact pipelines with Resend transactional email dispatch.'
    ],
    metrics: [
      { label: 'Accessibility Score', value: '100/100' },
      { label: 'E2E Cross-Browser Pass Rate', value: '100%' },
      { label: 'Lighthouse Performance', value: '98+' }
    ]
  },

  penitans: {
    title: 'Penitans — Multi-Party Video & Consultation Platform',
    category: 'Real-Time WebSockets & Tele-Consultation',
    client: 'Penitans Consultation',
    timeline: '5 Weeks',
    role: 'Full-Stack Engineer',
    overview:
      'A global online consultation platform featuring real-time WebSockets messaging, scheduled video consultation rooms, and international payment processing.',
    challenge:
      'Unstable network connections in cross-border consultations often led to dropped chat messages, confusing booking status sync, and video latency issues.',
    solution:
      'Engineered real-time bidirectional communication using Socket.io and WebRTC (ZegoCloud / Jitsi). Integrated TanStack React Query for optimistic UI caching and client-server state reconciliation, eliminating perceived latency even under slow mobile connections.',
    architecture: [
      {
        layer: 'Video & Audio Pipeline',
        details: 'WebRTC mesh with ZegoCloud/Jitsi fallbacks, supporting encrypted peer-to-peer and multi-party rooms.'
      },
      {
        layer: 'State Synchronization',
        details: 'TanStack React Query optimistic caching, allowing immediate UI updates while background synchronization completes.'
      },
      {
        layer: 'Billing & Notifications',
        details: 'Stripe payment intents with automated appointment push notifications and calendar synchronization.'
      }
    ],
    highlights: [
      'Sub-second real-time chat and video consultation connectivity.',
      'Optimistic UI state reconciliation ensuring zero perceived lag on unstable networks.',
      'Automated appointment reminder pipelines and Stripe payment checkout.'
    ],
    metrics: [
      { label: 'Real-Time Sync Latency', value: '<80ms' },
      { label: 'Video Call Reliability', value: '99.8%' },
      { label: 'Client Booking Uptime', value: '99.9%' }
    ]
  },

  paklearners: {
    title: 'PAK Learners — High-Concurrency Online Assessment Portal',
    category: 'Scalable Cloud Architecture & Linux VPS',
    client: 'PAK Learners (paklearners.com)',
    timeline: '4 Weeks',
    role: 'Full-Stack Developer & DevOps Lead',
    overview:
      'A scalable MERN-stack examination and MCQ testing platform built for thousands of students preparing for competitive and academic exams.',
    challenge:
      'Handling sudden traffic spikes of thousands of students taking simultaneous timed exams, ensuring strict anti-cheating timers and instantaneous automated grading without database deadlocks.',
    solution:
      'Architected a high-throughput MERN backend deployed on a dedicated Ubuntu Linux VPS. Configured PM2 process cluster management and Nginx reverse proxy with gzip compression and SSL termination.',
    architecture: [
      {
        layer: 'Infrastructure',
        details: 'Ubuntu Linux VPS, Nginx reverse proxy, PM2 multi-core cluster management with zero-downtime reloads.'
      },
      {
        layer: 'Application Layer',
        details: 'Express.js REST APIs with rate limiting, secure session management, and millisecond auto-grading logic.'
      },
      {
        layer: 'Database Layer',
        details: 'MongoDB database with indexed question banks and optimized student answer aggregation.'
      }
    ],
    highlights: [
      'Zero server crashes or drops during high-volume simultaneous student exam sessions.',
      'Instantaneous score calculation and detailed analytics breakdown.',
      'Production Linux VPS deployment with automated process restarts and monitoring.'
    ],
    metrics: [
      { label: 'Uptime During Exams', value: '99.9%' },
      { label: 'Concurrent Students Handled', value: '1,000+' },
      { label: 'Grading Calculation Time', value: '<50ms' }
    ]
  }
};

// Helper function to resolve case study by project title or slug
export const getCaseStudyForProject = (project) => {
  if (!project) return null;
  const title = (project.title || '').toLowerCase();
  
  if (title.includes('medpulse') || title.includes('clinic')) {
    return { ...CASE_STUDIES.medpulse, ...project };
  }
  if (title.includes('bean') || title.includes('marketplace') || title.includes('food')) {
    return { ...CASE_STUDIES.beanverse, ...project };
  }
  if (title.includes('accurit') || title.includes('accountancy')) {
    return { ...CASE_STUDIES.accurit, ...project };
  }
  if (title.includes('penitans') || title.includes('consultation')) {
    return { ...CASE_STUDIES.penitans, ...project };
  }
  if (title.includes('pak learners') || title.includes('exam') || title.includes('learners')) {
    return { ...CASE_STUDIES.paklearners, ...project };
  }

  // Dynamic fallback for any other project from the database
  return {
    title: project.title,
    category: project.category || 'Full-Stack Engineering',
    client: 'Commercial / Production System',
    timeline: '3 - 5 Weeks',
    role: 'Full-Stack Developer & Systems Architect',
    overview: project.desc || 'A production-grade web system engineered for performance, security, and responsive usability.',
    challenge: 'Architecting an intuitive, high-performance solution that handles complex client workflows with clean state management and secure backend APIs.',
    solution: `Engineered a full-stack architecture leveraging ${project.stack ? project.stack.join(', ') : 'React, Node.js, and MongoDB'}. Focused on robust component modularity, API optimization, and seamless responsive design.`,
    architecture: [
      {
        layer: 'Frontend & User Experience',
        details: 'Responsive interface built with modern UI frameworks, dynamic component state, and fluid transitions.'
      },
      {
        layer: 'Backend & Data Flow',
        details: 'Scalable RESTful API architecture with secure authentication, structured error handling, and database optimization.'
      },
      {
        layer: 'Deployment & Quality',
        details: 'Continuous integration and deployment on cloud infrastructure with automated performance audits.'
      }
    ],
    highlights: [
      'Production-ready code architecture following strict modular standards.',
      'Responsive design tested across mobile, tablet, and desktop viewports.',
      'Optimized database queries and API response times.'
    ],
    metrics: [
      { label: 'Architecture Quality', value: '100%' },
      { label: 'Responsive Coverage', value: 'All Devices' },
      { label: 'Performance', value: 'Optimized' }
    ],
    ...project
  };
};

