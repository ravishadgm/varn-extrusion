import React from 'react'
import ThreeImage from "../../../../assets/images/Configurations/ThreeHinge.jpg"
import styles from "../Configurations.module.scss";


const ThreeHingeArch = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Three Hinge Arch</h1>
            </div>

            <div className={styles.imageBlock}>
                <img src={ThreeImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default ThreeHingeArch