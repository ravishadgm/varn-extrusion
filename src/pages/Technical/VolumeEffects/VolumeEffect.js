import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const VolumeEffect = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Volume Effects</h2>
                <p>
                    In aluminium extrusion, volume effects influence the performance, tolerance, and cooling characteristics of large profiles. As profile dimensions increase, precise control over wall thickness, die design, and cooling rate becomes critical to maintaining uniformity and structural integrity.
                </p>
                <p>
                    At VARN Extrusion, we specialize in ultra-slim and large-section aluminium profiles, including complex shapes with wall thickness as low as 0.3 mm.
                </p>
                <p>
                    Our experience with high-volume output, advanced press machines, and in-house mold library ensures that each profile meets stringent quality and dimensional standards, regardless of size or complexity.
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
