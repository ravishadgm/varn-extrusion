import React from 'react';
import styles from './Profit.module.scss';
import Images from '../../../assets2/images/index';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

const graphVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 100,
      damping: 12,
      delay: 0.8,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Profit = () => {
  return (
    <motion.div
      className={styles.profitWrapper}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.container}>
        {/* Left content with staggered entry */}
        <motion.div className={styles.content} variants={containerVariants}>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            PROFIT GRAPH
          </motion.p>

          <motion.h2 variants={itemVariants}>
            VARN unlocks long-term growth with precision-engineered solutions
          </motion.h2>

          <motion.div className={styles.feature} variants={itemVariants}>
            <img src={Images.security} alt="icon" className={styles.iconName} />
            <div className={styles.description}>
              <strong>Reliability:</strong>
              <p>Our systems ensure consistent performance for demanding environments.</p>
            </div>
          </motion.div>

          <motion.div className={styles.feature} variants={itemVariants}>
            <img src={Images.trophy} alt="icon" className={styles.iconName} />
            <div className={styles.description}>
              <strong>Scalability:</strong>
              <p>Solutions that evolve with your business—from startups to enterprises.</p>
            </div>
          </motion.div>

          <motion.button
            className={styles.button}
            variants={buttonVariants}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT US
          </motion.button>
        </motion.div>

        {/* Right graph section with spring animation */}
        <motion.div className={styles.graph} variants={graphVariants}>
          <img src={Images.graph} alt="Profit Chart" />
          <p className={styles.report}>
            <strong>Annual Report:</strong> From 2018 to 2024, average client ROI improved by{' '}
            <span>+5.6%</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profit;
