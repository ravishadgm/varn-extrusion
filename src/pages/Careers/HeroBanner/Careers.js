import React from "react";
import CorpBlock from "../../../components/common/CorpBlock/CorpBlock";

function Careers() {
  const corpContent = {
    heading: (
      <>
        Careers At QB Corp.
       
        
      </>
    ),
    subtext: "Join Our Commitment to Excellence", 
    button:true
  };

  return (
    <div>
      <CorpBlock heading={corpContent.heading} subheading={corpContent.subtext} showButton={true} />
    </div>
  );
}

export default Careers;
