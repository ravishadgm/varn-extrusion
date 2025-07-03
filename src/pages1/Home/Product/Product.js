import React from 'react';
import { FaCogs, FaCubes, FaIndustry } from 'react-icons/fa';
import styles from './Product.module.scss';
import { Link } from "react-router-dom";

const productList = [
  {
    icon: <FaCubes />,
    title: 'Custom Aluminium Beams',
    description: `Precision-engineered beams tailored to your project's unique structural needs.`,
    link: '/products/custom-beams',
  },
  {
    icon: <FaIndustry />,
    title: 'Utility Structures',
    description: 'Versatile structural solutions for industrial and infrastructure use.',
    link: '/products/utility-structures',
  },
  {
    icon: <FaCogs />,
    title: 'Stock Beams',
    description: 'Ready-to-use beams offering strength and reliability for fast construction.',
    link: '/products/stoke-beams',
  },
  {
    icon: <FaCubes />,
    title: 'Aluminium Pellets',
    description: 'Clean-burning, eco-friendly fuel made from high-quality aluminium waste.',
    link: '/products/wood-pellets',
  },
  {
    icon: <FaIndustry />,
    title: 'Perimeter Profiles',
    description: 'Engineered for edge framing applications, offering strength, precision, and clean architectural lines.',
    link: '/products/varn-rim-board',
  },
];

const serviceList = [
  {
    icon: <FaCogs />,
    title: 'Fabrication',
    description: 'Custom-cut and assembled components built to meet project specifications with precision.',
    link: '/services/fabrication',
  },
  {
    icon: <FaIndustry />,
    title: 'Aluminium Truss Assembly',
    description: 'Expertly built heavy-duty truss systems for large-span structures.',
    link: '"/services/truss-assembly',
  },
  {
    icon: <FaCubes />,
    title: 'Connection Attachments',
    description: 'Secure and efficient attachment solutions ensuring strong structural performance.',
    link: '#',
  },
];

export default function Product() {
  return (
    <div className={styles.productSection}>
      {/* PRODUCTS SECTION */}
      <section className={styles.productsSection}>
        <div className={styles.heading}>
          <h4>Varn Extrusion Products</h4>
          <h2>Precision Aluminium Products Engineered for Strength</h2>
          <p>
            Varn Extrusion offers more than just glulam beams. Our products are built for strength, quality, and lasting performance.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {productList.map((product, index) => (
            <Link to={product.link} key={`product-${index}`} className={styles.cardLink}>
              <div className={`${styles.card} ${styles.productCard}`}>
                <div className={`${styles.iconWrapper} ${styles.productIcon}`}>
                  {product.icon}
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={`${styles.arrow} ${styles.productArrow}`}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.servicesSection}>
        <div className={styles.heading}>
          <h4>Varn Extrusion Services</h4>
          <h2>Reliable Aluminium Services to Boost Your Projects</h2>
          <p>
            We offer complex solutions beyond glulam beams. Our services help your business grow and perform better.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {serviceList.map((service, index) => (
            <Link to={service.link} key={`service-${index}`} className={styles.cardLink}>
              <div className={`${styles.card} ${styles.serviceCard}`} >
                <div className={`${styles.iconWrapper} ${styles.serviceIcon}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={`${styles.arrow} ${styles.serviceArrow}`}>→</div>
              </div>
            </Link>

          ))}
        </div>
      </section>
    </div>
  );
}

