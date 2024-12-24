import React from "react";
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
        <h1 className="logo">
            🎾🏏FamFit🏈🏐
          </h1>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reservation">Reserve</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;