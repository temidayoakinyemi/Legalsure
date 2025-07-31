import React, { useState } from "react";
import logo2 from "../../assets/logo2.svg";
import menuicon from "../../assets/menuicon.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="container">
      <img src={logo2} alt="Logo" className="logo" />
      <ul className={`mobile-nav ${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li>Home</li>
        <li>About Us</li>
        <li>Paper</li>
        <li>Builder</li>
        <li>Advicor</li>
        <li>Contact Us</li>
      </ul>
      <img
        src={menuicon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
