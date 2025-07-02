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
import Header from '../src/components1/Header/Header';
import Home from '../src/pages1/Home/index'
import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';
// import Header from '@components/Header/Header';
import './styles/main.scss';
import Footer from './components1/Footer/Footer';
import MissionVarn from "./pages1/Home/MissionVarn/MissionVarn"
import Certificates from 'pages1/Home/Certificates/Certificates';
// import Footer from '@components/Footer/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar />
          <Header />
        <main className="app-content">
          <AppRoutes />
        </main> */}


        <Header />
        <Home />



        <MissionVarn />
        <Certificates />
        <Footer />
      </div>
    </BrowserRouter>


  );
};

export default App;
