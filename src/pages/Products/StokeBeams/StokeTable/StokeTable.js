import React, { useState } from 'react';
import styles from "./StokeTable.module.scss";
import FirstStockBeamTable from './FirstStokeBeamTable/FirstStockBeamTable';
import SecondStokeBeamTable from './SeconStokeBeamTable/SecondStokeBeamTable';
import ThirdStokeBeamTable from './ThirdStokeBeamTable/ThirdStokeBeamTable';
import FourthStokeBeamTable from './FourthStokeBeamTable/FourthStokeBeamTable';

const tabs = {
    '3 1/8"': <FirstStockBeamTable />,
    '5 1/8"': <SecondStokeBeamTable />,
    '6 3/4"': <ThirdStokeBeamTable />,
    '8 3/4"': <FourthStokeBeamTable />,
};


const StokeTable = () => {
    const [activeTab, setActiveTab] = useState('3 1/8"');
    return (
        <section>
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

export default StokeTable