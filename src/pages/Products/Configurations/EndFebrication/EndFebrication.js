import React from 'react'
import BeamEndImage from "../../../../assets/images/Configurations/BeamEnd.jpg"
import styles from "../Configurations.module.scss";

const EndFebrication = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Beam End Fabrication</h1>
                <p>Shows a variety of beam ends available in fabrication details.</p>
            </div>

            <div className={styles.imageBlock}>
                <img src={BeamEndImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default EndFebrication