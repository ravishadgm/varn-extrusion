import React from 'react'
import styles from "../StokeTable.module.scss"
import BeamTable from '@components/common/BeamTable/BeamTable';

const headers = ["Aluminium Beam Size", "Width", "Depths", "Length Available in Ft"];

const data = [
    ['3-1/8” x 6"', '3.125″ (79 mm)', '6″ (152mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8” x 7.5"', '3.125″ (79 mm)', '7.5″ (191mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8” x 9"', '3.125″ (79 mm)', '9″ (229mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8” x 10.5"', '3.125″ (79 mm)', '10.5″ (267mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8” x 12"', '3.125″ (79 mm)', '12″ (305mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8” x 13.5"', '3.125″ (79 mm)', '13.5″ (343mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 15″', '3.125″ (79 mm)', '15″ (381mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 16.5″', '3.125″ (79 mm)', '16.5″ (419mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 18″', '3.125″ (79 mm)', '18″ (457mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 19.5″', '3.125″ (79 mm)', '19.5″ (495mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 21″', '3.125″ (79 mm)', '21″ (533mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 22.5″', '3.125″ (79 mm)', '22.5″ (572mm)', "48′ 60′ 63′ and 66′"],
    ['3-1/8″ x 24″', '3.125″ (79 mm)', '24″ (610mm)', "48′ 60′ 63′ and 66′"],
];

const FirstStockBeamTable = () => {


    return (
        <section>
            <div>
                <div className={styles.tableHeading}>
                    <h1>3 1/8" Stock Beam</h1>
                </div>
                <div>
                    <BeamTable headers={headers} data={data} />
                </div>
            </div>
        </section>
    )
}

export default FirstStockBeamTable