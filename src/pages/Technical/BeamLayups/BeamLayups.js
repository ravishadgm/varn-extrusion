import React from 'react';
import FirstImage from "../../../assets/images/technical/FirstImg.jpg";
import SecondImage from "../../../assets/images/technical/SecondImage.jpg";
import ThirdImage from "../../../assets/images/technical/ThirdImage.jpg";
import styles from "../Technical.module.scss";

const BeamLayups = () => {
    return (
        <div >
            <div className={styles.textContent}>
                <h2>Standard Beam Layups</h2>
                <p className={styles.beamContent}>
                    This section aims to provide information relating to beam selection and to help avoid some common errors made in using glulam products. Most glulam beams are manufactured using one of three types of layups:
                </p>
            </div>

            <div className={styles.beamLayupsWrapper}>
                <div className={styles.layupGrid}>
                    <div className={styles.card}>
                        <h3>Balanced – V8</h3>
                        <ul className={styles.contentList}>
                            <li>For applications with cantilevers or multi-span applications (supported by columns or walls anywhere in mid-span).</li>
                            <li>V4 and V8 BEAMS are surfaced on three sides, top stamped, with two bottom edges eased.</li>
                        </ul>
                        <img src={FirstImage} alt="Balanced – V8" className={styles.cardImage} />
                    </div>

                    <div className={styles.card}>
                        <h3>Unbalanced – V4</h3>
                        <ul>
                            <li>Members are supported only on the ends for a simple span with no cantilevers.</li>
                            <li>V4 and V8 BEAMS are surfaced on three sides, top stamped, with two bottom edges eased.</li>
                            <li>Inverting a V4 Beam Reduces the Bending Design Value by 25</li>
                        </ul>
                        <img src={SecondImage} alt="Unbalanced – V4" className={styles.cardImage} />
                    </div>

                    <div className={styles.card}>
                        <h3>Columns – Combination 2 or V8</h3>
                        <ul>
                            <li>Combination 2 is for use as vertical columns only.</li>
                            <li>COLUMNS are surfaced on four sides with all edges eased.</li>
                        </ul>
                        <img src={ThirdImage} alt="Columns – Combination 2 or V8" className={styles.cardImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeamLayups;