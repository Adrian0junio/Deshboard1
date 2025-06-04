import React, { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import MetricCard from '../components/MetricCard';
import { BrainCircuit, Clock, Inbox, Zap, Star, HardDrive, UserCircle, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('today');

  const timeRanges = [
    { value: 'today', label: '1D' },
    { value: 'week', label: '1W' },
    { value: 'month', label: '1M' },
    { value: 'quarter', label: '3M' },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <div className="flex bg-gray-100 rounded-full p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  timeRange === range.value
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Emails Processed" 
          value="1,247"
          subtext="94% success rate"
          icon={<BrainCircuit size={20} />}
          trend={{ value: "+12% from yesterday", positive: true }}
        />
        
        <MetricCard 
          title="Processing Time" 
          value="1.2s"
          subtext="Average per email"
          icon={<Clock size={20} />}
          trend={{ value: "-0.3s from average", positive: true }}
        />
        
        <MetricCard 
          title="Inbox Load" 
          value="127"
          subtext="Emails pending"
          icon={<Inbox size={20} />}
          trend={{ value: "+15 new", positive: false }}
        />
        
        <MetricCard 
          title="AI Performance" 
          value="98%"
          subtext="Accuracy rate"
          icon={<Zap size={20} />}
          trend={{ value: "+2% improvement", positive: true }}
        />
        
        <MetricCard 
          title="Urgent Emails" 
          value="8"
          subtext="Requires attention"
          icon={<Star size={20} />}
          trend={{ value: "+3 new urgent", positive: false }}
          className="border-red-100 bg-red-50"
        />
        
        <MetricCard 
          title="Storage Used" 
          value="1.2 GB"
          subtext="10 GB remaining"
          icon={<HardDrive size={20} />}
          trend={{ value: "12% utilized", positive: true }}
        />
        
        <MetricCard 
          title="Team Members" 
          value="10"
          subtext="4 active now"
          icon={<UserCircle size={20} />}
          trend={{ value: "+2 this month", positive: true }}
        />

        <MetricCard 
          title="Workspaces" 
          value="4"
          subtext="6 available"
          icon={<Users size={20} />}
          trend={{ value: "67% utilized", positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Active Subscriptions Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Active Subscriptions</h3>
            <button className="text-sm text-blue-500 hover:text-blue-600">View all</button>
          </div>
          <div className="space-y-4">
            {/* Subscription items would go here */}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Team Members</h3>
            <button className="text-sm text-blue-500 hover:text-blue-600">Add member</button>
          </div>
          <div className="space-y-4">
            {/* Team member items would go here */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;