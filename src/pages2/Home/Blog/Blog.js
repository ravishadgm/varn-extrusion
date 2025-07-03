import React from 'react';
import styles from './Blog.module.scss';
import { FaUser, FaFolder } from 'react-icons/fa';
import Images from '../../../assets2/images/index';
import { motion } from 'framer-motion';

// ✅ Updated content for the cards
const cards = [
  {
    id: 1,
    image: Images.Blog1,
    date: '15',
    month: 'May',
    title: 'Breaking barriers with ultra-slim aluminium profiles',
  },
  {
    id: 2,
    image: Images.Blog2,
    date: '12',
    month: 'Apr',
    title: 'VARN achieves Jotun & AkzoNobel powder coating approvals',
  },
  {
    id: 3,
    image: Images.Blog3,
    date: '28',
    month: 'Mar',
    title: 'Redefining design with 0.3mm aluminium precision',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  },
};

const Blog = () => {
  return (
    <motion.div
      className={styles.solutionsWrapper}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          WE ARE HERE FOR
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Solutions
        </motion.h2>

        <motion.div
          className={styles.cardsWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card) => (
            <motion.div key={card.id} className={styles.card} variants={cardVariants}>
              <motion.div
                className={styles.imageWrapper}
                whileHover={{ scale: 1.08 }}
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
                  <span><FaFolder /> Manufacturing</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <a href="#" className={styles.knowMore}>
                  KNOW MORE <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
