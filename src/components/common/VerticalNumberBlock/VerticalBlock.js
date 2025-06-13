import React from "react";
import styles from "./VerticalBlock.module.scss";

function VerticalBlock({ title, description, features }) {
  return (
    <section className={styles.abcSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.rightColumn}>
          {features?.map((item) => (
            <div key={item.number} className={styles.featureItem}>
              <span className={styles.number}>{item.number}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerticalBlock;
