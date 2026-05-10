import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Clock, ArrowRight } from 'lucide-react';
import API from '../api/axios';
import toast from 'react-hot-toast';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const tid = toast.loading('Sending your message...');
    try {
      await API.post('/messages', formData);
      toast.success('Message sent successfully!', { id: tid });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.', { id: tid });
    } finally {
      setLoading(false);
    }
  };

  const infoCards = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nabilroghani95@gmail.com',
      sub: 'Best way to reach me',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      sub: 'Available remotely worldwide',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      sub: 'Usually much faster',
    },
  ];

  const inputBase =
    'w-full bg-slate-50 dark:bg-slate-800/50 border rounded-xl px-4 py-3.5 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-200 text-sm';

  return (
    <section
      id="contact"
      className="relative py-28 px-6 sm:px-8 bg-[#f8fafc] dark:bg-[#060d1a] overflow-hidden transition-colors duration-300"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald-400/[0.06] dark:bg-emerald-500/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-sky-400/[0.05] dark:bg-sky-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="inline-block text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4">
            — Contact —
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Let's Build Something
            <br />
            <span className="text-emerald-500">Together</span>
          </h2>
          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind or just want to say hello? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* ── Main grid ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* LEFT: info cards */}
          <div className="space-y-4">
            {infoCards.map(({ icon: Icon, label, value, sub }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Icon size={18} className="text-emerald-500" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-slate-800 dark:text-white font-semibold text-sm">{value}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Availability note */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-2 p-5 rounded-2xl border border-dashed border-emerald-500/30 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Currently Available
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Open to freelance projects, collaborations, and full-time opportunities.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-900/5 dark:shadow-slate-900/30"
          >
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">
              Send a Message
            </h3>
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-7">
              Fill out the form and I'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`${inputBase} ${
                      focused === 'name'
                        ? 'border-emerald-500 ring-2 ring-emerald-500/15 bg-white dark:bg-slate-800'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`${inputBase} ${
                      focused === 'email'
                        ? 'border-emerald-500 ring-2 ring-emerald-500/15 bg-white dark:bg-slate-800'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <textarea
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
                value={formData.message}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputBase} resize-none ${
                  focused === 'message'
                    ? 'border-emerald-500 ring-2 ring-emerald-500/15 bg-white dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300
                  ${loading
                    ? 'bg-emerald-400 cursor-not-allowed text-white'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40'
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} strokeWidth={2.5} />
                    Send Message
                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
