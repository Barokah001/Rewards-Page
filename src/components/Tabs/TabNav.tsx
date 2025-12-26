import React from "react";

interface TabNavProps {
  activeTab: "earn" | "redeem";
  onTabChange: (tab: "earn" | "redeem") => void;
}

export const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="relative border-b border-gray-200 mb-8">
      <div className="flex gap-8">
        <button
          onClick={() => onTabChange("earn")}
          className={`flex-1 pb-2 font-semibold ${
            activeTab === "earn"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Earn Points
        </button>
        <button
          onClick={() => onTabChange("redeem")}
          className={`flex-1 pb-2 font-semibold ${
            activeTab === "redeem"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Redeem Rewards
        </button>
      </div>
    </div>
  );
};
