import styles from "./Header.module.scss";
import { FaMapMarkerAlt, FaPhone, FaClock, FaBars } from "react-icons/fa";
import Images from "@assets/images";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // NEW

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleDropdown = () => setDropdownOpen(prev => !prev); // NEW

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.headerWrapper}>
      <div className={`${styles.topBar} ${isScrolled ? styles.hidden : ""}`}>
        <div className={styles.address}>
          <span>
            <FaMapMarkerAlt className={styles.icon} />
            Plot No - 8, First Floor - Kalidas Nagar, Surat, India
          </span>
          <span>
            <FaPhone className={styles.icon} />
            91 96384 81000
          </span>
        </div>
        <div>
          <span>
            <FaClock className={styles.icon} />
            Mon-Sat, 8.00-18.00. Sunday CLOSED
          </span>
        </div>
      </div>

      <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>
          <img src={Images.logo} alt="Varn Logo" />
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <FaBars />
        </button>

        <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
          <a href="#">Home</a>
          <a href="#">Products</a>

          <div className={styles.dropdownWrapper}>
            {/* Use onClick instead of hover */}
            <span
              className={styles.dropdownToggle}
              onClick={toggleDropdown}
            >
              Services ▾
            </span>

            <div
              className={`${styles.dropdownMenu} ${
                dropdownOpen ? styles.show : ""
              }`}
            >
              <a href="/services1">Service 1</a>
              <a href="/services2">Service 2</a>
            </div>
          </div>

          <a href="#">Company Varn</a>
          <a href="#">Contact</a>
        </nav>

        <button className={styles.purchaseBtn}>Contact Us</button>
      </div>
    </header>
  );
}
