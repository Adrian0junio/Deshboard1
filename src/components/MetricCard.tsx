import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

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
    <div className={`bg-[#1a1a1a] rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        {icon && <div className="text-gray-400 bg-white/5 p-2 rounded-lg">{icon}</div>}
      </div>
      
      <div className="flex flex-col">
        <span className="text-3xl font-semibold text-white mb-1">{value}</span>
        {subtext && <span className="text-gray-400 text-sm">{subtext}</span>}
        
        {trend && (
          <div className="mt-4 flex items-center">
            <span className={`flex items-center text-sm ${
              trend.positive ? 'text-green-400' : 'text-red-400'
            }`}>
              {trend.positive ? (
                <ArrowUp size={16} className="mr-1" />
              ) : (
                <ArrowDown size={16} className="mr-1" />
              )}
              {trend.value}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;