import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Subscription {
  id: string;
  name: string;
  status: 'active' | 'expired' | 'pending';
  renewDate?: string;
  price?: string;
}

interface ActiveSubscriptionsProps {
  subscriptions: Subscription[];
}

const ActiveSubscriptions: React.FC<ActiveSubscriptionsProps> = ({ subscriptions }) => {
  return (
    <div className="card-glow bg-[#171717]/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl bg-clip-text bg-gradient-to-b from-white to-white/90">Active subscriptions</h3>
        <button className="text-xs text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-1">
          <span>View all</span>
          <ChevronRight size={14} />
        </button>
      </div>
      
      {subscriptions.length === 0 ? (
        <div className="py-4">
          <p className="text-gray-400">No active subscriptions</p>
        </div>
      ) : (
        <div className="space-y-3">
          {subscriptions.map((subscription) => (
            <div 
              key={subscription.id} 
              className="p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-200 cursor-pointer bg-gradient-to-b from-white/[0.02] to-transparent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white">{subscription.name}</p>
                  {subscription.renewDate && (
                    <p className="text-gray-400 text-xs">Renews on {subscription.renewDate}</p>
                  )}
                </div>
                {subscription.price && (
                  <p className="text-green-400">{subscription.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveSubscriptions