import React from "react";
import VerticalBlock from "../../../../components/common/VerticalNumberBlock/VerticalBlock";
import styles from "./Advantages.module.scss"
import { FaFilePdf } from "react-icons/fa6";
import Images from '@assets/images';

const featuresData = [
  {
    number: "01",
    title: "Renewable and Sustainable",
    text: "Aluminium is 100% recyclable without any loss in quality, making it one of the most sustainable metals in the world. Our operations emphasize eco-conscious manufacturing with in-house casting, optimized press usage, and anodizing practices that minimize waste.",
  },
  {
    number: "02",
    title: "High Strength-to-Weight Ratio",
    text: "Aluminium offers high mechanical strength while being remarkably lightweight, enabling efficient transportation, installation, and structural integrity. Our ultra-slim 0.3 mm wall thickness profiles are a testament to engineering precision—providing high performance without bulk, ideal for modern infrastructure and architectural demands.",
  },
  {
    number: "03",
    title: "Clean Processing and Low Emissions",
    text: "At Varn, our automated systems, chromotization processes, and 7-tank pre-treatment lines ensure clean production with consistent surface finishes and lower environmental impact—making our profiles not only strong but also environmentally considerate.",
  },
  {
    number: "04",
    title: "Cost-Effective and Long-Lasting",
    text: "Though aluminium may have a higher initial material cost compared to steel or wood, its long lifecycle, minimal maintenance, and corrosion resistance translate into major long-term savings.",
  },
  {
    number: "05",
    title: "Precision, Automation & Integration",
    text: "From billet casting to automated packaging, our fully integrated systems ensure seamless quality control and minimal human error. ",
  },
  {
    number: "06",
    title: "Low Carbon Footprint & Recyclability",
    text: "Varn Extrusion’s use of in-house melting and holding furnaces further optimizes energy usage, ensuring every kilogram of aluminium is part of a greener manufacturing cycle.",
  },
  {
    number: "07",
    title: "Waste Reduction Through Smart Design",
    text: "With in-house cutting, punching, and drilling facilities, every aluminium product is optimized from start to finish, reducing excess scrap and promoting efficient use of raw input.",
  },
];

function Advantages() {
  return (
    <>
      <div className={styles.verticalContent}>
        <VerticalBlock
          title="Aluminium: A Sustainable, High-Performance Material for the Future"
          description=" At Varn Extrusion Pvt. Ltd., our high-quality aluminium profiles are engineered for durability, recyclability, and energy efficiency—supporting a cleaner and more responsible future."
          features={featuresData}
        />
      </div>


    </>
  );
}

export default Advantages;
