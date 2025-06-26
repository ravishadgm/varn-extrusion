import CorpBlock from '@components/common/CorpBlock/CorpBlock';
import React from 'react';
import Images from '@assets/images';
import Features from './Features/Features';


function Banner() {

  return (
    <div>
      <CorpBlock
        heading={
          <>
            Aluminium Perimeter Profiles
          </>
        }
        subheading="Varn’s perimeter profiles are expertly crafted aluminium structural members designed for framing, support, and edge detailing in architectural and industrial applications. Engineered for strength, dimensional accuracy, and corrosion resistance, they ensure lasting performance without warping, splitting, or degradation."
        buttonLabel="Contact An Expert"
        buttonLink="/contact"
        sideImage={Images.premiumProfile}
        greenBg={true}
      />
      <Features />
    </div>
  )
}

export default Banner