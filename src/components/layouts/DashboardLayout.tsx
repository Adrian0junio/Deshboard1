import React from 'react';
import { Bell, Settings, Home, BarChart2, Users, Mail, CreditCard, HelpCircle, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', active: true },
    { icon: <BarChart2 size={20} />, label: 'Analytics' },
    { icon: <Users size={20} />, label: 'Team' },
    { icon: <Mail size={20} />, label: 'Messages' },
    { icon: <CreditCard size={20} />, label: 'Billing' },
  ];

  return (
    <div className="flex h-screen bg-[#121212]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1a1a1a] text-gray-300">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">CY</span>
            </div>
            <span className="text-white font-medium">CYRIUS</span>
          </div>
        </div>

        <nav className="mt-8 px-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg cursor-pointer text-red-400">
            <LogOut size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#121212]">
        <header className="sticky top-0 z-10 bg-[#1a1a1a] border-b border-gray-800">
          <div className="px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-white/5 relative">
                <Bell size={20} className="text-gray-300" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-xs flex items-center justify-center text-white">
                  3
                </span>
              </button>
              <button className="p-2 rounded-lg hover:bg-white/5">
                <Settings size={20} className="text-gray-300" />
              </button>
              <div className="h-8 border-l border-gray-800 mx-2" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  AC
                </div>
                <div className="text-sm">
                  <div className="font-medium text-white">Adrian Chen</div>
                  <div className="text-gray-400">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;