import React from "react";

export const ShareStack: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4 shadow border-2 border-purple-400">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <span className="text-2xl">🔗</span>
        </div>
        <div>
          <h3 className="font-bold">Share Your Stack</h3>
          <p className="text-sm text-gray-600">Earn +25 pts</p>
        </div>
      </div>
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2">
        <span>🔗</span> Share
      </button>
    </div>
  );
};
