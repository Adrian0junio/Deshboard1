import React from 'react';
import { BookOpen } from 'lucide-react';

interface TutorialCardProps {
  title: string;
  description: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ title, description }) => {
  return (
    <div className="card-glow bg-[#171717]/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-800/50 text-gray-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <BookOpen size={20} />
        </div>
        
        <div>
          <h3 className="text-white text-xl mb-2 bg-clip-text bg-gradient-to-b from-white to-white/90">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <button className="mt-4 text-gray-400 text-sm hover:text-gray-300 transition-colors">
            View tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard