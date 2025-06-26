import React from 'react';
import styles from './Species.module.scss';
import Images from '@assets/images';

const species = [
    {
        name: " High-Purity Aluminium",
        image: Images.firstProduct,
        note: ""
    },
    {
        name: "Industrial-Grade Aluminium",
        image: Images.secondProduct,
        note: ""
    },
    {
        name: "Architectural Aluminium",
        image: Images.thirdProduct,
        note: "(depending on availability)"
    },
    {
        name: "Surface-Grade Aluminium",
        image: Images.fourthProduct,
        note: "(depending on availability)"
    }
];

const Species = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Material Grades</h2>
                <p>
                    Aluminium extrusions are manufactured using high-grade alloys designed for strength, formability, and corrosion resistance.
                </p>
            </div>

            <div className={styles.right}>
                <div className={styles.innerRight}>
                    {species.map((specie, index) => (
                        <div key={index} className={styles.specieCard}>
                            <img src={specie.image} alt={specie.name} />
                            <p>
                                <strong>{specie.name}</strong><br />
                                {specie.note && (
                                    <span className={styles.note}>{specie.note}</span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Species;
