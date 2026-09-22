import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect, lazy, Suspense } from 'react';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import API from './api/axios';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#faf7f0] dark:bg-ink">
    <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

function App() {
  useEffect(() => {
    API.post('/stats/visit').catch(() => console.log("Stats error"));
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Toaster position="top-right" />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* --- Public Routes --- */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
            </Route>

            {/* --- Authentication --- */}
            <Route path="/login" element={<Login />} />

            {/* --- Protected Admin Routes (Yahan security hai) --- */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              {/* Kal ko admin ke mazeed pages yahan add ho saktay hain */}
            </Route>

            {/* --- 404 Fallback --- */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;