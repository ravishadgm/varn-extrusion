import React from 'react'
import BeamFab from "../../../../assets/images/Configurations/BeamFab.jpg"
import styles from "../Configurations.module.scss";

const BeamFebrication = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Beam Fabrication</h1>
                <p>Beams can be cut and shaped to fit numerous hidden connections.</p>
            </div>

            <div className={styles.imageBlock}>
                <img src={BeamFab} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default BeamFebrication