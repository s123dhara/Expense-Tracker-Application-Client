import React from "react";
// import "../App.css";

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] w-full">{children}</div>
  );
};

export default PublicLayout;
