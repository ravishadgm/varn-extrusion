import React from 'react';
import styles from './Profit.module.scss';
import Images from '../../../assets2/images/index';
import { FaShieldAlt, FaWineGlassAlt } from 'react-icons/fa';

const Profit = () => {
    return (
        <div className={styles.profitWrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.subtitle}>PROFIT GRAPH</p>
                    <h2>BLO gives you the best Financial solution for business</h2>

                    <div className={styles.feature}>
                        <img src={Images.security} alt="icon" className={styles.iconName} />
                        <div className={styles.description}>
                            <strong>Security:</strong>
                            <p>we offer protection when your customers have financial.</p>
                        </div>
                    </div>

                    <div className={styles.feature}>
                        <img src={Images.trophy} alt="icon" className={styles.iconName} />
                        <div className={styles.description}>
                            <strong>Flexibility:</strong>
                            <p>funding grows in line with your daily sales update.</p>
                        </div>
                    </div>

                    <button className={styles.button}>CONTACT US</button>
                </div>

                <div className={styles.graph}>
                    <img src={Images.graph} alt="Profit Chart" />
                    <p className={styles.report}>
                        <strong>Annual Report:</strong> From 2013 to 2018 the growth rate grew <span>+2.40%</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profit;
