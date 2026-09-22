import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Clock, ArrowRight } from 'lucide-react';
import API from '../api/axios';
import toast from 'react-hot-toast';
import { useParallax } from '../hooks/useParallax';

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
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(msg, { id: tid });
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
    'w-full bg-slate-50 dark:bg-[#1a1730]/60 border rounded-xl px-4 py-3.5 text-slate-800 dark:text-[#f3efe4] placeholder:text-slate-400 dark:placeholder:text-[#6f6890] outline-none transition-all duration-200 text-sm';

  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob1Y = useParallax(blob1Ref, 60);
  const blob2Y = useParallax(blob2Ref, 80);

  return (
    <section
      id="contact"
      className="relative py-28 px-6 sm:px-8 bg-[#faf7f0] dark:bg-ink overflow-hidden transition-colors duration-300"
    >
      {/* Background blobs — drift with scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div ref={blob1Ref} style={{ y: blob1Y }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/[0.06] dark:bg-gold/[0.07] blur-[120px]" />
        <motion.div ref={blob2Ref} style={{ y: blob2Y }} className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet/[0.05] dark:bg-violet/[0.06] blur-[100px]" />
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
          <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            — Contact —
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="italic text-gold">Together</span>
          </h2>
          <p className="mt-5 text-slate-500 dark:text-[#a79fc9] max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind or just want to say hello? I&apos;m always open to
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
                className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-[#241f42] bg-white dark:bg-[#151228]/70 hover:border-gold/40 dark:hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon size={18} className="text-gold" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-[#8a83ab] uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-slate-800 dark:text-[#f3efe4] font-semibold text-sm">{value}</p>
                  <p className="text-slate-400 dark:text-[#8a83ab] text-xs mt-0.5">{sub}</p>
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
              className="mt-2 p-5 rounded-2xl border border-dashed border-gold/30 bg-gold/[0.03] dark:bg-gold/[0.05]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Currently Available
                </span>
              </div>
              <p className="text-slate-500 dark:text-[#a79fc9] text-sm leading-relaxed">
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
            className="bg-white dark:bg-[#151228]/70 border border-slate-200 dark:border-[#241f42] rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-900/5 dark:shadow-black/30"
          >
            <h3 className="font-display text-xl text-ink dark:text-[#f3efe4] mb-1">
              Send a Message
            </h3>
            <p className="text-slate-400 dark:text-[#8a83ab] text-sm mb-7">
              Fill out the form and I&apos;ll get back to you shortly.
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
                        ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
                        : 'border-slate-200 dark:border-[#3a3560]'
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
                        ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
                        : 'border-slate-200 dark:border-[#3a3560]'
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
                    ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
                    : 'border-slate-200 dark:border-[#3a3560]'
                }`}
              />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full font-semibold text-sm transition-all duration-300
                  ${loading
                    ? 'bg-gold-soft cursor-not-allowed text-ink'
                    : 'bg-gold hover:bg-gold-soft text-ink shadow-lg shadow-gold/25 hover:shadow-gold/40'
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
