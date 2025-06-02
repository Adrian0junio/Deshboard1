import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import MetricCard from '../components/MetricCard';
import TeamMembersList from '../components/TeamMembersList';
import ActiveSubscriptions from '../components/ActiveSubscriptions';
import TutorialCard from '../components/TutorialCard';
import { HardDrive, Users, Image, UserCircle } from 'lucide-react';

// Mock data
const teamMembers = [
  { id: '1', name: 'Daniel Cromitch', email: 'dc@paddle.com', initials: 'DC' },
  { id: '2', name: 'Melissa Lee', email: 'ml@paddle.com', initials: 'ML' },
  { id: '3', name: 'Jackson Khan', email: 'JK@paddle.com', initials: 'JK' },
  { id: '4', name: 'Isa Lopez', email: 'il@paddle.com', initials: 'IL' },
];

const subscriptions: any[] = [];

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First row */}
        <MetricCard 
          title="Storage used" 
          value="1.2 GB" 
          subtext="10 GB remaining"
          icon={<HardDrive size={20} />}
        />
        
        <MetricCard 
          title="Active workspaces" 
          value="4" 
          subtext="6 available workspaces"
          icon={<Users size={20} />}
        />
        
        <div className="lg:row-span-2">
          <TeamMembersList members={teamMembers} />
        </div>
        
        {/* Second row */}
        <MetricCard 
          title="Assets exported" 
          value="286" 
          trend={{ value: "+16% from last month", positive: true }}
          icon={<Image size={20} />}
        />
        
        <MetricCard 
          title="Collaborators" 
          value="10" 
          trend={{ value: "+27% from last month", positive: true }}
          icon={<UserCircle size={20} />}
        />
        
        {/* Third row */}
        <div className="md:col-span-2">
          <ActiveSubscriptions subscriptions={subscriptions} />
        </div>
        
        {/* Fourth row */}
        <div className="md:col-span-3">
          <TutorialCard 
            title="Tutorials" 
            description="Learn how to get the most out of AeroEdit tools and live export capabilities."
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;