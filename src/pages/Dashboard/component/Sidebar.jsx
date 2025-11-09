import React, { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiMessageSquare,
  FiSettings,
  FiBarChart2,
  FiHelpCircle,
  FiMenu,
  FiX,
  FiCreditCard,
  FiActivity,
  FiBox,
  FiBookmark
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  // const [activeItem, setActiveItem] = useState("category");
  const location = useLocation();  
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { icon: FiHome, label: "Dashboard", id: "dashboard", active: false },
    { icon: FiActivity, label: "Category", id: "category",active: false },
    { icon: FiMenu, label: "Transaction Mode", id: "transaction_mode", active: false },
    { icon: FiBox, label: "Monthly Budget", id: "budget", active: false },
    { icon: FiBookmark, label: "Others Payment", id: "otherspayment", active: false },
    { icon: FiCreditCard, label: "Transactions", id: "transactions", active: false },
    { icon: FiBarChart2, label: "History", id: "history", active: false },
    // { icon: FiHelpCircle, label: "Support", active: false },
    // { icon: FiUsers, label: "Users", active: false },
    // { icon: FiMessageSquare, label: "Transactions", active: false },
    // { icon: FiSettings, label: "Settings", active: false },
  ];

  // Set menuitems active state 
  menuItems.forEach(item => { item.active = location.pathname.includes(item.id.toLowerCase()) });

  const handleItemClick = (itemId) => {
    // setActiveItem(itemId);
    navigate(`/${itemId}`)
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-[var(--text-primary)]"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 backdrop-blur-lg bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-[var(--bg-card)] border-r border-[var(--border)] min-h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 pt-16 lg:pt-6">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsOpen(false)
                  handleItemClick(item.id)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
