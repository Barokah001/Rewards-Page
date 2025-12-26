import React from "react";
import { PointsBalance } from "../Rewards/PointsBalance";
import { DailyStreak } from "../Rewards/DailyStreak";
import { type UserPoints } from "../../types";

interface RedeemTabProps {
  userPoints: UserPoints;
  isCheckedIn: boolean;
}

export const RedeemTab: React.FC<RedeemTabProps> = ({
  userPoints,
  isCheckedIn,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h3 className="font-bold text-lg mb-4 border-l-4 border-purple-600 pl-3">
        Your Rewards Journey
      </h3>
      <PointsBalance userPoints={userPoints} />
      <DailyStreak userPoints={userPoints} isCheckedIn={isCheckedIn} />
    </div>
  );
};
