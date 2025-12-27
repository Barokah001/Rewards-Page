import React, { useState, useEffect } from "react";
import { Header } from "./components/Layout/Header";
import { SideMenu } from "./components/Layout/SideMenu";
import { EarnTab } from "./components/Tabs/EarnTab";
import { RedeemTab } from "./components/Tabs/RedeemTab";
import { AuthForm } from "./components/Auth/AuthForm";
import { useAuth } from "./hooks/useAuth";
import { useUserPoints } from "./hooks/useUserPoints";

const App: React.FC = () => {
  const { user, loading, checkUser, signOut } = useAuth();
  const { userPoints, loadUserPoints, checkIn, isCheckedIn } = useUserPoints(
    user?.id
  );

  // UI State Management
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (user) {
      loadUserPoints();
    }
  }, [user, loadUserPoints]);

  const handleCopyLink = () => {
    const link = `https://app.flowvahub.com/signup?ref=${userPoints.referral_code}`;
    navigator.clipboard.writeText(link);
    alert("Referral link copied to clipboard!");
  };

  const handleSignOut = async () => {
    await signOut();
    setIsSidebarOpen(false);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <p className="text-purple-600 font-bold">Loading Flowva...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm onAuthSuccess={checkUser} />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. Top Header - Functional justify-between layout */}
      <Header onMenuToggle={() => setIsSidebarOpen(true)} />

      <div className="flex flex-1 relative">
        {/* 2. Responsive SideMenu - Handles mobile closing logic */}
        <SideMenu
          isOpen={isSidebarOpen}
          userEmail={user.email || ""}
          activePath="/rewards"
          onSignOut={handleSignOut}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* 3. Main Dashboard Content */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          {/* Page Title Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Rewards Hub
            </h1>
            <p className="text-gray-500 font-medium mt-1">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
          </div>

          {/* High-Fidelity Tab Navigation (Straight Underline) */}
          <div className="relative border-b border-gray-200 mb-10">
            <div className="flex gap-10">
              <button
                onClick={() => setActiveTab("earn")}
                className={`pb-4 px-1 text-sm font-bold transition-all relative z-10 ${
                  activeTab === "earn"
                    ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6]"
                    : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
                }`}
              >
                Earn Points
              </button>
              <button
                onClick={() => setActiveTab("redeem")}
                className={`pb-4 px-1 text-sm font-bold transition-all relative z-10 ${
                  activeTab === "redeem"
                    ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6]"
                    : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
                }`}
              >
                Redeem Rewards
              </button>
            </div>
          </div>

          {/* Tab Content with Animation */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeTab === "earn" ? (
              <EarnTab
                userPoints={userPoints}
                isCheckedIn={isCheckedIn()}
                onCheckIn={checkIn}
                onCopyLink={handleCopyLink}
              />
            ) : (
              <RedeemTab />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
