import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[#faf7f0] dark:bg-ink transition-colors duration-500">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;