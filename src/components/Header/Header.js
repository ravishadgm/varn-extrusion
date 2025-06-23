<<<<<<< Updated upstream
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
=======
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      {
        title: "Structural Engineering",
        icon: <FaDraftingCompass />,
        path: "/services",
        isReal: false,
      },
      {
        title: "Surface Treatment & Finishing",
        icon: <FaShieldAlt />,
        path: "/services",
        isReal: false,
      },
      {
        title: "Custom System Design",
        icon: <FaLaptopCode />,
        path: "/services",
        isReal: false,
      },
      {
        title: "Automation & ERP Integration",
        icon: <FaCogs />,
        path: "/services",
        isReal: false,
      },
=======
>>>>>>> Stashed changes
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

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpenMobile(false);
    setShowDropdown(false);
  };
  const toggleMobileServices = (e) => {
    e.preventDefault();
    setServicesOpenMobile((prev) => !prev);
  };

  let hoverTimeout;

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      hoverTimeout = setTimeout(() => {
        setShowDropdown(false);
      }, 150);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (!isMobile) {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setShowDropdown(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!isMobile) {
      hoverTimeout = setTimeout(() => {
        setShowDropdown(false);
      }, 150);
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
              <div
                key={link.name}
                className={`${styles.navItem} ${
                  isServices ? styles.hasDropdown : ""
                }`}
                onMouseEnter={isServices ? handleMouseEnter : undefined}
                onMouseLeave={isServices ? handleMouseLeave : undefined}
              >
                <NavLink
                  to={link.path}
                  onClick={(e) => {
                    if (isMobile && isServices) {
                      e.preventDefault();
                      toggleMobileServices(e);
                    } else {
                      closeMenu();
                    }
                  }}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {link.name}
                  {isServices && (
                    <span
                      className={`${styles.dropdownArrow} ${
                        servicesOpenMobile ? styles.rotated : ""
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </NavLink>

                {/* Desktop Dropdown */}
                {isServices && showDropdown && !isMobile && (
                  <div
                    className={styles.mainDropMenu}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className={styles.dropdownMenu}>
                      <h4 className={styles.dropdownHeader}>
                        OUR KEY SERVICES
                      </h4>

                      <div className={styles.dropdownGrid}>
                        {link.dropdownItems.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.path}
                            className={styles.dropdownItem}
                            onClick={closeMenu}
                          >
                            <div className={styles.dropdownIcon}>{item.icon}</div>
                            <span className={styles.dropdownTitle}>
                              {item.title}
                            </span>
                          </NavLink>
                        ))}
                      </div>

                      <div className={styles.empowerSection}>
                        <p className={styles.empowerText}>
                          Empower Your Business with Dedicated Developers On Board
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
                          <div className={styles.accordionIcon}>{item.icon}</div>
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

          {/* Mobile CTA Button */}
          {isMobile && (
            <div className={styles.mobileCtaSection}>
              <button className={styles.bookMeetingBtn}>Book A Meeting</button>
            </div>
          )}
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
<<<<<<< Updated upstream

      {servicesModalOpen && (
        <div
          className={styles.servicesModal}
          onMouseEnter={handleModalMouseEnter}
          onMouseLeave={handleModalMouseLeave}
          onClick={handleBackdropClick} 
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.mobileCloseBtn}
              onClick={closeServicesModal}
              aria-label="Close services modal"
            >
              <FaTimes />
            </button>
            
            <div className={styles.modalHeader}>
              <h3>OUR KEY SERVICES</h3>
            </div>
            <div className={styles.servicesGrid}>
              {navLinks
                .find((link) => link.name === "Services")
                .dropdownItems.map((service, index) => (
                  <NavLink
                    key={index}
                    to={service.path}
                    className={styles.serviceItem}
                    onClick={() => {
                      closeMenu();
                      setServicesModalOpen(false);
                    }}
                  >
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <div className={styles.serviceContent}>
                      <h4>{service.title}</h4>
                    </div>
                  </NavLink>
                ))}
            </div>
            <div className={styles.modalFooter}>
              <div className={styles.ctaSection}>
                <h4>
                  Strengthen Your Builds with Varn's Dedicated Aluminum Experts
                </h4>
                <button className={styles.hireUsBtn}>Hire Us</button>
              </div>
            </div>
            <div className={styles.featuresSection}>
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaRocket />
                  </div>
                  <h5>On-time Delivery</h5>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaEye />
                  </div>
                  <h5>100% Transparency</h5>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaComments />
                  </div>
                  <h5>One-to-one Communication</h5>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaHandshake />
                  </div>
                  <h5>Engagement Models</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
=======
>>>>>>> Stashed changes
    </header>
  );
};

export default Header;
