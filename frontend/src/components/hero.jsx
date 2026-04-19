import { motion } from 'framer-motion';
import { Download, Eye, Mail, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import { downloadCv } from '../utils/cvDownload';
import my from '../assets/my.webp'


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

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-white dark:bg-[#0a192f] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Green Glow Effect */}
              <div className="absolute -inset-1 bg-emerald-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-emerald-500/20">
                <img
                  src={my}
                  alt="Nabil Ahmad"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Intro */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
            >
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Available for Impactful Work</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                Nabil <span className="text-emerald-500">Ahmad</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                Junior Full Stack Developer specializing in Next.js, React, Node.js, Supabase, and modern web apps.
                I build real-world dashboards, auth systems, admin panels, and scalable web applications.
              </p>
            </motion.div>

            {/* Buttons - Fixed Visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4"
            >
              {/* View Work */}
              <a
                href="#projects"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-900 px-5 py-2.5 rounded-lg font-black text-xs transition-all hover:shadow-[0_8px_15px_-8px_rgba(16,185,129,0.5)] active:scale-95"
              >
                <Eye size={16} />
                VIEW MY WORK
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="flex items-center gap-2 border-2 border-slate-200 dark:border-emerald-500/30 bg-transparent px-5 py-2.5 rounded-lg font-bold text-xs text-slate-800 dark:text-white hover:border-emerald-500 transition-all active:scale-95"
              >
                <Mail size={16} />
                CONTACT
              </a>

              {/* Download CV */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 border-2 border-slate-200 dark:border-emerald-500/30 bg-transparent px-5 py-2.5 rounded-lg font-bold text-xs text-slate-800 dark:text-white hover:border-emerald-500 transition-all active:scale-95"
              >
                <Download size={16} />
                DOWNLOAD CV
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;