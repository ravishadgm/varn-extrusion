import React from "react";
import styles from "./HeroBanner.module.scss";
import Images from "@assets/images";
import CorpBlock from "@components/common/CorpBlock/CorpBlock";
const HeroBanner = () => {
  return (
    <CorpBlock
      heading={
        <>
          Where Excellence Is A <br />
          Tradition And Innovation <br />
          Knows No Limits
        </>
      }
      subheading="Located in Salmon, Idaho, USA."
      
    />
  );
};

export default HeroBanner;
