import React from 'react'
import { motion } from 'framer-motion';
import styles from "../KanzanHouse.module.scss"

const KanzanHouseAbout = ({ content = [], image }) => {
    const slideInLeft = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: (i = 0) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                delay: i * 0.3,
                ease: 'easeOut',
            },
        }),
    };
    return (
        <div className={styles.container}>
            <div className={styles.textContent}>
                {Array.isArray(content) ? (
                    <div className={styles.textContent}>
                        {content.map((section, index) => (
                            <div key={index} className={styles.section}>
                                {section.heading && <h3>{section.heading}</h3>}
                                <p>{section.text}</p>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className={styles.imageContent}>
                <motion.div
                    className={styles.left}
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    custom={0}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img src={image} alt="Project visual" className={styles.image} />
                </motion.div>
            </div>
        </div>


    )
}

export default KanzanHouseAbout