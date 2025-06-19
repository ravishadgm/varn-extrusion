import React from "react";
import styles from "./Center.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Images from "@assets/images"; // Update path as per your structure

const Center = () => {
  return (
    <div className={styles.centerWrapper}>
      {/* Section 1 */}
      <section className={styles.sectionOne}>
        <div className={styles.left}>
          <h2>The Nep & Mary Ellen Lynch Center</h2>
          <p>A Community Project for Salmon’s Youth</p>
        </div>
        <div className={styles.right}>
          <p>
            VARN Extrusion Pvt. Ltd. actively supports community development
            initiatives that promote education, health, and youth empowerment.
            We are proud to contribute to local infrastructure and social
            welfare projects through partnerships with schools, vocational
            training centers, and healthcare initiatives. Our efforts reflect
            our commitment to nurturing the next generation and strengthening
            the communities we serve.
          </p>
          <div className={styles.detailsLink}>
            PROJECT DETAILS <FaArrowRight className={styles.arrowIcon} />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.sectionTwo}>
        <div className={styles.imagesWrapper}>
          <img
            src={Images.community_backstop}
            alt="Memorial Field"
            className={styles.bg1}
          />
        </div>
        <div className={styles.textWrapper}>
          <h3>Curved Laminated Beams Backstop</h3>
          <p>
            In support of community infrastructure and recreation, VARN
            Extrusion Pvt. Ltd. has proudly contributed high-quality aluminium
            materials for various local development projects. Whether it's
            donating structural components or providing precision-engineered
            profiles for public facilities, we are committed to enhancing the
            spaces where communities gather and grow. Our contributions reflect
            not just craftsmanship, but a deep sense of social responsibility.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Center;
