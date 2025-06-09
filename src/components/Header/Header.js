import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/images/logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Technical", path: "/technical" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="QB Corp Logo" />
        </div>

        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => {
            const isContact = link.name.toLowerCase() === "contact";
            return (
              <React.Fragment key={link.name}>
                {isContact && <div className="header__separator" />}
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </React.Fragment>
            );
          })}
        </nav>

        <div
          className={`header__menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
