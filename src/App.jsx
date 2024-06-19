import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/index';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Contact from './pages/Contact';
import Particle from './components/Particle/index'

import './App.css'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Particle />
      </HashRouter>
    </div>
  )
}

export default App;
