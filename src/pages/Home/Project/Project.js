import React from "react";
import styles from "./Project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Images from "@assets/images";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Idaho Central Credit Union Arena",
    location: "Moscow, Idaho, USA",
    image: Images.home_swiper_two,
    link: "/projects/idaho-central-credit-union-arena",
  },
  {
    title: "Jackson Hole Airport",
    location: "Jackson Hole, Wyoming, USA",
    image: Images.home_swiper_one,
    link: "#",
  },
  {
    title: "Bespoke Project",
    location: "Boise, Idaho, USA",
    image: Images.home_swiper_three,
    link: "#",
  },
  {
    title: "The Fries House",
    location: "Ketchum, Idaho, USA",
    image: Images.home_swiper_two,
    link: "#",
  },
  {
    title: "Kanzan House",
    location: "Blaine County, Idaho, USA",
    image: Images.home_swiper_one,
    link: "#",
  },
];

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

function Project() {
  return (
    <section className={styles.projectSection}>
      <div className={styles.header}>
        <h2>
          Collaborations with talented <br /> architects, builders, and
          designers
        </h2>
        {/* <Link to="/projects" className={styles.allProjectsBtn}>
          All Projects <FiArrowUpRight />
        </Link> */}
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className={styles.projectSlider}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={styles.projectCard}>
            <motion.div
              variants={fadeLeftToRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                {/* <a href={project.link} className={styles.linkIcon}>
                  <FiArrowUpRight />
                </a> */}
              </div>
              <div className={styles.info}>
                <h3>
                  <a href={project.link}>{project.title}</a>
                </h3>
                <p>{project.location}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navButtons}>
        <button className={`prev-btn ${styles.navBtn}`}>← Prev</button>
        <button className={`next-btn ${styles.navBtn}`}>Next →</button>
      </div>
    </section>
  );
}

export default Project;
