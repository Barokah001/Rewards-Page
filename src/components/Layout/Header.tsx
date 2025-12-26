import React from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onMenuToggle} className="text-2xl">
            ☰
          </button>
          <h1 className="text-xl font-bold">Rewards Hub</h1>
        </div>
        <button className="relative">
          <span className="text-2xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </header>
  );
};