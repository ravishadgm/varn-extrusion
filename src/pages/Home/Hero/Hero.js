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

      {/* 🔳 Overlay content */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Varn — India’s Pioneer in Ultra-Slim Aluminium Profiles</h1>
            <p>
              Crafting precision-engineered profiles with wall thickness as fine
              as 0.3 mm — where innovation meets elegance.
            </p>
          </div>
          <div className={styles.right}>
            <p>
              Since 2016, <strong>Varn Extrusion Pvt. Ltd.</strong> has led the
              aluminum manufacturing industry with cutting-edge technology,
              world-class coating approvals, and an unwavering commitment to
              quality. Backed by 300+ skilled professionals, we deliver
              excellence — on time, every time.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              GET A QUOTE <FaArrowRight style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
