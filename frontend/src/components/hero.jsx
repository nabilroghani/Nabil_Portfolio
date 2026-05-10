import { motion } from 'framer-motion';
import { Download, Eye, Mail, Sparkles, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { downloadCv } from '../utils/cvDownload';
import my from '../assets/my.webp';

const Hero = () => {
  const handleDownload = async () => {
    const toastId = toast.loading('Preparing your resume...');
    try {
      await downloadCv();
      toast.success('Resume download started!', { id: toastId });
    } catch (error) {
      toast.error('Resume link unavailable', { id: toastId });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
     bg-[#f8fafc] dark:bg-[#060d1a]">

      {/* Background subtle grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,
        transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)]
         bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(16,185,129,0.06)_1px,transparent_1px),
         linear-gradient(90deg,rgba(16,185,129,0.06)_1px,transparent_1px)]" />
        {/* Top-right glow blob */}
        <div className="absolute top-[-120px] right-[-80px] w-[480px] h-[480px]
         rounded-full bg-emerald-400/10 dark:bg-emerald-500/8 blur-[100px]" />
        {/* Bottom-left glow blob */}
        <div className="absolute bottom-[-80px] left-[-60px] w-[360px] h-[360px]
         rounded-full bg-sky-400/8 dark:bg-sky-500/6 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── LEFT: Text content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs
               font-semibold tracking-widest uppercase border border-emerald-500/30
                bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-6xl lg:text-5xl font-black tracking-tight text-slate-900
               dark:text-white leading-[1.05] mb-4"
            >
              Nabil 
              <span className="text-emerald-500"> Ahmad</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium
               mb-3 tracking-wide uppercase"
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg
               leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              I build modern web apps in{' '}
              <span className="text-slate-800 dark:text-white font-semibold"> MERN Stack </span>
               from dashboards and
              auth systems to full scale SaaS products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400
                 active:scale-95 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200
                  shadow-lg shadow-emerald-500/25"
              >
                <Eye size={16} strokeWidth={2.5} />
                View My Work
                <ArrowRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
              </a>

              
              <a  href="#contact"
                className="inline-flex items-center gap-2.5 border border-slate-300 dark:border-slate-700
                 hover:border-emerald-500 dark:hover:border-emerald-500 bg-white dark:bg-slate-800/60
                  hover:bg-white dark:hover:bg-slate-800 active:scale-95 text-slate-700 dark:text-slate-200
                   px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
              >
                <Mail size={16} strokeWidth={2.5} />
                Contact Me
              </a>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 border border-slate-300 dark:border-slate-700
                 hover:border-emerald-500 dark:hover:border-emerald-500 bg-white dark:bg-slate-800/60
                  hover:bg-white dark:hover:bg-slate-800 active:scale-95 text-slate-700 dark:text-slate-200
                   px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
              >
                <Download size={16} strokeWidth={2.5} />
                Download CV
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800"
            >
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '2+', label: 'Years Coding' },
                { value: '5+', label: 'Freelance Clients' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">{value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-emerald-500/20
               dark:border-emerald-500/15" />
              {/* Second ring with dashes */}
              <div className="absolute -inset-6 rounded-[3rem] border border-dashed border-emerald-500/10" />

              {/* Green corner accent top-right */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 z-20 border-2
               border-white dark:border-[#060d1a]" />
              {/* Small dot bottom-left */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-sky-400 z-20 border-2
               border-white dark:border-[#060d1a]" />

              {/* Main image box */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[400px] rounded-[2rem]
               overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100
                dark:bg-slate-800 shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/50">
                <img
                  src={my}
                  alt="Nabil Ahmad"
                  className="w-full h-full object-cover object-top transition-transform duration-700
                   hover:scale-105"
                />
                {/* Bottom overlay label */}
                <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/60
                 to-transparent">
                  <p className="text-white font-bold text-sm">Nabil Ahmad</p>
                  <p className="text-emerald-400 text-xs">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;