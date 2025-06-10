import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import Images from "@assets/images"; 

const zoomAnim = {
  initial: {
    scale: 1.1,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
    },
  },
};

function Hero() {
  return (
    <motion.section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${Images.home_bg})` }}
      variants={zoomAnim}
      initial="initial"
      animate="animate"
    >
      <div className={styles.imageContainer}>
        <img src={Images.home_bg} alt="Hero" />
      </div>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Premier Glue Laminated Timber Manufacturer</h1>
            <p>The product you want, when you want it.</p>
          </div>
          <div className={styles.right}>
            <p>
              QB Corp is a premier glue laminated timber manufacturer where
              excellence is a tradition and innovation knows no limits.
            </p>
            <a href="#" className={styles.ctaButton}>
              GET A QUOTE →
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
