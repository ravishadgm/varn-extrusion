import React from 'react'
import styles from "../Safety.module.scss";
import { motion } from "framer-motion";
import safetyImg from "../../../../assets/images/Safety/safety.jpg"

const SafetyAbout = () => {
    return (
        <div className={styles.safetyContainer}>
            <div className={styles.imageWrapper}>
                <motion.img
                    src={safetyImg}
                    alt="Factory Overview"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
            <div>
                <h1>Safety is Everyone's Responsibility</h1>
                <ul>
                    <li>
                        QB is dedicated to providing our employees and customers with a safe and healthful working environment. Our commitment to safety extends into the quality that we produce in our products. If structural products fail for any reason, injuries can occur. Our dedication to manufacturing all products safely and responsibly extends to our customers, who depend on our products to meet and exceed industry standards.
                    </li>
                    <li>Monthly Safety meetings are held to keep all employees abreast of Safety topics related to their work environment. We also have a Safety Recommendation Group comprised of individuals from each department. They must maintain a safe working attitude amongst their co-workers and report any unsafe acts or hazards assessed in their department.</li>
                    <li>We currently have 5 EMTs on staff. Their expertise is vital to the safety and care of our employees. In January 2010, QB received the OSHA’s SHARPS designation, recognizing the company’s commitment to safety.</li>
                </ul>
            </div>
        </div>
    )
}

export default SafetyAbout