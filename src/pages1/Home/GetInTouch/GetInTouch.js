import React from 'react'
import styles from "./GetInTouch.module.scss";
import Images from "@assets/images";
import industry from "../../../assets1/images/home/industry.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";



const GetInTouch = () => {
    const navigate = useNavigate();

    const socialMediaLinks = [
        { icon: FaFacebookF, label: "Facebook", href: "#" },
        { icon: FaInstagram, label: "Instagram", href: "#" },
        { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
        { icon: FaTwitter, label: "Twitter", href: "#" },
        { icon: FaYoutube, label: "YouTube", href: "#" },
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <h2>
                    Get in Touch with <span>Varn Extrusion</span>
                </h2>
                <p className={styles.subtitle}>
                    We'd love to hear from you. Reach out to discuss your needs, ideas, or
                    partnerships.
                </p>
                <button className={styles.button} onClick={() => navigate("/contact")}>
                    Contact Us <FiArrowUpRight />
                </button>

                <div className={styles.container}>
                    <div className={styles.firstContainer}>
                        <button className={styles.button1} onClick={() => navigate("/contact")}>
                            Our Team <FiArrowUpRight />
                        </button>
                        <div className={styles.details}>
                            <h4>Meet with our founders & creative minds! </h4>
                            <div className={styles.ImageContainer}>
                                <img src={Images.Leader4} alt="founder" className={styles.img1} />
                                <img src={Images.Leader2} alt="founder" className={styles.img1} />
                                <img src={Images.Leader3} alt="founder" className={styles.img1} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondContainer}>
                        <button className={styles.button1} onClick={() => navigate("/contact")}>
                            Career Opportunity <FiArrowUpRight />
                        </button>
                        <div className={styles.details}>
                            <h4>Email us on :</h4>
                            <p>info@varnextrusion.in</p>
                        </div>
                        <div className={styles.details}>
                            <h4>Follow us on :</h4>
                            <div className={styles.socialLinks}>
                                {socialMediaLinks.map((link, index) => (
                                    <a key={index} href={link.href} aria-label={link.label}>
                                        <link.icon />
                                    </a>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img src={industry} alt="founder" className={styles.img1} />

            </div>
        </div>
    )
}

export default GetInTouch