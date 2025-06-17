import React from "react";
import { motion } from 'framer-motion';
import styles from "./ProjectBlock.module.scss";


const zoomAnim = {
    initial: {
        scale: 1.1,
    },
    animate: {
        scale: 1,
        transition: {
            duration: 1.8,
            ease: 'easeInOut',
        },
    },
};


const ProjectBlock = ({ title, heroImage, info, leftHeading, description }) => {
    return (
        <div className={styles.wrapper}>
            <motion.section
                className={styles.heroSection}
                style={{ backgroundImage: `url(${heroImage})` }}
                variants={zoomAnim}
                initial="initial"
                animate="animate"
            >
                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
            </motion.section>


            <div className={styles.infoCard}>
                <h1>{title}</h1>
                <div className={styles.details}>
                    {info.map((item, index) => (
                        <div key={index}>
                            <p className={styles.label}>{item.label}</p>
                            {Array.isArray(item.value) ? (
                                item.value.map((line, i) => <p key={i}>{line}</p>)
                            ) : (
                                <p>{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.descriptionSection}>
                <div className={styles.leftText}>
                    <h3>{leftHeading}</h3>
                </div>
                <div className={styles.rightText}>
                    <p>{description}</p>
                </div>
            </div>



        </div>
    );
};

export default ProjectBlock;
