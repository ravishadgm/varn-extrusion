import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Images from "@assets/images";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Technical", path: "/technical" },
  // { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
   { name: "Catalog", path: "/catalog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src={Images.logo} alt="QB Corp Logo" />
        </div>

        <nav className={`${styles.headerNav} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => {
            const isContact = link.name.toLowerCase() === "contact";
            return (
              <React.Fragment key={link.name}>
                {isContact && <div className={styles.headerSeparator} />}
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

        {/* Menu / Close Icon */}
        <div
          className={styles.headerMenuIcon}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <div className={styles.closeIcon}>×</div>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
