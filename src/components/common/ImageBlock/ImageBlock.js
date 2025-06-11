import React from "react";
import { motion } from "framer-motion";
import styles from "./ImageBlock.module.scss";

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ImageBlock = ({ data = [] }) => {
  return (
    <section className={styles.imageBlock}>
      <div className={styles.grid}>
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={idx}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageBlock;
