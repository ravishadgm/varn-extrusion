import React from "react";
import styles from "./CorpBlock.module.scss";
import Images from "@assets/images";
import { HiArrowUpRight } from "react-icons/hi2";
const CorpBlock = ({ heading, subheading, showButton = false }) => {
  return (
    <div className={styles.pageHero}>
      <div className={styles.container}>
        <div className={styles.sideImageSection}>
          <div className={styles.heroSideContent}>
            <div className={styles.heroHeadingBlock}>
              <h1 className={styles.headingLarge}>{heading}</h1>
              <h2 className={styles.headingSmall}>{subheading}</h2>
              
              {showButton && (
                <div className={styles.buttonWrapper}>
                  <a href="#" className={styles.buttonIsLight}>
                    <div className={styles.buttonText}>
                      Apply Today <HiArrowUpRight className={styles.arrowIcon} />
                    </div>
                  </a>
                </div>
              )}

            </div>
          </div>
          <div className={styles.heroSideImage}>
            <div className={styles.imageRevealMask}>
              <div className={styles.imageMask}>
                <img
                  className={styles.boxImage}
                  src={Images.about_bg_2}
                  alt="Side floating"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pageHeroBackgorundWrapper}>
        <div className={styles.sectionBackgroundLeft}>
          <img
            className={styles.pageHeroBackgorundImage}
            src={Images.about_bg}
            alt="Background"
          />
        </div>
        <div className={styles.sectionBackgroundRight}>
          <div className={styles.pageHeroBackgroundTexture}></div>
        </div>
      </div>
    </div>
  );
};


export default CorpBlock;
