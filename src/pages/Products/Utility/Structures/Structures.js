import React from "react";
import styles from "./Structures.module.scss";
import Images from '@assets/images';

const Structures = () => {
  return (
    <section className={styles.structures}>
      {/* Section 1: Utility Structures */}
      <div className={styles.utilitySection}>
        <div className={styles.utilityContent}>
          <div className={styles.utilityLeft}>
            <h2>
              Utility Structures: Poles, cross-arms and wood framing.
            </h2>
          </div>
          <div className={styles.utilityRight}>
            <p>
              The rising demand for alternative energy sources, such as wind and solar
              facilities, has resulted in an increased need for wood Utility Structures.
              Wood has a proven track record of reliable performance over several decades,
              sometimes up to 80 years.
            </p>
            <p>
              As the demand for taller, stronger, and more durable structures grows,
              engineered wood poles and framing have been developed for use in transmission
              lines. These members are not only cost-effective but also environmentally
              friendly, making them an ideal solution for expanding the nation’s electrical
              grid.
            </p>
            <p>
              QB Corporation offers Utility Structures products specifically designed for
              the utility industry and ready for treatment. Our product is coastal Douglas
              Fir, which can be incised to enable better penetration of preservatives to
              lengthen lifespan. Poles, cross-arms, and x-braces can be fabricated
              according to the required dimensions for quick and easy installation.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.treatmentSection}>
        <div className={styles.treatmentContent}>
          <div className={styles.treatmentImage}>
            <img src={Images.CustomAluminium} alt="Preservative treated wood beams" />
          </div>
          <div className={styles.treatmentText}>
            <h2>Preservative Treatment</h2>
            <p>
              QB Corporation recommends using <strong>Coastal Douglas Fir</strong> or{" "}
              <strong>Southern Yellow Pine</strong> for products that undergo chemical
              preservative pressure treatment. Treatments should be oil-based or as
              specified by the project designer.
            </p>
            <p>
              While QB Corporation does not provide treating services ourselves, we can
              outsource this service. We offer incising services for better chemical
              penetration and retention — highly recommended for Utility Structures.
              Our incising equipment can handle large industrial beams, including tapered
              beams.
            </p>
            <p>
              Some customers opt for <strong>Alaskan Yellow Cedar</strong>, a naturally
              durable species resistant to insect attack and decay. QB Corporation is an
              approved fabricator of this species. If you have questions,{" "}
              <a href="mailto:service@qbcustomerservice.com">
                contact our customer service
              </a>{" "}
              at 208-756-4248.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structures;
