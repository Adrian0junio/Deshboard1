import React from 'react';
import { Home, CreditCard, TicketCheck } from 'lucide-react';
import { Link } from './ui/Link';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, href }) => {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-[#171717] text-white' 
          : 'text-gray-500 hover:text-gray-400'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-[#121212] border-r border-gray-800/50 flex flex-col">
      <div className="p-4">
        <div className="w-10 h-10 bg-[#171717] rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-gray-700"></div>
        </div>
      </div>
      
      <div className="mt-6 px-3 flex flex-col gap-1">
        <SidebarItem 
          icon={<Home size={20} />} 
          label="Dashboard" 
          active={true} 
          href="/" 
        />
        <SidebarItem 
          icon={<TicketCheck size={20} />} 
          label="Subscriptions" 
          href="/subscriptions" 
        />
        <SidebarItem 
          icon={<CreditCard size={20} />} 
          label="Payments" 
          href="/payments" 
        />
      </div>
      
      <div className="mt-auto p-4">
        <div className="text-xs text-gray-600">
          © 2025 AeroEdit
        </div>
      </div>
    </div>
  );
};

export default Sidebar;