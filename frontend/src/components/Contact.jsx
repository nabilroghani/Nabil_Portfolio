'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  MessageCircle,
  DollarSign,
  Calendar,
  CheckCircle2,
  Briefcase,
  Building2,
  Rocket,
  Globe
} from 'lucide-react';
import API from '../api/axios';
import toast from 'react-hot-toast';

const SERVICES_OPTIONS = [
  'Custom MERN Web App',
  'School Management System (EduNexa SMS)',
  'Pharmacy POS & ERP System (PharmaLogic)',
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

const ROLE_OPTIONS = [
  'Full-Stack MERN Developer',
  'Senior React / Next.js Engineer',
  'Backend & AWS Cloud Engineer (Node/MongoDB)',
  'Software Engineer (Full-Time)',
  'Long-Term Engineering Contract',
  'Technical Lead / Architect'
];

const WORK_MODE_OPTIONS = [
  'Remote Worldwide',
  'Hybrid',
  'Onsite (Peshawar / PK)',
  'Contract / Retainer'
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
  // Inquiry Mode: 'job' (Companies / Recruiters) vs 'project' (Clients / SaaS builds)
  const [inquiryType, setInquiryType] = useState('job');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Full-Stack MERN Developer',
    workMode: 'Remote Worldwide',
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

    const isJob = inquiryType === 'job';
    const tid = toast.loading(
      isJob ? 'Sending your hiring inquiry to Nabil...' : 'Sending your project inquiry to Nabil...'
    );

    try {
      const subject = isJob
        ? `[Hiring Inquiry] ${formData.name} from ${formData.company || 'Company'} (${formData.roleType})`
        : `[Project Inquiry] ${formData.name} - ${formData.service} (${formData.budget})`;

      const messageContent = isJob
        ? `INQUIRY TYPE: Job / Hiring Opportunity\n` +
          `Company / Organization: ${formData.company || 'Not Specified'}\n` +
          `Role Type: ${formData.roleType}\n` +
          `Work Mode: ${formData.workMode}\n` +
          `Contact Name: ${formData.name}\n` +
          `Work Email: ${formData.email}\n\n` +
          `Role Scope & Details:\n${formData.message}`
        : `INQUIRY TYPE: Client Project / SaaS Build\n` +
          `Project / System: ${formData.service}\n` +
          `Estimated Budget: ${formData.budget}\n` +
          `Desired Timeline: ${formData.timeline}\n` +
          `Client Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Requirements & Scope:\n${formData.message}`;

      const payload = {
        name: formData.name,
        email: formData.email,
        service: isJob ? formData.roleType : formData.service,
        budget: isJob ? `Role: ${formData.roleType} (${formData.workMode})` : formData.budget,
        timeline: isJob ? formData.workMode : formData.timeline,
        subject,
        message: messageContent
      };

      await API.post('/messages', payload);
      toast.success('Inquiry received! Nabil will get back to you within a few hours.', { id: tid });

      setFormData({
        name: '',
        email: '',
        company: '',
        roleType: 'Full-Stack MERN Developer',
        workMode: 'Remote Worldwide',
        service: 'Custom MERN Web App',
        budget: '$500 - $1,500',
        timeline: '2 - 4 weeks',
        message: ''
      });
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        'Something went wrong. Please connect via WhatsApp or email directly.';
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
      sub: 'Fastest response (Usually under 1 hour)',
      link: 'https://wa.me/923041237882?text=Hi%20Nabil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20role%20or%20project.',
      isHighlight: true
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'contact@nabilahmad.site',
      sub: 'Click to copy · Fast email response',
      link: 'mailto:contact@nabilahmad.site'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Peshawar, KP, Pakistan',
      sub: 'Open for Remote Worldwide & Hybrid'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Available Immediately',
      sub: 'Full-Time Roles & Engineering Contracts'
    },
  ];

  const inputBase =
    'w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-[#151228] text-slate-900 dark:text-[#f3efe4] text-xs sm:text-sm placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 focus:outline-none';

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            — Get in Touch —
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-[#f3efe4] leading-tight">
            Let&apos;s Build Something <span className="italic text-gold">Exceptional</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-[#a79fc9] max-w-xl mx-auto leading-relaxed">
            Open for full-time software engineering roles, high-impact remote contracts, and custom SaaS web applications.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* LEFT: info cards */}
          <div className="lg:col-span-5 space-y-3.5">
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
                  onClick={() => {
                    if (link.startsWith('mailto:')) {
                      navigator.clipboard.writeText('contact@nabilahmad.site');
                      toast.success('Email copied: contact@nabilahmad.site');
                    }
                  }}
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

            {/* Quick trust & recruiter note */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-[#241f42] bg-slate-50/30 dark:bg-[#100e21]/50 text-xs text-slate-500 dark:text-[#a79fc9] space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-[#f3efe4]">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Hiring &amp; Collaboration Guarantee</span>
              </div>
              <p className="leading-relaxed">
                Available for full-time engineering roles, high-impact remote contracts, and custom SaaS builds. NDA signed upon request.
              </p>
            </div>
          </div>

          {/* RIGHT: Dual-Purpose Form (Recruiters / Jobs + Clients / Projects) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-slate-50/50 dark:bg-[#100e21] border border-slate-200 dark:border-[#2a2450] rounded-3xl p-5 sm:p-7 shadow-sm"
          >
            {/* ── Mode Toggle Tabs ── */}
            <div className="flex p-1 bg-slate-200/60 dark:bg-[#181432] rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setInquiryType('job')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  inquiryType === 'job'
                    ? 'bg-gold text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-[#a79fc9] hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Briefcase size={14} strokeWidth={2.4} />
                <span>Job / Hiring Opportunity</span>
              </button>

              <button
                type="button"
                onClick={() => setInquiryType('project')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  inquiryType === 'project'
                    ? 'bg-gold text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-[#a79fc9] hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Rocket size={14} strokeWidth={2.4} />
                <span>Project / SaaS Inquiry</span>
              </button>
            </div>

            {/* Form Title & Subtitle */}
            <div className="mb-5">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-[#f3efe4]">
                {inquiryType === 'job' ? 'Hiring & Technical Interview Inquiry' : 'Project & Requirements Form'}
              </h3>
              <p className="text-slate-500 dark:text-[#8a83ab] text-xs sm:text-sm mt-1">
                {inquiryType === 'job'
                  ? 'Reach out regarding full-time roles, remote software engineering positions, or technical interviews.'
                  : 'Tell me about your project scope, timeline, and deliverables.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
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
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                    {inquiryType === 'job' ? 'Work / Company Email *' : 'Email Address *'}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={inquiryType === 'job' ? 'e.g. recruiter@company.com' : 'e.g. john@example.com'}
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

              {/* ── Dynamic Fields: Job Mode ── */}
              {inquiryType === 'job' && (
                <>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5 flex items-center gap-1">
                        <Building2 size={13} className="text-gold" />
                        Company / Organization *
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        placeholder="e.g. Acme Tech / Software House"
                        required
                        value={formData.company}
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`${inputBase} ${
                          focused === 'company'
                            ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
                            : 'border-slate-200 dark:border-[#3a3560]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-role" className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5 flex items-center gap-1">
                        <Briefcase size={13} className="text-gold" />
                        Role / Position Type
                      </label>
                      <select
                        id="contact-role"
                        name="roleType"
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className={`${inputBase} border-slate-200 dark:border-[#3a3560] cursor-pointer`}
                      >
                        {ROLE_OPTIONS.map((r) => (
                          <option key={r} value={r} className="bg-white dark:bg-[#151228] text-slate-900 dark:text-white">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Work Engagement Mode Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5 flex items-center gap-1">
                      <Globe size={13} className="text-gold" />
                      Work Engagement Mode
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="group" aria-label="Work mode options">
                      {WORK_MODE_OPTIONS.map((mode) => (
                        <button
                          type="button"
                          key={mode}
                          onClick={() => setFormData({ ...formData, workMode: mode })}
                          aria-pressed={formData.workMode === mode}
                          className={`px-2.5 py-2.5 min-h-[42px] flex items-center justify-center rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                            formData.workMode === mode
                              ? 'bg-gold text-slate-950 border-gold shadow-sm font-bold'
                              : 'bg-white dark:bg-[#151228] border-slate-200 dark:border-[#3a3560] text-slate-600 dark:text-[#a79fc9] hover:border-gold'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* ── Dynamic Fields: Client Project Mode ── */}
              {inquiryType === 'project' && (
                <>
                  {/* Service Required Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                      Service / Project Type
                    </label>
                    <select
                      id="contact-service"
                      name="service"
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="group" aria-label="Estimated budget options">
                      {BUDGET_OPTIONS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          aria-pressed={formData.budget === b}
                          className={`px-3 py-2.5 min-h-[42px] flex items-center justify-center rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                            formData.budget === b
                              ? 'bg-gold text-slate-950 border-gold shadow-sm font-bold'
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
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="group" aria-label="Desired timeline options">
                      {TIMELINE_OPTIONS.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          aria-pressed={formData.timeline === t}
                          className={`px-2.5 py-2.5 min-h-[42px] flex items-center justify-center rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                            formData.timeline === t
                              ? 'bg-gold text-slate-950 border-gold shadow-sm font-bold'
                              : 'bg-white dark:bg-[#151228] border-slate-200 dark:border-[#3a3560] text-slate-600 dark:text-[#a79fc9] hover:border-gold'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Message / Details Textarea */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-[#d3cde8] mb-1.5">
                  {inquiryType === 'job'
                    ? 'Role Overview & Message *'
                    : 'Project Scope & Requirements *'}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={
                    inquiryType === 'job'
                      ? 'Tell me about the engineering team, tech stack, job responsibilities, or schedule an interview call...'
                      : 'Describe your project, key features, target audience, or reference websites...'
                  }
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
                className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer min-h-[48px] ${
                  loading
                    ? 'bg-gold-soft cursor-not-allowed text-slate-950'
                    : 'bg-gold hover:bg-gold-soft text-slate-950 shadow-md shadow-gold/20'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} strokeWidth={2.4} />
                    <span>
                      {inquiryType === 'job'
                        ? 'Send Job / Hiring Inquiry'
                        : 'Send Project Inquiry'}
                    </span>
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
