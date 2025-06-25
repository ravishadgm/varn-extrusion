import React from 'react'
import styles from "../StokeTable.module.scss"
import BeamTable from '@components/common/BeamTable/BeamTable';

const headers = ["Aluminium Beam Size", "Width", "Depths", "Length Available in Ft"];

const data = [
    ['5-1/8″ x 6″', '5.125″ (130mm)', '6″ (152mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 7.5″', '5.125″ (130mm)', '7.5″ (191mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 9', '5.125″ (130mm)', '9″ (229mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 10.5″', '5.125″ (130mm)', '10.5″ (267mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 12″', '5.125″ (130mm)', '12″ (305mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 13.5″', '5.125″ (130mm)', '13.5″ (343mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 15″', '5.125″ (130mm)', '15″ (381mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 16.5″', '5.125″ (130mm)', '16.5″ (419mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 18″', '5.125″ (130mm)', '18″ (457mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 19.5″', '5.125″ (130mm)', '19.5″ (495mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 21″', '5.125″ (130mm)', '21″ (533mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 22.5″', '5.125″ (130mm)', '22.5″ (572mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 24″', '5.125″ (130mm)', '24″ (610mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 25.5″', '5.125″ (130mm)', '25.5″ (648mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 27″', '5.125″ (130mm)', '27″ (686mm)', "48′ 60′ 63′ and 66′"],
    ['5-1/8″ x 28.5″', '5.125″ (130mm)', '28.5″ (724mm)', "48′ 60′ 63′ and 66′"],

];

const SecondStockBeamTable = () => {


    return (
        <section>
            <div>
                <div className={styles.tableHeading}>
                    <h1>5 1/8" Stock Beam</h1>
                </div>
                <div>
                    <BeamTable headers={headers} data={data} />
                </div>
            </div>
        </section>
    )
}

export default SecondStockBeamTable