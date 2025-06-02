import React from 'react';
import { PlusCircle } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  initials: string;
}

interface TeamMembersListProps {
  members: TeamMember[];
}

const TeamMembersList: React.FC<TeamMembersListProps> = ({ members }) => {
  return (
    <div className="card-glow bg-[#171717]/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white text-xl bg-clip-text bg-gradient-to-b from-white to-white/90">Team members</h3>
        <button className="text-gray-400 hover:text-gray-300 transition-colors">
          <PlusCircle size={20} />
        </button>
      </div>
      
      <p className="text-gray-400 text-sm mb-6">
        Invite your team members to collaborate
      </p>
      
      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-white text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {member.initials}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">{member.name}</p>
              <p className="text-gray-400 text-xs">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersList