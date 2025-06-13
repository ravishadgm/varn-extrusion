
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Technical from '../pages/Technical';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Safety from '@pages/About/Safety/Safety';
import Configurations from '@pages/Products/Configurations/Configurations';
import ManufacturingCapabilities from '@pages/About/ManufacuringCapabilities/ManufacturingCapabilities';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/safety" element={<Safety />} />
      <Route path="/products/available-configurations" element={<Configurations />} />
      <Route path="/about/manufacturing-capabilities" element={<ManufacturingCapabilities />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes; 
