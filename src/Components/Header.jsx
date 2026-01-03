/**
 * Header component
 *
 * Top navigation bar for the landing page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ testflightUrl }) => {
  return (
    <header className="top-nav">
      <div className="logo">SteamDB Mobile</div>
      <nav className="nav-links">
        <a href="#home">Головна</a>
        <a href="#about">Можливості</a>
        <a href="#portfolio">Екрани</a>
        <a href="#footer">Контакти</a>
      </nav>
      <a
        className="nav-cta"
        href={testflightUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        TestFlight
      </a>
    </header>
  );
};

Header.defaultProps = {
  testflightUrl: "",
};

Header.propTypes = {
  testflightUrl: PropTypes.string,
};

export default Header;
