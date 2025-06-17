import React from "react";
import { motion } from "framer-motion";
import styles from "./ImageBlock.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
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
            <div className={styles.imageWrapper} onClick={()=>navigate(item.link)}>
              <img src={item.image} alt={item.title} />
              {item.link && (
                <a href={item.link} className={styles.linkIcon}>
                  <FiArrowUpRight />
                </a>
              )}
            </div>
            <h3>{item.title}</h3>
            <p className={styles.descriptionText}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageBlock;
