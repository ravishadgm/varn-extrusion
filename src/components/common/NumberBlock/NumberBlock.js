import React from "react";
import styles from "./NumberBlock.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Images from "@assets/images";
import { useNavigate } from "react-router-dom";

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

function NumberBlock({
  title,
  infoList,
  buttonLabel = "ABOUT QB CORP",
  alertBox,
}) {
  const navigate = useNavigate();
  return (
    <section className={styles.customerSection}>
      {/* {buttonLabel && (
        <motion.img
          src={Images.home_customer}
          alt="Customer Background"
          className={styles.image}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />
      )} */}

      <div className={styles.content}>
        <h2>{title}</h2>

        <div className={styles.infoGrid}>
          {infoList.map((item, i) => (
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

        {buttonLabel && (
          <button className={styles.button} onClick={() => navigate("/about")}>
            {buttonLabel} <FiArrowUpRight className={styles.icon} />
          </button>
        )}

        {alertBox && (
          <div className={styles.alertBox}>
            <span className={styles.alertIcon}>!</span>
            <span className={styles.alertText}>
              <strong>
                Varn Extrusion does not offer structural design or engineering
                services.
              </strong>
              &nbsp;Kindly provide finalized drawings and specifications in{" "}
              <code>.3d</code> or <code>.dxf</code> file formats to ensure
              accurate production and processing.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default NumberBlock;
