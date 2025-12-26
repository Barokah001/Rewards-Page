import React, { useState, useEffect } from "react";
import { SideMenu } from "./components/Layout/SideMenu";
import { EarnTab } from "./components/Tabs/EarnTab";
import { RedeemTab } from "./components/Tabs/RedeemTab";
import { AuthForm } from "./components/Auth/AuthForm";
import { useAuth } from "./hooks/useAuth";
import { useUserPoints } from "./hooks/useUserPoints";
import { BellIcon } from "lucide-react";

const App: React.FC = () => {
  const { user, loading, checkUser, signOut } = useAuth();
  const { userPoints, loadUserPoints, checkIn, isCheckedIn } = useUserPoints(
    user?.id
  );
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");

  useEffect(() => {
    if (user) loadUserPoints();
  }, [user]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-purple-600">
        Loading Flowva...
      </div>
    );
  if (!user) return <AuthForm onAuthSuccess={checkUser} />;

  return (
    <div className="flex min-h-screen bg-white font-sans">
      <SideMenu
        userEmail={user.email || ""}
        activePath="/rewards"
        onSignOut={signOut}
      />

      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        <header className="mb-10 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Rewards Hub
            </h1>
            <p className="text-gray-500 font-medium">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
          </div>
          <button className="relative p-2.5 bg-gray-50 rounded-full hover:bg-gray-100 transition">
            <BellIcon size={22} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
              3
            </span>
          </button>
        </header>

        {/* Tab Switcher with straight underline */}
        <div className="relative border-b border-gray-200 mb-10">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("earn")}
              className={`pb-4 px-2 text-sm font-bold transition-all relative z-10 ${
                activeTab === "earn"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
            >
              Earn Points
            </button>
            <button
              onClick={() => setActiveTab("redeem")}
              className={`pb-4 px-2 text-sm font-bold transition-all relative z-10 ${
                activeTab === "redeem"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
            >
              Redeem Rewards
            </button>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {activeTab === "earn" ? (
            <EarnTab
              userPoints={userPoints}
              isCheckedIn={isCheckedIn()}
              onCheckIn={checkIn}
            />
          ) : (
            <RedeemTab />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
