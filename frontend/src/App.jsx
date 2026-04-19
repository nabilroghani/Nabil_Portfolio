import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // <--- Ye import karein
import { useState, useEffect } from 'react';
import API from './api/axios';

function App() {
  useEffect(() => {
  API.post('/stats/visit').catch(err => console.log("Stats error"));
}, []);
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Route yahan add karein */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;