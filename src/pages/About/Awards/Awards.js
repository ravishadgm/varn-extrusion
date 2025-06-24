import React from 'react';
// import Images from "@assets/images";
import greenLogo from "../../../assets/images/trustedBrands/Green.png";
import hindalcoLogo from "../../../assets/images/trustedBrands/hindalco.png";
import isoLogo from "../../../assets/images/trustedBrands/ISO.png";
import jswLogo from "../../../assets/images/trustedBrands/JSW.png";
import ltLogo from "../../../assets/images/trustedBrands/L&T.png";
import styles from "./Awards.module.scss";

const Awards = () => {

    const brandLogos = [
        { name: "Jindal Aluminium", src: greenLogo },
        { name: "Hindalco", src: hindalcoLogo },
        { name: "Vedanta", src: isoLogo },
        { name: "Tata Steel", src: jswLogo },
        { name: "L&T", src: ltLogo },
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
