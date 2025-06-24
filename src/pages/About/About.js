import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner';
// import Committed from './Committed/Committed';
// import Professional from './Professional/Professional'

import FAQs from './FAQs/FAQs';
import VarnLife from './VarnLife/VarnLife';
import Awards from './Awards/Awards';
import MeetCEO from './MeetCEO/MeetCEO';
import Career from './Career/Career';
function About() {
  return (
    <>
      <HeroBanner />
      <VarnLife />
      <Career />
      <FAQs />
      <Awards />
      <MeetCEO />

      {/* <Committed/>
    <Professional/> */}
    </>
  )
}

export default About