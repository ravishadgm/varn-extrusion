import React from 'react';
import styles from './SemiHeader.module.scss';

const SemiHeader = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>{title}</h1>
        <div className={styles.bottomRow}>
          <p>{description}</p>
          {buttonText && buttonLink && (
            <a href={buttonLink} className={styles.button}>
              {buttonText} <span className={styles.arrow}>↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default SemiHeader;
