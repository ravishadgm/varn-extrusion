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

const companyLinks = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Community", href: "community" },
  { name: "In the News", href: "news" },
  { name: "Careers", href: "careers" },
  { name: "Contact", href: "contact" },
];

const resourcesLinks = [
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Technical", href: "/technical" },
  { name: "Safety", href: "/about/safety" },
  { name: "Capabilities", href: "/about/manufacturing-capabilities" },
  { name: "Configurations", href: "/products/available-configurations" },
];

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    content: (
      <>
        <p>1420 ID-28</p>
        <p>Salmon, ID 83467</p>
      </>
    ),
  },
  {
    icon: FaEnvelope,
    content: <a href="mailto:sales@qbcorp.com">sales@qbcorp.com</a>,
  },
  {
    icon: FaPhone,
    content: <a href="tel:+12087564248">+1 (208) 756-4248</a>,
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
  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div
        className={styles.ctaSection}
        style={{ "--cta-background-image": `url(${Images.footer_join})` }}
      >
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Join countless architects, builders,
              <br />
              and designers who trust QB Corp.
            </h2>
            <button className={styles.ctaButton}>
              GET A QUOTE <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            {/* Logo and Description Section */}
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <img src={Images.footer_logo} alt="QB Corp Logo" />
              </div>
              <p className={styles.description}>
                QB Corp. is a premier glue laminated timber manufacturer where
                excellence is a tradition and innovation knows no limits.
              </p>

              {/* Social Media Links */}
              <div className={styles.socialLinks}>
                {socialMediaLinks.map((link, index) => (
                  <a key={index} href={link.href} aria-label={link.label}>
                    <link.icon />
                  </a>
                ))}
              </div>

              {/* Certification Badges */}
              <div className={styles.certifications}>
                {certificationBadges.map((badge, index) => (
                  <div key={index} className={styles.badge}>
                    <img src={badge.src} alt={badge.alt} />
                  </div>
                ))}
              </div>
            </div>

            {/* Company Links Section */}
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
              <p>&copy; 2025 QB Corp. All Rights Reserved.</p>
            </div>
            <div className={styles.policies}>
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;