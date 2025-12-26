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
  X,
} from "lucide-react";

// Updated Interface to include mobile controls
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
  onSignOut: () => void;
  activePath: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ 
  isOpen, 
  onClose, 
  userEmail, 
  onSignOut 
}) => {
  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Discover", icon: <Compass size={20} />, path: "/discover" },
    { name: "Library", icon: <Library size={20} />, path: "/library" },
    { name: "Tech Stack", icon: <Database size={20} />, path: "/stack" },
    { name: "Subscriptions", icon: <CreditCard size={20} />, path: "/subs" },
    {
      name: "Rewards Hub",
      icon: <Gift size={20} />,
      path: "/rewards",
      active: true,
    },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <>
      {/* 1. Mobile Overlay (Dark background when menu is open) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* 2. Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 h-screen transition-transform duration-300 ease-in-out transform 
        md:relative md:translate-x-0 sticky top-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              f
            </div>
            <span className="text-xl font-bold text-purple-900">Flowva</span>
          </div>
          {/* Close Button (Mobile Only) */}
          <button onClick={onClose} className="md:hidden p-1 text-gray-500 hover:bg-gray-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
                item.active
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {item.icon} {item.name}
            </div>
          ))}
        </nav>

        {/* User Profile & Sign Out */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">
                {userEmail.split("@")[0]}
              </p>
              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={onSignOut}
            className="mt-4 w-full flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 p-2 transition-colors"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>
    </>
  );
};