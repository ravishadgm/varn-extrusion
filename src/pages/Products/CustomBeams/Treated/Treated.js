import React from 'react'
import styles from "../CustomBeams.module.scss";

const Treated = () => {
    return (
        <section className={styles.container}>
            <h1>Treated Beams</h1>
            <div className={styles.sizingSection}>
                <div className={styles.left}>
                    <div>
                        <p>
                            Every profile undergoes treatment processes that enhance durability, aesthetics, and environmental performance.
                        </p>
                    </div>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li>Powder Coating: Automated system using premium brands like Jotun, AkzoNobel, Asian Paints PPG, with 10/15/25-year warranty coatings.</li>
                        <li>Anodizing: Performed through a 25-tank setup supporting up to 25 microns, with options for electro-anodized colors, shot blasting, and chromotization.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Treated