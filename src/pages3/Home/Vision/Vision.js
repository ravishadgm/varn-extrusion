import React from "react";
import { motion } from "framer-motion";
import styles from "./Vision.module.scss";
import Images from "../../../assets3/images/index"; // adjust path if needed

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
};

const Mission = () => {
    const cards = [
        {
            title: "Our Vision",
            label: "Vision",
            content:
                "Empowering sustainable solutions through precision-engineered structures and a commitment to excellence.",
        },
        {
            title: "Our Mission",
            label: "Mission",
            content:
                "To lead the timber industry with innovative products, ethical sourcing, and unwavering client trust.",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <motion.img
                    src={Images.eye}
                    alt="Person working"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className={styles.contentSection}>
                {cards.map((card, index) => (
                    <motion.div
                        className={styles.card}
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <span className={styles.overlayText}>{card.label}</span>
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                        <button>
                            Know More <span>➜</span>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Mission;
