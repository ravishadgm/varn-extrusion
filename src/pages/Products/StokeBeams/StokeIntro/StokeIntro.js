import React from 'react';
import styles from "./StokeIntro.module.scss";

const StokeIntro = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.left}>
                <h1>Configurations and Sizes</h1>
            </div>
            <div className={styles.right}>
                <ul>
                    <li>
                        Varn Extrusion's aluminium beams are available in standard sizes:
                        <strong> 3&#8540;", 5&#8540;", 6&#190;", and 8&#190;"</strong>. These options allow for faster delivery and easier handling on-site.
                        All stock beams are <strong>cambered at a 5000-foot radius</strong>, made with a <strong>24F-V4 Layup</strong>, and range from
                        <strong> 48 to 66 feet in length</strong>. Each beam features an <strong>Architectural finish</strong> and is manufactured from
                        high-quality <strong>Douglas Fir</strong>.
                    </li>
                    <li>
                        Can’t find the size you need? Reach out to our sales team — we’re happy to help you find or create the right solution for your project.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default StokeIntro;
