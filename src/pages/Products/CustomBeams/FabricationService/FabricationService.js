import React, { useState } from 'react'
import styles from "./FabricationServices.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HiArrowUpRight } from "react-icons/hi2";
import GradesList from './GradeList/GradeList';
import TexureList from './TextureList/TexureList';

const FabricationService = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <h1>Fabrication Services</h1>
                <p>
                    Our fabrication services include a wide range of aluminium profiles, custom shapes, and detailed finishes. We offer precise cutting, punching, CNC machining, and component assembly as per your project needs. Electrical raceways, reinforcement options, and integration-ready solutions are available to match your design specifications.
                </p>

                <a href="/services/fabrication" rel="noopener noreferrer">
                    <button className={styles.pdfButton}>
                        FEBRICATION DETAILS <HiArrowUpRight className={styles.pdfIcon} />
                    </button>
                </a>
            </div>

            <div className={styles.anotherContainer}>
                <div className={styles.accordion}>
                    <div className={styles.header} onClick={() => setIsOpen1(!isOpen1)}>
                        <span className={styles.textContent}>Textures</span>
                        {isOpen1 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                    </div>
                    <div className={`${styles.contentWrapper} ${isOpen1 ? styles.open : ''}`}>
                        <div className={styles.content}>
                            <TexureList />
                        </div>
                    </div>
                </div>


                <div className={styles.accordion}>
                    <div className={styles.header} onClick={() => setIsOpen2(!isOpen2)}>
                        <span>Finishes</span>
                        {isOpen2 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                    </div>
                    <div className={`${styles.contentWrapper} ${isOpen2 ? styles.open : ''}`}>
                        <div className={styles.content}>
                            <p>
                                There are a handful of finishes for our Custom Glulam Beams. The finish style depends on the amount of sanding, patching and filling voids, and visual appearance. It should be noted that the finish style does not determine the strength of the beam but rather the appearance.
                            </p>
                            <GradesList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FabricationService;
