import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from "../Technical.module.scss";

const FireResistance = () => {
    return (
        <div className={styles.contentSection}>
            <div className={styles.textContent}>
                <h2>Fire Resistant Design</h2>
                <p>
                    Since wood is a combustible material, many design professionals do not consider wood as part of an effective fire-resistant design. With proper design and care, wood can be used in many structures requiring fire-resistant design.
                </p>
                <p>
                    For most lightweight construction, fire resistance is provided by a covering of gypsum or other insulating materials or by fire sprinklers. This is true for wood, steel, or even concrete.
                </p>
                <p>
                    Glulam beams with proper design can accomplish fire-resistant design by using larger sections. Using wood's natural characteristics to char when exposed to high temperature and combustion. This charring develops natural insulation to fire, protecting the interior wood fiber from high temperature and flame. Of course, this charring only protects the wood for a relatively short time, just as insulation or gypsum protects other products for a short time.

                </p>
                <p>The bottom line, you can protect your structure and have the desired appearance by designing your QB Corporation members for fire resistance construction. You should consult a licensed design professional in this area, although some basic information is available in the Timber Construction Manual, published by the American Institute of Timber Construction.</p>
            </div>

            <div className={styles.sideInfo}>
                <h3>APA Technical Notes</h3>

                <div className={styles.documentCard}>
                    <p>Read about Calculating Fire Resistance:</p>
                    <button className={styles.pdfButton}>
                        VIEW DOCUMENT <FaRegFilePdf />
                    </button>
                </div>

                <div className={styles.documentCard}>
                    <p>Read about Fire Resistance:</p>
                    <button className={styles.pdfButton}>
                        VIEW DOCUMENT <FaRegFilePdf />
                    </button>
                </div>

                <div className={styles.documentCard}>
                    <p>View the Flame Spread Index:</p>
                    <button className={styles.pdfButton}>
                        VIEW DOCUMENT <FaRegFilePdf />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FireResistance;
