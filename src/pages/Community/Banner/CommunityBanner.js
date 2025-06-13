import React from "react";
import { motion } from "framer-motion";
import styles from "./CommunityBanner.module.scss";
import Images from "@assets/images";

const CommunityBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>QB Corp's Community Involvement</h1>
        <div className={styles.content}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              “You must be the change you wish to see in the world.”
            </p>
            <p className={styles.quoteAuthor}>– Mahatma Gandhi</p>
          </div>
          <div className={styles.description}>
            <p>
              QB Corporation is located in Salmon, Idaho. The setting of the
              plant is adjacent to the Lemhi River. The Salmon River, “the river
              of no return,” runs through downtown Salmon. The Bitterroot and
              White Cloud mountain ranges provide a majestic backdrop to the
              community.
            </p>
            <p>
              River rafting, hiking and camping, Steelhead and Salmon fishing,
              skiing, and hunting are all abundant in Salmon. QB supports the
              community in a variety of ways. As a major employer, we provide
              jobs for local families. We are active in the community and
              support many community projects, including constructing a local
              hospital and school.
            </p>
          </div>
        </div>
      </div>

      {/* Community Center Image Section with Animation */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={Images.community_center}
          alt="The Nep & Mary Ellen Lynch Center"
          className={styles.communityImage}
        />
      </motion.div>
    </section>
  );
};

export default CommunityBanner;
