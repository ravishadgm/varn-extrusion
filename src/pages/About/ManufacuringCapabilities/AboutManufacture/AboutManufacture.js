import React from 'react'
import mainImage from "../../../../assets/images/Manufacture/ManufactureFirst.jpeg";
import overlayImage from "../../../../assets/images/Manufacture/ManufactureSecond.jpeg";
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
                            The Most Versatile Product Range Offered in the Industry
                        </h1>
                        <p>
                            We now have two working high production lines along with two
                            curve lines. With the addition of the new facility, customers can
                            expect more versatility and shorter lead times due to the
                            increased capacity. Adding the new glue racks and more
                            oversized curve floors allows us to glue longer and heavier
                            cambered beams. We now have a second beam press to cover all
                            your stock needs.
                        </p>
                        <p>
                            If you want that cleaner beam to look, try our "clear glue" option
                            that makes the glue lines virtually invisible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutManufacture;



{/* <motion.img
    src={mainImage}
    alt="Factory Overview"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className={styles.curvedBeamImage}
/> */}