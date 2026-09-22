import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Download, Eye, Mail, ArrowRight, Code2, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import { downloadCv } from '../utils/cvDownload';
import my from '../assets/my.webp';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: background blobs and the portrait drift at different speeds
  // than the page scroll, and the content gently fades/lifts as it leaves view.
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // A soft glow that follows the cursor, lagging behind with a spring so
  // it feels alive rather than glued to the pointer.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { damping: 28, stiffness: 150 });
  const spotlightY = useSpring(mouseY, { damping: 28, stiffness: 150 });

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleDownload = async () => {
    const toastId = toast.loading('Preparing your resume...');
    try {
      await downloadCv();
      toast.success('Resume download started!', { id: toastId });
    } catch {
      toast.error('Resume link unavailable', { id: toastId });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden
     bg-[#faf7f0] dark:bg-ink"
    >

      {/* Ambient glow blobs — parallax on scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-[-160px] right-[-120px] w-[560px] h-[560px]
         rounded-full bg-gold/10 dark:bg-gold/[0.08] blur-[120px]"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute bottom-[-120px] left-[-100px] w-[420px] h-[420px]
         rounded-full bg-violet/10 dark:bg-violet/[0.12] blur-[110px]"
        />
        {/* Cursor-tracking spotlight */}
        <motion.div
          style={{ left: spotlightX, top: spotlightY, x: '-50%', y: '-50%' }}
          className="hidden lg:block absolute w-[480px] h-[480px] rounded-full
            bg-[radial-gradient(circle,rgba(201,161,95,0.14),transparent_70%)]
            dark:bg-[radial-gradient(circle,rgba(201,161,95,0.10),transparent_70%)]"
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── LEFT: Text content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px]
               font-medium tracking-[0.2em] uppercase border border-gold/40
                text-gold dark:text-gold-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl lg:text-6xl font-semibold tracking-tight text-ink
               dark:text-[#f3efe4] leading-[1.08] mb-5"
            >
              Nabil
              <span className="italic text-gold"> Ahmad</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-500 dark:text-[#a79fc9] font-medium
               mb-4 tracking-[0.15em] uppercase"
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-[#c3bde0] text-base sm:text-lg
               leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              I build modern web apps in{' '}
              <span className="text-ink dark:text-[#f3efe4] font-semibold">MERN Stack</span>{' '}
              from dashboards and auth systems to full scale SaaS products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 bg-gold hover:bg-gold-soft
                 active:scale-95 text-ink px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200
                  shadow-lg shadow-gold/20"
              >
                <Eye size={16} strokeWidth={2.5} />
                View My Work
                <ArrowRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <a href="#contact"
                className="inline-flex items-center gap-2.5 border border-slate-300 dark:border-[#3a3560]
                 hover:border-gold dark:hover:border-gold active:scale-95 text-slate-700 dark:text-[#e5e1f2]
                   px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              >
                <Mail size={16} strokeWidth={2.5} />
                Contact Me
              </a>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 border border-slate-300 dark:border-[#3a3560]
                 hover:border-gold dark:hover:border-gold active:scale-95 text-slate-700 dark:text-[#e5e1f2]
                   px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              >
                <Download size={16} strokeWidth={2.5} />
                Download CV
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-[#241f42]"
            >
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '2+', label: 'Years Coding' },
                { value: '5+', label: 'Freelance Clients' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="font-display text-2xl text-ink dark:text-[#f3efe4]">{value}</p>
                  <p className="text-xs text-slate-500 dark:text-[#8a83ab] mt-0.5 tracking-wide">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image ───────────────────────────────── */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Soft glow behind frame */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-gold/20 via-violet/10 to-transparent blur-2xl" />
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-gold/25" />

              {/* Gold corner accent top-right */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold z-20 border-2
               border-[#faf7f0] dark:border-ink" />
              {/* Small dot bottom-left */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-violet z-20 border-2
               border-[#faf7f0] dark:border-ink" />

              {/* Floating tilted card — MERN Stack */}
              <motion.div
                initial={{ opacity: 0, y: -10, rotate: -8 }}
                animate={{ opacity: 1, y: [0, -14, 0], rotate: -8 }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.9 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
                className="hidden sm:flex absolute -top-6 -left-10 z-30 items-center gap-2.5
                  bg-white/90 dark:bg-[#151228]/90 backdrop-blur-md
                  border border-gold/25 rounded-2xl px-4 py-3
                  shadow-xl shadow-gold/10 dark:shadow-black/40"
              >
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Code2 size={15} className="text-gold" strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <p className="text-ink dark:text-[#f3efe4] font-display text-sm">MERN Stack</p>
                  <p className="text-slate-400 dark:text-[#8a83ab] text-[10px] tracking-wide">Core expertise</p>
                </div>
              </motion.div>

              {/* Floating tilted card — availability */}
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 6 }}
                animate={{ opacity: 1, y: [0, 12, 0], rotate: 6 }}
                transition={{
                  opacity: { duration: 0.6, delay: 1.1 },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                }}
                className="hidden sm:flex absolute -bottom-8 -right-8 z-30 items-center gap-2.5
                  bg-white/90 dark:bg-[#151228]/90 backdrop-blur-md
                  border border-violet/25 rounded-2xl px-4 py-3
                  shadow-xl shadow-violet/10 dark:shadow-black/40"
              >
                <div className="w-8 h-8 rounded-full bg-violet/15 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={15} className="text-violet" strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <p className="text-ink dark:text-[#f3efe4] font-display text-sm">2+ Years</p>
                  <p className="text-slate-400 dark:text-[#8a83ab] text-[10px] tracking-wide">Building products</p>
                </div>
              </motion.div>

              {/* Main image box */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[400px] rounded-[2rem]
               overflow-hidden border border-gold/20 bg-slate-100
                dark:bg-[#151228] shadow-2xl shadow-ink/20 dark:shadow-black/50">
                <img
                  src={my}
                  alt="Nabil Ahmad"
                  width={340}
                  height={400}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700
                   hover:scale-105"
                />
                {/* Bottom overlay label */}
                <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/70
                 to-transparent">
                  <p className="font-display text-white text-base">Nabil Ahmad</p>
                  <p className="text-gold-soft text-xs tracking-wide">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
