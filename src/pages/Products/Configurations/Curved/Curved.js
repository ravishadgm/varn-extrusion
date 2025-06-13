import React from 'react'
import styles from "../Configurations.module.scss";
import { FaRegFilePdf } from "react-icons/fa6";
import CurvedImage from "../../../../assets/images/Configurations/curved.jpg"

const Curved = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Curved Beams and Arches</h1>
                <p>Specify radius. A radius less than 600′ subjects to an extra charge as thinner laminates must be used.</p>

                <a
                    href="https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65dd02d3053855218dbb7e7d_ARCHES_AND_CURVES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className={styles.pdfButton}>
                        View Document <FaRegFilePdf className={styles.pdfIcon} />
                    </button>
                </a>
            </div>

            <div className={styles.imageBlock}>
                <img src={CurvedImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default Curved