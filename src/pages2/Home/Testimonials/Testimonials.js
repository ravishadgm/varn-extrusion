import React from 'react';
import styles from './Testimonials.module.scss';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Images from '../../../assets2/images/index';

const testimonials = [
    {
        id: 1,
        name: 'Robart Marts',
        role: 'CEO AT DORN',
        image: Images.ReviewOne,
        text: 'From banking and insurance to wealth manage ent and securities distribution, we dedicate financial on services the teams serve all major sectors.',
    },
    {
        id: 2,
        name: 'July Robast',
        role: 'MANAGER',
        image: Images.ReviewTwo,
        text: 'From banking and insurance to wealth manage ent and securities distribution, we dedicate financial on services the teams serve all major sectors.',
    },
];

const Testimonials = () => {
    return (
        <div className={styles.testimonialWrapper}>
            <div className={styles.container}>
                {testimonials.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <p className={styles.message}>{item.text}</p>
                        <div className={styles.footer}>
                            <div className={styles.user}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                            <div className={styles.quote}>
                                <BiSolidQuoteAltLeft />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
