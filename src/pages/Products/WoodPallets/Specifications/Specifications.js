import styles from './Specifications.module.scss';
import Images from "@assets/images";

export default function Specification() {
  return (
    <section className={styles.specificationSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pellet Specifications</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Moisture Free</th>
                <th>As Received</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moisture Total (wt. %)</td>
                <td>0</td>
                <td>5.66</td>
              </tr>
              <tr>
                <td>BTU/lb</td>
                <td>8888</td>
                <td>8385</td>
              </tr>
              <tr>
                <td>Ash (wt. %)</td>
                <td>.51</td>
                <td>.48</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <img className={styles.woodPelletsImage} src={Images.woodPellets_bg} alt='wood pellets'/>
      </div>
    </section>
  );
}
