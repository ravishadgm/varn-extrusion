import React, { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import footer_logo from "../../assets2/images/footer_logo.svg";

const Footer = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer className={styles.footer}>
            <section>
                <div className={styles.mainFooter}>
                    <div className={styles.containerOne}>

                        <div className={styles.logoSection}>
                            <img src={footer_logo} alt="QB Corp Logo" />

                        </div>
                        <div className={styles.content}>
                            <h2>Work with best Finance Team</h2>
                            <button>WORK WITH US</button>
                        </div>

                    </div>
                    <div
                        ref={sectionRef}
                        className={`${styles.containerTwo} ${isVisible ? styles.animateFadeUp : ''}`}
                    >
                        <div className={styles.aboutSection}>
                            <h3>About Company</h3>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <FaMapMarkerAlt className={styles.icon} />
                                    <span>5525 Melrose Avenue - Station Street NY<br />91013, United States</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <FaPhoneAlt className={styles.icon} />
                                    <span>Phone: (200) 720-8520</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <FaEnvelope className={styles.icon} />
                                    <span>Email: contact@blo.com</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.linksSection}>
                            <h3>Useful Links</h3>
                            <ul className={styles.linksList}>
                                <li><a href="#about">About Company</a></li>
                                <li><a href="#people">Our People</a></li>
                                <li><a href="#media">Latest Media</a></li>
                                <li><a href="#services">Our Services</a></li>
                                <li><a href="#case-studies">Case Studies</a></li>
                            </ul>
                        </div>

                        <div className={styles.newsletterSection}>
                            <h3>Subscribe Newsletter</h3>
                            <form className={styles.newsletterForm} >
                                <input
                                    type="email"
                                    placeholder="Enter your email..."


                                    required
                                    className={styles.emailInput}
                                />
                                <button type="submit" className={styles.submitBtn}>
                                    <FaPaperPlane className={styles.icon} />
                                </button>
                            </form>
                            <p className={styles.newsletterText}>
                                Sign up for our latest news & articles. We won't give you spam mails.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className={styles.semiFooter}>
                <div className={styles.bottom}>
                    <p>© 2021, <span className={styles.specialChar}>BLO</span>. All Rights Reserved.</p>
                    <div className={styles.socials}>
                        <span>FACEBOOK</span>
                        <span>TWITTER</span>
                        <span>INSTRAGRAM</span>
                        <span>YOUTUBE</span>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
