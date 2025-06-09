import React from 'react';
import styles from './Home.module.scss';
import backgroundImage from '../../assets/images/home_bg.jpg'; // Update path if needed

const Home = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
    </section>
  );
};

export default Home;
