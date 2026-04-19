import { useState } from 'react';
import { motion } from 'framer-motion';
import API from '../api/axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    const tid = toast.loading("Sending your message...");

    try {
      await API.post('/messages', formData);

      toast.success("Message sent successfully!", { id: tid });
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      toast.error("Something went wrong. Please try again.", { id: tid });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-5 sm:px-8 bg-white dark:bg-[#0a192f] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald-500 font-mono text-sm mb-3 tracking-widest uppercase">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let’s Work Together
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or just want to say hello?  
            I’m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">
              Get in touch
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Whether it's a freelance project, collaboration, or a quick question — feel free to reach out.  
              I usually respond within 24 hours.
            </p>

            <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <p>📧 Email: <span className="text-emerald-500">nabilroghani95@gmail.com</span></p>
              <p>📍 Location: Pakistan</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
          >

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-800 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-800 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
              />
            </div>

            <textarea
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 h-36 text-slate-800 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300
                ${loading 
                  ? "bg-emerald-400 cursor-not-allowed" 
                  : "bg-emerald-500 hover:bg-emerald-600"}
                text-white`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;