import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    // Background ko Deep Dark Navy (#0a192f) rakha hai jo aankhon ko sakoon deta hai
    <div className="bg-[#0a192f] text-slate-300 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">

      {/* Subtle Glows (Pehle se kam bright hain) */}
      <div className="fixed -top-24 -left-24 w-80 h-80 bg-cyan-600/5 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-0 -right-24 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-cyan-400">NABIL</span>
            <span className="text-slate-500 text-lg">.DEV</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {["Projects", "Skills", "Contact"].map(item => (
              <li key={item} className="hover:text-cyan-400 cursor-pointer transition-all duration-300">
                {item}
              </li>
            ))}
          </ul>

          <button className="px-5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-[#0a192f] transition-all duration-300">
            HIRE ME
          </button>
        </div>
      </nav>

      {/* MAIN HERO */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Content */}
          <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-800 bg-slate-900/50 text-cyan-500 text-[10px] font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Freelance
            </div>

            {/* Font size ko 8xl se 5xl/6xl par le aya hoon jo zyada elegant lagta hai */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experiences
              </span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              Full Stack <span className="text-slate-200 font-medium">MERN Developer</span> focused on building clean, performant, and user-centric web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start pt-4">
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 text-[#0a192f] font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                Explore Work <FaArrowRight size={14} />
              </button>

              <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                <FaDownload size={14} /> Resume
              </button>
            </div>

            {/* Social Icons with subtle styling */}
            <div className="flex gap-4 justify-center md:justify-start pt-6">
              {[ {icon: <FaGithub />, link: "#"}, {icon: <FaLinkedin />, link: "#"} ].map((social, i) => (
                <a key={i} href={social.link} className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Outer glow aura */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full transition-opacity group-hover:opacity-100 opacity-50"></div>
              
              <img
                src={heroImg}
                alt="Nabil Portfolio"
                className="relative w-[280px] sm:w-[350px] lg:w-[420px] object-contain transition-transform duration-700 hover:scale-105"
              />

              {/* Minimal floating card */}
              <div className="absolute -bottom-4 right-0 md:-right-8 bg-slate-900/90 backdrop-blur-md p-3 px-5 rounded-xl border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-[10px] uppercase tracking-tighter text-slate-400 font-semibold leading-tight">
                    Projects <br /> Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Hero;