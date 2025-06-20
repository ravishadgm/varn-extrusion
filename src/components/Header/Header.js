import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Images from "@assets/images";
import {
  FaLaptopCode,
  FaIndustry,
  FaCubes,
  FaDraftingCompass,
  FaShieldAlt,
  FaCogs,
  FaRocket,
  FaHandshake,
  FaComments,
  FaEye,
  FaTimes, 
} from "react-icons/fa";

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
    ],
  },
  // { name: "Technical", path: "/technical" },
  { name: "Company Varn", path: "/about" },
  // { name: "Catalog", path: "/catalog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setServicesModalOpen(true);
  };

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesModalOpen(false);
    }, 100);
  };

  const handleModalMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleModalMouseLeave = () => {
    setServicesModalOpen(false);
  };

  const handleServicesClick = () => {
    if (window.innerWidth <= 768) {
      setServicesModalOpen(!servicesModalOpen);
    }
  };


  const closeServicesModal = () => {
    setServicesModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeServicesModal();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src={Images.logo} alt="QB Corp Logo" />
        </div>

        <nav className={`${styles.headerNav} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => {
            const isContact = link.name.toLowerCase() === "contact";
            const isServices = link.name.toLowerCase() === "services";

            return (
              <React.Fragment key={link.name}>
                {isContact && <div className={styles.headerSeparator} />}

                {isServices ? (
                  <div
                    className={styles.servicesWrapper}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <NavLink
                      to={link.path}
                      onClick={handleServicesClick}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {link.name} ▼
                    </NavLink>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.name}
                  </NavLink>
                )}
              </React.Fragment>
            );
          })}
        </nav>


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
    </header>
  );
};

export default Header;