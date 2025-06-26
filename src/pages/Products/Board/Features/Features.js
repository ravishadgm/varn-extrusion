import React from 'react';
import styles from './Features.module.scss';
import VerticalBlock from '@components/common/VerticalNumberBlock/VerticalBlock';
import { FaFilePdf } from 'react-icons/fa6';
import Images from '@assets/images';
import { ImNotification } from 'react-icons/im';

function Features() {

  const featuresData = [
    {
      number: "01",
      title: "Strength",
      text: "Engineered with ultra-slim 0.3 mm wall thickness and high strength-to-weight ratio, our aluminium profiles support heavy loads while remaining lightweight and easy to handle.",
    },
    {
      number: "02",
      title: "Dimensional Stability",
      text: "Manufactured with +3/32, -0 tolerance and tested using Brinell & Webster hardness equipment, each profile ensures consistent performance without warping or deviation.",
    },
    {
      number: "03",
      title: "Custom Lengths & Flexibility",
      text: "Our profiles can be fabricated to exact lengths and shapes using in-house moulds and tooling, reducing the need for post-processing and enabling greater architectural freedom.",
    },
    {
      number: "04",
      title: "Sustainability",
      text: "Aluminium is 100% recyclable. Our energy-efficient in-house production systems minimize waste and support environmentally responsible manufacturing.",
    },
    {
      number: "05",
      title: "Uniform Quality",
      text: "With 1000+ moulds, automated coating systems, and ERP-monitored workflow, we ensure uniformity in finish, strength, and functionality across every extrusion batch.",
    }
  ];
  return (
    <>
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>Product Sizes  and Features:</h2>
          </div>
          <div className={styles.right}>
            <ul>
              <li>Available in ultra-slim 0.3 mm wall thickness with custom depths</li>
              <li>profiles via 1000+ moulds, extruded using 800/600 UST presses</li>
              <li>fabricated with in-house cutting, punching, and drilling for precise, ready-to-install solutions.</li>
              {/* <li>
                Square cut in 20’ lengths for easy handling
                <span className={styles.optionalNote}>(other lengths may be special ordered)</span>
              </li> */}
              <li>
                Seamless handling and efficient installation.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.grayBg}>
        <VerticalBlock
          title="Aluminium Profiles by Varn Offer Several Advantages"
          description="Varn’s precision-engineered aluminium profiles are widely used in modern construction and infrastructure projects due to their strength, versatility, and design flexibility."
          features={featuresData}
        />
        <div className={styles.errorMessage}>
          <div className={styles.warningBox}>
            <ImNotification className={styles.icon} />
            <p>
              <strong>It’s important to note that while alluminium boards offer many benefits, their use and design should follow local building codes and engineering standards to ensure safe and proper installation. Always consult a qualified structural engineer or building professional when incorporating glulam rim boards into your construction projects.</strong>
            </p>
          </div>
        </div>

      </div>

      <section className={styles.qbSection}>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <h2>Varn’s Trusted Perimeter Framing Profiles</h2>
            <img src={Images.varnProfile} alt="Varn Rim Design Table" />
          </div>

          <div className={styles.infoSection}>
            <h3>Additional Info:</h3>

            <div className={styles.downloadBox}>
              <p>Download the Aluminium Perimeter Profile Brochure:</p>
              <a
                href="https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW DOCUMENT <FaFilePdf />
              </a>
            </div>

            <div className={styles.downloadBox}>
              <p>Read the Engineering Specification Sheet:</p>
              <a
                href="https://drive.google.com/file/d/1g4irX9uuxCbdFi723r9y359p6Z9ZUVSl/view?pli=1"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW DOCUMENT <FaFilePdf />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
