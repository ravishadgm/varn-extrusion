import React from "react";
import styles from "./Professional.module.scss";
import { FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mike Lane",
    role: "President",
    email: "mlaneqb@qbcorp.com",
  },
  {
    name: "Michael Lane",
    role: "General Manager & Vice President",
    email: "mwlane2@qbcorp.com",
  },
  {
    name: "Rockie Walker",
    role: "Maintenance Manager & Pellet Sales",
    email: "qbrock@qbcorp.com",
  },
  {
    name: "Clay Buhler",
    role: "Shipping & Lumber Purchaser",
    email: "clay@qbcorp.com",
  },
  {
    name: "Ben Lane",
    role: "Quality Assurance",
    email: "blane@qbcorp.com",
  },
  {
    name: "Shawn Anderson",
    role: "Production Manager",
    email: "anderson@qbcorp.com",
  },
  {
    name: "Karl Nichols",
    role: "Sales",
    email: "karl@qbcorp.com",
  },
  {
    name: "Bob Butch",
    role: "Sales Manager",
    email: "bob@qbcorp.com",
  },
  {
    name: "Zac Troughton",
    role: "Sales & CNC Operations",
    email: "ztroughton@qbcorp.com",
  },
  {
    name: "Tyler Aldous",
    role: "CNC Operations",
    email: "taldous@qbcorp.com",
  },
  {
    name: "Paul Drace",
    role: "Director of Sales & Marketing",
    email: "pdrace@qbcorp.com",
  },
];

const Professional = () => {
  return (
    <section className={styles.professionalSection}>
      <h2>Meet Our Team of Professionals</h2>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div className={styles.card} key={index}>
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.email}>
              <FaEnvelope className={styles.icon} /> {member.email}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Professional;
