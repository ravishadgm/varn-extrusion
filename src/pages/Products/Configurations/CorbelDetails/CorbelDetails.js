import React from 'react'
import CorbelImage from "../../../../assets/images/Configurations/Corbel.jpg"
import styles from "../Configurations.module.scss";


const CorbelDetails = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Corbel Details</h1>
                <p>Available corbel details are shown below.</p>
            </div>

            <div className={styles.imageBlock}>
                <img src={CorbelImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default CorbelDetails