import CorpBlock from "@components/common/CorpBlock/CorpBlock";
import React from "react";
import Images  from '@assets/images';

function Banner() {
  return (
    <CorpBlock
      heading={
        <>
          Lemhi Valley Premium
          <br />
          Grade Wood Pellets <br />
        </>
      }
      subheading="QB Corporation is committed to increasing efficiency in our use of wood resources. Our LEMHI VALLEY WOOD PELLETS are manufactured using by-products generated during our processes, such as sawdust and end trims. The high-grade wood, primarily Douglas Fir, used to produce these pellets, is rated as ' Premium Grade ' by the pellet industry."
      buttonLabel="Get In Touch"
        sideImage={Images.woodPellets_banner} 
      greenBg={true} 
    />
  );
}

export default Banner;
