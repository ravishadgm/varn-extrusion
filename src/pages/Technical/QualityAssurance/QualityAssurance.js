import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const QualityAssurance = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Quality Assurance</h2>
                <p>
                    At Varn Extrusion, we aim not to be average but to stand out in quality. Since our founding, we never could produce our products to the minimum acceptable standards and feel good about it. All product produced at our facility is covered under the APA-EWS quality assurance program. Rigorous independent audits ensure fabrication methods meet or exceed industry standards.
                </p>
                <p>
                    Varn quality technicians work hand in hand in the plant with production personnel. They enjoy the full support of management in making quality-related decisions, and in the long run, every plant member is fully engaged in our quality program. “Quality is built in” is more than a catchphrase for us. We select quality vendors for our raw material and then carefully grade and process it into a finished product. Every piece is graded and monitored for appropriate moisture content to ensure proper gluing and curing.
                </p>
                <p>
                    All product produced at Varn Extrusion is covered under the APA-EWS quality assurance program.
                </p>
                <p>
                    Attention to detail in all aspects of the operation makes the difference between mediocre and excellent product quality. Nowhere is this attention to detail more important than in the area of finger joints. Finger joints are glued connections that make long pieces of wood out of short pieces through “fingers” cut into the ends of the boards.
                </p>
                <p>
                    These joints transfer forces from along the board to the adjoining board. It takes significant care to make a quality joint. The joint's fit, the adhesive application, and the pressure and cure are all crucial aspects of making this a critical component of beam construction work. All tension laminations are proof loaded to ensure both the lumber and the finger joint will handle the stress levels assumed for the design.
                </p>
            </div>
            <div className={styles.sideInfo}>
                <h3>Span and Load Charts</h3>
                <div className={styles.documentCard}>
                    <p>AITC Technical Note 21:</p>

                    <a
                        href="https://drive.google.com/file/d/1lio3vi12HfSFiXJsjRL9YvaoFvEn1B_s/view"
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
    )
}

export default QualityAssurance