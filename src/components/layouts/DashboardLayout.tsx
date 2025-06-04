import React from 'react';
import Sidebar from '../Sidebar';
import { Bell, Settings } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
        <div className="sticky top-0 z-10 backdrop-blur-md bg-black/30 border-b border-gray-800/50">
          <div className="px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                <Settings size={20} />
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm">
                Export Report
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center ring-2 ring-gray-700">
                <span className="text-sm font-medium">AC</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;