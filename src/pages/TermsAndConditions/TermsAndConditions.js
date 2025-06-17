import React from 'react';
import styles from './TermsAndConditions.module.scss';

const TermsAndConditions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerSection}>
        <h1>Terms & Conditions</h1>
        <p className={styles.effective}>Effective as of May 8, 2023</p>
      </div>

      <div className={styles.contentSection}>
        <p>Welcome to Varn Extrusion Pvt. Ltd. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.</p>

        <h2>1. Use of the Website</h2>
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of or restrict the use and enjoyment of this site by any third party.</p>

        <h2>2. Intellectual Property</h2>
        <p>All content, trademarks, and data on this website, including but not limited to text, graphics, logos, and images, are the property of Varn Extrusion Pvt. Ltd. and are protected by applicable intellectual property laws.</p>

        <h2>3. Limitation of Liability</h2>
        <p>We are not liable for any direct, indirect, or consequential damages arising out of the use or inability to use this website or its content.</p>

        <h2>4. User Obligations</h2>
        <ul>
          <li>You must not misuse our services.</li>
          <li>You agree not to attempt to gain unauthorized access to any portion of the website.</li>
          <li>You shall not use any device, software, or routine to interfere with the proper working of the website.</li>
        </ul>

        <h2>5. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of those sites and encourage you to read their terms and privacy policies.</p>

        <h2>6. Changes to Terms</h2>
        <p>We may update these Terms & Conditions at any time without prior notice. Continued use of the website indicates your acceptance of the revised terms.</p>

        <p><strong>Contact Us:</strong><br />
          For any questions, email us at <a href="mailto:info@varnextrusion.com">info@varnextrusion.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
