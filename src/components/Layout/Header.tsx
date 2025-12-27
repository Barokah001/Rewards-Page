import React, { useState } from "react";
import { Menu, Bell, X } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [showNotifs, setShowNotifs] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Group: Menu + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="p-2 hover:bg-gray-100 rounded-lg md:hidden transition"
          >
            <Menu size={24} className="text-gray-600" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8B5CF6] rounded-xl flex items-center justify-center text-white font-bold">
              f
            </div>
            <span className="text-xl font-bold text-[#2D1B69]">Flowva</span>
          </div>
        </div>

        {/* Right Group: Notification Icon */}
        <div className="relative">
          <button
            onClick={() => setShowNotifs(!showNotifs)}
            className="relative p-2.5 bg-gray-50/50 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-gray-100 transition shadow-sm"
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* Functional Notification Dropdown */}
          {showNotifs && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white flex justify-between items-center">
                <span className="font-bold text-sm">Notifications</span>
                <button onClick={() => setShowNotifs(false)}>
                  <X size={16} />
                </button>
              </div>
              <div className="max-h-60 overflow-y-auto">
                <div className="p-4 border-b border-gray-50 hover:bg-purple-50 transition cursor-pointer">
                  <p className="text-sm font-bold text-gray-800">
                    Daily Streak Reminder
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Don't lose your 1 day streak! Claim now.
                  </p>
                </div>
                <div className="p-4 hover:bg-purple-50 transition cursor-pointer">
                  <p className="text-sm font-bold text-gray-800">
                    Welcome to Flowva!
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Explore your new rewards dashboard.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
