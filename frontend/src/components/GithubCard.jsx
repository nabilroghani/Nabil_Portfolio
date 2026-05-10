import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaBook, FaUsers, FaCodeBranch } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const GithubCard = ({ username = "nabilahmad" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        console.error("Github Error:", err);
        setError(true);
        setLoading(false);
      });
  }, [username]);

  /* ── Loading skeleton ── */
  if (loading) return (
    <div className="animate-pulse bg-slate-100 dark:bg-slate-800/60 h-36 rounded-3xl border border-slate-200 dark:border-slate-700/50" />
  );

  if (error || !data || data.message === "Not Found") return null;

  const stats = [
    { icon: FaBook,       value: data.public_repos,  label: 'Repos',     color: 'text-emerald-500',  hover: 'hover:border-emerald-500/30 dark:hover:border-emerald-500/30' },
    { icon: FaUsers,      value: data.followers,      label: 'Followers', color: 'text-sky-400',      hover: 'hover:border-sky-400/30 dark:hover:border-sky-400/30' },
    { icon: FaCodeBranch, value: data.public_gists,   label: 'Gists',     color: 'text-violet-400',   hover: 'hover:border-violet-400/30 dark:hover:border-violet-400/30' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden group
        bg-white dark:bg-slate-900/70
        border border-slate-200 dark:border-slate-700/50
        hover:border-emerald-500/30 dark:hover:border-emerald-500/30
        rounded-3xl p-7 sm:p-8
        shadow-lg shadow-slate-200/60 dark:shadow-slate-900/40
        transition-all duration-300"
    >
      {/* Glow blob */}
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full
        bg-emerald-400/10 dark:bg-emerald-500/10
        blur-[80px] group-hover:bg-emerald-400/20 dark:group-hover:bg-emerald-500/20
        transition-all duration-700 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-7">

        {/* ── Avatar ── */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-emerald-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <img
            src={data.avatar_url}
            alt={data.login}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl
              border-2 border-slate-200 dark:border-slate-700
              group-hover:border-emerald-500/40 dark:group-hover:border-emerald-500/40
              shadow-md group-hover:scale-105 transition-all duration-500 object-cover"
          />
          {/* Online dot */}
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
        </div>

        {/* ── Info ── */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.name || data.login}
            </h3>
            <FaGithub className="text-slate-400 dark:text-slate-500" size={18} />
          </div>

          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-xs mb-1 tracking-wide">
            @{data.login}
          </p>

          {data.bio && (
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 max-w-sm mx-auto md:mx-0">
              {data.bio}
            </p>
          )}

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            {stats.map(({ icon: Icon, value, label, color, hover }) => (
              <div
                key={label}
                className={`flex items-center gap-2
                  bg-slate-50 dark:bg-slate-800/60
                  border border-slate-200 dark:border-slate-700/60
                  ${hover}
                  px-3.5 py-2 rounded-xl transition-colors duration-200`}
              >
                <Icon size={13} className={color} />
                <span className="text-slate-800 dark:text-white font-bold text-sm">{value}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA button ── */}
        <motion.a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 inline-flex items-center gap-2
            bg-emerald-500 hover:bg-emerald-400
            text-white
            px-6 py-3 rounded-2xl
            font-bold text-xs uppercase tracking-widest
            shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
            transition-colors duration-200"
        >
          View Profile
          <ExternalLink size={13} strokeWidth={2.5} />
        </motion.a>

      </div>
    </motion.div>
  );
};

export default GithubCard;
