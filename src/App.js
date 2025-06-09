// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import './styles/main.scss'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar />  */}
          <Header />
        <main className="app-content">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
