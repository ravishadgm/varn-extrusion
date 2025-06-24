import React from 'react'
import Hero from './Hero/Hero';
// import Product from './Products/Product';
import Customer from './Customer/Customer';
import Project from './Project/Project';
import About from './AboutVarn/About'
import Business from './Business/Business';
import Services from './Services/Services';
import TrustedByBrands from './TrustedByBrands/TrustedByBrands';
import WhyUs from './WhyUs/WhyUs';
import Mission from './MisssionVarn/Mission';

function index() {
  return (
    <>
      <Hero />
      <Business />
      {/* <Product /> */}
      <Services />
      {/* <About /> */}
      <Mission />

      <TrustedByBrands />
      <WhyUs />
      {/* <Customer /> */}

      {/* <Project /> */}

    </>
  )
}

export default index