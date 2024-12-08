import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to the Dashboard</h1>
        <div className="user-info">
          <span>Hello, User</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
