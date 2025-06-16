import React from 'react';
import styles from './Features.module.scss';
import VerticalBlock from '@components/common/VerticalNumberBlock/VerticalBlock';
import { FaFilePdf } from 'react-icons/fa6';
import  Images  from '@assets/images';

function Features() {
    
const featuresData = [
  {
    number: "01",
    title: "Strength",
    text: "Glulam is known for its exceptional strength-to-weight ratio, making it capable of supporting heavy loads without excessive bulk.",
  },
  {
    number: "02",
    title: "Stability",
    text: "The gluing process used in manufacturing glulam results in a stable product that is less prone to shrinking, twisting, or warping than solid lumber.",
  },
  {
    number: "03",
    title: "Long spans",
    text: "Glulam rim boards can be manufactured in long lengths, which reduces the need for splicing and increases design flexibility for architects and engineers.",
  },
  {
    number: "04",
    title: "Sustainability",
    text: "Glulam is considered an environmentally friendly choice because it uses renewable wood resources and can be sourced from sustainably managed forests.",
  },
  {
    number: "05",
    title: "Consistency",
    text: "Unlike solid lumber, glulam’s engineered construction ensures uniformity and predictability in its mechanical properties.",
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
            <li>1 ½” thickness in depths of 9 1/4", 9 1/2", 11 1/4", 11 7/8" and 14”</li>
            <li>3½” and 5½” thickness in depths up to 20”</li>
            <li>Additional thicknesses available</li>
            <li>
              Square cut in 20’ lengths for easy handling 
              <span className={styles.optionalNote}>(other lengths may be special ordered)</span>
            </li>
            <li>
              Manufactured to a +3/32, -0 tolerance and a consistent, low moisture content of 12% for increased dimensional stability
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div className={styles.grayBg}>
     <VerticalBlock
      title="Glulam Rim Boards offer several advantages"
      description="QB’s glulam rim boards are popular in modern construction due to their several advantages. QB Rim could be used for residential and commercial construction framing. They are often combined with other engineered wood products, such as I-joists, to create efficient and reliable building structures."
      features={featuresData}
    />
    </div>

    <section className={styles.qbSection}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <h2>QB Rim Allowable Design Properties</h2>
          <img src={Images.board_proparties} alt="QB Rim Design Table" />
        </div>

        <div className={styles.infoSection}>
          <h3>Additional Info:</h3>

   <div className={styles.downloadBox}>
        <p>Download the QB Rim Board Brochure:</p>
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
        <p>Read the APA QB Rim Report:</p>
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
