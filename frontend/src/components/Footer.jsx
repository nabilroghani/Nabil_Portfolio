import { Mail } from 'lucide-react';
import GithubMark from './icons/GithubMark';
import LinkedinMark from './icons/LinkedinMark';
import FacebookMark from './icons/FacebookMark';

const SOCIALS = [
  { href: 'https://github.com/nabilroghani', label: 'GitHub', Icon: GithubMark },
  { href: 'https://www.linkedin.com/in/nabil-ahmad-0750002b1', label: 'LinkedIn', Icon: LinkedinMark },
  { href: 'https://www.facebook.com/nabilroghani', label: 'Facebook', Icon: FacebookMark },
  { href: 'mailto:nabiltechlogic.dev@gmail.com', label: 'Email', Icon: Mail },
];

const Footer = () => (
  <footer className="relative bg-[#f3f2ef] dark:bg-[#0b0a1a] py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <span className="font-display text-ink dark:text-[#f3efe4] text-lg tracking-tight">
        Nabil<span className="italic text-gold"> Ahmad</span>
      </span>

      <div className="flex items-center gap-3">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={label}
            className="w-10 h-10 rounded-full flex items-center justify-center
              border border-slate-300 dark:border-[#3a3560]
              bg-white dark:bg-[#151228]
              text-slate-600 dark:text-[#a79fc9]
              hover:border-gold hover:text-gold hover:-translate-y-0.5
              transition-all duration-200 shadow-sm"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="text-xs text-slate-500 dark:text-[#8a83ab]">
        &copy; {new Date().getFullYear()} Nabil Ahmad. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
