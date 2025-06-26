import CorpBlock from '@components/common/CorpBlock/CorpBlock';
import React from 'react';
import Images from '@assets/images';


function Banner() {

  return (
    <div>
      <CorpBlock
        heading={
          <>
            Precision-Built<br />
            Poles and<br />
            Cross-Arms

          </>
        }
        subheading=""
        buttonLabel="Contact An Expert"
        buttonLink="/contact"
        sideImage={Images.crossArms}
        greenBg={true}
      />
    </div>
  )
}

export default Banner