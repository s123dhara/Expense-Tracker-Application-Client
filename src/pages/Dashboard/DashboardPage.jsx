

import StatsCard from "./component/StatsCard";
import Chart from "./component/Chart";
import {
  FiUsers,
  FiMessageSquare,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

const DashboardPage = () => {
  const statsData = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12%",
      icon: FiUsers,
      trend: "up",
    },
    {
      title: "Active Tickets",
      value: "127",
      change: "-8%",
      icon: FiMessageSquare,
      trend: "down",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+23%",
      icon: FiTrendingUp,
      trend: "up",
    },
    {
      title: "Avg Response",
      value: "2.4h",
      change: "+5%",
      icon: FiClock,
      trend: "up",
    },
  ];

  const chartData = [65, 78, 90, 81, 56, 85, 92];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
          Dashboard
        </h1>
        <p className="text-[var(--text-secondary)]">
          Welcome back! Here's what's happening with your support system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Weekly Activity" data={chartData} />
        <Chart title="Support Requests" data={[45, 52, 38, 67, 73, 61, 58]} />
      </div>
    </>
  );
};

export default DashboardPage;
