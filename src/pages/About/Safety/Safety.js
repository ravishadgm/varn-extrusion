import React from 'react'
import styles from "./Safety.module.scss";
import SafetyContent from './SafetyContent/SafetyContent';
import SafetyAbout from './SafetyAbout/SafetyAbout';

const Safety = () => {
    return (
        <section className={styles.container}>
            <div className={styles.horizontalSection}>
                <h1>QB Corp's Commitment to Safety</h1>
            </div>
            <SafetyAbout />
            <SafetyContent />
        </section>

    )
}

export default Safety