import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const FireResistance = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Fire Resistant Design</h2>
                <p>
                    Aluminium, by nature, is non-combustible and does not emit toxic gases, making it a reliable material for fire-resistant construction. At VARN Extrusion, our aluminium profiles are manufactured with precision and treated with high-quality finishes that enhance their resistance to heat and surface degradation. Combined with powder coating and anodizing processes, our profiles meet stringent safety and durability standards required for architectural and industrial applications.
                </p>
                <p>
                    Unlike combustible materials, aluminium does not char or contribute to flame spread, offering consistent performance even under elevated temperatures.
                </p>
                <p>
                    Our commitment to quality and compliance ensures that your structure remains safer, stronger, and smarter—ready to meet modern fire safety codes and expectations.
                </p>
                <p>The bottom line, you can protect your structure and have the desired appearance by designing your Varn Extrusion members for fire resistance construction. You should consult a licensed design professional in this area, although some basic information is available in the Timber Construction Manual.</p>
            </div>

            <div className={styles.sideInfo}>
                <h3>APA Technical Notes</h3>

                <div className={styles.documentCard}>
                    <p>Read about Calculating Fire Resistance:</p>
                    <a
                        href="https://drive.google.com/file/d/1ZzgKuHAk_FAJX-mCSxLy7lnSr8Gk0cy_/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>

                <div className={styles.documentCard}>
                    <p>Read about Fire Resistance:</p>
                    <a
                        href="https://drive.google.com/file/d/1lNCpel-VTqOrO_cCz9PFqTGyLZpGaKMT/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>

                <div className={styles.documentCard}>
                    <p>View the Flame Spread Index:</p>
                    <a
                        href="https://drive.google.com/file/d/1Yj8GjGQKhaihG_QYlAzRgIlu70M6yUle/view"
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

export default FireResistance;
