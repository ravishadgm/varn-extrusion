import React from 'react';
import styles from './WhyUs.module.scss';
import { FaQuoteLeft } from 'react-icons/fa';
import WhyUsImage from '../../assets2/images/WhyUS/WhyUs.jpeg';

const WhyUs = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={WhyUsImage} alt="Why Us" />
                </div>

                <div className={styles.content}>
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
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
