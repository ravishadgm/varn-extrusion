import React from "react";
import styles from "./Swipper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";


const fadeLeftToRight = {
    hidden: { opacity: 0, x: -30 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.2,
            ease: "easeOut",
        },
    }),
};

function SwipperContent({ images = [], visibleSlides = 3 }) {
    return (
        <section className={styles.projectSection}>
            <Swiper
                modules={[Navigation]}
                grabCursor={true}
                spaceBetween={15}
                slidesPerView={1}
                breakpoints={{
                    480: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: visibleSlides,
                        spaceBetween: 30
                    },
                }}
                className={styles.projectSlider}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className={styles.projectCard}>
                        <motion.div
                            variants={fadeLeftToRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={img.url} alt={img.alt} />
                                {/* <a href="#" className={styles.linkIcon}>
                                    <FiArrowUpRight />
                                </a> */}
                            </div>

                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

export default SwipperContent;








