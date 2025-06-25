import React from 'react'
import mainImage from "../../../../assets/images/Manufacture/Manufacture_Product.jpeg";
import styles from './AboutManufacture.module.scss';

const AboutManufacture = () => {
    return (
        <div className={styles.showcaseContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.imagesSection}>
                    <div className={styles.imageWrapper}>
                        <img src={mainImage} alt="Main Beam" className={styles.mainImage} />
                        {/* <img src={overlayImage} alt="Overlay Detail" className={styles.overlayImage} /> */}
                    </div>


                </div>

                <div className={styles.textSection}>
                    <div className={styles.mainContent}>
                        <h1>
                            The Most Versatile Aluminium Profile Range in the Industry
                        </h1>
                        <p>
                            We operate with three high-capacity extrusion presses (800 UST × 2 and 600 UST × 1), capable of delivering a broad spectrum of profile sizes, shapes, and complexities. With the addition of expanded mould inventory and precision press control, our clients benefit from greater customization, faster turnaround, and consistent quality.
                        </p>
                        <p>
                            The integration of advanced anodizing and powder coating lines, along with automated packaging systems, ensures seamless post-processing — minimizing manual intervention and maximizing finish consistency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutManufacture;
