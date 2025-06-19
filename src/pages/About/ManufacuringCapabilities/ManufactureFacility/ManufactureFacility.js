import React from 'react'
import styles from "./ManufactureFacility.module.scss"
import { motion } from "framer-motion";
import factory from "../../../../assets/images/Manufacture/factory.jpg";
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
                                <li>QB Corporation is situated on 45 acres of land or 182,000 square meters. The manufacturing facility, including the pre-grade and sort area, has approximately 175,000 square feet of manufacturing space.</li>
                                <li>Our facility is essentially two mills in one, with the addition of the new laminating facility recently constructed on the south end of the existing plant. This new plant includes state-of-the-art equipment from the lumber grading station through the finished room.</li>
                                <li>We have multiple lines capable of producing the most versatile product range offered in the industry. Our state-of-the-art facility efficiently produces custom curves, tapers, and production stock beams. The plant is capable of producing beams up to 20″ wide, 108″ deep, and 130′ long. The new finish line can finish any size beam (see capabilities) we produce. We can also load the trucks indoors.</li>
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
                                className={styles.imgMerge}
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




