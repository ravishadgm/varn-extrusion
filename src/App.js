// src/App.tsx
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';
// import Header from '@components/Header/Header';
// import './styles/main.scss'; 
// import Footer from '@components/Footer/Footer';
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         {/* <Navbar />  */}
//           <Header />
//         <main className="app-content">
//           <AppRoutes />
//         </main>
//         <Footer/>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


// src/App.tsx
import React from 'react';
import Header from '../src/components3/Header/Header';
import Home from "../src/pages3/Home/index"
import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';
// import Header from '@components/Header/Header';
import './styles/main.scss';
import Footer from './components2/Footer/Footer';
import MissionVarn from "./pages1/Home/MissionVarn/MissionVarn"
// import Certificates from 'pages3/Home/Certificates/Certificates';
import GetInTouch from 'pages1/Home/GetInTouch/GetInTouch';
import Blog from 'pages2/Home/Blog/Blog';
import Testimonials from 'pages2/Home/Testimonials/Testimonials';
import Profit from 'pages2/Home/Profit/Profit';
import WhyUs from 'pages3/Home/WhyUs/WhyUs';
import Mission from 'pages3/Home/Mission/Mission';
import Services from 'pages3/Home/Services/Services';
import Certificates from 'pages3/Home/Certificates/Certificates';
// import Footer from '@components/Footer/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">

        {/* <Header />
        <main className="app-content">
          <AppRoutes />
        </main> */}


        {/* <Header />
        <Home />
        <Footer /> */}
        <Header />
        <Home />

        <WhyUs />
        <Mission />
        <Certificates />
        <Services />

      </div>
    </BrowserRouter>


  );
};

export default App;
