import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import {
  FaIndustry,
  FaCubes,
  FaCogs,
  FaEye,
  FaHandshake,
  FaComments,
} from "react-icons/fa";
import Images from "@assets/images";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Aluminum Fabrication",
        icon: <FaIndustry />,
        path: "/services/fabrication",
        isReal: true,
      },
      {
        title: "Truss Assembly",
        icon: <FaCubes />,
        path: "/services/truss-assembly",
        isReal: true,
      },
    ],
  },
  { name: "Company Varn", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setMenuOpen(false);
        setServicesOpenMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpenMobile(false);
    setShowDropdown(false);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };
  
  const toggleMobileServices = (e) => {
    e.preventDefault();
    setServicesOpenMobile((prev) => !prev);
  };

  // Navigation item mouse handlers
  const handleNavMouseEnter = () => {
    if (!isMobile) {
      // Clear any existing timeout
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        setDropdownTimeout(null);
      }
      setShowDropdown(true);
    }
  };

  const handleNavMouseLeave = () => {
    if (!isMobile) {
      // Add a delay before closing
      const timeout = setTimeout(() => {
        setShowDropdown(false);
      }, 150); // 150ms delay
      setDropdownTimeout(timeout);
    }
  };

  // Dropdown menu mouse handlers
  const handleDropdownMouseEnter = () => {
    if (!isMobile) {
      // Clear timeout when entering dropdown
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        setDropdownTimeout(null);
      }
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!isMobile) {
      // Close immediately when leaving dropdown
      setShowDropdown(false);
    }
  };

  const handleServiceItemClick = () => {
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src={Images.logo} alt="Varn Logo" />
        </div>

        <nav className={`${styles.headerNav} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => {
            const isServices = link.name.toLowerCase() === "services";

            return (
              <div key={link.name} className={styles.navItem}>
                {isServices ? (
                  <div
                    className={styles.dropdownWrapper}
                    
                  >
                    <NavLink
    to={link.path}
    onMouseEnter={handleNavMouseEnter}  // Add here
    onMouseLeave={handleNavMouseLeave}  // Add here
    onClick={(e) => {
      if (isMobile) {
        e.preventDefault();
        toggleMobileServices(e);
      } else {
        e.preventDefault();
        setShowDropdown((prev) => !prev);
      }
    }}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                      }
                    >
                      {link.name}
                      <span
                        className={`${styles.dropdownArrow} ${
                          servicesOpenMobile ? styles.rotated : ""
                        }`}
                      >
                        ▼
                      </span>
                    </NavLink>

                    {/* Desktop Dropdown */}
                    {!isMobile && showDropdown && (
                      <div 
                        className={styles.mainDropMenu}
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className={styles.dropdownMenu}>
                          <div className={styles.innerMenu}>
                            <h4 className={styles.dropdownHeader}>
                              OUR KEY SERVICES
                            </h4>

                            <div className={styles.dropdownGrid}>
                              {link.dropdownItems?.map((item, i) => (
                                <NavLink
                                  key={i}
                                  to={item.path}
                                  className={styles.dropdownItem}
                                  onClick={closeMenu}
                                >
                                  <div className={styles.dropdownIcon}>
                                    {item.icon}
                                  </div>
                                  <span className={styles.dropdownTitle}>
                                    {item.title}
                                  </span>
                                </NavLink>
                              ))}
                            </div>

                            <div className={styles.empowerSection}>
                              <p className={styles.empowerText}>
                                Empower Your Business with Dedicated Developers
                                On Board
                              </p>
                              <button
                                className={styles.hireButton}
                                onClick={() => {
                                  closeMenu();
                                  navigate("/contact");
                                }}
                              >
                                Hire Us
                              </button>
                            </div>

                            <div className={styles.benefitsGrid}>
                              <div className={styles.benefit}>
                                <div
                                  className={`${styles.benefitIcon} ${styles.delivery}`}
                                >
                                  <FaCogs />
                                </div>
                                <span className={styles.benefitText}>
                                  On-time Delivery
                                </span>
                              </div>
                              <div className={styles.benefit}>
                                <div
                                  className={`${styles.benefitIcon} ${styles.transparency}`}
                                >
                                  <FaEye />
                                </div>
                                <span className={styles.benefitText}>
                                  100% Transparency
                                </span>
                              </div>
                              <div className={styles.benefit}>
                                <div
                                  className={`${styles.benefitIcon} ${styles.communication}`}
                                >
                                  <FaComments />
                                </div>
                                <span className={styles.benefitText}>
                                  One-to-one Communication
                                </span>
                              </div>
                              <div className={styles.benefit}>
                                <div
                                  className={`${styles.benefitIcon} ${styles.models}`}
                                >
                                  <FaHandshake />
                                </div>
                                <span className={styles.benefitText}>
                                  Engagement Models
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Mobile Accordion Dropdown */}
                {isServices && isMobile && (
                  <div
                    className={`${styles.mobileAccordion} ${
                      servicesOpenMobile ? styles.open : ""
                    }`}
                  >
                    <div className={styles.accordionContent}>
                      {link.dropdownItems.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className={styles.accordionItem}
                          onClick={handleServiceItemClick}
                        >
                          <div className={styles.accordionIcon}>
                            {item.icon}
                          </div>
                          <span className={styles.accordionTitle}>
                            {item.title}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div
          className={styles.headerMenuIcon}
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