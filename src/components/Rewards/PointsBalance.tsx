import React from "react";
import { type UserPoints } from "../../types";

export const PointsBalance: React.FC<{ userPoints: UserPoints }> = ({
  userPoints,
}) => {
  const target = 5000;
  const progress = (userPoints.points / target) * 100;

  return (
    <div className="bg-[#F8F7FF] rounded-[24px] p-8 relative overflow-hidden shadow-sm border border-purple-50">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-purple-600 p-1.5 rounded-lg">
          <span className="text-white text-xs">🏆</span>
        </div>
        <h3 className="font-bold text-gray-700">Points Balance</h3>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-6xl font-black text-purple-600">
          {userPoints.points}
        </span>
        <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg ring-4 ring-yellow-100">
          ⭐
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-500">Progress to $5 Gift Card</span>
          <span className="text-gray-800">
            {userPoints.points}/{target}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 italic mt-2">
          🚀 Just getting started — keep earning points!
        </p>
      </div>
    </div>
  );
};
