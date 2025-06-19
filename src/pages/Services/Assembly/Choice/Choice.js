import React from "react";
import styles from "./Choice.module.scss";
import Images from '@assets/images';
import VerticalBlock from "@components/common/VerticalNumberBlock/VerticalBlock";

const featuresData = [
  {
    number: "01",
    title: "Lightweight",
    text: "Glulam is lighter than steel for the same load-bearing capacity thanks to its high strength-to-weight ratio. This makes Glulam trusses easier to maneuver and install, saving time and effort.",
  },
  {
    number: "02",
    title: "Flexibility",
    text: "Whether you're working on a long-span project or a curved design, Glulam is the perfect choice. Its flexibility allows for creative designs without compromising on aesthetics.",
  },
  {
    number: "03",
    title: "Durability",
    text: "Glulam is more durable in environments with high moisture or chemical levels and requires less maintenance than steel. This makes Glulam trusses a practical choice for a wide range of projects.",
  },
  {
    number: "04",
    title: "Lower Carbon Footprint",
    text: "Glulam has a lower carbon footprint than steel and concrete. This is because the production of Glulam requires less energy and results in fewer greenhouse gas emissions.",
  },
  {
    number: "05",
    title: "Sustainable Material",
    text: "Wood is a renewable resource, and the timber used in Glulam can be sourced from sustainably managed forests while using the wood more efficiently than solid sawn.",
  },
  {
    number: "06",
    title: "Life Cycle Analysis",
    text: "When considering the entire life cycle of the building product, wood was found to be better than steel or concrete in terms of embodied energy, global warming potential, air emissions, water emissions, and solid waste production.",
  },
];


const Choice = () => {
  return (

    <>
      <section className={styles.strengthBlock}>
        <div className={styles.text}>
          When it comes to strength and flexibility, Glulam outperforms steel in
          many ways. Glulam offers superior load-bearing capacity with a
          strength-to-weight ratio that is three times greater than steel. This
          means that pound for pound, Glulam is indeed stronger than steel.
        </div>

        <div className={styles.imageWrapper}>
          <img src={Images.choice_bg} alt="Glulam Truss" />
        </div>
      </section>
      <div className={styles.innerBlock}>
        <VerticalBlock
          title="Glulam Trusses are the Preferred Choice over the Alternatives"
          description="When it comes to strength and flexibility, Glulam outperforms steel in many ways. Glulam offers superior load-bearing capacity with a strength-to-weight ratio that is three times greater than steel. This means that pound for pound, Glulam is indeed stronger than steel."
          features={featuresData}

        />
      </div>
    </>

  );
};

export default Choice;
