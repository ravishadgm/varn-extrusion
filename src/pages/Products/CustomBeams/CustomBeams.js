import React, { useState } from 'react';
import styles from "./CustomBeams.module.scss";
import Sizinng from './Sizing/Sizinng';
import Curved from './Curved/Curved';
import Treated from './Treated/Treated';
import Species from './Species/Species';
import CorpBlock from '@components/common/CorpBlock/CorpBlock';
import FabricationService from './FabricationService/FabricationService';


const tabs = {
    "Sizing": <Sizinng />,
    "Curved": <Curved />,
    "Treated": <Treated />,
    "Material Grades": <Species />,
};

const CustomBeams = () => {
    const [activeTab, setActiveTab] = useState("Sizing");


    return (
        <section>
            <div>
                <CorpBlock
                    heading={
                        <>
                            High-Quality Custom <br />
                            Aluminium Profiles
                        </>
                    }
                    subheading="We at Varn Extrusion take pride in delivering high-quality custom aluminium profiles, precisely engineered to meet every specification provided by our customers. With our advanced manufacturing facility, we can produce complex, curved, and ultra-slim aluminium designs — even for the most challenging applications."
                    buttonLabel="Contact An Expert"
                    buttonLink="/contact"
                />
            </div>
            <div className={styles.containerBox}>
                <div className={styles.navTabs}>
                    <ul>
                        {Object.keys(tabs).map((tab) => (
                            <li
                                key={tab}
                                className={activeTab === tab ? styles.active : ""}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.replace(/_/g, " ")}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.contentSection}>{tabs[activeTab]}</div>
            </div>
            <div>
                <FabricationService />
            </div>
        </section>
    )
}

export default CustomBeams