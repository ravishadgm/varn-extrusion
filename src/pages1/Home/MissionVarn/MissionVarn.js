import React, { useEffect, useRef, useState } from 'react';
import styles from "./MissionVarn.module.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import Aerrow from "../../../assets1/images/Homee/Mission/Aerrow.png";
import Mission from "../../../assets1/images/Homee/Mission/Mission.jpg";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CountUp from 'react-countup';

const MissionVarn = () => {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // Only run once
                }
            },
            { threshold: 0.4 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.aboutContainer}>
            {/* Vision Section */}
            <section className={styles.visionSection}>
                <div className={styles.logo}>
                    <img src={Mission} alt="Varn Extrusion Logo" />
                </div>

                <div className={styles.right}>
                    <p className={styles.heading}>About Our Strength</p>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop={false}
                        className={styles.slider}
                    >
                        <SwiperSlide>
                            <div className={styles.column}>
                                <h1 className={styles.subHeading}>Our Vision</h1>
                                <p className={styles.visionText}>
                                    <FaRegCheckCircle className={styles.checkIcon} />
                                    To be recognized as a globally trusted name in aluminium manufacturing,
                                    offering innovative, sustainable, and superior-quality products.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.column}>
                                <h1 className={styles.subHeading}>Our Mission</h1>
                                <p className={styles.visionText}>
                                    <FaRegCheckCircle className={styles.checkIcon} />
                                    To be the premier Aluminium extrusion manufacturer in the South Asian Region.
                                </p>
                                <p className={styles.visionText}>
                                    <FaRegCheckCircle className={styles.checkIcon} />
                                    To continuously enhance product quality, invest in modern technologies.
                                </p>
                                <p className={styles.visionText}>
                                    <FaRegCheckCircle className={styles.checkIcon} />
                                    Provide exceptional service to our clients by fostering a culture of continuous improvement.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.semiAbout}>
                <div className={styles.semiContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.lowerContainer} ref={counterRef}>
                            <div className={styles.statBox}>
                                <h2>
                                    {startCount ? <CountUp end={300} duration={2.5} /> : 0}+
                                </h2>
                                <p>Skilled Team</p>
                            </div>
                            <div className={styles.statBox}>
                                <h2>
                                    {startCount ? <CountUp end={2016} duration={2.5} /> : 0}
                                </h2>
                                <p>Year Established</p>
                            </div>
                            <div className={styles.statBox}>
                                <h2>
                                    {startCount ? <CountUp end={6000} duration={2.5} /> : 0} MT
                                </h2>
                                <p>Annual Capacity</p>
                            </div>
                            <div className={styles.statBox}>
                                <h2>
                                    {startCount ? <CountUp end={0.3} decimals={1} duration={2.5} /> : '0.0'}mm
                                </h2>
                                <p>Ultra-Slim Profile</p>
                            </div>
                        </div>
                        <div className={styles.aerrow}>
                            <img src={Aerrow} alt="Arrow Icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVarn;




// .semiAbout {
//   width: 100%;
//   background-color: $color-white;
//   padding: 2rem 1rem;

//   .semiContainer {
//     max-width: 1200px;
//     margin: auto;

//     .contentWrapper {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       flex-wrap: wrap;
//       gap: 2rem;
//       margin-bottom: 2.5rem;

//       @media (max-width: 768px) {
//         flex-direction: column;
//         align-items: center;
//         text-align: center;
//       }
//     }

//     .aerrow {
//       padding-bottom: 40px;

//       img {
//         width: 90px;
//         height: auto;

//         @media (max-width: 480px) {
//           width: 70px;
//         }
//       }
//     }

//     .lowerContainer {
//       background-color: #0061ea;
//       border-radius: 15px;
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-evenly;
//       align-items: center;
//       padding: 2rem;
//       width: 100%;

//       @media (max-width: 1080px) {
//         gap: 2rem;
//         padding: 2rem 1.5rem;
//       }

//       .statBox {
//         flex: 1 1 200px;
//         min-width: 180px;
//         text-align: left;

//         @media (max-width: 768px) {
//           text-align: center;
//         }

//         h2 {
//           font-size: 2rem;
//           color: $color-white;
//           margin-bottom: 0.5rem;

//           @media (max-width: 480px) {
//             font-size: 1.7rem;
//           }
//         }

//         p {
//           font-size: 1rem;
//           color: $color-white;
//           margin: 0;

//           @media (max-width: 480px) {
//             font-size: 0.85rem;
//           }
//         }
//       }
//     }
//   }
// }

