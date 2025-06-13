import React from 'react'
import styles from "../StokeTable.module.scss"
import BeamTable from '@components/common/BeamTable/BeamTable';

const headers = ["Glulam Beam Size", "Width", "Depths", "Length Available in Ft"];

const data = [
    ['6-3/4″ x 6″', '8.75" (222mm)', '9″ (229mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 10.5″', '8.75" (222mm)', '10.5″ (267mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 12″', '8.75" (222mm)', '12″ (305mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 13.5″', '8.75" (222mm)', '13.5″ (343mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 15″', '8.75" (222mm)', '15″ (381mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 16.5″', '8.75" (222mm)', '16.5″ (419mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 18″', '8.75" (222mm)', '18″ (457mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 19.5″', '8.75" (222mm)', '19.5″ (495mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 21″', '8.75" (222mm)', '21″ (533mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 22.5″', '8.75" (222mm)', '22.5″ (572mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 24″', '8.75" (222mm)', '24″ (610mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 25.5″', '8.75" (222mm)', '25.5″ (648mm)', "48′ 60′ 63′ and 66′"],
    ['8-3/4″ x 27″', '8.75" (222mm)', '27″ (686mm)', "48′ 60′ 63′ and 66′"],
];

const FourthStockBeamTable = () => {


    return (
        <section>
            <div>
                <div className={styles.tableHeading}>
                    <h1>8 3/4" Stock Beam</h1>
                </div>
                <div>
                    <BeamTable headers={headers} data={data} />
                </div>
            </div>
        </section>
    )
}

export default FourthStockBeamTable