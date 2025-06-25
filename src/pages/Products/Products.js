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
      "Get your construction project completed faster and more efficiently with our stock Aluminium beams.",
    image: Images.CustomAluminium,
    link: '/products/stoke-beams'
  },
  {
    title: "QA Beam Plate",
    description:
      "QB Rim Board has enhanced strength, stability, and resistance to warping or splitting.",
    image: Images.beamPlate,
    link: '/products/qb-rim-board'
  },
  {
    title: "Aluminum Utility Frames",
    description:
      "An excellent solution for expanding the nation’s infrastructure efficiently.",
    image: Images.utilityStructure,
    link: '/products/utility-structures'
  },
  {
    title: "Aluminum Ingots",
    description:
      "Our pellets are renewable, sustainable, and rated as high-performance fuel.",
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
