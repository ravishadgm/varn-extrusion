import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyUs.module.scss';
import { FaQuoteLeft } from 'react-icons/fa';
import WhyUsImage from "../../../assets3/images/WhyUS.png";

// Image slides in from left
const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        }
    }
};

// Content slides in from right
const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        }
    }
};

const WhyUs = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.imageContainer}
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img src={WhyUsImage} alt="Why Us" />
                </motion.div>

                <motion.div
                    className={styles.content}
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className={styles.subtitle}>Why Varn?</p>
                    <h2>We Deliver Precision and Excellence in Aluminium Extrusion</h2>
                    <p className={styles.description}>
                        With years of industry experience, Varn Extrusion offers high-quality aluminium profiles, advanced fabrication services, and on-time delivery tailored to diverse industrial needs.
                    </p>

                    <div className={styles.quoteBox}>
                        <FaQuoteLeft className={styles.quoteIcon} />
                        <span>
                            Trusted by top manufacturers for delivering excellence in every extrusion.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
