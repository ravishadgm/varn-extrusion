import React from 'react'
import Hero from './Hero/Hero';
import CompanyFeatures from './CompanyFeatures/CompanyFeatures';
import Certificates from './Home/Certificates/Certificates';
import Profit from './Home/Profit/Profit';
import Testimonials from './Home/Testimonials/Testimonials';
import Blog from './Home/Blog/Blog';
import WhyUs from './WhyUs/WhyUs';

function index() {
  return (
    <>
      <Hero />
      <CompanyFeatures />
      <WhyUs />
      <Certificates />
      <Profit />
      <Testimonials />
      <Blog />


    </>
  )
}

export default index