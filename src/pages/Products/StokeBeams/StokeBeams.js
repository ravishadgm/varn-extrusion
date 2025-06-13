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
                            Stock Glulam Beams
                        </>
                    }
                    subheading="QB Corporation is one of the largest stock glulam beams producers, with two high-capacity RF production lines and a strong link to the required natural fiber resource. Whether your project requires custom beams and fabrication or truckloads of high-quality stock material, QB Corporation is your one-stop source."
                    buttonLabel="Contact An Expert"

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