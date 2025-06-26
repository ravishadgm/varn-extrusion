import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.scss';
import Card from '@components/common/Cards/Card';



const Services = () => {

    const navigate = useNavigate();


    const cardData = [
        {
            title: 'Custom Aluminium Beams',
            description:
                'Precision-engineered beams tailored to your project’s unique structural needs',
            link: '/products/custom-beams'
        },
        {
            title: 'Stock Beams',
            description:
                'Ready-to-use beams offering strength and reliability for fast construction.',
            link: '/products/stoke-beams',
        },
        {
            title: 'Perimeter Profile',
            description:
                'Engineered for edge framing applications, our aluminium perimeter profiles offer strength, precision, and clean architectural lines.',
            link: '/products/varn-rim-board',
        },
        {
            title: 'Utility Structures',
            description:
                'Versatile structural solutions for industrial and infrastructure use.',
            link: '/products/utility-structures',
        },
        {
            title: 'Aluminium Pellets',
            description:
                'Clean-burning, eco-friendly fuel made from high-quality aluminium waste.',
            link: '/products/wood-pellets',
        },
    ];



    const cardServiceData = [
        {
            title: 'Fabrications',
            description:
                'Custom-cut and assembled components built to meet project specifications with precision.',
            link: '/services/fabrication'
        },
        {
            title: 'Connection Attachment',
            description:
                'Secure and efficient attachment solutions ensuring strong structural performance.',

        },
        {
            title: 'Pre-Fit Connections',
            description:
                'Pre-installed hardware and fittings for faster, accurate on-site assembly.',

        },
        {
            title: 'Aluminium Truss Assembly ',
            description:
                'Expertly built heavy-duty truss systems for large-span structures.',
            link: '/services/truss-assembly'
        }, {
            title: 'Steel',
            description:
                'High-strength steel components tailored for durable structural support and integration.',

        }
    ]

    return (
        <>
            <section className={styles.mainContainer}>
                <div className={styles.productsContainer}>
                    <div className={styles.productHeader}>
                        <div className={styles.heading}>
                            <h1>Varn Extrusion Products</h1>
                            <p>Varn Extrusion offers more than just glulam beams. Our products are built for strength, quality, and lasting performance.</p>
                        </div>
                        <div className={styles.productBtn}>
                            <button className={styles.button} onClick={() => navigate('/products')}>
                                ALL PRODUCTS <FiArrowUpRight />
                            </button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        {cardData.map((card, idx) => (
                            <Card
                                key={idx}
                                title={card.title}
                                description={card.description}
                                link={card.link}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.productsContainer}>
                    <div className={styles.productHeader}>
                        <div className={styles.heading}>
                            <h1>Varn Extrusion Services</h1>
                            <p>We offer complete solutions beyond glulam beams. Our services help your business grow and perform better.</p>
                        </div>
                        <div className={styles.productBtn}>
                            <button className={styles.button} onClick={() => navigate('/services')}>
                                ALL SERVICES <FiArrowUpRight />
                            </button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        {cardServiceData.map((card, idx) => (
                            <Card
                                key={idx}
                                title={card.title}
                                description={card.description}
                                {...(card.link && { link: card.link })}
                            />
                        ))}

                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;
