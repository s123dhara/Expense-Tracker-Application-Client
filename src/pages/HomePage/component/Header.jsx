import React from "react";

const Header = () => {
  return (
    <header className="px-4 sm:px-6 lg:px-8 py-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[var(--text-primary)]">
          💰 ExpenseTracker
        </div>
        <div className="flex gap-3 sm:gap-4">
          <button className="w-32 sm:w-auto px-8 py-3 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg font-medium hover:text-[var(--text-primary)] transition-colors">
            Personal Tracking App{" "}
            <small className="text-xs opacity-70 ml-1">v1.0.0</small>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
