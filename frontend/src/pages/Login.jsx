import { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', formData);
      localStorage.setItem('token', data.token);
      toast.success('Welcome Back, Nabil!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login Failed');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <form onSubmit={handleSubmit} className="bg-[#112240] p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-secondary text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input 
          type="text" placeholder="Username" 
          className="w-full p-3 mb-4 rounded bg-[#0a192f] border border-gray-600 focus:border-secondary outline-none"
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full p-3 mb-6 rounded bg-[#0a192f] border border-gray-600 focus:border-secondary outline-none"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button className="w-full bg-secondary text-primary font-bold py-3 rounded hover:bg-opacity-80 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;