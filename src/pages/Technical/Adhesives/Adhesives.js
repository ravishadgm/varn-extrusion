import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

function Adhesives() {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Adhesives Information</h2>
                <p>
                    QB Corporation uses durable waterproof structural adhesives in the
                    manufacturing process. Both PRF and Melamine adhesives are available.
                    Adhesives have been tested to comply with different types of standards.
                </p>
            </div>
            <div className={styles.cardAdhevsives}>
                <div className={styles.sideInfo}>
                    <h3>Additional Info</h3>
                    <div className={styles.documentCard}>
                        <p>Adhesive Structural Certification Information:</p>
                        <button className={styles.pdfButton}>
                            View Document <FaRegFilePdf className={styles.pdfIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adhesives;
