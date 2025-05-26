import React from 'react';
import '../styles/Header.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." disabled />
        </div>
        <div className="notification-icon">
          <FiBell />
        </div>
        <div className="user-profile">
          <div className="avatar">JD</div>
          <span className="username">Purushottam kumar</span>
        </div>
        <button className="add-button">
          <FiPlus />
        </button>
      </div>
    </header>
  );
}

export default Header;