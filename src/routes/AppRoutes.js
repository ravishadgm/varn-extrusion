import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Technical from "../pages/Technical";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Safety from "@pages/About/Safety/Safety";
import Configurations from "@pages/Products/Configurations/Configurations";
import ManufacturingCapabilities from "@pages/About/ManufacuringCapabilities/ManufacturingCapabilities";
import CustomBeams from "@pages/Products/CustomBeams/CustomBeams";

import Community from '../pages/About/Community/index';
import News from '../pages/About/Community/index';
import Careers from '../pages/Careers';
import Fabrication from '../pages/Services/Fabrication/index'
import StokeBeams from '@pages/Products/StokeBeams/StokeBeams';
import Assembly from "../pages/Services/Assembly/index";
import WoodPallets from "../pages/Products/WoodPallets/index";
import Utility from "../pages/Products/Utility/index";
import Board from "../pages/Products/Board/index";
import Catalog from "../pages/Catalog/Catalog";
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions'
import KanzanHouse from "@pages/ProjectViews/KanzanHouse/KanzanHouse";
import UnionArena from "@pages/ProjectViews/UnionArena/UnionArena";
import JacksonHallAirport from "@pages/ProjectViews/JacksonHallAirport/JacksonHallAirport";
import BozemanAirport from "@pages/ProjectViews/BozemanAirport/BozemanAirport";
import FriesHouse from "@pages/ProjectViews/FriesHouse/FriesHouse";

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
      <Route
        path="/products/available-configurations"
        element={<Configurations />}
      />
      <Route
        path="/about/manufacturing-capabilities"
        element={<ManufacturingCapabilities />}
      />
      <Route path="/products/custom-beams" element={<CustomBeams />} />
      <Route path="/products/stoke-beams" element={<StokeBeams />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about/community" element={<Community />} />
      <Route path="/about/news" element={<News />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/services/fabrication" element={<Fabrication />} />
      <Route path="/services/truss-assembly" element={<Assembly />} />
      <Route path="/products/wood-pellets" element={<WoodPallets />} />
      <Route path="/products/utility-structures" element={<Utility />} />
      <Route path="/products/varn-rim-board" element={<Board />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/projects/kanzan-house" element={<KanzanHouse />} />
      <Route path="/projects/idaho-central-credit-union-arena" element={<UnionArena />} />
      <Route path="/projects/jackson-hole-airport" element={<JacksonHallAirport />} />
      <Route path="/projects/bozeman-yellowstone-international-airport" element={<BozemanAirport />} />
      <Route path="/projects/the-fries-house" element={<FriesHouse />} />
    </Routes>
  );
};

export default AppRoutes;
