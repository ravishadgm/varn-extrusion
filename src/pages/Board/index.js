import CorpBlock from '@components/common/CorpBlock/CorpBlock';
import React from 'react';
import  Images  from '@assets/images';
import Features from './Features/Features';


function Banner() {
   
  return (
     <div>
      <CorpBlock
      heading={
        <>
      APA-EWS Evaluated QB Rim Board
        </>
      }
      subheading="QB Rim is an engineered wood glulam rim board used in construction, particularly in framing buildings. QB Rim is a structural member that exhibits enhanced strength, stability, and resistance to warping or splitting."
      buttonLabel="Contact An Expert"
      sideImage={Images.board_banner} 
      greenBg={true} 
    />
    <Features/>
    </div>
  )
}

export default Banner