import React from 'react';
import styles from './Species.module.scss';
import FirstProduct from "../../../../assets/images/products/first_block.jpg"
import SecondProduct from "../../../../assets/images/products/second_block.jpg"
import ThirdProduct from "../../../../assets/images/products/third_block.jpg"
import FourthProduct from "../../../../assets/images/products/fourth_block.jpg"

const species = [
    {
        name: "Douglas Fir",
        image: FirstProduct,
        note: ""
    },
    {
        name: "Alaskan Yellow Cedar",
        image: SecondProduct,
        note: ""
    },
    {
        name: "Western Red Cedar",
        image: ThirdProduct,
        note: "(depending on availability)"
    },
    {
        name: "Southern Yellow Pine",
        image: FourthProduct,
        note: "(depending on availability)"
    }
];

const Species = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Wood Species</h2>
                <p>
                    Certain species can be used in different applications. If you are unsure which species you need, contact our experienced staff, and we would be happy to assist you. We also are capable of providing other species if requested.
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
