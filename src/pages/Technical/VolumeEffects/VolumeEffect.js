import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const VolumeEffect = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Volume Effects</h2>
                <p>
                    It has been long known and proven that large structural members do not have the same strength per unit of size as smaller members. The theory behind this is weak link analysis which suggests that the larger the area, the more potential area will contain a strength-limiting defect.
                </p>
                <p>
                    Testing has proven this theory, and industry guidelines have been set to reduce allowable stresses for prominent members. Span charts and load tables will already incorporate this factor.
                </p>
                <p>
                    Designers using prominent members should always consider volume effects in their structural calculations. AITC publishes a document detailing the proper use of this factor.
                </p>
            </div>
            <div className={styles.sideInfo}>
                <h3>Additional Info</h3>
                <div className={styles.documentCard}>
                    <p>AITC Technical Note 21:</p>

                    <a
                        href="https://drive.google.com/file/d/1BmoJgMDUvUtGTxZZBfnhWhPMiIve9sY4/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            View Document <FaRegFilePdf className={styles.pdfIcon} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VolumeEffect;
