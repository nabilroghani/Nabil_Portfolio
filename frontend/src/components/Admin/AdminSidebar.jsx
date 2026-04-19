import { LayoutGrid, Wrench, MessageSquare, FileText, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = ({ activeTab, setActiveTab, messageCount }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'projects', label: 'Projects', icon: <LayoutGrid size={20} /> },
    { id: 'tools', label: 'Tech Stack', icon: <Wrench size={20} /> },
    { id: 'cv', label: 'Manage CV', icon: <FileText size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} />, count: messageCount },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside className="w-full md:w-64 flex flex-row md:flex-col gap-2 sticky top-24 h-fit">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex-1 md:flex-none flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
            activeTab === item.id 
              ? 'bg-secondary text-primary shadow-[0_0_15px_rgba(100,255,218,0.3)]' 
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          {item.icon}
          <span className="hidden md:inline">{item.label}</span>
          {item.count > 0 && (
            <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {item.count}
            </span>
          )}
        </button>
      ))}

      <button 
        onClick={handleLogout}
        className="hidden md:flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/5 mt-10 transition-all"
      >
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;