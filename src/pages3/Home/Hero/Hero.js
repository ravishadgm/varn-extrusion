import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import styles from './Hero.module.scss';

import Banner1 from './Banner1.jpg';
import Banner2 from './Banner2.jpg';
import Banner3 from './Banner3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: Banner1,
      title: 'Diverse Aluminium Extrusion Profiles',
      description: 'Explore our wide range of aluminium extrusion products for all industrial needs.',
    },
    {
      image: Banner2,
      title: 'High-Precision Manufacturing Excellence',
      description: 'We deliver custom aluminium profiles tailored to your technical specifications.',
    },
    {
      image: Banner3,
      title: 'Quality That Builds Trust',
      description: 'Committed to consistent quality and timely delivery across global markets.',
    },
  ];

  const stats = [
    { number: '45+', label: 'Years of Experience' },
    { number: '2,000+', label: 'Customers' },
    { number: '4,500+', label: 'Profiles' },
    { number: '40+', label: 'Alloy Types' },
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.sliderSection}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex); // important for looping
          }}
          className={styles.swiperContainer}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideContent}>
                <div
                  className={styles.backgroundImage}
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className={styles.gradientOverlay}></div>
                <div className={styles.contentContainer}>
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      className={styles.leftContent}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -60 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                      <h1 className={styles.mainHeading}>{slide.title}</h1>
                      <p className={styles.description}>{slide.description}</p>
                      <button className={styles.exploreButton}>
                        Explore Products
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button ref={prevRef} className={`${styles.navButton} ${styles.prevButton}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button ref={nextRef} className={`${styles.navButton} ${styles.nextButton}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div ref={paginationRef} className={styles.pagination}></div>

        {/* Stats Section with CountUp */}
        <motion.div
          className={styles.statsOverlay}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className={styles.statsContainer}>
            {stats.map((item, index) => {
              const number = parseInt(item.number.replace(/\D/g, ''));
              const suffix = item.number.replace(/\d/g, '');
              return (
                <motion.div
                  key={index}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className={styles.statNumber}>
                    <CountUp end={number} duration={2} />{suffix}
                  </div>
                  <div className={styles.statLabel}>{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
