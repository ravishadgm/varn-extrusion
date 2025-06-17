import React from 'react';
import SwipperContent from '@components/common/SwipperContent/SwipperContent';
import img1 from '../../../../assets/images/project/JacksonAirport/JacksonOne.jpg';
import img2 from '../../../../assets/images/project/JacksonAirport/JacksonTwo.jpg';
import img3 from '../../../../assets/images/project/JacksonAirport/JacksonThree.jpg';
import img4 from '../../../../assets/images/project/JacksonAirport/JacksonFour.jpg';
import styles from "../JacksonHallAirport.module.scss";

const imageData = [
    { id: 1, url: img1, alt: 'Architecture 1' },
    { id: 2, url: img2, alt: 'Architecture 2' },
    { id: 3, url: img3, alt: 'Architecture 3' },
    { id: 4, url: img4, alt: 'Architecture 4' },

];


const JacksonSwipper = () => {
    return (
        <div className={styles.container} >
            <SwipperContent images={imageData} visibleSlides={3} />
        </div>

    );
};

export default JacksonSwipper;
