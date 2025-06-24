import React from 'react'
import { motion } from "framer-motion";
import Image from "../../../assets/images/home/vision.png"
import styles from "./MeetCEO.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image1 from "../../../assets/images/Leaders/Lead2.png";
import Image2 from "../../../assets/images/Leaders/Lead3.png";
import Image3 from "../../../assets/images/Leaders/Lead4.jpeg";
import Image4 from "../../../assets/images/Leaders/Lead5.jpeg";
import Image5 from "../../../assets/images/Leaders/Lead6.jpeg";

const MeetCEO = () => {
    const team = [
        {
            name: 'Mr. Rajesh Mehta',
            position: 'Chief Executive Officer (CEO)',
            quote:
                'At Varn Extrusion Pvt. Ltd., we don’t just manufacture aluminium profiles—we engineer possibilities.',
            image: Image1,
        },
        {
            name: 'Ms. Priya Sharma',
            position: 'Chief Technology Officer (CTO)',
            quote:
                'We empower our people to deliver quality that speaks for itself.',
            image: Image2,
        },
        {
            name: 'Mr. Anil Patel',
            position: 'Director of Operations',
            quote:
                'Together, we’re not only building products, but a legacy of excellence.',
            image: Image3,
        },
        {
            name: 'Mrs. Sneha Desai',
            position: 'Quality Assurance Manager',
            quote:
                'Quality isn’t a checkpoint—it’s a mindset reflected in every inch we produce.',
            image: Image4,
        },
        {
            name: 'Mr. Manav Shah',
            position: 'Production Head',
            quote:
                'On-time delivery, streamlined production, and consistency drive our commitment.',
            image: Image5,
        },
    ];

    return (
        <>
            <section className={styles.meetSection}>
                <div className={styles.meetContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.varnImg}>
                            {/* <img src={Image} alt="Our Vision" /> */}
                            <motion.img
                                src={Image}
                                alt="Factory Overview"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                    <div className={styles.contentSection}>
                        <h1>Meet Our CEO</h1>
                        <div className={styles.innerContainer}>
                            <p>“At Varn Extrusion Pvt. Ltd., we don’t just manufacture aluminium profiles—we engineer possibilities. Our journey has always been guided by a commitment to precision, innovation, and trust. I believe in leading with integrity and empowering our people to deliver quality that speaks for itself. Together, we’re not only building products, but also a legacy of excellence that will define the future of this industry.”</p>
                            <h4>- CEO NAME</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.leaderContent}>
                    <div>
                        <div className={styles.sliderContainer}>
                            <h1 className={styles.teamContainerHeading}>Meet Our Team</h1>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    1024: { slidesPerView: 3 },
                                    768: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 },
                                }}


                            >
                                {team.map((member, index) => (
                                    <SwiperSlide key={index}>

                                        <div className={styles.card}>
                                            <img src={member.image} alt={member.name} className={styles.image} />
                                            <h3>{member.name}</h3>
                                            <p className={styles.position}>{member.position}</p>
                                            <p className={styles.quote}>{member.quote}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default MeetCEO