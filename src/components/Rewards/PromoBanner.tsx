import React from "react";

export const PromoBanner: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow">
      <p className="text-sm">
        Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of{" "}
        <span className="text-purple-600 font-bold">10,000 points</span>.
        Friends must complete onboarding to qualify.
      </p>
    </div>
  );
};
