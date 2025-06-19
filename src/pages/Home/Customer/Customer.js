import NumberBlock from "@components/common/NumberBlock/NumberBlock";
import styles from "./Custromer.module.scss"


const infoList = [
  {
    number: "01.",
    title: "Safety Management",
    text: "QB Corporation is dedicated to providing our employees and customers with a safe and healthy working environment.",
  },
  {
    number: "02.",
    title: "Quality Control",
    text: "At QB Corporation, we aim not to be average but to stand out in quality.",
  },
  {
    number: "03.",
    title: "Professional Team",
    text: "QB Corporation employees strive to provide the best safe environment, quality products, and quantity.",
  },
  {
    number: "04.",
    title: "On-Time Deliveries",
    text: "Shipping on flat-bed trucks with companies that deliver on time, anywhere in the U.S.A.",
  },
];

export default function SomePage() {
  return (
    <div className={styles.container}>
      <NumberBlock
        title={
          <>
            We strive for 100% on-time deliveries <br />
            and 100% customer satisfaction
          </>
        }
        infoList={infoList}
        buttonLabel="ABOUT QB CORP"
      />
    </div>
  );
}
