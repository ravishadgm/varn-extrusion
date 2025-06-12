import React from "react";
import styles from "./CorpProject.module.scss";

const CorpProject = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h2>QB Corp. Projects</h2>
        <p>
          With QB Corporation’s products being amongst the best of the industry,
          clients can trust in the strength, reliability, and versatility,
          ensuring the success and longevity of their projects. While not every
          project is able to be shared or seen after it’s finished, here are a
          few projects we are fortunate enough to display.
        </p>
      </div>
    </section>
  );
};

export default CorpProject;
