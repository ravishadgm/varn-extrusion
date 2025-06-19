import React from "react";
import CorpBlock from "../../../components/common/CorpBlock/CorpBlock";

function Careers() {
  const corpContent = {
    heading: (
      <>
        Careers At VARN Extrusion Pvt. Ltd.
      </>
    ),
    subtext: "Join Our Commitment to Excellence", 
    buttonLabel:"Applpy Today"
  };

  return (
    <div>
      <CorpBlock heading={corpContent.heading} subheading={corpContent.subtext} showButton={true} />
    </div>
  );
}

export default Careers;
