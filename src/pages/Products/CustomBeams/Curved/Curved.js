import React from 'react'
import styles from "../CustomBeams.module.scss"

const Curved = () => {
    return (
        <section className={styles.container}>
            <h1>Curved Structure</h1>
            <div className={styles.sizingSection}>
                <div className={styles.left}>
                    <div>
                        <p>
                            While aluminium extrusions are inherently linear, our in-house fabrication facilities allow precision bending and custom shaping for specific curved or arched applications.
                        </p>
                        <p>We offer custom bending on selected profiles to suit architectural designs or structural frameworks.
                            Our specialists ensure dimensional accuracy while maintaining the structural integrity of each profile.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Curved