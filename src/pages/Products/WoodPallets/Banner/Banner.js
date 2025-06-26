import CorpBlock from "@components/common/CorpBlock/CorpBlock";
import React from "react";
import Images from '@assets/images';

function Banner() {
  return (
    <CorpBlock
      heading={
        <>
          Sustainable Aluminium Production
          <br />
          Premium Ingots <br />
        </>
      }
      subheading="Varn Extrusion is committed to maximizing efficiency and sustainability in our aluminium production. Our premium-grade aluminium ingots are produced from carefully selected raw materials and optimized processes that reduce waste and energy consumption."
      buttonLabel="Get In Touch"
      buttonLink="/contact"
      sideImage={Images.premiumIngots}
      greenBg={true}
    />
  );
}

export default Banner;
