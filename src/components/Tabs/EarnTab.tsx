import React from "react";
import { DailyCheckIn } from "../Rewards/DailyCheckIn";
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
    <>
      <DailyCheckIn isCheckedIn={isCheckedIn} onCheckIn={onCheckIn} />
      <FeaturedTool />
      <ReferralSection userPoints={userPoints} onCopyLink={onCopyLink} />
    </>
  );
};
