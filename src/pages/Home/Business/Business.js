import React from 'react'
import styles from "./Business.module.scss"

const Business = () => {
    return (
        <div className={styles.businessContainer}>
            <div className={styles.businessHeading}>
                <h1>Meet Our Business Area</h1>
            </div>
            <div className={styles.businessContent}>
                <p>At Varn Extrusion, our business spans a diverse range of aluminium applications — from architectural facades and interior systems to precision-driven industrial components. Each area reflects our core values: design innovation, engineering excellence, and uncompromising quality. Whether crafting ultra-slim profiles for modern spaces or delivering high-performance solutions for industry, we align technology with vision to meet the evolving demands of global clients.</p>
            </div>

        </div>
    )
}

export default Business