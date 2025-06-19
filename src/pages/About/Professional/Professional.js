import React from "react";
import styles from "./Professional.module.scss";
import { FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mike Lane",
    role: "President",
    email: "mlaneqb@varnextrusion.com",
  },
  {
    name: "Michael Lane",
    role: "General Manager & Vice President",
    email: "mwlane2@varnextrusion.com",
  },
  {
    name: "Rockie Walker",
    role: "Maintenance Manager & Pellet Sales",
    email: "qbrock@varnextrusion.com",
  },
  {
    name: "Clay Buhler",
    role: "Shipping & Lumber Purchaser",
    email: "clay@varnextrusion.com",
  },
  {
    name: "Ben Lane",
    role: "Quality Assurance",
    email: "blane@varnextrusion.com",
  },
  {
    name: "Shawn Anderson",
    role: "Production Manager",
    email: "anderson@varnextrusion.com",
  },
  {
    name: "Karl Nichols",
    role: "Sales",
    email: "karl@varnextrusion.com",
  },
  {
    name: "Bob Butch",
    role: "Sales Manager",
    email: "bob@varnextrusion.com",
  },
  {
    name: "Zac Troughton",
    role: "Sales & CNC Operations",
    email: "ztroughton@varnextrusion.com",
  },
  {
    name: "Tyler Aldous",
    role: "CNC Operations",
    email: "taldous@varnextrusion.com",
  },
  {
    name: "Paul Drace",
    role: "Director of Sales & Marketing",
    email: "pdrace@varnextrusion.com",
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
