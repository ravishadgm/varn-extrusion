import React from 'react'
import styles from "./StokeBeams.module.scss"
import StokeIntro from './StokeIntro/StokeIntro'
import StokeTable from './StokeTable/StokeTable'
import CorpBlock from '@components/common/CorpBlock/CorpBlock'

const StokeBeams = () => {
    return (
        <section>
            <div>
                <CorpBlock
                    heading={
                        <>
                            Stock Aluminium Beams
                        </>
                    }
                    subheading="Varn Extrusion is one of India's leading producers of stock and custom aluminium profiles, equipped with high-capacity extrusion press lines and fully integrated in-house facilities. Whether your project demands precision-fabricated components or bulk quantities of premium aluminium beams, Varn is your trusted one-stop solution — engineered for performance, quality, and timely delivery."
                    buttonLabel="Contact An Expert"
                    buttonLink="/contact"

                />
            </div>
            <div className={styles.stokeContainer}>
                <div className={styles.firstStokeContainer}>
                    <StokeIntro />
                </div>
                <div className={styles.secondStokeContainer}>
                    <StokeTable />
                </div>
            </div>
        </section>
    )
}

export default StokeBeams