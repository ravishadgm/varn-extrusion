import React from 'react'
import Hero from './Hero/Hero';
import Product from './Product/Product';
import About from './About/About';
import MissionVarn from './MissionVarn/MissionVarn';
import Certificates from './Certificates/Certificates';
import Footer from 'components1/Footer/Footer';

function index() {
  return (
    <>
      <Hero />
          <About/>
         
         
      <Product/>
   
        <MissionVarn />
    
            <Certificates />
       
    
    </>
  )
}

export default index