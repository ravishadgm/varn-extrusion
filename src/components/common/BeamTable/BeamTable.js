import React from "react";
import styles from "./BeamTable.module.scss";

const BeamTable = ({ headers = [], data = [] }) => {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((header, idx) => (
                            <th key={idx}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rIdx) => (
                        <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                                <td key={cIdx}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BeamTable;
