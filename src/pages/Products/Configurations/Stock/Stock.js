import React from 'react'
import StockImage from "../../../../assets/images/Configurations/stockImg.jpg"
import styles from "../Configurations.module.scss";

const Stock = () => {
    return (
        <div className={styles.ContentTabSection}>
            <div className={styles.tabContent}>
                <h1>Stock Beams</h1>
                <p>Stock beams come standard with 5000′ radius camber.</p>
            </div>

            <div className={styles.imageBlock}>
                <img src={StockImage} alt="Columns – Combination 2 or V8" />
            </div>
        </div>
    )
}

export default Stock