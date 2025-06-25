import React from 'react'
import styles from "./ManufactureFacility.module.scss"
import { motion } from "framer-motion";
import factory from "../../../../assets/images/Manufacture/facility.jpeg";
import Highlights from '../Highlights/Highlights';

const ManufactureFacility = () => {
    return (
        <div>
            <section className="topSection">
                <div className={styles.facilityContainer}>
                    <div className={styles.facilityContent}>
                        <div className={styles.facilityHeading}>
                            <h1>Our state-of-the-art facility</h1>
                        </div>
                        <div className={styles.innerContent}>
                            <ul>
                                <li>Varn Extrusion Pvt. Ltd. operates across multiple industrial units strategically located in Gujarat, India. With a combined facility area built for high-volume, precision-based aluminium manufacturing, we have developed an infrastructure that supports innovation, speed, and uncompromising quality.</li>
                                <li>We have built a vertically integrated ecosystem that includes modern extrusion presses, automated anodizing and powder coating lines, CNC machining centers, and die manufacturing facilities. Our newly expanded setup further strengthens our capabilities, ensuring seamless production flow from raw material to finished aluminium profiles.</li>
                                <li>With a strong focus on innovation and quality control, our facilities are optimized for high-volume manufacturing while maintaining flexibility for custom projects. Whether it’s complex profiles, critical tolerances, or specialized surface finishes, our facility is engineered to meet the evolving demands of diverse industries.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imageWrapper}>
                            <motion.img
                                src={factory}
                                alt="Factory Overview"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bottomSection'>
                <div>
                    {/* <div className={styles.imageWrapper}>
                        <motion.img
                            src={factory}
                            alt="Factory Overview"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div> */}
                </div>
                <Highlights />
            </section>
        </div>
    )
}

export default ManufactureFacility




