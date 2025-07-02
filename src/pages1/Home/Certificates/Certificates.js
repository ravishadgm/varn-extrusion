import React from 'react';
import Images from "@assets/images";
import styles from "./Certificates.module.scss";

const Certificates = () => {

    const brandLogos = [
        { name: "Jindal Aluminium", src: Images.greenLogo },
        { name: "Hindalco", src: Images.hindalcoLogo },
        { name: "Vedanta", src: Images.isoLogo },
        { name: "Tata Steel", src: Images.jswLogo },
        { name: "L&T", src: Images.ltLogo },
    ];

    return (
        <>
            <section className={styles.certificationSection}>
                <div className={styles.certificateHeading}>
                    <h2 className={styles.mainheading}>Our Certifications</h2>
                    <p className={styles.subHeading}>Recognized Standards That Reflect Our Commitment to Excellence.</p>
                </div>
                <div className={styles.certificate}>
                    <img src={Images.certificate} alt="Certificate 1" />
                    <img src={Images.certificate} alt="Certificate 2" />
                    <img src={Images.certificate} alt="Certificate 3" />
                    <img src={Images.certificate} alt="Certificate 4" />
                    <img src={Images.certificate} alt="Certificate 5" />
                </div>
            </section>

            <section className={styles.trustedSection}>
                <h2 className={styles.heading}>Trusted By Industry Leaders</h2>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {[...brandLogos, ...brandLogos].map((brand, id) => (
                            <div key={id} className={styles.logoCard}>
                                <img src={brand.src} alt={brand.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </>
    )
}

export default Certificates
