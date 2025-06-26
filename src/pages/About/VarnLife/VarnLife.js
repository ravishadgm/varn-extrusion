import React from 'react';
import styles from "./VarnLife.module.scss";
import Images from '@assets/images';
import Card from '@components/common/Cards/Card';
import { motion } from "framer-motion";

const VarnLife = () => {
    const cardData = [
        {
            title: 'Modern Infra & Automation',
            description:
                'From anodizing and powder coating to in-house fabrication and automatic packaging, our fully integrated facility ensures seamless production with zero compromise on quality or timelines.',
        },
        {
            title: 'Skilled Workforce',
            description:
                'With over 300 skilled professionals, our team powers excellence in every process. Itʼs not just manufacturing — itʼs passion, precision, and people working in harmony. A team of 300+ work cohesively to maintain seamless operations and uphold our commitment to quality.',

        },
        {
            title: ' Health & Safety First',
            description:
                'Workplace safety and fair labor practices are core to our ethics, ensuring a secure, transparent, and supportive work environment for all employees.',

        },
        {
            title: 'Innovation Culture ',
            description:
                'Driven by a culture of commitment, craftsmanship, and creativity, we combine cutting-edge technology with deep industry knowledge to bring our clients solutions that are as durable as they are beautifully designed.',

        }, {
            title: 'Career & Learning Opportunities',
            description:
                'At VARN Extrusion, we believe growth thrives where innovation meets craftsmanship. We foster a culture of continuous learning, skill development, and ethical excellence—empowering individuals to build meaningful careers in aluminium manufacturing.',
        }, {
            title: 'Eco-Conscious Work Environment',
            description:
                'At VARN Extrusion Pvt. LTd., We donʼt just build for today. With sustainable practices and eco-friendly processes, weʼre helping shape a greener, smarter future. ',
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
                            src={Images.team}
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