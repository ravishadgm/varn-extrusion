import React from "react";
import styles from "./Choice.module.scss";
import Images from '@assets/images';
import VerticalBlock from "@components/common/VerticalNumberBlock/VerticalBlock";

const featuresData = [
  {
    number: "01",
    title: "Ultra-Light Yet Strong",
    text: "Our engineered profiles offer a high strength-to-weight ratio — ensuring exceptional structural support while remaining lightweight, ideal for projects where weight savings are critical.",
  },
  {
    number: "02",
    title: "Design Flexibility",
    text: "With precision CNC fabrication and ultra-slim profile capabilities down to 0.3 mm wall thickness, we enable custom shapes and design innovations that meet both structural and aesthetic goals.",
  },
  {
    number: "03",
    title: "Corrosion-Resistant Durability",
    text: "Unlike steel, our aluminum profiles do not rust and perform excellently in harsh environments. Combined with anodizing or powder coating, they offer long-term durability with minimal maintenance.",
  },
  {
    number: "04",
    title: "Eco-Friendly Production",
    text: "Our extrusion processes consume less energy than traditional materials, and aluminum’s recyclability contributes to a reduced carbon footprint and greener manufacturing practices.",
  },
  {
    number: "05",
    title: "Sustainable Manufacturing",
    text: "We use eco-conscious methods such as chromotization, waste reduction, and efficient resource management to produce environmentally responsible architectural profiles.",
  },
  {
    number: "06",
    title: "Precision at Every Stage",
    text: "From advanced spectrometer-based alloy analysis to in-house CNC machining and ERP-controlled fabrication, every profile is built with unmatched accuracy and consistency.",
  },
];



const Choice = () => {
  return (

    <>
      <section className={styles.strengthBlock}>
        <div className={styles.text}>
          When it comes to strength and design versatility, glulam offers significant advantages over steel. With a strength-to-weight ratio up to three times greater, glulam provides exceptional load-bearing capacity while allowing for lighter, more efficient structural designs. Pound for pound, glulam proves to be stronger and more adaptable than steel.
        </div>

        <div className={styles.imageWrapper}>
          <img src={Images.workService} alt="Glulam Truss" />
        </div>
      </section>
      <div className={styles.innerBlock}>
        <VerticalBlock
          title="Glulam Trusses are the Preferred Choice over the Alternatives"
          description="When it comes to strength and design flexibility, glulam stands out as a superior structural solution. With a strength-to-weight ratio up to three times greater than steel, glulam provides exceptional load-bearing performance while allowing for efficient, lightweight design."
          features={featuresData}
        />

      </div>
    </>

  );
};

export default Choice;
