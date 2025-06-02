import React from 'react';
import Sidebar from '../Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-medium mb-8">Dashboard</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;