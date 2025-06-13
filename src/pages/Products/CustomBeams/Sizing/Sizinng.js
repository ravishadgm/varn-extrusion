import React from 'react'
import styles from "../CustomBeams.module.scss"

const Sizinng = () => {
    return (
        <section className={styles.container}>
            <h1>Sizing</h1>
            <div className={styles.sizingSection}></div>
            <div className={styles.left}>

                <p>
                    Our{' '}
                    <a
                        href="/manufacturing-capabilities"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        manufacturing capabilities
                    </a>{' '}
                    give us a wide range of available depths, widths, and lengths for you to choose from.
                </p>
                <div>
                    <p>It should be noted that sizing capabilities can change due to other factors. If your
                        needs do not seem to fall into our range, our staff would be willing to discuss what
                        you’re looking for.</p>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.item}>
                    <span className={styles.label}>Depth:</span>
                    <span>
                        Our standard depths are in 1.5” increments, but we can produce any depth between 3”
                        and 96” deep.
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Width:</span>
                    <span>We can produce a width range between 1.5” to 20” wide.</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Length:</span>
                    <span>The beams we can produce are up to 130’ long.</span>
                </div>
            </div>

        </section>
    );
};


export default Sizinng