// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import BannerVideo from '@assets/videos/banner_video.mp4';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Back easing for strong effect
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <video
        className={styles.videoBackground}
        src={BannerVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className={styles.overlay}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={textVariants}>
            <span>India’s Leader</span> in Ultra-Slim Aluminium Profiles
          </motion.h1>

          <motion.p variants={textVariants}>
            Since 2016, we’ve redefined precision with 0.3mm wall thickness profiles — where engineering meets elegance and performance.
          </motion.p>

          <motion.button className={styles.ctaBtn} variants={textVariants}>
            Explore Our Expertise
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
