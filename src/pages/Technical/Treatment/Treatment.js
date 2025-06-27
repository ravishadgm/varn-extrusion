import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const Treatment = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Preservative Treatment</h2>
                <p>
                    At Varn Extrusion, aluminium profiles undergo advanced surface treatments designed to enhance durability, aesthetics, and corrosion resistance. We utilize a 7-tank chemical pretreatment system followed by premium powder coating and anodizing processes, ensuring each profile meets international quality benchmarks.
                </p>
                <p>
                    Approved by global leaders like Jotun, AkzoNobel, and Asian Paints PPG, our treatments not only improve product lifespan but also ensure consistent color and finish across large batches. Every profile is finished with precision and automatically packaged to preserve surface quality during handling and logistics.
                </p>

            </div>
            <div className={styles.sideInfo}>
                <h3>Additional Info</h3>
                <div className={styles.documentCard}>
                    <p>Download the Varn Aluminium Surface Treatment Specifications:</p>

                    <a
                        href="https://drive.google.com/file/d/1rYSlO7Lev8fSSJCOW2rwJA5JmaKw7gK5/view"
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
}

export default Treatment