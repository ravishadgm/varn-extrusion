import React from 'react';
import styles from './Footer.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax } from 'react-icons/fa';
import { LuPrinter } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Images from "../../assets3/images/index"

const Footer = () => {


    return (
        <footer className={styles.footer}>
            <section className={styles.mainFooter}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.logoSection}>
                            <img src={Images.logo} alt="varn logo" />
                        </div>

                        <div className={styles.infoSection}>
                            <div className={styles.headquarters}>
                                <h4>Corporate Headquarters</h4>

                                <div className={styles.infoTab}>
                                    <p><FaMapMarkerAlt className={styles.icon} /> One South Wacker Drive, Suite 1000,<br />Chicago, IL 60606</p>

                                    <div className={styles.contact}>
                                        <p><MdOutlinePhoneInTalk className={styles.icon} /> <strong>Phone:</strong> 312.696.3101</p>
                                    </div>

                                    <div className={styles.contact}>
                                        <p><LuPrinter className={styles.icon} /> <strong>Fax:</strong> 312.696.3102</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.semiFooter}>
                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        <span>PRODUCTS</span>|
                        <span>CAPABILITIES</span>|
                        <span>QUALITY ASSURANCE</span>|
                        <span>CAREER</span>|
                        <span>REACH US</span>
                    </div>
                    <div className={styles.socials}>
                        <span>Privacy Policy</span>|
                        <span>Terms & conditions</span>
                    </div>

                </div>
            </section>
        </footer>
    );
};

export default Footer;
