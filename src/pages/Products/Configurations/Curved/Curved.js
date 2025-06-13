import React from 'react'
import styles from "../Configurations.module.scss";
import CurvedImage from "../../../../assets/images/Configurations/curved.jpg"

const Curved = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Curved Beams and Arches</h1>
                <p>Specify radius. A radius less than 600′ subjects to an extra charge as thinner laminates must be used.</p>
            </div>

            <div className={styles.imageBlock}>
                <img src={CurvedImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default Curved