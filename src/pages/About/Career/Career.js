import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Career.module.scss';

const Career = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.careerContainer}>
            <div className={styles.container}>
                <h1 className={styles.careerHeading}>
                    Build Your Career with <span>Varn Extrusion</span>
                    <br />
                    Step Into a Future of Innovation
                </h1>

                <p className={styles.careerSubtext}>
                    At Varn Extrusion Pvt. Ltd., we combine cutting-edge technology with deep industry knowledge to bring our clients solutions that are as durable as they are beautifully designed. Driven by a culture of commitment, craftsmanship, and creativity, our people power excellence in every process.
                </p>

                <div className={styles.careerFeatures}>
                    <span> Industry-Leading Technology Exposure   |</span>
                    <span>300 skilled professionals   |</span>
                    <span>Inclusive & Ethical Work Culture</span>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.button} onClick={() => navigate('/careers')}>
                        Explore Career Opportunities <FiArrowUpRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Career;
