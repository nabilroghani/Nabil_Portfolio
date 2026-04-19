import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import API from './api/axios';

function App() {
  useEffect(() => {
    API.post('/stats/visit').catch(err => console.log("Stats error"));
  }, []);

  return (
    <Router>
      <Toaster position="top-right" />
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;