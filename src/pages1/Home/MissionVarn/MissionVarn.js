import React from 'react';
import styles from "./MissionVarn.module.scss";
import Images from '@assets/images';
import { FaRegCheckCircle } from "react-icons/fa";
import Aerrow from "../../../assets1/images/Homee/Mission/Aerrow.png";
import Mission from "../../../assets1/images/Homee/Mission/Mission.jpg";

const MissionVarn = () => {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.visionSection}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={Mission} alt="Varn Extrusion Logo" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.column}>
                        <h1 className={styles.subHeading}>Our Vision</h1>
                        <p className={styles.visionText}>
                            <FaRegCheckCircle className={styles.checkIcon} />
                            To be recognized as a globally trusted name in aluminium manufacturing, offering
                            innovative, sustainable, and superior-quality products.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h1 className={styles.subHeading}>Our Mission</h1>
                        <p className={styles.visionText}>
                            <FaRegCheckCircle className={styles.checkIcon} />
                            To be the premier Aluminium extrusion manufacturer in the South Asian Region.
                        </p>
                        <p className={styles.visionText}> <FaRegCheckCircle className={styles.checkIcon} />
                            To continuously enhance product quality, invest in modern technologies.</p>
                        <p className={styles.visionText}> <FaRegCheckCircle className={styles.checkIcon} />
                            provide exceptional service to our clients by fostering a culture of
                            continuous improvement.</p>
                    </div>
                </div>

            </section>

            <section className={styles.semiAbout}>
                <div className={styles.semiContainer}>
                    <div className={styles.contentWrapper}>

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
                        <div className={styles.aerrow}>
                            <img src={Aerrow} alt="Arrow Icon" />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default MissionVarn