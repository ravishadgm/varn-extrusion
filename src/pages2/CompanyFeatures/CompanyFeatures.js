import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CompanyFeatures.module.scss';

import { FaCogs, FaIndustry, FaCubes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const productList = [
  { icon: <FaCubes />, title: 'Custom Beams', desc: 'Precision-engineered aluminium beams.' },
  { icon: <FaIndustry />, title: 'Utility Structures', desc: 'Industrial-strength frameworks.' },
  { icon: <FaCogs />, title: 'Stock Beams', desc: 'Ready-to-use structural beams.' },
];

const serviceList = [
  { icon: <FaCogs />, title: 'Fabrication', desc: 'Custom-cut components.' },
  { icon: <FaIndustry />, title: 'Truss Assembly', desc: 'Heavy-duty truss systems.' },
  { icon: <FaCubes />, title: 'Attachments', desc: 'Secure connection solutions.' },
];

// Show all services first, then products
const combinedList = [
  ...serviceList.map((item) => ({ ...item, type: 'Service', color: '#FF7043' })),
  ...productList.map((item) => ({ ...item, type: 'Product', color: '#42A5F5' })),
];

const CompanyFeatures = () => {
  return (
    <section className={styles.showcase}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className={styles.swiper}
      >
        {combinedList.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.iconCircle}
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span
                className={styles.tag}
                style={{
                  backgroundColor: item.color + '22',
                  color: item.color,
                }}
              >
                {item.type}
              </span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CompanyFeatures;
