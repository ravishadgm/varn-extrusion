import React from 'react'
import styles from "../Configurations.module.scss";
import PitchedImage from "../../../../assets/images/Configurations/PitchedImage.jpg"

const Pitched = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Pitched and Cambered Beams</h1>
            </div>

            <div className={styles.imageBlock}>
                <img src={PitchedImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default Pitched
