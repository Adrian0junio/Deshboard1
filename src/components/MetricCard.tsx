import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    positive?: boolean;
  };
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtext,
  icon,
  trend,
  className = '',
}) => {
  return (
    <div className={`card-glow bg-[#171717]/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 hover:border-gray-700/50 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${className}`}>
      <div className="flex justify-between items-start mb-6">
        <span className="text-gray-400 text-sm">{title}</span>
        {icon && <div className="text-gray-500">{icon}</div>}
      </div>
      
      <div className="flex flex-col">
        <span className="text-4xl font-medium text-white mb-2 bg-clip-text bg-gradient-to-b from-white to-white/80">{value}</span>
        {subtext && <span className="text-gray-400 text-sm">{subtext}</span>}
        
        {trend && (
          <div className="mt-2">
            <span className={`text-sm ${trend.positive ? 'text-green-400' : 'text-red-400'}`}>
              {trend.value}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard