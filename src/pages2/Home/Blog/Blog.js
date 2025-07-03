import React from 'react';
import styles from './Blog.module.scss';
import { FaUser, FaFolder } from 'react-icons/fa';
import Images from '../../../assets2/images/index';
import { motion } from 'framer-motion';

const cards = [
    {
        id: 1,
        image: Images.Blog1,
        date: '25',
        month: 'Jun',
        title: 'Special benefit through Invest by your money',
    },
    {
        id: 2,
        image: Images.Blog2,
        date: '25',
        month: 'Jun',
        title: 'Extra benefit through Invest by your money',
    },
    {
        id: 3,
        image: Images.Blog3,
        date: '25',
        month: 'Jun',
        title: 'Benefit through Invest by your money',
    },
];

const Blog = () => {
    return (
        <div className={styles.solutionsWrapper}>
            <div className={styles.container}>
                <p className={styles.subtitle}>WE ARE HERE FOR</p>
                <h2 className={styles.heading}>Explore Solutions</h2>

                <div className={styles.cardsWrapper}>
                    {cards.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <motion.div
                                className={styles.imageWrapper}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <img src={card.image} alt="Solution" />

                                <div className={styles.dateBadge}>
                                    <span className={styles.date}>{card.date}</span>
                                    <span className={styles.month}>{card.month}</span>
                                </div>
                            </motion.div>
                            <div className={styles.cardBody}>
                                <div className={styles.meta}>
                                    <span><FaUser /> Admin</span>
                                    <span><FaFolder /> Finance</span>
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <a href="#" className={styles.knowMore}>
                                    KNOW MORE <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Blog;
