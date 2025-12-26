import React from "react";

export const FeaturedTool: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 mb-4 shadow text-white">
      <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-sm">
        Featured
      </span>
      <h2 className="text-2xl font-bold mt-2 mb-4">
        Top Tool Spotlight
        <br />
        Reclaim
      </h2>
      <div className="bg-white text-gray-800 rounded-lg p-4 mt-4">
        <div className="flex items-start gap-3">
          <span className="text-3xl">📅</span>
          <div>
            <h3 className="font-bold mb-2">
              Automate and Optimize Your Schedule
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Reclaim.ai is an AI-powered calendar assistant that automatically
              schedules your tasks, meetings, and breaks to boost productivity.
              Free to try — earn Flowva Points when you sign up!
            </p>
            <div className="flex gap-2">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700">
                👤 Sign up
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                🎁 Claim 50 pts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
