'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Clock, ArrowRight, MessageCircle, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import API from '../api/axios';
import toast from 'react-hot-toast';

const SERVICES_OPTIONS = [
  'Custom MERN Web App',
  'SaaS MVP Development',
  'AWS Cloud Deployment',
  'Next.js / Frontend UI',
  'API & Backend Engineering',
  'Other / Consultation'
];

const BUDGET_OPTIONS = [
  '< $500',
  '$500 - $1,500',
  '$1,500 - $3,000',
  '$3,000+',
  'Flexible / To Discuss'
];

const TIMELINE_OPTIONS = [
  'Urgent (< 2 weeks)',
  '2 - 4 weeks',
  '1 - 2 months',
  'Flexible'
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom MERN Web App',
    budget: '$500 - $1,500',
    timeline: '2 - 4 weeks',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const tid = toast.loading('Sending your project inquiry...');
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        subject: `[${formData.service}] Project Inquiry - Budget: ${formData.budget}`,
        message: `Project Type: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nClient Requirements:\n${formData.message}`
      };

      await API.post('/messages', payload);
      toast.success('Inquiry received! I will get back to you within 24 hours.', { id: tid });
      setFormData({
        name: '',
        email: '',
        service: 'Custom MERN Web App',
        budget: '$500 - $1,500',
        timeline: '2 - 4 weeks',
        message: ''
      });
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please reach out via WhatsApp or email directly.';
      toast.error(msg, { id: tid });
    } finally {
      setLoading(false);
    }
  };

  const infoCards = [
    {
      icon: MessageCircle,
      label: 'WhatsApp Direct',
      value: '+92 304 1237882',
      sub: 'Fastest way to get in touch',
      link: 'https://wa.me/923041237882?text=Hi%20Nabil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
      isHighlight: true
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'nabiltechlogic.dev@gmail.com',
      sub: 'For RFPs, detailed briefs & contracts',
      link: 'mailto:nabiltechlogic.dev@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Peshawar, Pakistan',
      sub: 'Available worldwide remotely'
    },
    {
      icon: Clock,
      label: 'Guaranteed Response',
      value: 'Under 24 Hours',
      sub: 'Usually within 1 - 2 hours'
    },
  ];

  const inputBase =
    'w-full bg-slate-50 dark:bg-[#1a1730]/60 border rounded-xl px-4 py-3 text-slate-800 dark:text-[#f3efe4] placeholder:text-slate-400 dark:placeholder:text-[#6f6890] outline-none transition-all duration-200 text-sm';

  return (
    <section
      id="contact"
      className="relative py-16 px-6 sm:px-10 bg-transparent overflow-hidden transition-colors duration-300"
    >
      <div className="relative z-10 w-full mx-auto">
        {/* ── Section heading ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            — Start a Project —
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
            Let&apos;s Build Something <span className="italic text-gold">Exceptional</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-[#a79fc9] max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Share your project requirements below or connect via WhatsApp for an immediate response.
          </p>
        </motion.div>

        {/* ── Main grid ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-10 items-start">
          {/* LEFT: info cards */}
          <div className="space-y-3.5">
            {infoCards.map(({ icon: Icon, label, value, sub, link, isHighlight }, i) => {
              const CardContent = (
                <motion.div
                  key={label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`group flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    isHighlight
                      ? 'border-emerald-500/40 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.08] hover:border-emerald-500 shadow-sm'
                      : 'border-slate-200 dark:border-[#241f42] bg-slate-50/50 dark:bg-[#100e21] hover:border-gold/40'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isHighlight
                        ? 'bg-[#25D366] text-white shadow-md shadow-green-500/20'
                        : 'bg-gold/10 text-gold'
                    }`}
                  >
                    <Icon size={19} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-slate-400 dark:text-[#8a83ab] uppercase tracking-wider font-semibold mb-0.5">
                      {label}
                    </p>
                    <p
                      className={`font-semibold text-sm ${
                        isHighlight
                          ? 'text-emerald-700 dark:text-emerald-300'
                          : 'text-slate-800 dark:text-[#f3efe4]'
                      }`}
                    >
                      {value}
                    </p>
                    <p className="text-slate-500 dark:text-[#8a83ab] text-xs mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              );

              return link ? (
                <a
                  key={label}
                  href={link}
                  target={link.startsWith('http') ? '_blank' : undefined}
                  rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block cursor-pointer"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={label}>{CardContent}</div>
              );
            })}

            {/* Quick trust note */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-[#241f42] bg-slate-50/30 dark:bg-[#100e21]/50 text-xs text-slate-500 dark:text-[#a79fc9] space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-[#f3efe4]">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Client Guarantee</span>
              </div>
              <p className="leading-relaxed">
                NDA signed upon request. 100% intellectual property ownership transferred to you upon completion.
              </p>
            </div>
          </div>

          {/* RIGHT: High-Converting Requirements Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-50/50 dark:bg-[#100e21] border border-slate-200 dark:border-[#2a2450] rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-[#f3efe4] mb-1">
              Project Requirements Form
            </h3>
            <p className="text-slate-500 dark:text-[#8a83ab] text-xs sm:text-sm mb-6">
              Tell me about your project scope, timeline, and goals.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
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

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. john@company.com"
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

              {/* Service Required Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                  Service / Project Type
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`${inputBase} border-slate-200 dark:border-[#3a3560] cursor-pointer`}
                >
                  {SERVICES_OPTIONS.map((srv) => (
                    <option key={srv} value={srv} className="bg-white dark:bg-[#151228] text-slate-900 dark:text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5 flex items-center gap-1">
                  <DollarSign size={13} className="text-gold" />
                  Estimated Budget (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                        formData.budget === b
                          ? 'bg-gold text-ink border-gold shadow-sm font-bold'
                          : 'bg-white dark:bg-[#151228] border-slate-200 dark:border-[#3a3560] text-slate-600 dark:text-[#a79fc9] hover:border-gold'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5 flex items-center gap-1">
                  <Calendar size={13} className="text-gold" />
                  Desired Timeline
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIMELINE_OPTIONS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                        formData.timeline === t
                          ? 'bg-gold text-ink border-gold shadow-sm font-bold'
                          : 'bg-white dark:bg-[#151228] border-slate-200 dark:border-[#3a3560] text-slate-600 dark:text-[#a79fc9] hover:border-gold'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Project Requirements Textarea */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                  Project Details &amp; Requirements *
                </label>
                <textarea
                  placeholder="Describe your project, key features, target audience, or any reference websites..."
                  required
                  rows={4}
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
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`group w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  loading
                    ? 'bg-gold-soft cursor-not-allowed text-ink'
                    : 'bg-gold hover:bg-gold-soft text-ink shadow-md shadow-gold/20'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} strokeWidth={2.4} />
                    <span>Send Project Inquiry</span>
                    <ArrowRight size={15} strokeWidth={2.4} className="group-hover:translate-x-1 transition-transform" />
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
