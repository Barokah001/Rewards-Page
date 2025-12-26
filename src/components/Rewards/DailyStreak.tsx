import React from "react";
import { type UserPoints } from "../../types";

interface DailyStreakProps {
  userPoints: UserPoints;
  isCheckedIn: boolean;
}

export const DailyStreak: React.FC<DailyStreakProps> = ({
  userPoints,
  isCheckedIn,
}) => {
  const getDayInitial = (offset: number) => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const today = new Date().getDay();
    return days[(today + offset) % 7];
  };

  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">📅</span>
        <h4 className="font-bold">Daily Streak</h4>
      </div>
      <div className="text-4xl font-bold text-purple-600 mb-4">
        {userPoints.daily_streak} day
      </div>
      <div className="flex gap-2 justify-center">
        {[0, 1, 2, 3, 4, 5, 6].map((offset) => (
          <div
            key={offset}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              offset < userPoints.daily_streak
                ? "bg-purple-600 text-white"
                : offset === 0 && isCheckedIn
                ? "bg-purple-400 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {getDayInitial(offset)}
          </div>
        ))}
      </div>
    </div>
  );
};
