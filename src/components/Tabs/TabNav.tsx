import React from "react";

interface TabNavProps {
  activeTab: "earn" | "redeem";
  onTabChange: (tab: "earn" | "redeem") => void;
}

export const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => onTabChange("earn")}
        className={`flex-1 pb-2 font-semibold ${
          activeTab === "earn"
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-500"
        }`}
      >
        Earn Points
      </button>
      <button
        onClick={() => onTabChange("redeem")}
        className={`flex-1 pb-2 font-semibold ${
          activeTab === "redeem"
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-500"
        }`}
      >
        Redeem Rewards
      </button>
    </div>
  );
};
