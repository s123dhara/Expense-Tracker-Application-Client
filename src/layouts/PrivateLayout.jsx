import React from "react";
import Navbar from "../pages/Dashboard/component/Navbar";
import Sidebar from "../pages/Dashboard/component/Sidebar";

const PrivateLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
