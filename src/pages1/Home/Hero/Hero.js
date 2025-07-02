import React from 'react';
import styles from './Hero.module.scss';
import BannerVideo from '@assets/videos/banner_video.mp4';

function Hero() {
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
        <div className={styles.heroContent}>
          <h1>
            <span>India’s Leader</span> in Ultra-Slim Aluminium Profiles
          </h1>
          <p>
            Since 2016, we’ve redefined precision with 0.3mm wall thickness profiles —
            where engineering meets elegance and performance.
          </p>
          <button className={styles.ctaBtn}>Explore Our Expertise</button>
        </div>
      </div>
     
    </section>
  );
}

export default Hero;
