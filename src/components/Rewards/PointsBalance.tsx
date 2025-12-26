import React from "react";
import { type UserPoints } from "../../types";

interface PointsBalanceProps {
  userPoints: UserPoints;
}

export const PointsBalance: React.FC<PointsBalanceProps> = ({ userPoints }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-bold text-gray-600 mb-2">Points Balance</h4>
          <div className="text-5xl font-bold text-purple-600">
            {userPoints.points}
          </div>
        </div>
        <div className="bg-yellow-400 p-4 rounded-full">
          <span className="text-4xl">⭐</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress to $5 Gift Card</span>
          <span className="font-semibold">{userPoints.points}/5000</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all"
            style={{ width: `${(userPoints.points / 5000) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          🚀 Just getting started — keep earning points!
        </p>
      </div>
    </div>
  );
};
