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
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#060d1a] px-6">
          <div className="text-center max-w-md">
            <p className="text-emerald-500 font-mono text-sm mb-3 tracking-widest uppercase">Error</p>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              Something went wrong
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              An unexpected error occurred while rendering this page. Try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25"
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
