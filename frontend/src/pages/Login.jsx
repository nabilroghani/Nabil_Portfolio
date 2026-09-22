import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, Code2, ArrowRight } from 'lucide-react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await API.post('/auth/login', formData);
      localStorage.setItem('token', data.token);
      toast.success('Welcome Back, Nabil!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login Failed');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-slate-50 dark:bg-[#1a1730]/60 text-slate-800 dark:text-[#f3efe4]
     placeholder:text-slate-400 dark:placeholder:text-[#6f6890]
     border rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200
     ${focused === field
       ? 'border-gold ring-2 ring-gold/15 bg-white dark:bg-[#1a1730]'
       : 'border-slate-200 dark:border-[#3a3560]'}`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4
      bg-[#faf7f0] dark:bg-ink transition-colors duration-300 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-gold/[0.07] dark:bg-gold/[0.08] blur-[100px]" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] rounded-full bg-violet/[0.06] dark:bg-violet/[0.08] blur-[90px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,161,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,161,95,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white dark:bg-[#151228]/70
          border border-slate-200 dark:border-[#3a3560]/50
          rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-black/50
          p-8 sm:p-10"
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <Code2 size={26} className="text-gold" strokeWidth={2.5} />
            </div>
            <h1 className="font-display text-ink dark:text-[#f3efe4] font-semibold text-2xl tracking-tight">
              Nabil<span className="italic text-gold"> Ahmad</span>
            </h1>
            <p className="text-slate-400 dark:text-[#8a83ab] text-sm mt-1">Admin Panel</p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-7">
            <div className="flex-1 h-px bg-slate-200 dark:bg-[#241f42]" />
            <span className="text-xs text-slate-400 dark:text-[#8a83ab] uppercase tracking-widest">
              Sign In
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-[#241f42]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username */}
            <div className="relative">
              <User
                size={15}
                strokeWidth={2}
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200
                  ${focused === 'username' ? 'text-gold' : 'text-slate-400 dark:text-[#8a83ab]'}`}
              />
              <input
                type="text"
                placeholder="Username"
                required
                value={formData.username}
                onFocus={() => setFocused('username')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className={`${inputClass('username')} pl-10`}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={15}
                strokeWidth={2}
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200
                  ${focused === 'password' ? 'text-gold' : 'text-slate-400 dark:text-[#8a83ab]'}`}
              />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                required
                value={formData.password}
                onFocus={() => setFocused('password')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`${inputClass('password')} pl-10 pr-11`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2
                  text-slate-400 dark:text-[#8a83ab]
                  hover:text-slate-600 dark:hover:text-[#e5e1f2]
                  transition-colors duration-200"
              >
                {showPass ? <EyeOff size={15} strokeWidth={2} /> : <Eye size={15} strokeWidth={2} />}
              </button>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.01 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              className={`group w-full flex items-center justify-center gap-2.5
                py-3.5 rounded-full font-semibold text-sm mt-2
                transition-all duration-300
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
                  Signing in...
                </>
              ) : (
                <>
                  <Lock size={15} strokeWidth={2.5} />
                  Sign In
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </>
              )}
            </motion.button>

          </form>

          {/* Footer note */}
          <p className="text-center text-xs text-slate-400 dark:text-[#6f6890] mt-6">
            Protected area — authorized access only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
