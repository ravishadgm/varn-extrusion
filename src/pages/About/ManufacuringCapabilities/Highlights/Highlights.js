import React from 'react';
import styles from './Highlights.module.scss';

const steps = [
    "Initially, lumber is protected from excessive moisture in our storage sheds.",
    "RF (Radio Frequency) batch press that cures glulam beams as they pass through the press.",
    "When completed, the glulam beam is moved to the finishing department.",
    "The automated finish department can process the various products our customers demand.",
    "The beams are wrapped and stacked. We take great care to ensure your beams arrive in the best physical condition.",
    "Beams are loaded on trucks for delivery to the job site or lumber yard.",
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
