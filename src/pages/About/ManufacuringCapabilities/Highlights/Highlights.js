import React from 'react';
import styles from './Highlights.module.scss';

const steps = [
    "Aluminium billets are stored and melted using high-capacity furnaces.",
    "Billets are extruded through press machines into custom aluminium profiles.",
    "Extruded profiles move to the anodizing or powder coating departments.",
    "Finishes are applied using automated lines for maximum surface quality.",
    "Profiles are wrapped with shrink packaging to avoid scratches or damage.",
    "Final products are loaded onto trucks and dispatched for delivery.",
];

const Highlights = () => {
    return (
        <section className={styles.container}>
            <h1>Highlights of the Production Process</h1>
            <div className={styles.grid}>
                {steps.map((text, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.number}>{String(index + 1).padStart(2, '0')}.</div>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Highlights;
