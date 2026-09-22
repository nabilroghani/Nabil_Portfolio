import { useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, Cloud, Users } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const cards = [
  {
    icon: GraduationCap,
    color: 'emerald',
    title: 'BS Computer Science',
    body: 'University of Peshawar Class of 2026. Strong foundation in software engineering, data structures, algorithms, and system design.',
  },
  {
    icon: Briefcase,
    color: 'sky',
    title: 'Working as a Developer',
    body: 'Actively working as a Junior MERN Stack Developer building real-world dashboards, auth systems, admin panels, and full-stack web apps.',
  },
  {
    icon: Users,
    color: 'violet',
    title: 'Workshops & Camps',
    body: 'Attended multiple coding camps, workshops, and tech seminars staying connected with the developer community and sharpening practical skills.',
  },
  {
    icon: Cloud,
    color: 'amber',
    title: 'Learning Cloud & DevOps',
    body: 'Currently exploring Cloud Computing and DevOps digging into CI/CD pipelines, containerization, and scalable infrastructure.',
  },
  {
    icon: BookOpen,
    color: 'rose',
    title: 'Passionate Reader',
    body: "Books are a big part of my life from tech and self-improvement to history and philosophy. I believe great developers are great thinkers first.",
  },
];

const colorMap = {
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-500',
    border: 'hover:border-emerald-500/30 dark:hover:border-emerald-500/20',
    tag: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  sky: {
    icon: 'bg-sky-500/10 text-sky-500',
    border: 'hover:border-sky-500/30 dark:hover:border-sky-500/20',
    tag: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  violet: {
    icon: 'bg-violet-500/10 text-violet-500',
    border: 'hover:border-violet-500/30 dark:hover:border-violet-500/20',
    tag: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-500',
    border: 'hover:border-amber-500/30 dark:hover:border-amber-500/20',
    tag: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  rose: {
    icon: 'bg-rose-500/10 text-rose-500',
    border: 'hover:border-rose-500/30 dark:hover:border-rose-500/20',
    tag: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
};

const About = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob1Y = useParallax(blob1Ref, 60);
  const blob2Y = useParallax(blob2Ref, 80);

  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-8 bg-[#faf7f0] dark:bg-ink overflow-hidden transition-colors duration-300"
    >
      {/* Background blobs — drift with scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div ref={blob1Ref} style={{ y: blob1Y }} className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-violet/[0.05] dark:bg-violet/[0.08] blur-[120px]" />
        <motion.div ref={blob2Ref} style={{ y: blob2Y }} className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.05] dark:bg-gold/[0.06] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            — About Me —
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
            The Person Behind
            <br />
            <span className="italic text-gold">the Code</span>
          </h2>
        </motion.div>

        {/* ── Intro block ── */}
        <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#c3bde0] leading-relaxed">
            I&apos;m <span className="text-ink dark:text-[#f3efe4] font-bold">Nabil Ahmad</span> a MERN Stack Web developer who
            genuinely enjoys building things on the web. I turn ideas into fast, clean, and scalable
            applications. Outside of code, I&apos;m always reading, learning something new, or exploring what&apos;s
            coming next in tech.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, color, title, body }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                {...fadeUp(0.05 * i)}
                className={`group relative bg-white dark:bg-[#151228]/70
                  border border-slate-200 dark:border-[#2a2450]
                  ${c.border}
                  rounded-2xl p-6
                  shadow-sm shadow-slate-200/50 dark:shadow-black/20
                  hover:shadow-lg dark:hover:shadow-black/40
                  transition-all duration-300
                  ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 ${c.icon}`}>
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Title */}
                <h4 className="font-display text-ink dark:text-[#f3efe4] text-base mb-2 leading-snug">
                  {title}
                </h4>

                {/* Body */}
                <p className="text-slate-500 dark:text-[#a79fc9] text-sm leading-relaxed">
                  {body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom quote strip ── */}
        <motion.div {...fadeUp(0.3)} className="mt-14 text-center">
          <div className="inline-block px-6 py-4 rounded-2xl
            bg-gold/[0.06] dark:bg-gold/[0.08]
            border border-gold/20 dark:border-gold/15"
          >
            <p className="font-display text-ink dark:text-[#e5e1f2] text-base sm:text-lg italic">
              &quot;I don&apos;t just write code I build experiences that solve real problems.&quot;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
