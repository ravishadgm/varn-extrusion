import React from 'react'
import styles from "../Configurations.module.scss";
import TaperedImage from "../../../../assets/images/Configurations/TaperedImage.jpg"


const Tapered = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Tapered Beams</h1>
            </div>

            <div className={styles.imageBlock}>
                <img src={TaperedImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default Tapered

