/**
 * Header component
 *
 * Top navigation bar for the landing page.
 */
import React from "react";

const Header = () => {
  return (
    <header className="top-nav">
      <div className="logo">SteamDB Mobile</div>
      <nav className="nav-links">
        <a href="#home">Головна</a>
        <a href="#about">Можливості</a>
        <a href="#portfolio">Екрани</a>
        <a href="#footer">Контакти</a>
      </nav>
      <button className="nav-cta">TestFlight</button>
    </header>
  );
};

export default Header;
