import React, { useState, useEffect } from "react";
import { SideMenu } from "./components/Layout/SideMenu";
import { EarnTab } from "./components/Tabs/EarnTab";
import { RedeemTab } from "./components/Tabs/RedeemTab";
import { AuthForm } from "./components/Auth/AuthForm";
import { useAuth } from "./hooks/useAuth";
import { useUserPoints } from "./hooks/useUserPoints";
import { Bell, Menu } from "lucide-react"; // Added Menu for mobile toggle

const App: React.FC = () => {
  const { user, loading, checkUser, signOut } = useAuth();
  const { userPoints, loadUserPoints, checkIn, isCheckedIn } = useUserPoints(
    user?.id
  );

  // State for mobile sidebar responsiveness
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");

  useEffect(() => {
    if (user) loadUserPoints();
  }, [user]);

  // Handle Copy Link Logic for the Referral Section
  const handleCopyLink = () => {
    const link = `https://app.flowvahub.com/signup?ref=${userPoints.referral_code}`;
    navigator.clipboard.writeText(link);
    alert("Referral link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center font-bold text-purple-600 bg-gray-50">
        <div className="animate-pulse">Loading Flowva...</div>
      </div>
    );
  }

  if (!user) return <AuthForm onAuthSuccess={checkUser} />;

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        userEmail={user.email || ""}
        activePath="/rewards"
        onSignOut={signOut}
      />

      <main className="flex-1 w-full min-w-0 p-4 md:p-10 max-w-7xl mx-auto">
        {/* Mobile Header: Fixed alignment */}
        <div className="md:hidden flex items-center justify-between mb-8 px-2 w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              f
            </div>
            <span className="text-xl font-bold text-purple-900">Flowva</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Desktop Header */}
        <header className="mb-10 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Rewards Hub
            </h1>
            <p className="text-gray-500 font-medium">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
          </div>
          <button className="hidden md:block relative p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition border border-gray-100">
            <Bell size={22} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
              3
            </span>
          </button>
        </header>

        {/* Tab Navigation with straight underline spanning the width */}
        <div className="relative border-b border-gray-200 mb-10">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("earn")}
              className={`pb-4 px-2 text-sm font-bold transition-all relative z-10 ${
                activeTab === "earn"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
              }`}
            >
              Earn Points
            </button>
            <button
              onClick={() => setActiveTab("redeem")}
              className={`pb-4 px-2 text-sm font-bold transition-all relative z-10 ${
                activeTab === "redeem"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
              }`}
            >
              Redeem Rewards
            </button>
          </div>
        </div>

        {/* Animated Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
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
  );
};

export default App;
