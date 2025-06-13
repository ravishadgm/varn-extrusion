import React from 'react'
import styles from "../Configurations.module.scss";
import DoubleTaperedImage from "../../../../assets/images/Configurations/DoubleTappered.jpg"

const DoubleTapered = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Double Tapered Beams</h1>
            </div>

            <div className={styles.imageBlock}>
                <img src={DoubleTaperedImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default DoubleTapered