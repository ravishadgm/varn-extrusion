import React from 'react'
import styles from "./ManufacturingCapabilities.module.scss";
import AboutManufacture from './AboutManufacture/AboutManufacture';
import ManufactureFacility from './ManufactureFacility/ManufactureFacility';

const ManufacturingCapabilities = () => {
    return (
        <section className={styles.container}>

            <div className={styles.manufacutureContainer}>
                <div className={styles.horizontalSection}>
                    <div className={styles.upperContainer}>
                        <div className={styles.innerContent}>
                            <h1>Manufacturing Capabilities</h1>
                        </div>
                    </div>
                    <div className={styles.lowerContainer}>
                        <AboutManufacture />
                    </div>
                </div>
            </div>
            <div>
                <ManufactureFacility />
            </div>
        </section>

    )
}

export default ManufacturingCapabilities