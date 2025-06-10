import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Product.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut'
    }
  })
};

const Product = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>QB Corp. Products And Services</h2>
          <p>
            QB Corporation offers more than just glulam beams – we provide a comprehensive solution that enhances your business capabilities.
          </p>
        </motion.div>

        <div className={styles.cards}>
          <motion.div
            className={styles.card}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Products</h3>
            <ul>
              <li>Custom Glulam Beams <FiArrowUpRight /></li>
              <li>Stock Glulam Beams <FiArrowUpRight /></li>
              <li>QB Rim Board <FiArrowUpRight /></li>
              <li>Utility Structures <FiArrowUpRight /></li>
              <li>Wood Pellets <FiArrowUpRight /></li>
            </ul>
            <button className={styles.button}>
              ALL PRODUCTS <FiArrowUpRight />
            </button>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Services</h3>
            <ul>
              <li>Fabrication <FiArrowUpRight /></li>
              <li>Connection Attachment <FiArrowUpRight /></li>
              <li>Pre-Fit Connections <FiArrowUpRight /></li>
              <li>Heavy Glulam Timber Truss Assembly <FiArrowUpRight /></li>
              <li>Steel <FiArrowUpRight /></li>
            </ul>
            <button className={styles.button}>
              ALL SERVICES <FiArrowUpRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
