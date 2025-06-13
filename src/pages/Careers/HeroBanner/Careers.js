// src/pages/SomePath/Careers.jsx

import React from "react";
import CorpBlock from "../../../components/common/CorpBlock/CorpBlock";

function Careers() {
  const corpContent = {
    heading: `Careers At QB Corp.<br />Join Our Commitment to Excellence`,
    subtext: "", // Not needed, but safe to keep empty
  };

  return (
    <div>
      <CorpBlock content={corpContent} showButton={true} />
    </div>
  );
}

export default Careers;
