import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Birthday from './components/Birthday';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import Lost from './components/Lost';
import data from './data/data.json';

const App = () => {
  const [toggleLogo, setToggleLogo] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data); // Load card data from JSON when the component mounts
  }, []);

  const handleLogoToggle = () => {
    setToggleLogo(prevToggle => !prevToggle);
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img 
            src={logo} 
            className={toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
            alt="logo"
            onMouseEnter={handleLogoToggle}
            onMouseLeave={handleLogoToggle}
            onClick={openNav}
          />
          <h1
            className={toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
            onClick={openNav}
          >Menu</h1>
          <Navigation closeNav={closeNav} />
        </header>
        <Routes>
          <Route exact path="/" element={<Home cards={cards} />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route 
            path="/product/:id" 
            element={<ProductDetails cards={cards} />} 
          />
          <Route path="*" element={<Lost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;