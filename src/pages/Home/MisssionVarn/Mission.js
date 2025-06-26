import React from 'react';
import styles from "./Mission.module.scss";
import Images from '@assets/images';

const Mission = () => {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1>India's Leading Ultra-Slim Aluminium Profile Manufacturer</h1>
                        <p>Engineering excellence in 0.3mm precision since 2016</p>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.vision}>
                    <div className={styles.visionContent}>
                        <div className={styles.upperContainer}>
                            <h1 className={styles.subHeading}>Our Vision</h1>
                            <h1 className={styles.visionTextt}>
                                To be recognized as a globally trusted name in aluminium manufacturing, offering
                                innovative, sustainable, and superior-quality products.
                            </h1>
                        </div>

                        <div className={styles.lowerContainer}>
                            <div className={styles.statBox}>
                                <h2>300+</h2>
                                <p>Skilled Team</p>
                            </div>
                            <div className={styles.statBox}>
                                <h2>2016</h2>
                                <p>Year Established</p>
                            </div>
                            <div className={styles.statBox}>
                                <h2>6000 MT</h2>
                                <p>Annual Capacity</p>
                            </div>
                            <div className={styles.statBox}>
                                <h2>0.3mm</h2>
                                <p>Ultra-Slim Profile</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.visionImg}>
                        <img src={Images.vision} alt="Our Vision" />
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.mission}>
                    <h1 className={styles.subHead}>Our Mission</h1>
                    <div className={styles.heroContent}>
                        <h1 className={styles.missionText}>
                            To be the premier Aluminium extrusion manufacturer in the South Asian Region.
                        </h1>
                        <p className={styles.description}>To continuously enhance product quality, invest in modern technologies,
                            and provide exceptional service to our clients by fostering a culture of
                            continuous improvement and environmental responsibility.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Mission