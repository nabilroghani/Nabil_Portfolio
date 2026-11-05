import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

const PublicLayout = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#f3f2ef] dark:bg-[#0b0a1a] transition-colors duration-500">
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default PublicLayout;
