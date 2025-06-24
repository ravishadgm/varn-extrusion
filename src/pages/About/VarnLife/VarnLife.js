import React from 'react';
import Image from "../../../assets/images/Team/Team.png"
import styles from "./VarnLife.module.scss";
import Card from '@components/common/Cards/Card';
import { motion } from "framer-motion";

const VarnLife = () => {
    const cardData = [
        {
            title: 'Modern Infra & Automation',
            description:
                'Our advanced infrastructure includes 3 extrusion presses (800 UST & 600 UST), automated packaging systems, and in-house ERP to ensure seamless operations and a tech-enabled work environment.',
        },
        {
            title: 'Skilled Workforce',
            description:
                'With a cohesive team of 300+ skilled professionals, every process at Varn reflects precision, commitment, and people-driven excellence.',

        },
        {
            title: ' Health & Safety First',
            description:
                'Workplace safety and fair labor practices are core to our ethics, ensuring a secure, transparent, and supportive work environment for all employees.',

        },
        {
            title: 'Innovation Culture ',
            description:
                'We encourage innovation with responsibility — combining cutting-edge technology and sustainable processes to shape smarter aluminum solutions.',

        }, {
            title: 'Career & Learning Opportunities',
            description:
                'Through on-site fabrication, anodizing, quality testing, and ERP-based workflows, employees gain deep industry knowledge and hands-on experience for continuous career growth.',
        }, {
            title: 'Eco-Conscious Work Environment',
            description:
                'With environmentally responsible processes — including chromotization, 7-tank powder coating, and recyclable packaging — we support sustainability at every step.',
        }
    ]
    return (
        <div className={styles.varnContainer}>
            <div className={styles.firstContainer}>
                <h1 className={styles.heading}>Life at Varn Extrusion</h1>
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.left}>
                    <div className={styles.varnImg}>
                        {/* <img src={Image} alt="Our Vision" /> */}
                        <motion.img
                            src={Image}
                            alt="Factory Overview"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.textContent}>
                        <p>
                            At VARN Extrusion Pvt. LTd., We donʼt just build for today. With sustainable practices and eco-friendly processes, weʼre helping shape a greener, smarter future.
                            Quality isnʼt a checkpoint — itʼs a mindset. From raw material to final finish, every inch of every profile reflects our uncompromising standards.
                            Our team powers excellence in every process. Itʼs not just manufacturing — itʼs passion, precision, and people working in harmony.
                        </p>
                    </div>

                </div>
            </div>
            <div className={styles.thirdContainer}>
                <div className={styles.card}>
                    {cardData.map((card, idx) => (
                        <Card
                            key={idx}
                            title={card.title}
                            description={card.description}
                            {...(card.link && { link: card.link })}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default VarnLife