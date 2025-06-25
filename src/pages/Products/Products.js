import React from "react";
import SemiHeader from "@components/common/SemiHeader/SemiHeader";
import ImageBlock from "@components/common/ImageBlock/ImageBlock";
import Images from "@assets/images";

const imageData = [
  {
    title: "Custom Aluminium Extrusions",
    description:
      "Over 1000+ mould designs allow tailored solutions for unique profile requirements. Our team ensures precision and strength in every extrusion.",
    image: Images.CustomAluminiumExtrusion,
    link: '/products/custom-beams'
  },
  {
    title: "Aluminum beams",
    description:
      "Ultra-slim, durable, and precisely crafted — aluminium beams built for performance and visual excellence.",
    image: Images.CustomAluminium,
    link: '/products/stoke-beams'
  },
  {
    title: "QA Beam Plate",
    description:
      "Precision-extruded aluminium plates designed for strength, flatness, and structural reliability in demanding applications.",
    image: Images.beamPlate,
    link: '/products/varn-rim-board'
  },
  {
    title: "Aluminum Utility Frames",
    description:
      "Robust and customizable aluminium frames built for versatile industrial and architectural applications.",
    image: Images.utilityStructure,
    link: '/products/utility-structures'
  },
  {
    title: "Aluminum Ingots",
    description:
      "Engineered aluminium interlocks crafted with tight tolerances for seamless assembly and long-term durability.",
    image: Images.aluminiumIntelogs,
    link: '/products/wood-pellets'
  },
];

function Products() {
  return (
    <>
      <SemiHeader
        title={
          <>
            Varn Extrusion Produces Dependable Products <br />
            With Unmatched Strength And Durability
          </>
        }
        description={
          <>
            We strive for 100% on-time deliveries <br />
            and 100% customer satisfaction.
          </>
        }
        buttonText="Contact an Expert"
        buttonLink="/contact"
      />
      <ImageBlock data={imageData} />
    </>
  );
}

export default Products;
