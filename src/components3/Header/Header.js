// Header.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import Images from '@assets/images';

// React Icons
import {
  FaPhoneSquare,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.nav_bar}`}>
      {/* Top Blue Bar */}
      <div className={styles.top_blue_bar}>
        <div className={`${styles.pull_left} ${styles.top_phone_no}`}>
          <a href="#" className={styles.me_4}>
            <FaPhoneSquare />
            <span className={styles.m_d_none}>+91-253-6636222</span>
          </a>
          <a href="#">
            <FaEnvelope />
            <span className={styles.m_d_none}>info@sudal.co.in</span>
          </a>
        </div>
        <div className={styles.top_orange_bg}>
          <motion.a
            href="/Order/AddQuotationHeader"
            className={styles.enquiry_btn}
  animate={{ x: [0, 10, 0] }} // move right then back
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            Request for a Quotation
          </motion.a>

          <a
            href="https://x.com/sudal_ltd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_icon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560340324529"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_icon}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/sudal-industries-b5b876310"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_icon}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Navigation Section */}
      <div className={styles.navigation_section}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="/Home/Index">
              <img src={Images.logo} alt="Sudal Logo" />
            </a>
          </div>

          <nav className={styles.main_nav}>
            <ul>
              <li>
                <a href="#">Company Profile</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li className={styles.products_dropdown}>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Capabilities</a>
              </li>
              <li>
                <a href="#">Quality Assurance</a>
              </li>
              <li>
                <a href="/PublicCareer/ListJobDetails">Career</a>
              </li>
              <li>
                <a href="/Home/ReachUs">Reach Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.clearfix}></div>
    </header>
  );
};

export default Header;
