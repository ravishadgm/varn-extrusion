import React, { useState } from "react";
import styles from "./Technical.module.scss";

import Adhesives from "../Technical/Adhesives/Adhesives";
import Checking from "../Technical/Checking/Checking";
import FireResistance from "../Technical/FireResistance/FireResistance";
import QualityAssurance from "../Technical/QualityAssurance/QualityAssurance";
import Treatment from "../Technical/Treatment/Treatment";
import VolumeEffects from "../Technical/VolumeEffects/VolumeEffect"
import BeamLayups from "../Technical/BeamLayups/BeamLayups";

const tabs = {
  "Adhesives": <Adhesives />,
  "Checking": <Checking />,
  "Fire Resistance": <FireResistance />,
  "Quality Assurance": <QualityAssurance />,
  "Beam Layups": <BeamLayups />,
  "Volume Effects": <VolumeEffects />,
  "Treatment": <Treatment />,
};

function Technical() {
  const [activeTab, setActiveTab] = useState("Adhesives");

  return (
    <section className={styles.container}>
      <div className={styles.horizontalSection}>
        <h1>Technical Information</h1>
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
  );
}

export default Technical;
