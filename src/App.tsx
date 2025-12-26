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
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <SideMenu
        userEmail={user.email || ""}
        activePath="/rewards"
        onSignOut={signOut}
      />

      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-purple-600">Flowva</span>
          <BellIcon className="text-gray-400" />
        </div>

        <header className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Rewards Hub</h1>
            <p className="text-gray-500 mt-1">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
          </div>
          <button className="hidden md:block relative p-2 bg-white rounded-full border shadow-sm">
            <BellIcon size={24} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
              3
            </span>
          </button>
        </header>

        {/* Tab Switcher */}
        <div className="flex gap-8 border-b mb-8">
          <button
            onClick={() => setActiveTab("earn")}
            className={`pb-4 px-2 font-bold transition-all ${
              activeTab === "earn"
                ? "border-b-4 border-purple-600 text-purple-600"
                : "text-gray-400"
            }`}
          >
            Earn Points
          </button>
          <button
            onClick={() => setActiveTab("redeem")}
            className={`pb-4 px-2 font-bold transition-all ${
              activeTab === "redeem"
                ? "border-b-4 border-purple-600 text-purple-600"
                : "text-gray-400"
            }`}
          >
            Redeem Rewards
          </button>
        </div>

        <div className="animate-in fade-in duration-500">
          {activeTab === "earn" ? (
            <EarnTab
              userPoints={userPoints}
              isCheckedIn={isCheckedIn()}
              onCheckIn={checkIn}
              onCopyLink={() => {}}
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
