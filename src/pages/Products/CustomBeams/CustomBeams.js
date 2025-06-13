import React, { useState } from 'react';
import styles from "./CustomBeams.module.scss";
import Sizinng from './Sizing/Sizinng';
import Curved from './Curved/Curved';
import Treated from './Treated/Treated';
import Species from './Species/Species';


const tabs = {
    "Sizing": <Sizinng />,
    "Curved": <Curved />,
    "Treated": <Treated />,
    "Species": <Species />,
};

const CustomBeams = () => {
    const [activeTab, setActiveTab] = useState("Adhesives");

    return (
        <section className={styles.container}>
            <div></div>
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

export default CustomBeams