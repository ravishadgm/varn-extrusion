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
import Header from '../src/components2/Header/Header';
import Home from '../src/pages2/index'
import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';
// import Header from '@components/Header/Header';
import './styles/main.scss';
import Footer from './components2/Footer/Footer';
import MissionVarn from "./pages1/Home/MissionVarn/MissionVarn"
import Certificates from 'pages2/Home/Certificates/Certificates';
import GetInTouch from 'pages1/Home/GetInTouch/GetInTouch';
import Blog from 'pages2/Home/Blog/Blog';
import Testimonials from 'pages2/Home/Testimonials/Testimonials';
import Profit from 'pages2/Home/Profit/Profit';
// import Footer from '@components/Footer/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">

        {/* <Header />
        <main className="app-content">
          <AppRoutes />
        </main> */}


        <Header />
        <Home />

        <Footer />
      </div>
    </BrowserRouter>


  );
};

export default App;
