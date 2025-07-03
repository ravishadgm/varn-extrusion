import React from 'react';
import Images from "@assets/images";
import styles from "./Certificates.module.scss";
import { motion } from 'framer-motion';

const Certificates = () => {
    const brandLogos = [
        { name: "Jindal Aluminium", src: Images.greenLogo },
        { name: "Hindalco", src: Images.hindalcoLogo },
        { name: "Vedanta", src: Images.isoLogo },
        { name: "Tata Steel", src: Images.jswLogo },
        { name: "L&T", src: Images.ltLogo },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <>
            {/* TRUSTED SECTION */}
            <motion.section
                className={styles.trustedSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <motion.h2 className={styles.heading} variants={fadeUp}>Trusted By Industry Leaders</motion.h2>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {[...brandLogos, ...brandLogos].map((brand, id) => (
                            <div key={id} className={styles.logoCard}>
                                <img src={brand.src} alt={brand.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CERTIFICATIONS SECTION */}
            <section className={styles.certificationSection}>
                <motion.div
                    className={styles.certificateHeading}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <motion.h2 className={styles.mainheading} variants={fadeUp}>Our Certifications</motion.h2>
                    <motion.p className={styles.subHeading} variants={fadeUp}>
                        Recognized Standards That Reflect Our Commitment to Excellence.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.certificate}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[1, 2, 3, 4, 5].map((n, i) => (
                        <motion.img
                            key={i}
                            src={Images.certificate}
                            alt={`Certificate ${n}`}
                            custom={i}
                            variants={fadeUp}
                        />
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Certificates;
