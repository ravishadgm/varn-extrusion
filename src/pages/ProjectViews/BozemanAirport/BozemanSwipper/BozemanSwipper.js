import React from 'react';
import SwipperContent from '@components/common/SwipperContent/SwipperContent';
import img1 from '../../../../assets/images/project/BozemanAirport/BozemanOne.jpeg';
import img2 from '../../../../assets/images/project/BozemanAirport/BozemanTwo.jpeg';
import img3 from '../../../../assets/images/project/BozemanAirport/BozemanThree.jpeg';
import img4 from '../../../../assets/images/project/BozemanAirport/BozemanFour.jpg';
import img5 from '../../../../assets/images/project/BozemanAirport/BozemanFive.jpeg';
import img6 from '../../../../assets/images/project/BozemanAirport/BozemanSix.jpeg';
import styles from "../BozemanAirport.module.scss";

const imageData = [
    { id: 1, url: img1, alt: 'Architecture 1' },
    { id: 2, url: img2, alt: 'Architecture 2' },
    { id: 3, url: img3, alt: 'Architecture 3' },
    { id: 4, url: img4, alt: 'Architecture 4' },
    { id: 5, url: img5, alt: 'Architecture 5' },
    { id: 6, url: img6, alt: 'Architecture 6' },
];


const BozemanSwipper = () => {
    return (
        <div>
            <div>
                <SwipperContent images={imageData} visibleSlides={3} />
            </div>
            <div className={styles.content}>
                <p>QB Corporation’s glulam beams contributed to various elements of the terminal expansion project, including trusses, headers, columns, and pergolas. The terminal boasts an appealing fusion of natural Douglas Fir wood and stone materials, creating an aesthetically pleasing atmosphere. One of the notable highlights of the terminal expansion project is Concourse B, which features an indoor pergola uniquely supported by QB Corporation’s glulam beams. Through the airport’s commitment to excellence and utilization of QB Corporation’s exceptional glulam products, travelers passing through this remarkable facility have an unforgettable journey.</p>
            </div>
        </div>

    );
};

export default BozemanSwipper;
