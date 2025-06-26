import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const QualityAssurance = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Quality Assurance</h2>
                <p>
                    At Varn Extrusion,quality is not just a commitment — it’s our identity. Every aluminium profile produced at our facility undergoes rigorous quality checks and is crafted to meet or exceed international standards. From raw material sourcing to final finishing, we follow a comprehensive quality assurance protocol supported by precision machinery and expert supervision.
                </p>
                <p>
                    Our process includes continuous monitoring of extrusion parameters, wall thickness, and surface finish. Advanced tools like Brinell and Webster hardness testers, UTM machines, and a German-made spectrometer ensure each product is mechanically strong and chemically accurate.
                </p>
                <p>
                    We’ve implemented an in-house ERP system that allows real-time production tracking, tighter process control, and seamless coordination across departments.
                </p>
                <p>
                    Each profile is inspected for dimensional accuracy, finish uniformity, and coating adhesion — ensuring that what we deliver is not just aluminium, but excellence shaped by engineering.
                </p>

            </div>
            <div className={styles.sideInfo}>
                <h3>Span and Load Charts</h3>
                <div className={styles.documentCard}>
                    <p>Qyality Assurance Report:</p>

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