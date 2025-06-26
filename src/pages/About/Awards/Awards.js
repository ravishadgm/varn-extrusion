import React from 'react';
import Images from "@assets/images";
import styles from "./Awards.module.scss";

const Awards = () => {

    const brandLogos = [
        { name: "Jindal Aluminium", src: Images.greenLogo },
        { name: "Hindalco", src: Images.hindalcoLogo },
        { name: "Vedanta", src: Images.isoLogo },
        { name: "Tata Steel", src: Images.jswLogo },
        { name: "L&T", src: Images.ltLogo },
    ];

    return (
        <>
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

export default Awards
