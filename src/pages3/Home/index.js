import React from "react";
import OurHero from "./OurHero/OurHero";
import Gallery from "./OurGallery/OurGallery";
import Mission from "./Vision/Vision";
import Certificates from "./Award/Award";
import OurServices from "./OurServices/OurServices";
import AboutUs from "./AboutUs/AboutUs";

function index() {
  return (
    <>
      <OurHero />

      <Gallery />

      <AboutUs />
      <Mission />
      <Certificates />
      <OurServices />
    </>
  );
}

export default index;
