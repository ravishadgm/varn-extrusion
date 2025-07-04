import React from "react";
import styles from "./OurServices.module.scss";
import { FaCogs, FaIndustry, FaCubes } from "react-icons/fa";
import { motion } from "framer-motion";

// Sidebar menu items
const services = [
  "ABOUT US",
  "CORPORATE OFFICE – SURAT",
  "UNIT 1 – KOSAMBA, GUJARAT",
  "UNIT 2 – KOSAMBA, GUJARAT",
  "UNIT 3 – REGAL ALLUFIN, KOSAMBA",
  "FABRICATION FACILITY",
  "ANODIZING & COATING UNIT",
];

// Service cards content
const serviceList = [
  {
    icon: <FaCogs />,
    title: "Fabrication",
    description: "Custom-cut and assembled components built to meet project specs with precision.",
  },
  {
    icon: <FaIndustry />,
    title: "Aluminium Truss Assembly",
    description: "Expertly built heavy-duty truss systems for large-span structures.",
  },
  {
    icon: <FaCubes />,
    title: "Connection Attachments",
    description: "Secure and efficient attachment solutions ensuring structural strength.",
  },
];

// Framer Motion Variants
const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 120,
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const rightContentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const serviceCardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 150,
    },
  }),
};

const Services = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <motion.div
        className={styles.left}
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
      >
        <div className={styles.overlay}></div>
        <motion.div className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Locations</h3>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={styles.menuItem}
              variants={menuItemVariants}
            >
              {service}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className={styles.right}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={rightContentVariants}
      >
        <h3 className={styles.title}>Our Capabilities</h3>
        <p className={styles.description}>
          We deliver fabrication, truss systems, and precision attachments — all tailored to your structural needs.
        </p>

        <div className={styles.serviceGrid}>
          {serviceList.map((item, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={serviceCardVariants}
            >
              {/* Zoom animation for icon */}
            <motion.div
  className={styles.iconWrapper}
  animate={{ scale: [1, 1.15, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className={styles.iconCircle}>
    {item.icon}
  </div>
</motion.div>

              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
