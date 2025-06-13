import React from 'react'
import styles from "../CustomBeams.module.scss";

const Treated = () => {
    return (
        <section className={styles.container}>
            <h1>Treated Beams</h1>
            <div className={styles.sizingSection}>
                <div className={styles.left}>
                    <div>
                        <p>
                            QB Corporation recommends using Coastal Douglas Fir or Southern Yellow pine for Custom Glulam Beams that undergoes chemical preservative pressure treatment. Treatments should be oil-based or as specified by the project designer. As an alternative to pressure treating, some customers are moving to Alaskan Yellow Cedar, a naturally durable species against insect attack and decay.
                        </p>
                        <p>
                            We do not offer treating services but can outsource this if you do not have your own capabilities. We do offer incising to allow better chemical penetration and retention. This is highly recommended on any product to be treated for outdoor use. Our incising equipment can handle large industrial beams typically used in industrial structures. We can also incise the tapered faces of tapered beams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Treated