import React from 'react';
import SwipperContent from '@components/common/SwipperContent/SwipperContent';
import img1 from '../../../../assets/images/project/unionArena/firstArena.jpg';
import img2 from '../../../../assets/images/project/unionArena/secondArena.jpg';
import img3 from '../../../../assets/images/project/unionArena/thirdArena.jpg';
import img4 from '../../../../assets/images/project/unionArena/fourthArena.jpg';
import img5 from '../../../../assets/images/project/unionArena/fiveArena.jpg';
import img6 from '../../../../assets/images/project/unionArena/sixArena.jpg';
import img7 from '../../../../assets/images/project/unionArena/sevenArena.jpg';
import img8 from '../../../../assets/images/project/unionArena/eightArena.jpg';
import img9 from '../../../../assets/images/project/unionArena/nineArena.jpg';
import img10 from '../../../../assets/images/project/unionArena/tenArena.jpg';
import img11 from '../../../../assets/images/project/unionArena/elevanArena.jpg';
import img12 from '../../../../assets/images/project/unionArena/twelveArena.jpg';
import styles from "../UnionArena.module.scss";

const imageData = [
    { id: 1, url: img1, alt: 'Architecture 1' },
    { id: 2, url: img2, alt: 'Architecture 2' },
    { id: 3, url: img3, alt: 'Architecture 3' },
    { id: 4, url: img4, alt: 'Architecture 4' },
    { id: 5, url: img5, alt: 'Architecture 5' },
    { id: 6, url: img6, alt: 'Architecture 6' },
    { id: 7, url: img7, alt: 'Architecture 7' },
    { id: 8, url: img8, alt: 'Architecture 8' },
    { id: 9, url: img9, alt: 'Architecture 9' },
    { id: 10, url: img10, alt: 'Architecture 10' },
    { id: 11, url: img11, alt: 'Architecture 11' },
    { id: 12, url: img12, alt: 'Architecture 12' },
];


const UnionArenaPagination = () => {
    return (
        <div>
            <div>
                <SwipperContent images={imageData} visibleSlides={3} />
            </div>
            <div className={styles.content}>
                <p>ICCU Arena at the University of Idaho’s Moscow campus is a testament to engineered wood construction’s limitless possibilities. With QB Corporation’s expertise and collaboration with the College of Natural Resources, this extraordinary venue showcases the seamless fusion of sustainability, strength, and beauty. As the nation’s first engineered wood venue, ICCU Arena paves the way for future innovations in the construction industry, inspiring other institutions to embrace this sustainable solution.</p>
            </div>
        </div>

    );
};

export default UnionArenaPagination;
