import React from "react";

interface DailyCheckInProps {
  isCheckedIn: boolean;
  onCheckIn: () => void;
}

export const DailyCheckIn: React.FC<DailyCheckInProps> = ({
  isCheckedIn,
  onCheckIn,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4 shadow">
      <p className="text-center text-gray-600 mb-4">
        Check in daily to earn +5 points
      </p>
      <button
        onClick={onCheckIn}
        disabled={isCheckedIn}
        className={`w-full py-3 rounded-lg font-semibold ${
          isCheckedIn
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
      >
        {isCheckedIn ? "⚡ Claimed Today" : "Check In"}
      </button>
    </div>
  );
};
