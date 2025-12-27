import React from "react";
import {
  Home,
  Compass,
  Library,
  Database,
  CreditCard,
  Gift,
  Settings,
  LogOut,
} from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  userEmail: string;
  activePath: string;
  onSignOut: () => void;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  userEmail,
  onSignOut,
}) => {
  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Discover", icon: <Compass size={20} />, path: "/discover" },
    { name: "Library", icon: <Library size={20} />, path: "/library" },
    { name: "Tech Stack", icon: <Database size={20} />, path: "/stack" },
    { name: "Subscriptions", icon: <CreditCard size={20} />, path: "/subs" },
    { name: "Rewards Hub", icon: <Gift size={20} />, path: "/rewards" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onSignOut}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
        fixed md:sticky top-0 left-0 z-50
        h-screen w-64 bg-white border-r border-gray-100
        transition-transform duration-300 ease-in-out
        flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Desktop Logo (Hidden on mobile as it's in the Header) */}
        <div className="hidden md:flex p-6 items-center gap-2">
          <div className="w-8 h-8 bg-[#8B5CF6] rounded-xl flex items-center justify-center text-white font-bold">
            f
          </div>
          <span className="text-xl font-bold text-[#2D1B69]">Flowva</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-1 mt-4 md:mt-0">
          {menuItems.map((item) => {
            const isActive = item.name === "Rewards Hub"; // Targeting the assessment page
            return (
              <div
                key={item.name}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#F3E8FF] text-[#7E22CE] font-bold shadow-sm"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </div>
            );
          })}
        </nav>

        {/* User Profile & Sign Out Section */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/30">
          <div className="flex items-center gap-3 p-2 mb-4">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm ring-2 ring-white shadow-sm">
              {userEmail.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-gray-900 truncate">
                {userEmail.split("@")[0]}
              </p>
              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
            </div>
          </div>

          <button
            onClick={onSignOut}
            className="flex items-center gap-2 w-full p-2 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 transition rounded-lg"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
