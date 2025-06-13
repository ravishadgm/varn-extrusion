import React from 'react'
import styles from "../StokeTable.module.scss"
import BeamTable from '@components/common/BeamTable/BeamTable';

const headers = ["Glulam Beam Size", "Width", "Depths", "Length Available in Ft"];

const data = [
    ['6-3/4″ x 6″', '6.75″ (171mm)', '6″ (152mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 7.5″', '6.75″ (171mm)', '7.5″ (191mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 9″', '6.75″ (171mm)', '9″ (229mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 10.5″', '6.75″ (171mm)', '10.5″ (267mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 12″', '6.75″ (171mm)', '12″ (305mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 13.5″', '6.75″ (171mm)', '13.5″ (343mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 15″', '6.75″ (171mm)', '15″ (381mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 16.5″', '6.75″ (171mm)', '16.5″ (419mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 18″', '6.75″ (171mm)', '18″ (457mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 19.5″', '6.75″ (171mm)', '19.5″ (495mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 21″', '6.75″ (171mm)', '21″ (533mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 22.5″', '6.75″ (171mm)', '22.5″ (572mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 24″', '6.75″ (171mm)', '24″ (610mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 25.5″', '6.75″ (171mm)', '25.5″ (648mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 27″', '6.75″ (171mm)', '27″ (686mm)', "48′ 60′ 63′ and 66′"],
    ['6-3/4″ x 28.5″', '6.75″ (171mm)', '28.5″ (724mm)', "48′ 60′ 63′ and 66′"],

];

const ThirdStockBeamTable = () => {


    return (
        <section>
            <div>
                <div className={styles.tableHeading}>
                    <h1>6 3/4" Stock Beam</h1>
                </div>
                <div>
                    <BeamTable headers={headers} data={data} />
                </div>
            </div>
        </section>
    )
}

export default ThirdStockBeamTable