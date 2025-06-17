import React from 'react'
import { motion } from 'framer-motion';
import styles from "./UnionArenaBenifit.module.scss"
import image from "../../../../assets/images/project/ArenaSlide.jpg"

const data = [
    {
        number: "01",
        title: "Sustainability",
        description:
            "Using engineered wood, ICCU Arena significantly reduces its environmental impact. Wood is a renewable resource that helps to mitigate carbon emissions and promotes sustainable forestry practices.",
    },
    {
        number: "02",
        title: "Strength and Durability",
        description:
            "Engineered wood, particularly glulam beams, provides exceptional structural strength. This allows for wide-spanning designs and ensures the safety and longevity of the Arena.",
    },
    {
        number: "03",
        title: "Aesthetics and Warmth",
        description:
            "The use of wood in the construction of the Arena creates a visually appealing and warm atmosphere, enhancing the overall experience for spectators and athletes.",
    },
    {
        number: "04",
        title: "Economic Growth",
        description:
            "The collaboration between QB Corporation and the University of Idaho contributes to local economic growth. By sourcing timber products locally, the project supports the region’s wood industries and promotes job creation.",
    },
];

const UnionArenaBenefit = () => {
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
            <h1>
                Benefits of Engineered Wood in ICCU Arena
            </h1>
            <div className={styles.innerContainer}>
                <div className={styles.containerLeft}>
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
                <div className={styles.containerRight}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.number}>{item.number}</span>
                            <div>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UnionArenaBenefit