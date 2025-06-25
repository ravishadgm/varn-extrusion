import React from 'react'
import styles from "../CustomBeams.module.scss"

const Sizinng = () => {
    return (
        <section className={styles.container}>
            <h1>Sizing</h1>
            <div className={styles.sizingSection}>
                <div className={styles.left}>
                    <p>
                        Our{' '}
                        <a
                            href="/about/manufacturing-capabilities"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            manufacturing capabilities
                        </a>{' '}
                        allow a wide range of sizes, ensuring we meet your precise project requirements.
                    </p>
                    <div>
                        <p>
                            It should be noted that sizing capabilities can change due to other factors. If your
                            needs do not seem to fall into our range, our staff would be willing to discuss what
                            you’re looking for.
                        </p>
                    </div>
                </div>

                <div className={styles.right}>
                    <ul>
                        <li className={styles.item}>
                            <span className={styles.label}>Thickness :</span>{' '}
                            As fine as 0.3 mm, we are among the few globally capable of this precision.
                        </li>
                        <li className={styles.item}>
                            <span className={styles.label}>Width Range :</span>{' '}
                            We support profile widths based on custom dies, including ultra-narrow to medium-wide applications.
                        </li>
                        <li className={styles.item}>
                            <span className={styles.label}>Length:</span>{' '}
                            Profiles can be extruded in varying lengths based on design needs and logistics — with flexibility up to several meters.
                        </li>
                    </ul>
                </div>
            </div>


        </section>
    );
};


export default Sizinng