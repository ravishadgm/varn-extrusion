import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner';
// import Committed from './Committed/Committed';
import FAQs from "./FAQs/FAQs";
import Awards from './Awards/Awards';
import Career from "./Career/Career";
import VarnLife from "./VarnLife/VarnLife";
import MeetCEO from './MeetCEO/MeetCEO';

// import Professional from './Professional/Professional'
function About() {
  return (
    <>
      <HeroBanner />
      <VarnLife />
      <Career />
      {/* <Committed /> */}
      {/* <Professional/> */}
      <FAQs />
      <Awards />
      <MeetCEO />
    </>
  )
}

export default About