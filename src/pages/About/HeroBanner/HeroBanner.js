import React from "react";
import styles from "./HeroBanner.module.scss";
import  Images  from '@assets/images';
const HeroBanner = () => {
  return (
    <div className={styles.featureSection}>
      <div
        className={styles.leftSection}
        style={{ backgroundImage: `url(${Images.about_bg})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.textWrapper}>
            <h2>
              Where Excellence Is A
              <br />
              Tradition And Innovation
              <br />
              Knows No Limits
            </h2>
            <p>Located in Salmon, Idaho, USA.</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={Images.about_bg_3} alt="QB Corporation Quality Beams Signboard" />
      </div>
      <div className={styles.cropImage}>
        <img src={Images.about_bg_2} alt="QB Corporation Quality Beams Signboard" />
      </div>
    </div>
  );
};

export default HeroBanner;
