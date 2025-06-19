import React from "react";
import styles from "./Committed.module.scss";
import { motion } from "framer-motion";

import Images from "@assets/images";

const Committed = () => {
  return (
    <section className={styles.committedSection}>
      <div className={styles.topSection}>
        <div className={styles.left}>
          <h3>
            Committed to
            <br />
            Excellence Since 2016
          </h3>
        </div>
        <div className={styles.right}>
          <p>
            Since 2016, VARN Extrusion Pvt. Ltd. has been a pioneering force in
            the aluminium industry, dedicated to engineering precision and
            elegant design. We are India’s leading manufacturer of ultra-slim
            aluminium profiles with wall thicknesses as fine as 0.3 mm — a rare
            capability that highlights our mastery in minimalist,
            high-performance engineering.
          </p>
          <p>
            With a fully integrated production facility, state-of-the-art
            machinery, and a 300+ strong skilled workforce, we offer end-to-end
            solutions including anodizing, powder coating, in-house fabrication,
            and automated packaging. Our commitment to quality, innovation, and
            timely delivery has made us a trusted partner across industries. At
            VARN, we don’t just manufacture aluminium profiles — we craft
            solutions for the future.
          </p>
        </div>
      </div>

      <div className={styles.fullImageWrapper}>
        <motion.img
          src={Images.about_committed}
          alt="Factory Overview"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <div className={styles.description}>
        <p>
          At VARN Extrusion Pvt. Ltd., quality is not just a standard — it’s our
          identity. Every stage of our process, from raw material sourcing to
          extrusion, coating, fabrication, and final packaging, reflects our
          unwavering commitment to excellence. Our aluminium profiles are
          manufactured with precision using advanced machinery, premium-grade
          materials, and world-class finishes to ensure outstanding performance,
          durability, and aesthetic appeal.
        </p>
      </div>

      <div className={styles.environmentBlock}>
        <div className={styles.environmentImage}>
          <motion.img
            src={Images.about_environment}
            alt="Environmental Responsibility"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className={styles.environmentContent}>
          <h3>Environmental</h3>
          <p>
            At VARN Extrusion Pvt. Ltd., sustainability is at the core of our
            operations. We follow eco-friendly manufacturing processes by
            recycling aluminium scrap, reducing material waste, and optimizing
            energy consumption through advanced furnace systems. Our commitment
            to responsible production also includes water recycling in surface
            treatment processes and eco-conscious packaging practices, ensuring
            minimal environmental impact at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Committed;
