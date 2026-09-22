import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#060d1a] px-6">
      <div className="text-center max-w-md">
        <p className="text-emerald-500 font-mono text-6xl font-black mb-3">404</p>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
          Page not found
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25"
        >
          <Home size={16} strokeWidth={2.5} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
