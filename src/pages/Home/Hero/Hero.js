import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import Images from "@assets/images";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import BannerVideo from "@assets/videos/banner_video.mp4";
const zoomAnim = {
  initial: {
    scale: 1.1,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1.8,
      ease: "easeInOut",
    },
  },
};

function Hero() {
  return (
    <section className={styles.heroSection}>
      <motion.section
        className={styles.heroSection}
        variants={zoomAnim}
        initial="initial"
        animate="animate"
      >
        {/* 🔁 Video Background */}
        <video
          className={styles.videoBackground}
          src={BannerVideo}
          autoPlay
          muted
          loop
          playsInline
        />

      </motion.section>

      {/* 🔳 Overlay content */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Varn — India’s Pioneer in Ultra-Slim Aluminium Profiles</h1>
            <p>
              Driven by a vision of design excellence and structural minimalism, Varn delivers sleek aluminium solutions that elevate modern architecture and interior aesthetics.
            </p>
          </div>
          <div className={styles.right}>
            <p>
              Since 2016, <strong>Varn Extrusion</strong> has led the aluminium industry with advanced technology, certified coatings, and a 300+ expert team — delivering precision on time, every time.
            </p>
            <p>With unmatched expertise in manufacturing aluminium profiles as thin as 0.3 mm — and even 0.33 mm — Varn stands at the forefront of precision extrusion.</p>
            <Link to="/contact" className={styles.ctaButton}>
              GET A QUOTE <FaArrowRight style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
