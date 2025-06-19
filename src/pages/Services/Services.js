import React from "react";
import SemiHeader from "@components/common/SemiHeader/SemiHeader";
import ImageBlock from "@components/common/ImageBlock/ImageBlock";
import Images from "@assets/images";
import Technology from "./Technology/Technology";

const imageData = [
  {
    title: "Fabrication Services",
    description:
      "Fabrication services with cutting-edge technology, extensive capabilities, and superior results",
    image: Images.services_fab,
    link:'/services/fabrication'
  },
  {
    title: "Timber Truss Assembly",
    description:
      "QB Corporation is your go-to solution for premium glued laminated timber trusses.",
    image: Images.services_timber,
    link:'/services/truss-assembly'
  },
  {
    title: "Pre-Fit Connections",
    description:
      "More info coming soon.",
    image: Images.services_fit,
    
  }
];

function Services() {
  return (
    <>
      <SemiHeader
        title={<>Varn Extrusion Provides Exceptional Services</>}
        description={
          <>
            Varn Extrusion offers more than glulam beam products – we provide a
            comprehensive solution that enhances your business capabilities.
          </>
        }
        buttonText="Contact an Expert"
        buttonLink="/contact"
      />
      <ImageBlock data={imageData} />
      {/* <Technology/> */}
    </>
  );
}

export default Services;
