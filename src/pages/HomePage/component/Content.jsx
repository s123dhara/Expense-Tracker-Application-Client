import React from "react";

const Content = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)] leading-tight">
          Take Control of Your{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Financial Future
          </span>
        </h1>
        <p className="text-lg sm:text-xl mb-10 text-[var(--text-secondary)] max-w-3xl mx-auto">
          Track expenses, set budgets, and achieve your financial goals with our
          intuitive expense tracking application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-3 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg font-medium hover:text-[var(--text-primary)] transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </main>
  );
};

export default Content;
