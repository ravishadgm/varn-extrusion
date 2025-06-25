import React from "react";
import SemiHeader from "@components/common/SemiHeader/SemiHeader";
import ImageBlock from "@components/common/ImageBlock/ImageBlock";
import Images from "@assets/images";
import Technology from "./Technology/Technology";

const imageData = [
  {
    title: "Fabrication Services",
    description:
      "Fabrication solutions backed by advanced technology, robust infrastructure, and uncompromising quality.",
    image: Images.services_fab,
    link:'/services/fabrication'
  },
  {
    title: "Timber Truss Assembly",
    description:
      "Varn Extrusion is your trusted partner for high-quality glued laminated timber trusses, engineered for strength and precision",
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
            Varn Extrusion delivers more than aluminum profiles – we offer end-to-end solutions that strengthen your business operations  
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
