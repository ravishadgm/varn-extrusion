import React from "react";
import styles from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import Images from "@assets/images";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  // { name: "Community", href: "/about/community" },
  { name: "In the News", href: "/about/news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const resourcesLinks = [
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Technical", href: "/technical" },
  // { name: "Safety", href: "/about/safety" },
  { name: "Capabilities", href: "/about/manufacturing-capabilities" },
  { name: "Configurations", href: "/products/available-configurations" },
];

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    content: (
      <div className={styles.addressBlock}>
        <div>
          <strong>Corporate Office:</strong><br />
          Plot No - 8, First Floor - Kalidas Nagar,<br />
          Near Trikam Nagar, L. H. Road, Varachha,<br />
          Surat, 395006 Gujarat, India.
        </div>

        <div>
          <strong>Unit - 1: Varn Extrusion Pvt Ltd</strong><br />
          Block No.594/A, Plot No. 71-86, Shivalay Industrial Estate,<br />
          B/H I Shree Khodiyar Petrol Pump, NH-8,<br />
          At- Kosamba, Ta. Mangrol, Surat, Gujarat - 394120, India.
        </div>

        <div>
          <strong>Unit - 2: Varn Extrusion Pvt Ltd</strong><br />
          Block No. 599/1, Plot No. 55 to 78, Shivalay Industrial Estate,<br />
          B/H I Shree Khodiyar Petrol Pump, NH-8,<br />
          At - Kosamba, Ta. Mangrol, Surat, Gujarat - 394120, India.
        </div>

        <div>
          <strong>Unit - 3: Regal Allufin Industries</strong><br />
          Block No-593/1, Shivalay Industrial Estate,<br />
          B/H I Shree Khodiyar Petrol Pump, NH-8,<br />
          At-Kosamba, Ta. Mangrol, Surat, Gujarat - 394120, India.
        </div>
      </div>
    ),
  },
  {
    icon: FaEnvelope,
    content: <a href="mailto:sales@qbcorp.com">info@varnextrusion.in</a>,
  },
  {
    icon: FaPhone,
    content: <a href="tel:+919638481000">+91 96384 81000</a>,
  },
  {
    icon: FaClock,
    content: (
      <>
        <p>Monday - Friday</p>
        <p>7:30 am - 5:00 pm</p>
      </>
    ),
  },
];

const socialMediaLinks = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const certificationBadges = [
  { src: Images.footer_apa, alt: "apa ews" },
  { src: Images.footer_ewpa, alt: "ewpa" },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div
        className={styles.ctaSection}
        style={{ "--cta-background-image": `url(${Images.footer_join})` }}
      >
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <motion.h2
              className={styles.ctaTitle}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Join countless architects, builders,
              <br />
              and designers who trust Varn Extrusion Pvt Ltd.
            </motion.h2>
            <motion.button
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              onClick={() => navigate('/contact')}
            >
              GET A QUOTE <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <img src={Images.footer_logo} alt="QB Corp Logo" />
              </div>
              <p className={styles.description}>
                Varn Extrusion Pvt Ltd. is a premier glue laminated timber manufacturer where
                excellence is a tradition and innovation knows no limits.
              </p>

              <div className={styles.socialLinks}>
                {socialMediaLinks.map((link, index) => (
                  <a key={index} href={link.href} aria-label={link.label}>
                    <link.icon />
                  </a>
                ))}
              </div>

              {/* <div className={styles.certifications}>
                {certificationBadges.map((badge, index) => (
                  <div key={index} className={styles.badge}>
                    <img src={badge.src} alt={badge.alt} />
                  </div>
                ))}
              </div> */}
            </div>

            <div className={styles.middleSection}>
<div className={styles.linkSection}>
              <h3>Company</h3>
              <ul>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div className={styles.linkSection}>
              <h3>Resources</h3>
              <ul>
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            

            {/* Contact Section */}
            <div className={styles.contactSection}>
              <h3>Contact Us</h3>
              <div className={styles.contactInfo}>
                {contactInfo.map((item, index) => (
                  <div key={index} className={styles.contactItem}>
                    <item.icon />
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>&copy; 2025 Varn Extrusion. All Rights Reserved.</p>
            </div>
            <div className={styles.policies}>
              <a href="/privacy-policy">Privacy Policy</a> &nbsp;
              <span>|</span> &nbsp;
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
