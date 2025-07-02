import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaClock,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import footer_logo from "../../assets1/images/Footer/footer_logo.svg"
// import Images from "@assets/images";
import styles from "./Footer.module.scss";

const Footer = () => {

    const resourcesLinks = [
        { name: "Products", href: "/products" },
        { name: "Services", href: "/services" },
        { name: "Technical", href: "/technical" },
    ];

    const companyLinks = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },

        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ];



    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            content: (
                <div className={styles.addressBlock}>
                    <div>
                        <strong>Corporate Office:</strong><br />
                        Plot No - 8, First Floor - Kalidas Nagar,<br />
                        Near Trikam Nagar, L. H. Road, Varachha,<br />
                        Surat, 395006 Gujarat, India.
                    </div>

                    <div>
                        <strong>Unit - 1: Varn Extrusion Pvt Ltd</strong><br />
                        Block No.594/A, Plot No. 71-86, Shivalay Industrial Estate,<br />
                        B/H I Shree Khodiyar Petrol Pump, NH-8,<br />
                        At- Kosamba, Ta. Mangrol, Surat, Gujarat - 394120, India.
                    </div>

                    <div>
                        <strong>Unit - 2: Varn Extrusion Pvt Ltd</strong><br />
                        Block No. 599/1, Plot No. 55 to 78, Shivalay Industrial Estate,<br />
                        B/H I Shree Khodiyar Petrol Pump, NH-8,<br />
                        At - Kosamba, Ta. Mangrol, Surat, Gujarat - 394120, India.
                    </div>

                    <div>
                        <strong>Unit - 3: Regal Allufin Industries</strong><br />
                        Block No-593/1, Shivalay Industrial Estate,<br />
                        B/H I Shree Khodiyar Petrol Pump, NH-8,<br />
                        At-Kosamba, Ta. Mangrol, Surat, Gujarat - 394120, India.
                    </div>
                </div>
            ),
        },
        {
            icon: FaEnvelope,
            content: <a href="mailto:sales@qbcorp.com">info@varnextrusion.in</a>,
        },
        {
            icon: FaPhone,
            content: <a href="tel:+919638481000">+91 96384 81000</a>,
        },
        {
            icon: FaClock,
            content: (
                <>
                    <p>Monday - Friday</p>
                    <p>7:30 am - 5:00 pm</p>
                </>
            ),
        },
    ];


    const socialMediaLinks = [
        { icon: FaFacebookF, label: "Facebook", href: "#" },
        { icon: FaInstagram, label: "Instagram", href: "#" },
        { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
        { icon: FaTwitter, label: "Twitter", href: "#" },
    ];
    return (
        <>
            <section className={styles.mainSection}>
                <div className={styles.semiFooter}>
                    <div className={styles.left}>We are trusted by over 5000+ clients. Join them by using our services and grow your business.</div>
                    <div className={styles.right}>
                        <Link to="/contact" className={styles.button}>
                            GET A QUOTE <FiArrowUpRight />
                        </Link>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <div className={styles.topFooter}>
                        <div className={styles.column}>
                            <div className={styles.logo}>
                                <img src={footer_logo} alt="QB Corp Logo" />
                            </div>
                            <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                            <div className={styles.socialLinks}>
                                {socialMediaLinks.map((link, index) => (
                                    <a key={index} href={link.href} aria-label={link.label}>
                                        <link.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className={styles.column_two}>
                            <div className={styles.middleSection}>
                                <div className={styles.linkSection}>
                                    <h3>Company</h3>
                                    <ul>
                                        {companyLinks.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column_three}>
                            <div className={styles.linkSection}>
                                <h3>Resources</h3>
                                <ul>
                                    {resourcesLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.contactSection}>
                                <h3>Contact Us</h3>
                                <div className={styles.contactInfo}>
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className={styles.contactItem}>
                                            <item.icon />
                                            <div>{item.content}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}><span></span></div>
                    <div className={styles.bottomFooter}>
                        <p>&copy;2025 Varn Extrusion. All Rights Reserved.</p>
                        <div className={styles.policies}>
                            <a href="/privacy-policy">Privacy Policy</a> &nbsp;
                            <span>|</span> &nbsp;
                            <a href="/terms-and-conditions">Terms and Conditions</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;





