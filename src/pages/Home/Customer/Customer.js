import React from "react";
import styles from "./Customer.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Images from "@assets/images"; 

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

function Customer() {
  return (
    <section className={styles.customerSection}>
      <motion.img
        src={Images.home_customer}
        alt="Customer Background"
        className={styles.image}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className={styles.content}>
        <h2>
          We strive for 100% on-time deliveries <br />
          and 100% customer satisfaction
        </h2>

        <div className={styles.infoGrid}>
          {[
         
            {
              number: "01.",
              title: "Safety Management",
              text: "QB Corporation is dedicated to providing our employees and customers with a safe and healthy working environment.",
            },
            {
              number: "02.",
              title: "Quality Control",
              text: "At QB Corporation, we aim not to be average but to stand out in quality.",
            },
            {
              number: "03.",
              title: "Professional Team",
              text: "QB Corporation employees strive to provide the best safe environment, quality products, and quantity.",
            },
            {
              number: "04.",
              title: "On-Time Deliveries",
              text: "Shipping on flat-bed trucks with companies that deliver on time, anywhere in the U.S.A.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.infoBox}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <span className={styles.number}>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button className={styles.button}>
          ABOUT QB CORP <FiArrowUpRight className={styles.icon} />
        </button>
      </div>
    </section>
  );
}

export default Customer;
