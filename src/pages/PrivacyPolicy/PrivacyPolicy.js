import React from 'react';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerSection}>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective as of May 8, 2023</p>
      </div>

      <div className={styles.contentSection}>
        <p>
          At Varn Extrusion Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect personal information such as your name, contact details, email address, and company information when you contact us or use our services.</p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries and provide support</li>
          <li>To process and fulfill orders</li>
          <li>To improve our services and offerings</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal data from unauthorized access or disclosure.</p>

        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or trade your personal information. We may share data with third-party service providers solely for operational purposes.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to request access, correction, or deletion of your personal information at any time.</p>

        <h2>6. Changes to This Policy</h2>
        <p>We may update this policy occasionally. Please review this page periodically.</p>

        <p><strong>Contact Us:</strong><br />
          For any questions, email us at <a href="mailto:info@varnextrusion.com">info@varnextrusion.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
