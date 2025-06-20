import React from 'react'
import Hero from './Hero/Hero';
import Product from './Products/Product';
import Customer from './Customer/Customer';
import Project from './Project/Project';
import About from './About/About'
function index() {
  return (
    <>
      <Hero />
      <Product />
      <Customer />
      <Project />
      <About/>
    </>
  )
}

export default index