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
    "Species": <Species />,
};

const CustomBeams = () => {
    const [activeTab, setActiveTab] = useState("Sizing");


    return (
        <section>
            <div>
                <CorpBlock
                    heading={
                        <>
                            High-Quality Glue <br />
                            Laminated Beams
                        </>
                    }
                    subheading="We at QB Corporation take pride in providing quality custom glue beams, meeting each of the specifications provided by our customers. With our facility, we can manufacture custom and curved glue laminated timber for even the most complicated jobs."
                    buttonLabel="Contact An Expert"

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