import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

function Adhesives() {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Surface Finishing & Coating</h2>
                <p>
                    Varn Extrusion ensures durability, aesthetics, and long-term protection through advanced surface treatments. Our aluminium profiles undergo a 7-tank pretreatment process, followed by high-quality anodizing or powder coating—approved by leading global brands like Jotun, AkzoNobel, and Asian Paints PPG. Chromotization and automated packaging ensure each profile meets the highest industry standards.
                </p>
            </div>
            <div className={styles.cardAdhevsives}>
                <div className={styles.sideInfo}>
                    <h3>Additional Info</h3>
                    <div className={styles.documentCard}>
                        <p>Powder Coating & Anidizing Certification Information:</p>
                        <a
                            href="https://drive.google.com/file/d/1VOgvfQKXdbw1nB1doHsfN3vWRebaOt7L/view?pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={styles.pdfButton}>

                                View Document <FaRegFilePdf className={styles.pdfIcon} />

                            </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adhesives;
