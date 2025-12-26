import React from "react";

export const FeaturedTool: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] rounded-[24px] p-6 text-white relative shadow-xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-8 h-8 rounded-full bg-white" />
          <div className="w-8 h-8 rounded-lg bg-white" />
          <div className="w-8 h-8 transform rotate-45 bg-white" />
        </div>
      </div>

      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
        Featured
      </span>

      <h2 className="text-3xl font-black mt-4 mb-2">Top Tool Spotlight</h2>
      <h3 className="text-2xl font-bold opacity-90 mb-6">Reclaim</h3>

      <div className="bg-white rounded-[24px] p-6 text-gray-800 shadow-inner">
        <div className="flex gap-4">
          <div className="bg-purple-50 p-3 rounded-xl h-fit">📅</div>
          <div>
            <h4 className="font-bold text-lg mb-2 leading-tight">
              Automate and Optimize Your Schedule
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Reclaim.ai is an AI-powered calendar assistant that automatically
              schedules your tasks, meetings, and breaks to boost productivity.
              Free to try — earn Flowva Points when you sign up!
            </p>

            <div className="flex flex-col gap-2">
              <button className="w-full bg-white text-purple-600 py-2.5 rounded-xl font-bold text-xs hover:bg-gray-100 transition">
                👤 Sign up
              </button>
              <button className="w-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] text-white py-2.5 rounded-xl font-bold text-xs hover:opacity-90 transition">
                🎁 Claim 50 pts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
