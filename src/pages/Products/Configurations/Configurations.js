import React, { useState } from 'react'
import styles from "./Configurations.module.scss";
import Stock from './Stock/Stock';
import Curved from './Curved/Curved';
import Tapered from './Tapered/Tapered';
import DoubleTapered from './DoubleTapered/DoubleTapered';
import Pitched from './Pitched/Pitched';
import ThreeHingeArch from './ThreeHingeArch/ThreeHingeArch';
import CrossSection from './CrossSection/CrossSection';
import EndFebrication from './EndFebrication/EndFebrication';
import BeamFebrication from './BeamFebrication/BeamFebrication';
import CorbelDetails from './CorbelDetails/CorbelDetails';

const tabs = {
    "Stock": <Stock />,
    "Curved": <Curved />,
    "Tapered": <Tapered />,
    "Double Tapered": <DoubleTapered />,
    "Pitched/Cambered": <Pitched />,
    "Three Hinge Arch": <ThreeHingeArch />,
    "Cross Section Profiles": <CrossSection />,
    "End Febrication": <EndFebrication />,
    "Beam Febrication": <BeamFebrication />,
    "Corbel Details": <CorbelDetails />,
};

const Configurations = () => {
    const [activeTab, setActiveTab] = useState("Stock");
    return (
        <section className={styles.container}>
            <div className={styles.horizontalSection}>
                <h1>Available Configurations</h1>
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
        </section>

    )
}

export default Configurations