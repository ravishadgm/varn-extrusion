import React from "react";
import { motion } from "framer-motion";
import styles from "./CommunityBanner.module.scss";
import Images from "@assets/images";

const CommunityBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>VARN Extrusion’s Community Involvement</h1>
        <div className={styles.content}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              “You must be the change you wish to see in the world.”
            </p>
            <p className={styles.quoteAuthor}>– Mahatma Gandhi</p>
          </div>
          <div className={styles.description}>
            <p>
              VARN Extrusion Pvt. Ltd. is proudly based in India, operating from
              a state-of-the-art manufacturing facility equipped with advanced
              aluminium extrusion, coating, and fabrication technologies.
              Surrounded by a dynamic industrial ecosystem, our location
              supports efficient logistics and seamless nationwide and global
              distribution.
            </p>
            <p>
              VARN Extrusion Pvt. Ltd. is proud to play an active role in the
              local community. As a major employer in the region, we provide
              stable job opportunities for hundreds of skilled professionals and
              their families. Beyond business, we are committed to supporting
              community development through initiatives in education,
              healthcare, and sustainability. From infrastructure contributions
              to local partnerships, VARN is dedicated to building a stronger,
              more inclusive future.
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
