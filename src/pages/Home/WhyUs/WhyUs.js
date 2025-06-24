import React from "react";
import styles from "./WhyUs.module.scss";
import image1 from "../../../assets/images/home/leaders.png";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WhyUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.firstSection}>
          <div className={styles.innerSection}>
            <div className={styles.centerContent}>
              Why <br />
              <strong>Varn?</strong>
            </div>
          </div>
          <div className={styles.secondInnerSection}>
            <div className={styles.upperContainer}>
              <p>
                Since 2016, we have been at the forefront of aluminum
                innovation—crafting excellence in every profile we produce
              </p>
            </div>
            <div className={styles.heading}>
              <span className={styles.cardIcon}></span>
              <h2>9+ years in the industry</h2>

              <a
                href={"/about"}
                rel="noopener noreferrer"
                className={styles.linkIcon}
              >
                <FiArrowUpRight className={styles.arrowIcon} size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.left}>
            <div className={styles.leftContainer}>
              <img src={image1} alt="founder" className={styles.img1} />
              <h3 className={styles.name}>
                We uphold integrity, innovation, and timely delivery in everything we do              </h3>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.upper}>
              <div className={styles.upperLeft}>
                <p>
                  Strong Workforce, One Shared Vision With over 300 skilled
                  professionals, our team powers excellence in every process.
                  Itʼs not just manufacturing — itʼs passion, precision, and
                  people working in harmony
                </p>
                <h1>300+</h1>
              </div>
              <div className={styles.upperRight}>
                <p>
                  We are capable to produce 6000 MT aluminum profiles annually, powered by advanced extrusion presses and in-house billet casting.It reflects our commitment to high-volume, precision-driven manufacturing.
                </p>
                <h1>6000 MT</h1>
              </div>
            </div>
            <div className={styles.lower}>
              <div className={styles.lowerLeft}>
                <p>
                  We live by our word. With streamlined operations and on-time
                  logistics, we deliver what you need, when you need it — no
                  excuses
                </p>
              </div>
              <div className={styles.lowerRight}>
                <p>
                  Quality is Our Identity — every inch of every profile reflects our uncompromising standards
                </p>
                {/* <h1>90+</h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.thirdSection}>
        <h2>
          Get in Touch with <span>Varn Extrusion</span>
        </h2>
        <p className={styles.subtitle}>
          We'd love to hear from you. Reach out to discuss your needs, ideas, or
          partnerships.
        </p>
        <button className={styles.button} onClick={() => navigate("/contact")}>
          Contact Us <FiArrowUpRight />
        </button>
      </section>
    </>
  );
};

export default WhyUs;
