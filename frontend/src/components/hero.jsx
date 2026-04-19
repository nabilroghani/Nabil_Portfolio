import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start space-y-5">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-secondary font-mono tracking-widest"
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-6xl md:text-8xl font-bold text-white"
      >
        Nabil Ahmad.
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-gray-400"
      >
        I build robust MERN applications.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-xl text-gray-400 text-lg"
      >
        I'm a full-stack developer specializing in building exceptional digital experiences. 
        Currently, I'm focused on building accessible, human-centered products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#projects" className="px-8 py-4 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-all font-mono">
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;