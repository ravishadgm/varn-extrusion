import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import hook
import styles from './Product.module.scss';
import { Link } from "react-router-dom";

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
  const navigate = useNavigate();
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
              <Link to="/products/custom-beams">
                <li>  Custom Glulam Beams <FiArrowUpRight /></li>
              </Link>

              <Link to="/products/stoke-beams">
                <li>Stock Glulam Beams <FiArrowUpRight /></li>
              </Link>
              <li>QB Rim Board <FiArrowUpRight /></li>
              <li>Utility Structures <FiArrowUpRight /></li>
              <li>Wood Pellets <FiArrowUpRight /></li>
              <li >
                Custom Glulam Beams <FiArrowUpRight />
              </li>
              <li >
                Stock Glulam Beams <FiArrowUpRight />
              </li>
              <li onClick={() => navigate('/products/qb-rim-board')}>
                QB Rim Board <FiArrowUpRight />
              </li>
              <li onClick={() => navigate('/products/utility-structures')}>
                Utility Structures <FiArrowUpRight />
              </li>
              <li onClick={() => navigate('/products/wood-pellets')}>
                Wood Pellets <FiArrowUpRight />
              </li>
            </ul>
            <button className={styles.button} onClick={() => navigate('/products')}>
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
              <li onClick={() => navigate('/services/fabrication')}>Fabrication <FiArrowUpRight /></li>
              <li >Connection Attachment</li>
              <li >Pre-Fit Connections</li>
              <li onClick={() => navigate('/services/truss-assembly')} >Heavy Glulam Timber Truss Assembly <FiArrowUpRight /></li>
              <li >Steel </li>
            </ul>
            <button className={styles.button} onClick={() => navigate('/services')}>
              ALL SERVICES <FiArrowUpRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
