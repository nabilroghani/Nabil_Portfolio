'use client';

import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7 fill-current text-white"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.41 8.86 7.65C8.63 7.9 7.98 8.5 7.98 9.75C7.98 11 8.89 12.2 9.02 12.37C9.15 12.54 10.8 15.09 13.33 16.18C13.93 16.44 14.4 16.6 14.77 16.71C15.38 16.91 15.93 16.88 16.37 16.82C16.86 16.75 17.88 16.2 18.09 15.61C18.3 15.02 18.3 14.52 18.23 14.41C18.16 14.31 17.99 14.25 17.74 14.12C17.48 14 16.25 13.4 16.02 13.31C15.79 13.23 15.62 13.19 15.45 13.44C15.28 13.7 14.8 14.25 14.65 14.41C14.5 14.58 14.35 14.6 14.1 14.47C13.85 14.35 12.79 14 11.53 12.87C10.55 12 9.89 10.92 9.72 10.63C9.55 10.34 9.7 10.18 9.83 10.05C9.94 9.94 10.08 9.76 10.21 9.61C10.34 9.46 10.38 9.35 10.47 9.17C10.56 9 10.51 8.84 10.45 8.71C10.38 8.59 9.87 7.34 9.66 6.84C9.45 6.35 9.24 6.42 9.09 6.41C8.95 6.41 8.78 6.41 8.61 6.41L9.53 7.34Z" />
  </svg>
);

const WhatsAppButton = () => {
  const whatsappUrl =
    'https://wa.me/923041237882?text=Hi%20Nabil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#151228] border border-slate-200 dark:border-[#2a2450] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        💬 Chat on WhatsApp (+92 304 1237882)
      </span>

      {/* Pulsing ring animation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nabil on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 active:scale-95 transition-all duration-300 group-hover:rotate-6"
      >
        {/* Soft pulse wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default WhatsAppButton;

