import React, { useState } from "react";

const REWARDS_DATA = [
  {
    id: "1",
    title: "$5 Bank Transfer",
    points: 5000,
    status: "locked",
    desc: "The $5 equivalent will be transferred to your bank account.",
  },
  {
    id: "2",
    title: "$5 PayPal International",
    points: 5000,
    status: "locked",
    desc: "Receive a $5 PayPal balance transfer directly to your email.",
  },
  {
    id: "3",
    title: "$5 Virtual Visa Card",
    points: 5000,
    status: "locked",
    desc: "Use your $5 prepaid card to shop anywhere Visa is accepted.",
  },
  {
    id: "4",
    title: "Free Udemy Course",
    points: 0,
    status: "coming-soon",
    desc: "Coming Soon!",
  },
];

export const RedeemTab: React.FC = () => {
  const [filter, setFilter] = useState("locked");
  const filters = ["All Rewards", "Unlocked", "Locked", "Coming Soon"];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Redeem Your Points
      </h2>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f.toLowerCase().replace(" ", "-"))}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
              filter === f.toLowerCase().replace(" ", "-")
                ? "bg-purple-100 text-purple-700 ring-1 ring-purple-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {f}{" "}
            <span className="ml-1 opacity-60">
              {f === "All Rewards"
                ? REWARDS_DATA.length
                : REWARDS_DATA.filter(
                    (r) => r.status === f.toLowerCase().replace(" ", "-")
                  ).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REWARDS_DATA.filter(
          (r) => filter === "all-rewards" || r.status === filter
        ).map((reward) => (
          <div
            key={reward.id}
            className="bg-white border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
          >
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-4">
              {reward.title.includes("Bank")
                ? "💵"
                : reward.title.includes("Pay")
                ? "💳"
                : "🎁"}
            </div>
            <h4 className="font-bold text-gray-800 text-lg">{reward.title}</h4>
            <p className="text-gray-500 text-sm mt-2 mb-4 leading-relaxed">
              {reward.desc}
            </p>
            <div className="flex items-center gap-1 text-purple-600 font-bold mb-6">
              <span>⭐</span> {reward.points} pts
            </div>
            <button
              disabled
              className="w-full py-3 rounded-xl bg-gray-100 text-gray-400 font-bold capitalize"
            >
              {reward.status.replace("-", " ")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
