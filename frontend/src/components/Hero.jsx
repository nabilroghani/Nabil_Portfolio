import { motion } from 'framer-motion';
import {
  Download,
  Eye,
  Mail,
  Briefcase,
  MapPin,
  Cloud
} from 'lucide-react';
import toast from 'react-hot-toast';
import { downloadCv } from '../utils/cvDownload';

import nabilAvatar from '../assets/nabil.webp';
import apptexLogo from '../assets/apptex_logo.png';
import uopLogo from '../assets/uop_logo.png';

// ── Lightweight Tech SVGs for Banner ──
const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-white">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.587l-6.86-9.84v9.84H9.4V6.413h1.56l7.02 10.08v-10.08h1.56v11.174h-1.72z" />
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-400">
    <path d="M17.193 9.555c-1.264-4.499-4.577-6.84-4.832-7.013a.684.684 0 0 0-.722 0C11.384 2.715 8.07 5.056 6.806 9.555c-1.393 4.954.215 9.07 3.99 11.871a3.78 3.78 0 0 0 .848.513v-3.79c-.067-.034-.135-.067-.202-.103-2.115-1.127-3.003-3.23-2.274-5.368.513-1.503 1.776-3.14 3.037-4.148.067-.054.168-.088.253-.088.085 0 .186.034.253.088 1.261 1.008 2.524 2.645 3.037 4.148.729 2.138-.159 4.241-2.274 5.368-.067.036-.135.069-.202.103v3.79a3.78 3.78 0 0 0 .848-.513c3.775-2.801 5.383-6.917 3.99-11.871z" />
  </svg>
);

const ExpressIcon = () => (
  <span className="text-[11px] font-black tracking-tighter font-mono text-slate-100">
    ex
  </span>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-cyan-400">
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.8" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-green-400">
    <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#ff9900]">
    <path d="M18.75 14.5c-.3 0-.6.1-.8.3-.5.5-.3 1.2.2 1.6 2.3 1.6 3.6 2.8 3.6 4.6 0 1.2-.7 2.1-1.9 2.1-1.6 0-3.5-1.5-5.2-3.2-.3-.3-.8-.3-1.1 0-1.7 1.7-3.6 3.2-5.2 3.2-1.2 0-1.9-.9-1.9-2.1 0-1.8 1.3-3 3.6-4.6.5-.4.7-1.1.2-1.6-.2-.2-.5-.3-.8-.3-.5 0-.9.2-1.2.5C3.7 16.5 2 18.3 2 20.9 2 23.2 3.6 25 5.9 25c2.4 0 4.7-1.7 6.1-3.3 1.4 1.6 3.7 3.3 6.1 3.3 2.3 0 3.9-1.8 3.9-4.1 0-2.6-1.7-4.4-4.4-6.4-.3-.3-.7-.5-1.2-.5z" transform="translate(0, -3) scale(0.9)" />
    <text x="3" y="12" fontSize="9" fontWeight="900" fill="currentColor" fontFamily="sans-serif">AWS</text>
  </svg>
);

const Hero = () => {
  const handleDownload = async () => {
    const toastId = toast.loading('Preparing your resume...');
    try {
      await downloadCv();
      toast.success('Resume download started!', { id: toastId });
    } catch {
      toast.error('Resume link unavailable', { id: toastId });
    }
  };

  return (
    <section className="relative w-full bg-white dark:bg-[#151228] transition-colors duration-300">
      {/* ── Custom Designed Banner (Coded Native Banner with AWS & Next.js) ── */}
      <div className="relative w-full h-44 sm:h-52 md:h-56 bg-gradient-to-r from-[#030712] via-[#07132a] to-[#030a16] overflow-hidden select-none px-6 sm:px-10 flex flex-col justify-between pt-4 sm:pt-6 pb-3">
        {/* Background cyber code watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-20 font-mono text-[10px] sm:text-xs text-cyan-400/70 p-4 leading-relaxed overflow-hidden select-none">
          <p>const app = express(); app.use(cors());</p>
          <p>import &#123; S3Client, PutObjectCommand &#125; from &apos;@aws-sdk/client-s3&apos;;</p>
          <p>const db = await mongoose.connect(process.env.MONGO_URI);</p>
          <p>export default async function Page() &#123; return &lt;App /&gt;; &#125;</p>
        </div>

        {/* Ambient radial glows */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-60 h-60 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

        {/* ── TOP OF BANNER: MERN STACK & AWS DEVELOPER (Positioned High to clear head) ── */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-1">
            <div className="leading-tight">
              <span className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                MERN STACK
              </span>
              <span className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white ml-2 sm:ml-2.5">
                &amp; AWS DEVELOPER
              </span>
            </div>

            <p className="text-[11px] sm:text-xs md:text-sm text-cyan-100/90 font-medium tracking-wide flex items-center gap-1.5 flex-wrap">
              <span>Scalable Full-Stack Apps</span>
              <span className="text-cyan-400">•</span>
              <span>Cloud Architecture (AWS)</span>
              <span className="text-cyan-400">•</span>
              <span>Next.js &amp; Modern APIs</span>
            </p>
          </div>

          {/* Right decorative badge */}
          <div className="hidden lg:flex flex-col items-end justify-center text-right pr-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-1">
              <Cloud size={13} className="text-cyan-400" />
              Cloud &amp; Full Stack
            </span>
            <span className="text-[11px] text-slate-400 font-mono tracking-wider">
              EC2 • S3 • Nginx • CI/CD
            </span>
          </div>
        </div>

        {/* ── BOTTOM OF BANNER: Tech Stack Pills (Shifted right on desktop to clear avatar head) ── */}
        <div className="relative z-10 flex flex-wrap items-center gap-2 sm:pl-36 md:pl-44 pb-1">
          {/* Next.js */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.08] border border-white/20 text-[11px] text-white font-semibold backdrop-blur-sm">
            <NextIcon />
            <span>Next.js</span>
          </div>

          {/* React.js */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.07] border border-cyan-500/30 text-[11px] text-cyan-300 font-semibold backdrop-blur-sm">
            <ReactIcon />
            <span>React.js</span>
          </div>

          {/* Node.js */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.07] border border-green-500/30 text-[11px] text-green-300 font-semibold backdrop-blur-sm">
            <NodeIcon />
            <span>Node.js</span>
          </div>

          {/* Express.js */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.07] border border-slate-500/30 text-[11px] text-slate-200 font-semibold backdrop-blur-sm">
            <ExpressIcon />
            <span>Express.js</span>
          </div>

          {/* MongoDB */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.07] border border-emerald-500/30 text-[11px] text-emerald-300 font-semibold backdrop-blur-sm">
            <MongoIcon />
            <span>MongoDB</span>
          </div>

          {/* AWS Cloud */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/40 text-[11px] text-amber-300 font-bold backdrop-blur-sm shadow-sm">
            <AwsIcon />
            <span>AWS Cloud</span>
          </div>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="relative px-5 sm:px-8 pb-6 pt-0">
        {/* Top row: Avatar overlapping banner (Nabil's head positioned cleanly inside circle) */}
        <div className="flex justify-between items-end -mt-14 sm:-mt-16 md:-mt-20 mb-2">
          <div className="relative group">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
              {/* Original portfolio profile picture with head nicely centered and raised */}
              <div className="w-full h-full rounded-full ring-4 ring-white dark:ring-[#151228] overflow-hidden bg-slate-100 dark:bg-[#1f1b3a] shadow-lg">
                <img
                  src={nabilAvatar}
                  alt="Nabil Ahmad"
                  className="w-full h-full object-cover object-[center_top] scale-110 -translate-y-1.5 group-hover:scale-115 transition-transform duration-500"
                />
              </div>

              {/* LinkedIn #OPENTOWORK Green Ribbon Curved Badge */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full pointer-events-none select-none drop-shadow-sm"
              >
                <defs>
                  <path
                    id="openToWorkPath"
                    d="M 34,136 A 84,84 0 0,0 166,136"
                    fill="none"
                  />
                </defs>
                <path
                  d="M 32,134 A 86,86 0 0,0 168,134"
                  fill="none"
                  stroke="#057642"
                  strokeWidth="17"
                  strokeLinecap="round"
                />
                <text
                  fill="#ffffff"
                  fontSize="11.5"
                  fontWeight="800"
                  letterSpacing="2.8px"
                  fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                >
                  <textPath
                    href="#openToWorkPath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    #OPENTOWORK
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Profile Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start mt-1">
          {/* Left Column: Name + Blue Verified Tick, Headline, Location & Contact */}
          <div className="md:col-span-8 space-y-2">
            {/* 1. Name & Blue Verified Tick ONLY */}
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#f3efe4]">
                Nabil Ahmad
              </h1>

              {/* LinkedIn Verified Blue Tick Badge */}
              <span
                title="Verified Profile"
                className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0a66c2] text-white shadow-sm shrink-0"
              >
                <svg
                  className="w-3.5 h-3.5 stroke-[3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
            </div>

            {/* 2. Caption / Headline with AWS & MERN */}
            <p className="text-sm sm:text-base text-slate-800 dark:text-[#c3bde0] font-normal leading-relaxed">
              Helping Businesses scale with <span className="font-semibold text-slate-900 dark:text-[#f3efe4]">Custom MERN Web Apps</span> | Cloud Deployment (AWS) | AI-Powered Solutions | 3+ Years Experience
            </p>

            {/* 3. Location & Contact info Link */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-[#a79fc9] pt-0.5">
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} className="text-slate-400 dark:text-slate-500 shrink-0" />
                Peshawar, Khyber Pakhtunkhwa, Pakistan
              </span>
              <span>·</span>
              <a
                href="#contact"
                className="text-[#0a66c2] dark:text-[#70b5f9] font-bold hover:underline cursor-pointer"
              >
                Contact info
              </a>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="md:col-span-4 flex flex-col gap-2.5 pt-0.5 md:pl-4">
            {/* Apptex Software Solutions */}
            <div className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded border border-slate-200 dark:border-[#2a2450] bg-white p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={apptexLogo}
                  alt="Apptex Software Solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-[#e5e1f2] group-hover:text-[#0a66c2] dark:group-hover:text-[#70b5f9] transition-colors leading-tight">
                Apptex Software Solutions
              </span>
            </div>

            {/* University of Peshawar */}
            <div className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded border border-slate-200 dark:border-[#2a2450] bg-white p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={uopLogo}
                  alt="University of Peshawar"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-[#e5e1f2] group-hover:text-[#0a66c2] dark:group-hover:text-[#70b5f9] transition-colors leading-tight">
                University of Peshawar
              </span>
            </div>
          </div>
        </div>

        {/* ── 4 Action Buttons: View My Work, Contact Me, Download CV, Experience ── */}
        <div className="flex flex-wrap items-center gap-2.5 mt-5 pt-2">
          {/* Button 1: View My Work */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm bg-[#0a66c2] hover:bg-[#004182] active:scale-95 text-white transition-all duration-200 shadow-sm"
          >
            <Eye size={15} strokeWidth={2.4} />
            View My Work
          </a>

          {/* Button 2: Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm border-2 border-[#0a66c2] text-[#0a66c2] dark:text-[#70b5f9] dark:border-[#70b5f9] hover:bg-[#0a66c2]/10 active:scale-95 transition-all duration-200"
          >
            <Mail size={15} strokeWidth={2.2} />
            Contact Me
          </a>

          {/* Button 3: Download CV */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm border border-slate-400 dark:border-slate-500 hover:border-slate-700 dark:hover:border-slate-300 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Download size={15} strokeWidth={2.2} />
            Download CV
          </button>

          {/* Button 4: Experience */}
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm border border-slate-400 dark:border-slate-500 hover:border-slate-700 dark:hover:border-slate-300 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 active:scale-95 transition-all duration-200"
          >
            <Briefcase size={15} strokeWidth={2.2} />
            Experience
          </a>
        </div>

        {/* ── Compact Highlights / Open to Work Box ── */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-[#241f42]">
          <div className="bg-slate-50 dark:bg-[#100e21] border border-slate-200 dark:border-[#2a2450] rounded-xl px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                OPEN TO WORK
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-[#e5e1f2]">
                MERN Stack Developer · AWS Cloud Deployment · Remote &amp; On-site Worldwide
              </p>
            </div>

            <div className="flex items-center gap-5 sm:border-l sm:border-slate-200 dark:sm:border-[#241f42] sm:pl-5 shrink-0 text-center sm:text-left">
              <div>
                <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-[#f3efe4]">3+ Years</p>
                <p className="text-[10px] text-slate-500 dark:text-[#8a83ab] uppercase tracking-wider">Experience</p>
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-[#f3efe4]">10+ Apps</p>
                <p className="text-[10px] text-slate-500 dark:text-[#8a83ab] uppercase tracking-wider">Shipped</p>
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base text-[#0a66c2] dark:text-[#70b5f9]">AWS</p>
                <p className="text-[10px] text-slate-500 dark:text-[#8a83ab] uppercase tracking-wider">Cloud</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
