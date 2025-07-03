import React from 'react';
import styles from './Header.module.scss';
import {
  MdEmail,
  MdLocationOn,
  MdChat,
} from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Info Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.left}>
            <span><MdEmail /> query@finances.com</span>
            <span><MdLocationOn /> Durham Street Hialeah, FL 33010</span>
          </div>
          <div className={styles.right}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.navBar}>
        <div className={styles.container}>
          <div className={styles.leftGroup}>
            <div className={styles.logo}>
              <div className={styles.logoGrid}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
              </div>
              <div className={styles.logoText}>
                <h2>VARN</h2>
              </div>
            </div>

            <nav className={styles.navLinks}>
              <a href="#">Home</a>
              <a href="#">Pages</a>
              <a href="#">Blog</a>
              <a href="#">Shop ▾</a>
              <a href="#">Elements ▾</a>
            </nav>
          </div>

          <div className={styles.contact}>
            <MdChat className={styles.chatIcon} />
            <div>
              <small>Contact for support</small>
              <strong>098 6650 4085</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
