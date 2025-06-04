import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import MetricCard from '../components/MetricCard';
import TeamMembersList from '../components/TeamMembersList';
import ActiveSubscriptions from '../components/ActiveSubscriptions';
import TutorialCard from '../components/TutorialCard';
import { HardDrive, Users, Image, UserCircle, Mail, Clock, Star } from 'lucide-react';

// Mock data - This would come from your API/database
const teamMembers = [
  { id: '1', name: 'Daniel Cromitch', email: 'dc@paddle.com', initials: 'DC' },
  { id: '2', name: 'Melissa Lee', email: 'ml@paddle.com', initials: 'ML' },
  { id: '3', name: 'Jackson Khan', email: 'jk@paddle.com', initials: 'JK' },
  { id: '4', name: 'Isa Lopez', email: 'il@paddle.com', initials: 'IL' },
];

const subscriptions = [
  {
    id: '1',
    name: 'Pro Plan',
    status: 'active',
    renewDate: 'Mar 15, 2025',
    price: '$49/mo'
  },
  {
    id: '2',
    name: 'Team Storage',
    status: 'active',
    renewDate: 'Apr 1, 2025',
    price: '$29/mo'
  }
];

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* First row - Key Metrics */}
        <MetricCard 
          title="Emails Received" 
          value="127"
          subtext="Last 24 hours"
          icon={<Mail size={20} />}
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
          title="Storage Used" 
          value="1.2 GB"
          subtext="10 GB remaining"
          icon={<HardDrive size={20} />}
        />
        
        <MetricCard 
          title="Active Workspaces" 
          value="4"
          subtext="6 available workspaces"
          icon={<Users size={20} />}
        />
        
        {/* Second row - More Metrics */}
        <MetricCard 
          title="Urgent Emails" 
          value="8"
          subtext="Requires attention"
          icon={<Star size={20} />}
          trend={{ value: "+3 new urgent", positive: false }}
          className="bg-red-500/10"
        />
        
        <MetricCard 
          title="Assets Exported" 
          value="286"
          trend={{ value: "+16% from last month", positive: true }}
          icon={<Image size={20} />}
        />
        
        <MetricCard 
          title="Team Members" 
          value="10"
          trend={{ value: "+2 this month", positive: true }}
          icon={<UserCircle size={20} />}
        />
        
        {/* Third row - Subscriptions and Team */}
        <div className="lg:col-span-2">
          <ActiveSubscriptions subscriptions={subscriptions} />
        </div>
        
        <div className="lg:col-span-2">
          <TeamMembersList members={teamMembers} />
        </div>
        
        {/* Fourth row - Tutorial */}
        <div className="lg:col-span-4">
          <TutorialCard 
            title="Getting Started with Email Processing" 
            description="Learn how to use AI-powered email processing, custom categorization, and urgency detection to streamline your workflow."
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;