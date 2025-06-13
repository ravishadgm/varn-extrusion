import React from "react";
import VerticalBlock from "../../../components/common/VerticalNumberBlock/VerticalBlock";

import { FaFilePdf } from "react-icons/fa6";
import Images  from '@assets/images';
const featuresData = [
  {
    number: "01",
    title: "Renewable and Sustainable",
    text: "Wood pellets are made from wood residues (sawdust, wood shavings, and other by-products of our manufacturing process). Using wood pellets helps reduce reliance on fossil fuels, contributing to a more sustainable energy system.",
  },
  {
    number: "02",
    title: "High Energy Density",
    text: "Fuel pellets have a high energy density, meaning they contain a significant amount of energy per unit of weight. This makes them an efficient fuel source, providing much heat output for their size. It also allows for convenient storage and transportation.",
  },
  {
    number: "03",
    title: "Clean and Low Emissions",
    text: "Wood pellets burn more cleanly and produce fewer emissions than traditional wood or fossil fuels. They have a low moisture content, which leads to efficient combustion and reduced smoke and particulate matter. Fuel pellets also emit lower levels of greenhouse gases, such as carbon dioxide, than fossil fuels.",
  },
  {
    number: "04",
    title: "Cost-effective",
    text: "Wood pellets can be a cost-effective heating option, especially in areas where other fuel sources, such as oil or propane, are expensive. While the upfront cost of purchasing a pellet stove or boiler may be higher, the lower cost of wood pellets and their efficient combustion can result in long-term cost savings.",
  },
  {
    number: "05",
    title: "Convenient and Automated",
    text: "Pellet stoves and boilers are designed for convenient use. They typically have automated feeding systems that deliver pellets to the combustion chamber, allowing continuous heat without constant refueling. Certain models of pellet stoves can be controlled remotely through smartphones or thermostats.",
  },
  {
    number: "06",
    title: "Carbon Neutral",
    text: "Pellets are considered a carbon-neutral fuel because the carbon dioxide released during combustion is almost equivalent to the carbon dioxide absorbed by trees during their growth. This carbon uptake and release cycle helps minimize the net increase of greenhouse gases in the atmosphere.",
  },
   {
    number: "07",
    title: "Utilization of Wood Waste",
    text: "Wood pellets are valuable for wood residues that would otherwise be discarded or decomposed. By utilizing these by-products, wood pellet production contributes to waste reduction and maximizes the use of available resources.",
  },
];

function Advantages() {
  return (
    <>
   
    <VerticalBlock
      title="Wood pellet fuel offers several advantages"
      description="Overall, wood pellet fuel offers an efficient, environmentally friendly, and sustainable alternative to traditional heating fuels, making it an attractive option for residential, commercial, and industrial applications."
      features={featuresData}
    />

 
     </>
  );
}

export default Advantages;
