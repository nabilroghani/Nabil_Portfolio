import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Aapko ye component banana hoga

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        <Outlet /> 
      </main>
    </div>
  );
};

export default PublicLayout;