import React from 'react';
import styles from './Center.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import Images from '@assets/images'; // Update path as per your structure

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
            The Nep & Mary Ellen Lynch Center is a versatile facility that provides gym space, locker rooms,
            weight rooms, and more for the youth of Salmon, Idaho. The center was built with the generous support
            of private donors, volunteers, and businesses, including QB Corporation. The center is a symbol of the
            community’s dedication to the well-being and development of its young generation.
          </p>
          <div className={styles.detailsLink}>
            PROJECT DETAILS <FaArrowRight className={styles.arrowIcon} />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.sectionTwo}>
        <div className={styles.imagesWrapper}>
          <img src={Images.community_backstop} alt="Memorial Field" className={styles.bg1} />
        </div>
        <div className={styles.textWrapper}>
          <h3>Curved Laminated Beams Backstop</h3>
          <p>
            The local baseball field was completed in 2008 with the help of QB Corporation. QB donated the material
            for the clubhouse as well as the backstop. Try as you might, it would be difficult to find a nicer-looking
            backstop than the curved laminated beams designed, built, and donated by QB to the Salmon Parks department.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Center;
