import { useEffect, useState } from 'react';
import { FaGithub, FaBook, FaUsers, FaCodeBranch } from 'react-icons/fa';

const GithubCard = ({ username = "nabilahmad" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div className="animate-pulse bg-[#112240] h-32 rounded-3xl border border-white/5"></div>;
  if (!data || data.message === "Not Found") return null;

  return (
    <div className="bg-[#112240] border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
      {/* Background Decor */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/5 blur-[80px] rounded-full group-hover:bg-secondary/10 transition-all duration-700"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        <img 
          src={data.avatar_url} 
          className="w-24 h-24 rounded-2xl border-2 border-secondary/20 shadow-xl group-hover:scale-105 transition-transform duration-500" 
          alt="github" 
        />
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
            <h3 className="text-2xl font-bold text-white">{data.name || data.login}</h3>
            <FaGithub className="text-secondary opacity-50" size={20} />
          </div>
          <p className="text-secondary font-mono text-sm mb-5 opacity-80">@{data.login}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <div className="flex items-center gap-2 bg-[#0a192f] px-4 py-2 rounded-xl border border-white/5 hover:border-secondary/30 transition-colors">
              <FaBook size={14} className="text-secondary" />
              <span className="text-white font-bold text-sm">{data.public_repos}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Repos</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a192f] px-4 py-2 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors">
              <FaUsers size={14} className="text-blue-400" />
              <span className="text-white font-bold text-sm">{data.followers}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Followers</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a192f] px-4 py-2 rounded-xl border border-white/5 hover:border-green-400/30 transition-colors">
              <FaCodeBranch size={14} className="text-green-400" />
              <span className="text-white font-bold text-sm">{data.public_gists}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Gists</span>
            </div>
          </div>
        </div>

        <a 
          href={data.html_url} 
          target="_blank" 
          rel="noreferrer" 
          className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-1 active:scale-95 shadow-lg shadow-secondary/10"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default GithubCard;