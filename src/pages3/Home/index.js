import React from "react";
import Hero from "./Hero/Hero";
import Gallery from "./Gallery/Gallery";
import Mission from "./Vision/Vision";
import Certificates from "./Certificates/Certificates";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";

function index() {
  return (
    <>
      <Hero />

      <Gallery />

      <AboutUs />
      <Mission />
      <Certificates />
      <Services />
    </>
  );
}

export default index;
