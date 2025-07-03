import React from "react";
import styles from "./Mission.module.scss";
import Images from '../../../assets2/images/index';

const Mission = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={Images.Mission} alt="Person working" width={500} height={500} />
            </div>
            <div className={styles.right}>
                <div className={styles.card} data-label="Vision">
                    <h3>Our Vision</h3>
                    <p>
                        Engaged 'tis was evident pleased husband. Ye goodness felicity do the best disposal dwelling no.
                        First am plate jokes to begin of cause an scale. Subjects he prospect elegance followed no overcame
                        possible it on best circle.
                    </p>
                    <button>Know More <span>➜</span></button>
                </div>
                <div className={styles.card} data-label="Mission">
                    <h3>Our Mission</h3>
                    <p>
                        Engaged 'tis was evident pleased husband. Ye goodness felicity do the best disposal dwelling no.
                        First am plate jokes to begin of cause an scale. Subjects he prospect elegance followed no overcame
                        possible it on best circle.
                    </p>
                    <button>Know More <span>➜</span></button>
                </div>
            </div>

        </div>
    );
};

export default Mission;
