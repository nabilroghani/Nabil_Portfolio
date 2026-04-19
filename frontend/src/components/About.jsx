import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 sm:px-8 bg-white dark:bg-[#0a192f] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-500 mb-3 text-center lg:text-left">
            02. About Me
          </h2>
          <div className="h-[2px] w-16 bg-emerald-500 mx-auto lg:mx-0 rounded-full" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-snug">
              I build scalable and modern digital solutions that turn ideas into reality.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                With <span className="text-emerald-500 font-semibold">1+ year</span> of experience, I am a passionate Full Stack Developer focused on building responsive, scalable, and user-friendly web applications.
              </p>

              <p>
                I specialize in modern technologies like the{' '}
                <span className="text-emerald-500 font-medium">MERN stack</span>, Next.js, and Supabase.
              </p>

              <p>
                I build real-world applications that are fast, intuitive, and scalable — not just code, but solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Core Technologies
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {[
                "HTML, CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Supabase",
                "Tailwind CSS"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-emerald-400 text-center hover:bg-emerald-500/10 transition"
                >
                  ▹ {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;