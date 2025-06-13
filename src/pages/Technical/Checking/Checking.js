import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const Checking = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Checking</h2>
                <p>
                    Checking is a natural phenomenon of wood that occurs when the wood dries and shrinks. The stresses built up from the shrinkage will cause a slight split. This typically is not an issue if the checking unless the checking is very severe.
                </p>
                <p>
                    QB places a great deal of attention on moisture during the manufacturing process. Our raw materials are dried to specific moisture contents, and we monitor this throughout the assembly process. Since shrinkage results from the moisture leaving the board, QB's attention will minimize any checking you may see in the beams. However, as wood is a natural material and some locations are arid climates, some checking may still occur. It is also crucial that the product be appropriately handled and stored during any inventory or installation process to minimize checking issues.
                </p>
            </div>

            <div className={styles.sideInfo}>
                <h3>Additional Info </h3>

                <div className={styles.documentCard}>
                    <p>For information on checking and its impact on structural performance, please refer to AITC Technical Note #11:</p>
                    <a
                        href="https://drive.google.com/file/d/1_1D-TV5sv1H3o7vJzBD7ZuRU9BVoqdBO/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>

                <div className={styles.documentCard}>
                    <p>For information on evaluating the impact of checking in the field, see AITC Technical Note #18:</p>
                    <a
                        href="https://drive.google.com/file/d/1-Oz7akYyRTykFh8mnAskCVAEN3r5pJG2/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>

                <div className={styles.documentCard}>
                    <p>Read the Owners Guide to Understanding Checks in Glued Laminated Timber:</p>
                    <a
                        href="https://drive.google.com/file/d/1sMX1lg5LD_lVOWVb7OXgbgBqGaDb5oP2/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.pdfButton}>
                            VIEW DOCUMENT <FaRegFilePdf />
                        </button>
                    </a>
                </div>
                <div className={styles.documentCard}>
                    <p>Read about Evaluation of Check Size in Glued Laminated Timber Beams:
                    </p>
                    <a
                        href="https://drive.google.com/file/d/10M1NjwXKmwmWHsoA3iUkkys2WrHPMhV8/view"
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

export default Checking;
