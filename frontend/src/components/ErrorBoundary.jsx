import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf7f0] dark:bg-ink px-6">
          <div className="text-center max-w-md">
            <p className="text-gold text-sm mb-3 tracking-widest uppercase">Error</p>
            <h1 className="text-2xl sm:text-3xl font-display font-semibold text-ink dark:text-[#f3efe4] mb-3">
              Something went wrong
            </h1>
            <p className="text-slate-500 dark:text-[#a79fc9] mb-8">
              An unexpected error occurred while rendering this page. Try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-soft active:scale-95 text-ink px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-gold/25"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
