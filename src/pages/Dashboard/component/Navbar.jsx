import React, { useState } from "react";
import { FiUser, FiLogOut, FiSettings, FiBell } from "react-icons/fi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[var(--bg-card)] border-b border-[var(--border)] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EX</span>
            </div>
            <h1 className="text-xl font-semibold gradient-text">ExpoTrack</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
            <FiBell className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <FiUser className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-[var(--text-primary)]">Admin</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                <div className="py-1">
                  <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors">
                    <FiSettings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                  <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-[var(--bg-secondary)] transition-colors">
                    <FiLogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;