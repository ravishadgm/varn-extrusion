import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const Checking = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Checking</h2>
                <p>
                    At Varn Extrusion, precision is a promise. Every aluminium profile is meticulously checked during and after the extrusion process to ensure dimensional accuracy, straightness, and consistent wall thickness — especially in our ultra-slim 0.3 mm designs.
                </p>
                <p>
                    Our quality control process includes real-time monitoring, in-line inspections, and post-production checks using calibrated instruments. Profiles are measured against strict tolerances, and any deviation is flagged for immediate correction. This commitment ensures that every profile meets the demands of both aesthetic appeal and structural integrity.
                </p>
                <p>
                    By combining skilled technicians with automated systems, we ensure that defects like warping, surface irregularities, or thickness variation are identified and eliminated — so what reaches you is perfection by design.
                </p>
            </div>

            <div className={styles.sideInfo}>
                <h3>Additional Info </h3>

                <div className={styles.documentCard}>
                    <p>Dimentional Accuracy Report:</p>
                    <a
                        href="https://drive.google.com/file/d/1_1D-TV5sv1H3o7vJzBD7ZuRU9BVoqdBO/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>

                <div className={styles.documentCard}>
                    <p>Aluminium Profile Inspection Checklist:</p>
                    <a
                        href="https://drive.google.com/file/d/1-Oz7akYyRTykFh8mnAskCVAEN3r5pJG2/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>

                <div className={styles.documentCard}>
                    <p>Surface Finish Tolerance Guide:</p>
                    <a
                        href="https://drive.google.com/file/d/1sMX1lg5LD_lVOWVb7OXgbgBqGaDb5oP2/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>
                <div className={styles.documentCard}>
                    <p>ISO/ASTM Certification for Profile Accuracy:
                    </p>
                    <a
                        href="https://drive.google.com/file/d/10M1NjwXKmwmWHsoA3iUkkys2WrHPMhV8/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Checking;
