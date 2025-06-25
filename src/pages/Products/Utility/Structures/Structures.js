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
              Aluminium Utility Structures: Poles, Cross-Arms & Framing Solutions
            </h2>
          </div>
          <div className={styles.utilityRight}>
            <p>
              With the evolution of energy infrastructure and urban expansion, aluminium utility structures have become a reliable and future-ready alternative to traditional materials. At Varn Extrusion Pvt. Ltd., we specialize in manufacturing precision-engineered aluminium components ideal for poles, cross-arms, framing systems, and other structural applications—offering unmatched strength-to-weight ratio and corrosion resistance.
            </p>
            <p>
              Our integrated manufacturing facility houses 3 high-capacity extrusion presses (800 UST x2 and 600 UST), supported by advanced anodizing (300 MT/month) and powder coating lines (2m/min). These capabilities allow us to produce utility-grade profiles with tight tolerances and customizable surface finishes, including JOTUN, AkzoNobel, and Asian Paints PPG-approved coatings—ensuring long-lasting performance in demanding environments.
            </p>
            <p>
              Every profile undergoes rigorous testing using Brinell and Webster hardness testers, along with spectrometer analysis for material integrity. With 1000+ moulds in our library, precision fabrication, and automated packaging, we deliver aluminium utility structures built to meet modern load-bearing, environmental, and aesthetic requirements—ready for the next generation of smart, sustainable infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.treatmentSection}>
        <div className={styles.treatmentContent}>
          <div className={styles.treatmentImage}>
            <img src={Images.preserveImage} alt="Preservative treated wood beams" />
          </div>
          <div className={styles.treatmentText}>
            <h2>Surface Protection & Finishing Treatments</h2>
            <p>
              At Varn Extrusion Pvt. Ltd., we understand that surface durability is just as important as structural integrity—especially in demanding utility and industrial applications. That’s why we offer advanced protective treatments like anodizing and powder coating to enhance corrosion resistance, improve longevity, and deliver superior aesthetic appeal across all aluminium profiles.
            </p>
            <p>
              Our in-house powder coating line uses a 7-tank pretreatment system followed by chromotization, enabling strong bonding of the coating to the metal surface. Approved by premium brands like Jotun, AkzoNobel, and Asian Paints PPG, our coatings come with 10/15/25-year guarantees and are applied using a high-speed conveyor system for consistency and efficiency—ideal for architectural and utility-grade applications.
            </p>
            {/* <p>
              Some customers opt for <strong>Alaskan Yellow Cedar</strong>, a naturally
              durable species resistant to insect attack and decay. QB Corporation is an
              approved fabricator of this species. If you have questions,{" "}
              <a href="mailto:service@qbcustomerservice.com">
                contact our customer service
              </a>{" "}
              at 208-756-4248.
            </p> */}
            <p>For added durability and surface integrity, we offer anodizing up to 25 microns with electro-anodized colours and shot blasting. These treatments not only prevent oxidation and surface degradation but also enhance visual appeal and functional lifespan. At Varn, preservation isn’t just protection—it’s performance engineered to last.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structures;
