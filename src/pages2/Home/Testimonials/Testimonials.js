import React from 'react';
import styles from './Testimonials.module.scss';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Images from '../../../assets2/images/index';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Nitin Sharma',
    role: 'Director, VARN Industries',
    image: Images.ReviewOne,
    text: 'VARN’s dedication to innovation and design excellence helped us push boundaries with ultra-slim profiles—raising the bar for our entire industry.',
  },
  {
    id: 2,
    name: 'Anjali Mehta',
    role: 'Architect & Partner, Axis Studio',
    image: Images.ReviewTwo,
    text: 'Their commitment to detail and engineering precision made our vision a reality. VARN is more than a supplier—they’re a true collaborator.',
  },
];

// Animation Variants
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
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

const Testimonials = () => {
  return (
    <motion.div
      className={styles.testimonialWrapper}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={styles.container}
        variants={containerVariants}
      >
        {testimonials.map((item) => (
          <motion.div key={item.id} className={styles.card} variants={cardVariants}>
            <p className={styles.message}>{item.text}</p>
            <div className={styles.footer}>
              <div className={styles.user}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
              <motion.div
                className={styles.quote}
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <BiSolidQuoteAltLeft />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
