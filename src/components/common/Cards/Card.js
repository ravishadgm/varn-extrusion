import React from 'react';
import styles from './Card.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';

const Card = ({ title, description, bgClass, iconBg, link }) => {
    return (
        <div className={styles.customCard}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitleContainer}>
                    <span className={styles.cardIcon}></span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                </div>

                {link && (
                    <a
                        href={link}
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                    >
                        <FiArrowUpRight className={styles.arrowIcon} size={20} />
                    </a>
                )}
            </div>

            <hr className={styles.divider} />
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
};

export default Card;
