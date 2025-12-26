import React, { useState, useEffect } from "react";
import { AuthForm } from "./components/Auth/AuthForm";
import { Header } from "./components/Layout/Header";
import { SideMenu } from "./components/Layout/SideMenu";
import { PromoBanner } from "./components/Rewards/PromoBanner";
import { ShareStack } from "./components/Rewards/ShareStack";
import { TabNav } from "./components/Tabs/TabNav";
import { EarnTab } from "./components/Tabs/EarnTab";
import { RedeemTab } from "./components/Tabs/RedeemTab";
import { useAuth } from "./hooks/useAuth";
import { useUserPoints } from "./hooks/useUserPoints";

const App: React.FC = () => {
  const { user, loading, checkUser, signOut } = useAuth();
  const { userPoints, loadUserPoints, checkIn, isCheckedIn } = useUserPoints(
    user?.id
  );
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (user) loadUserPoints();
  }, [user]);

  const handleCopyLink = () => {
    const link = `https://app.flowvahub.com/signup?ref=${userPoints.referral_code}`;
    navigator.clipboard.writeText(link);
    alert("Referral link copied!");
  };

  const handleSignOut = async () => {
    await signOut();
    setMenuOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm onAuthSuccess={checkUser} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <SideMenu
        isOpen={menuOpen}
        userEmail={user.email}
        onClose={() => setMenuOpen(false)}
        onSignOut={handleSignOut}
      />

      <div className="max-w-6xl mx-auto p-4 pb-20">
        <PromoBanner />
        <ShareStack />
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "earn" ? (
          <EarnTab
            userPoints={userPoints}
            isCheckedIn={isCheckedIn()}
            onCheckIn={checkIn}
            onCopyLink={handleCopyLink}
          />
        ) : (
          <RedeemTab userPoints={userPoints} isCheckedIn={isCheckedIn()} />
        )}
      </div>
    </div>
  );
};

export default App;
