import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const Treatment = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Preservative Treatment</h2>
                <p>
                    QB Corporation recommends using Coastal Douglas Fir or Southern Yellow pine for a product that undergoes chemical preservative pressure treatment. Treatments should be oil-based or as specified by the project designer.
                </p>
                <p>
                    We do not offer treating services but can outsource this if you do not have your capabilities. We do offer incising to allow better chemical penetration and retention. This is highly recommended on any product to be treated for outdoor use. Our incising equipment can handle large industrial beams typically used in industrial structures. We can also incise the tapered faces of tapered beams.
                </p>
                <p>
                    Some customers are moving to Alaskan Yellow Cedar, a naturally durable species to insect attack and decay, as an alternative to pressure treatment. QB Corporation is an approved fabricator of this species. Call our customer service desk at 208-756-4248 if you have further questions.
                </p>
            </div>
            <div className={styles.sideInfo}>
                <h3>Additional Info</h3>
                <div className={styles.documentCard}>
                    <p>Available Glued Laminated Timber Designs for Beams and Column:</p>
                    <button className={styles.pdfButton}>
                        View Document <FaRegFilePdf className={styles.pdfIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Treatment