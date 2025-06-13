import React from "react";
import styles from "./CorpBlock.module.scss";
import { Link } from "react-router-dom";
import Images from "@assets/images";

const CorpBlock = ({ content, showButton = false }) => {
  return (
    <div className={styles.featureSection}>
      <div
        className={styles.leftSection}
        style={{ backgroundImage: `url(${Images.about_bg})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.textWrapper}>
            <h2
              dangerouslySetInnerHTML={{ __html: content.heading }}
              className={styles.heading}
            />
            {content.customSubtext ? (
              <p className={styles.subtext}>{content.customSubtext}</p>
            ) : (
              content.subtext && (
                <p className={styles.subtext}>{content.subtext}</p>
              )
            )}
            {showButton && (
              <Link to="/careers" className={styles.applyBtn}>
                Apply Today
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={Images.about_bg_3} alt="QB Corporation Signboard" />
      </div>
      <div className={styles.cropImage}>
        <img src={Images.about_bg_2} alt="QB Corporation Secondary" />
      </div>
    </div>
  );
};

export default CorpBlock;
