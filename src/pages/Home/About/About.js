import React from 'react';
import styles from './About.module.scss';
import {
  FaIndustry,
  FaAward,
  FaUsers,
  FaLeaf,
  FaShieldAlt,
  FaRocket,
  FaEye,
  FaHeart,
  FaCogs,
  FaFire
} from 'react-icons/fa';

const About = () => {
  const statsData = [
    { number: "2016", label: "Established" },
    { number: "0.3mm", label: "Ultra-Slim Profile" },
    { number: "6000 MT", label: "Annual Capacity" },
    { number: "300+", label: "Skilled Team" }
  ];

  const strengthsData = [
    {
      icon: <FaRocket />,
      title: "Ultra-Slim Innovation",
      description: "India's pioneers in 0.3mm aluminium profiles"
    },
    {
      icon: <FaIndustry />,
      title: "Integrated Manufacturing",
      description: "Complete in-house production capabilities"
    },
    {
      icon: <FaAward />,
      title: "Premium Quality",
      description: "Approved by Jotun, AkzoNobel, Asian Paints PPG"
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "300+ skilled professionals driving excellence"
    }
  ];

  const valuesData = [
    { icon: <FaShieldAlt />, title: "Quality & Integrity" },
    { icon: <FaLeaf />, title: "Environmental Care" },
    { icon: <FaHeart />, title: "Customer Focus" },
    { icon: <FaRocket />, title: "Innovation First" }
  ];

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>India's Leading Ultra-Slim Aluminium Profile Manufacturer</h1>
            <p>Engineering excellence in 0.3mm precision since 2016</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>Who We Are</h2>
              <p>
                Since 2016, we've been India's foremost aluminum innovation leader, specializing in ultra-thin profiles with wall thicknesses as fine as 0.3mm. This rare capability showcases our mastery in minimalist engineering and elegant functionality.
              </p>
              <p>
                We combine cutting-edge technology with deep industry knowledge, delivering solutions that are both durable and beautifully designed. Our commitment to precision, performance, and purposeful design sets us apart.
              </p>
            </div>
            <div className={styles.missionContent}>
              <div className={styles.missionCard}>
                <FaEye className={styles.missionIcon} />
                <h3>Vision</h3>
                <p>To be a globally trusted name in aluminium manufacturing with innovative, sustainable products</p>
              </div>
              <div className={styles.missionCard}>
                <FaRocket className={styles.missionIcon} />
                <h3>Mission</h3>
                <p>Continuously enhance quality, invest in modern technologies, and provide exceptional service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className={styles.strengthsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Strengths</h2>
          <div className={styles.strengthsGrid}>
            {strengthsData.map((strength, index) => (
              <div key={index} className={styles.strengthCard}>
                <div className={styles.strengthIcon}>
                  {strength.icon}
                </div>
                <h4>{strength.title}</h4>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

     

   
    </div>
  );
};

export default About;