import React from "react";

const StatsCard = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 card-hover">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[var(--text-secondary)] text-sm font-medium">
            {title}
          </p>
          <p className="text-2xl font-bold text-[var(--text-primary)] mt-2">
            {value}
          </p>
          <div className="flex items-center mt-2">
            <span
              className={`text-sm font-medium ${
                trend === "up" ? "text-green-400" : "text-red-400"
              }`}
            >
              {change}
            </span>
            <span className="text-[var(--text-secondary)] text-sm ml-1">
              vs last month
            </span>
          </div>
        </div>
        <div className="p-3 bg-[var(--bg-secondary)] rounded-lg">
          <Icon className="w-6 h-6 text-[var(--accent)]" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
