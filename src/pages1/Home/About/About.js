// About.js
import React from 'react';
import styles from './About.module.scss';
import home_about from "../../../assets1/images/home/home_about.jpeg";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.imageBox}>
            <img src={home_about} alt="About" />
          </div>
        </div>

        <div className={styles.right}>
      <p className={styles.subheading}>About Our Strength</p>
<h2 className={styles.heading} >Why Varn?</h2>


          <div className={styles.card}>
            <span>✓</span>
            <div>
              <h4>Ultra-Slim Technology</h4>
              <p>We lead the market with 0.3mm wall thickness profiles — a mark of precision and innovation in aluminium extrusion.</p>
            </div>
          </div>

          <div className={styles.card}>
            <span>✓</span>
            <div>
              <h4>Fully Integrated Facility</h4>
              <p>Our operations include anodizing, powder coating, fabrication, and packaging — all in-house under one roof.</p>
            </div>
          </div>

          <div className={styles.card}>
            <span>✓</span>
            <div>
              <h4>Premium Coating Approvals</h4>
              <p>Certified by Jotun, AkzoNobel, and Asian Paints PPG for superior powder coating quality and durability.</p>
            </div>
          </div>

          <div className={styles.card}>
            <span>✓</span>
            <div>
              <h4>Speed & Reliability</h4>
              <p>We consistently deliver on time with streamlined logistics and a commitment to quality without compromise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
