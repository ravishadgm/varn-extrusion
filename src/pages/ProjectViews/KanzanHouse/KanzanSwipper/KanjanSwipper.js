import React from 'react';
import SwipperContent from '@components/common/SwipperContent/SwipperContent';
import styles from "../KanzanHouse.module.scss";
import img1 from '../../../../assets/images/project/KanzanHouse/KanzanOne.jpg';
import img2 from '../../../../assets/images/project/KanzanHouse/KanzanTwo.jpg';
import img3 from '../../../../assets/images/project/KanzanHouse/KanzanThree.jpg';
import img4 from '../../../../assets/images/project/KanzanHouse/KanzanFour.jpg';
import img5 from '../../../../assets/images/project/KanzanHouse/KanzanFive.jpg';
import img6 from '../../../../assets/images/project/KanzanHouse/KanzanSix.jpg';
import img7 from '../../../../assets/images/project/KanzanHouse/KanzanSeven.jpg';
import img8 from '../../../../assets/images/project/KanzanHouse/KanzanEight.jpg';
import img9 from '../../../../assets/images/project/KanzanHouse/KanzanNine.jpg';
import img10 from '../../../../assets/images/project/KanzanHouse/KanzanTen.jpg';
import img11 from '../../../../assets/images/project/KanzanHouse/KanzanEleven.jpg';


const imageData = [
    { id: 1, url: img1, alt: 'Architecture 1' },
    { id: 2, url: img2, alt: 'Architecture 2' },
    { id: 3, url: img3, alt: 'Architecture 3' },
    { id: 4, url: img4, alt: 'Architecture 4' },
    { id: 5, url: img5, alt: 'Architecture 5' },
    { id: 6, url: img6, alt: 'Architecture 6' },
    { id: 7, url: img7, alt: 'Architecture 1' },
    { id: 8, url: img8, alt: 'Architecture 2' },
    { id: 9, url: img9, alt: 'Architecture 3' },
    { id: 10, url: img10, alt: 'Architecture 4' },
    { id: 11, url: img11, alt: 'Architecture 5' },
];


const KanzanSwipper = () => {
    return (
        <div>
            <div>
                <SwipperContent images={imageData} visibleSlides={3} />
            </div>
            <div className={styles.content}>
                <p>
                    As the third-generation leader of QB Corporation, Vice President and General Manager Michael Lane remains steadfast in delivering exceptional products while uplifting the community. Lane emphasizes QB Corporation’s unwavering dedication: “We strive to provide our customers with the finest products for their projects. While we respect the designer’s vision, our extensive experience ensures that the products we supply align seamlessly with our clients’ expectations, right down to the smallest detail.”
                </p>
            </div>
        </div>

    );
};

export default KanzanSwipper;
