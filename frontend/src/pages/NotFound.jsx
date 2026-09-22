import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f0] dark:bg-ink px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-gold text-6xl font-semibold mb-3">404</p>
        <h1 className="text-2xl sm:text-3xl font-display font-semibold text-ink dark:text-[#f3efe4] mb-3">
          Page not found
        </h1>
        <p className="text-slate-500 dark:text-[#a79fc9] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-soft active:scale-95 text-ink px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-gold/25"
        >
          <Home size={16} strokeWidth={2.5} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
