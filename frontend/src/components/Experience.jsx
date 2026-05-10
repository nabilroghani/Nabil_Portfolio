import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers, Server, Cloud, Briefcase, CheckCircle2,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────── */
const role = {
  title: 'Junior MERN Stack Developer',
  status: 'Actively Working',
  desc: 'Building full-stack web applications using MongoDB, Express.js, React, and Node.js. Focused on clean UI, scalable APIs, and real-world deployments.',
};

const skillGroups = [
  {
    id: 'frontend',
    icon: Layers,
    label: 'Frontend',
    color: 'emerald',
    skills: [
      { name: 'HTML',      level: 97 },
      { name: 'CSS/Tailwind CSS',       level: 90 },
      { name: 'JavaScript.js',  level: 90 },
      { name: 'React.js',          level: 87 },
      { name: 'Framer Motion', level: 78 },
      { name: 'TypeScript',    level: 72 },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    label: 'Backend',
    color: 'sky',
    skills: [
      { name: 'Node.js',    level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB',    level: 78 },
      { name: 'Supabase',   level: 75 },
      { name: 'REST APIs',  level: 82 },
      { name: 'JWT Auth',   level: 76 },
    ],
  },
  {
    id: 'deployment',
    icon: Cloud,
    label: 'Deployment & Tools',
    color: 'violet',
    skills: [
      { name: 'Vercel',       level: 88 },
      { name: 'Hostinger VPS', level: 74 },
      { name: 'PM2',          level: 70 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Nginx',        level: 65 },
    ],
  },
];

const highlights = [
  'Built & deployed 10+ full-stack projects',
  'RESTful API design & JWT authentication',
  'Responsive UI with React & Tailwind CSS',
  'VPS deployment with Nginx & PM2',
  'Database design with MongoDB & Supabase',
  'Clean code, Git workflow & collaboration',
];

/* ─── Color maps ────────────────────────────────────────── */
const colorMap = {
  emerald: {
    bar:     'bg-emerald-500',
    badge:   'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    icon:    'bg-emerald-500/10 text-emerald-500',
    heading: 'text-emerald-500',
    track:   'bg-emerald-500/10',
  },
  sky: {
    bar:     'bg-sky-500',
    badge:   'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    icon:    'bg-sky-500/10 text-sky-500',
    heading: 'text-sky-500',
    track:   'bg-sky-500/10',
  },
  violet: {
    bar:     'bg-violet-500',
    badge:   'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    icon:    'bg-violet-500/10 text-violet-500',
    heading: 'text-violet-500',
    track:   'bg-violet-500/10',
  },
};

/* ─── Skill bar ─────────────────────────────────────────── */
const SkillBar = ({ name, level, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const c = colorMap[color];

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{name}</span>
        <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md border ${c.badge}`}>
          {level}%
        </span>
      </div>
      <div className={`h-2 rounded-full ${c.track} overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

/* ─── Main component ────────────────────────────────────── */
const Experience = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="experience"
      className="relative py-28 px-6 sm:px-8 bg-[#f8fafc] dark:bg-[#060d1a] overflow-hidden transition-colors duration-300"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[-100px] w-[400px] h-[400px] rounded-full bg-emerald-400/[0.05] dark:bg-emerald-500/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-violet-400/[0.05] dark:bg-violet-500/[0.06] blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="inline-block text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4">
            — Experience & Skills —
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            What I <span className="text-emerald-500">Bring</span> to the Table
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Hands on experience building and shipping real world web applications from idea to deployment.
          </p>
        </motion.div>

        {/* ── Role card ── */}
        <motion.div {...fadeUp(0.1)} className="mb-12">
          <div className="relative overflow-hidden
            bg-white dark:bg-slate-900/60
            border border-slate-200 dark:border-slate-700/50
            hover:border-emerald-500/30 dark:hover:border-emerald-500/20
            rounded-2xl p-6 sm:p-8
            shadow-md shadow-slate-200/50 dark:shadow-slate-900/30
            transition-all duration-300"
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-[60px] pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Briefcase size={24} className="text-emerald-500" strokeWidth={2} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {role.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                    bg-emerald-500/10 text-emerald-600 dark:text-emerald-400
                    border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {role.status}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                  {role.desc}
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="relative mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Skill groups ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                {...fadeUp(0.1 + gi * 0.1)}
                className="bg-white dark:bg-slate-900/60
                  border border-slate-200 dark:border-slate-700/50
                  hover:border-slate-300 dark:hover:border-slate-600
                  rounded-2xl p-6
                  shadow-sm shadow-slate-200/50 dark:shadow-slate-900/20
                  transition-all duration-300 hover:shadow-md"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className={`font-black text-base ${c.heading}`}>{group.label}</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{group.skills.length} skills</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={group.color}
                      index={si}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
