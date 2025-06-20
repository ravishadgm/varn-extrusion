import React from 'react'
import styles from "./WhyUs.module.scss";
import image1 from "../../../assets/images/home/leaders.png"
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const WhyUs = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.mainSection}>
            <div className={styles.firstSection}>
                <div className={styles.innerSection}>
                    <div className={styles.centerContent}>Why <br />
                        <strong>Varn?</strong></div></div>
                <div className={styles.secondInnerSection}>
                    <div className={styles.upperContainer}><p>With over a decade of experience, we combine industry knowledge with innovative solutions to stay ahead of the curve.</p></div>
                    <div className={styles.heading}>
                        <span className={styles.cardIcon}></span>
                        <h2>4+ years in the industry</h2>

                        <a
                            href={"/about"}
                            rel="noopener noreferrer"
                            className={styles.linkIcon}
                        >
                            <FiArrowUpRight className={styles.arrowIcon} size={25} />
                        </a>

                    </div>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.left}>
                    <div className={styles.leftContainer}>
                        <img src={image1} alt="founder" className={styles.img1} />
                        <h3 className={styles.name}>Our core values drive our actions and your success.</h3>
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.upper}>
                        <div className={styles.upperLeft}>
                            <p>Skilled Sarvadhians work together to give you the best results.</p>
                            <h1>75+</h1>
                        </div>
                        <div className={styles.upperRight}>
                            <p>Completed over 110 projects successfully, showing we know how to get things done right.</p>
                            <h1>110+</h1>
                        </div>
                    </div>
                    <div className={styles.lower}>
                        <div className={styles.lowerLeft}>
                            <p>We deliver 98.5% of our projects on time, so you can count on us to meet deadlines.</p>
                        </div>
                        <div className={styles.lowerRight}>
                            <p>Over 90 clients are thrilled with our work and rely on us to deliver great results.</p>
                            <h1>90+</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.thirdSection}>
                <button className={styles.button} onClick={() => navigate('/contact')}>
                    Contact Us <FiArrowUpRight />
                </button>
            </div>
        </div>
    )
}

export default WhyUs