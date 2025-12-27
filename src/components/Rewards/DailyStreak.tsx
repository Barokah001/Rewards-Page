import React from "react";
import { type UserPoints } from "../../types";

export const DailyStreak: React.FC<{
  userPoints: UserPoints;
  isCheckedIn: boolean;
  onCheckIn: () => void;
}> = ({ userPoints, isCheckedIn, onCheckIn }) => {
  
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const todayIndex = new Date().getDay();

  return (
    <div className="bg-[#F0F9FF] rounded-[24px] p-10 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-default">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-blue-400 p-1.5 rounded-lg text-white">📅</div>
        <h3 className="font-bold text-gray-700">Daily Streak</h3>
      </div>

      <div className="text-6xl font-black text-purple-600 mb-6">
        {userPoints.daily_streak}{" "}
        <span className="text-3xl font-bold">day</span>
      </div>

      <div className="flex justify-between mb-8">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all
              ${
                i === todayIndex
                  ? "ring-2 ring-purple-600 text-purple-600 bg-white shadow-sm"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {day}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mb-4 font-medium">
        Check in daily to to earn +5 points
      </p>

      <button
        onClick={onCheckIn}
        disabled={isCheckedIn}
        className={`w-full py-4 rounded-2xl font-bold text-white transition shadow-lg flex items-center justify-center gap-2
          ${
            isCheckedIn
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#8B5CF6] hover:bg-[#7C3AED]"
          }`}
      >
        ⚡ {isCheckedIn ? "Claimed Today" : "Claim Today's Points"}
      </button>
    </div>
  );
};
