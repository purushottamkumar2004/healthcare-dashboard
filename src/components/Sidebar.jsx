import React from 'react';
import { navigationLinks } from '../data/navigation';
import '../styles/Sidebar.css';
import { FiHome, FiCalendar, FiClock, FiPieChart, FiActivity, FiMessageSquare, FiHelpCircle, FiSettings } from 'react-icons/fi';

const iconComponents = {
  Dashboard: FiHome,
  History: FiClock,
  Calendar: FiCalendar,
  Appointments: FiCalendar,
  Statistics: FiPieChart,
  Tests: FiActivity,
  Chat: FiMessageSquare,
  Support: FiHelpCircle,
  Setting: FiSettings
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-heading">General</h3>
      <nav className="sidebar-nav">
        <ul>
          {navigationLinks.map((link, index) => {
            const Icon = iconComponents[link];
            return (
              <li key={index} className="nav-item">
                <Icon className="nav-icon" />
                <span>{link}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;