import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a192f] transition-colors duration-500">
      <Navbar />
      <main className="max-w-7xl mx-auto min-h-screen px-4 bg-white dark:bg-[#0a192f] transition-colors duration-500">
        <Outlet /> 
      </main>
    </div>
  );
};

export default PublicLayout;
