import React from 'react';
import styles from './Species.module.scss';
import FirstProduct from "../../../../assets/images/products/InnerImages/HighPurity.jpg"
import SecondProduct from "../../../../assets/images/products/InnerImages/IndustrialAluminum.jpeg"
import ThirdProduct from "../../../../assets/images/products/InnerImages/ArchitecturalAluminium.jpg"
import FourthProduct from "../../../../assets/images/products/InnerImages/surfaceAluminum.png"

const species = [
    {
        name: " High-Purity Aluminium",
        image: FirstProduct,
        note: ""
    },
    {
        name: "Industrial-Grade Aluminium",
        image: SecondProduct,
        note: ""
    },
    {
        name: "Architectural Aluminium",
        image: ThirdProduct,
        note: "(depending on availability)"
    },
    {
        name: "Surface-Grade Aluminium",
        image: FourthProduct,
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
