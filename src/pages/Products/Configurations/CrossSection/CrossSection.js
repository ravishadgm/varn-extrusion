import React from 'react'
import CrossImage from "../../../../assets/images/Configurations/crossSection.jpg"
import styles from "../Configurations.module.scss";

const CrossSection = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Beam Cross Section Profiles</h1>
                <p>Custom profiles are available for beams.</p>
            </div>

            <div className={styles.imageBlock}>
                <img src={CrossImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default CrossSection