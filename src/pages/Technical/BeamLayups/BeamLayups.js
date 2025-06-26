import React from 'react';
import Images from '@assets/images';
import styles from "../Technical.module.scss";

const BeamLayups = () => {
    return (
        <div >
            <div className={styles.textContent}>
                <h2>Aluminum Profile Categories</h2>
                <p className={styles.beamContent}>
                    This section provides key information about the different types of aluminum profiles we manufacture, helping clients select the most suitable solution based on application and performance needs :
                </p>
            </div>

            <div className={styles.beamLayupsWrapper}>
                <div className={styles.layupGrid}>
                    <div className={styles.card}>
                        <h3>Ultra-Slim Profiles</h3>
                        <ul className={styles.contentList}>
                            <li>Engineered for precision, offering extreme slenderness without compromising strength.</li>
                            <li>Ideal for premium interiors, compact partitions, and sleek façade designs with 0.3mm  wall thickness.</li>
                        </ul>
                        <img src={Images.FirstImage} alt="Balanced – V8" className={styles.cardImage} />
                    </div>

                    <div className={styles.card}>
                        <h3>Structural Profiles</h3>
                        <ul>
                            <li>Built for strength, reliability, and industrial or structural applications.</li>
                            <li>Produced using three powerful presses: 2×800 UST and 1×600 UST.</li>
                            <li>Offers exceptional durability and design flexibility across multiple use cases.</li>
                        </ul>
                        <img src={Images.SecondImage} alt="Unbalanced – V4" className={styles.cardImage} />
                    </div>

                    <div className={styles.card}>
                        <h3>Surface Finishes</h3>
                        <ul>
                            <li>Powder Coating: 7-tank pretreatment, chromotization, Jotun/AkzoNobel/PPG approved.</li>
                            <li>Anodizing: 25-tank capacity, supports up to 25 microns, electro-anodized finishes.</li>
                        </ul>
                        <img src={Images.ThirdImage} alt="Columns – Combination 2 or V8" className={styles.cardImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeamLayups;