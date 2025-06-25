import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './Product.module.scss';
import { Link } from "react-router-dom";
import Images from "@assets/images";

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
    <>
      <section className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            <img src={Images.certificate} alt="Certificate 1" />
            <img src={Images.certificate} alt="Certificate 2" />
            <img src={Images.certificate} alt="Certificate 3" />
            <img src={Images.certificate} alt="Certificate 4" />
          </div>
        </div>
      </section>


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
            <h2>Varn Extrusion Products And Services</h2>
            <p>
              Varn Extrusion  offers more than just glulam beams – we provide a comprehensive solution that enhances your business capabilities.
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


                <li onClick={() => navigate('/products/varn-rim-board')}>
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

    </>
  );
};

export default Product;
