import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#060d1a] transition-colors duration-500">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;