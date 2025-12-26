import React from "react";
import { type UserPoints } from "../../types";

interface ReferralSectionProps {
  userPoints: UserPoints;
  onCopyLink: () => void;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({
  userPoints,
  onCopyLink,
}) => {
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm mt-8">
      <h3 className="font-bold text-lg mb-4 border-l-4 border-purple-600 pl-3">
        Refer & Earn
      </h3>

      <div className="bg-purple-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⭐</span>
          <h4 className="font-bold">Refer and win 10,000 points!</h4>
        </div>
        <p className="text-sm text-gray-700">
          Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of{" "}
          <span className="text-purple-600 font-bold">10,000 points</span>.
          Friends must complete onboarding to qualify.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">👥</span>
          <div>
            <h4 className="font-bold">Share Your Link</h4>
            <p className="text-sm text-gray-600">
              Invite friends and earn 25 points when they join!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {userPoints.referrals}
            </div>
            <div className="text-sm text-gray-600">Referrals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {userPoints.referrals * 25}
            </div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-600 mb-2">
            Your personal referral link:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={`https://app.flowvahub.com/signup?ref=${userPoints.referral_code}`}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
            />
            <button
              onClick={onCopyLink}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              📋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
