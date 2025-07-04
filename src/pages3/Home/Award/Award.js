import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Award.module.scss";

import img1 from "../../../assets3/images/certificate2.png";
import img2 from "../../../assets3/images/certificate1.png";
import img3 from "../../../assets3/images/certifiacate3.png";
import img4 from "../../../assets3/images/certificate4.jpg";

const awards = [
    {
        image: img1,
        title: "Certification of Appreciation from SIEMENS",
    },
    {
        image: img2,
        title: "Excellence Special Recognition from NIMA",
    },
    {
        image: img3,
        title: "Certification of Partners Meet from FIBRO",
    },
    {
        image: img4,
        title: "Certification of Partners with ISRO",
    },
];

const Certificates = () => {
    return (
        <section className={styles.showcase}>
            <h1>Awards & Certificates </h1>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.swiper}
            >
                {awards.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.card}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                            <h4>{item.title}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Certificates;