import React from 'react';
import SwipperContent from '@components/common/SwipperContent/SwipperContent';
import styles from "../FriesHouse.module.scss";
import img1 from '../../../../assets/images/project/FriesHouse/FriesOne.jpg';
import img2 from '../../../../assets/images/project/FriesHouse/FriesTwo.jpg';
import img3 from '../../../../assets/images/project/FriesHouse/FriesThree.jpg';
import img4 from '../../../../assets/images/project/FriesHouse/FriesFour.jpg';
import img5 from '../../../../assets/images/project/FriesHouse/FriesFive.jpg';
import img6 from '../../../../assets/images/project/FriesHouse/FriesSix.jpg';
import img7 from '../../../../assets/images/project/FriesHouse/FriesSeven.jpg';
import img8 from '../../../../assets/images/project/FriesHouse/FriesEight.jpg';
import img9 from '../../../../assets/images/project/FriesHouse/FriesNine.jpg';
import img10 from '../../../../assets/images/project/FriesHouse/FriesTen.jpg';
import img11 from '../../../../assets/images/project/FriesHouse/FriesElevan.jpg';
import img12 from '../../../../assets/images/project/FriesHouse/FriesTwelve.jpg';
import img13 from '../../../../assets/images/project/FriesHouse/FriesThirteen.jpg';
import img14 from '../../../../assets/images/project/FriesHouse/FriesFourteen.jpg';
import img15 from '../../../../assets/images/project/FriesHouse/FriesFifteen.jpg';
import img16 from '../../../../assets/images/project/FriesHouse/FriesSixteen.jpg';
import img17 from '../../../../assets/images/project/FriesHouse/FriesSeventeen.jpg';
import img18 from '../../../../assets/images/project/FriesHouse/FriesEighteen.jpg';
import img19 from '../../../../assets/images/project/FriesHouse/FriesNineteen.jpg';
import img20 from '../../../../assets/images/project/FriesHouse/FriesTwenty.jpg';
import img21 from '../../../../assets/images/project/FriesHouse/FriesTwentyOne.jpg';
import img22 from '../../../../assets/images/project/FriesHouse/FriesTwentyTwo.jpg';
import { Link } from 'react-router-dom';

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
    { id: 12, url: img12, alt: 'Architecture 6' },
    { id: 13, url: img13, alt: 'Architecture 1' },
    { id: 14, url: img14, alt: 'Architecture 2' },
    { id: 15, url: img15, alt: 'Architecture 3' },
    { id: 16, url: img16, alt: 'Architecture 4' },
    { id: 17, url: img17, alt: 'Architecture 5' },
    { id: 18, url: img18, alt: 'Architecture 6' },
    { id: 19, url: img19, alt: 'Architecture 1' },
    { id: 20, url: img20, alt: 'Architecture 2' },
    { id: 21, url: img21, alt: 'Architecture 3' },
    { id: 22, url: img22, alt: 'Architecture 4' },
];


const FriesSwipper = () => {
    return (
        <div>
            <div className={styles.dotContent}>
                <SwipperContent images={imageData} visibleSlides={3} />
            </div>
            <div className={styles.content}>
                <p>
                    At QB Corporation, we take immense pride in our role as part of this project, providing high-quality{' '}
                    <Link to="/products/custom-beams" className={styles.linkContent}>
                        Architectural Custom Glued Laminated Timber
                    </Link>.
                </p>
            </div>
        </div>

    );
};

export default FriesSwipper;
