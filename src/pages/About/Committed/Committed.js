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
            Excellence Since 1977
          </h3>
        </div>
        <div className={styles.right}>
          <p>
            Our journey began in the early months of 1977, crafting structural
            components for a spacious 40’ X 90’ building, which now stands as
            the cornerstone of our operations. In those early days, we proudly
            produced around 30,000 board feet per week, setting the stage for
            our growth. Today, our production capacity is over 1.5 million board
            feet per week.
          </p>
          <p>
            Since 2019, our commitment to excellence has driven us to enhance
            our fabrication services by elevating capacity, precision, and
            craftsmanship. After thorough deliberation, we invested
            significantly in a CNC machine for glulam beam fabrication. By the
            autumn of 2020, our vision became reality as we successfully
            integrated this cutting-edge CNC technology, solidifying our
            position as one of the largest CNC-equipped glulam manufacturers in
            the United States.
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
          QB Corporation’s commitment and extra attention to quality set us
          apart. Quality to us is much more than just the essential product.
          It’s all of the aspects of the business, from sales to manufacturing
          to shipping. QB glulam beams are manufactured using kiln-dried lumber
          and waterproof glues to provide a product with high reliability and
          performance.
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
            We make sure none of our wood scraps, trims, or sawdust go to waste
            by producing wood pellets. The pellets are bagged and sold to local
            markets to use for heating. We also recycle all of the plastic
            wrapping used on our lumber, ensuring minimal waste and
            eco-conscious practices throughout our operations.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default Committed;
