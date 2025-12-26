import React from "react";

interface SideMenuProps {
  isOpen: boolean;
  userEmail: string;
  onClose: () => void;
  onSignOut: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  userEmail,
  onClose,
  onSignOut,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={onClose}
    >
      <div
        className="bg-white w-64 h-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <div className="space-y-4">
          <p className="text-gray-600">{userEmail}</p>
          <button
            onClick={onSignOut}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
