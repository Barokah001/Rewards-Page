import React from "react";
import { PointsBalance } from "../Rewards/PointsBalance";
import { DailyStreak } from "../Rewards/DailyStreak";
import { FeaturedTool } from "../Rewards/FeaturedTool";
import { ReferralSection } from "../Rewards/ReferralSection"; 
import { type UserPoints } from "../../types";

interface EarnTabProps {
  userPoints: UserPoints;
  isCheckedIn: boolean;
  onCheckIn: () => void;
  onCopyLink: () => void;
}

export const EarnTab: React.FC<EarnTabProps> = ({
  userPoints,
  isCheckedIn,
  onCheckIn,
  onCopyLink,
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-purple-600 pl-4">
        Your Rewards Journey
      </h2>

      {/* This is your laptop-friendly 3-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <PointsBalance userPoints={userPoints} />
        <DailyStreak
          userPoints={userPoints}
          isCheckedIn={isCheckedIn}
          onCheckIn={onCheckIn}
        />
        <FeaturedTool />
      </div>

      <ReferralSection userPoints={userPoints} onCopyLink={onCopyLink} />
    </div>
  );
};
