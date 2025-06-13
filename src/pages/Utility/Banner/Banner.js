import CorpBlock from '@components/common/CorpBlock/CorpBlock';
import React from 'react';
import  Images  from '@assets/images';


function Banner() {
   
  return (
     <div>
      <CorpBlock
      heading={
        <>
          Poles, Cross-arms,<br/>
        and Wood Framed<br/>
        Utility Structures
      
        </>
      }
      subheading=""
      buttonLabel="Contact An Expert"
      sideImage={Images.utility_banner} 
      greenBg={true} 
    />
    </div>
  )
}

export default Banner