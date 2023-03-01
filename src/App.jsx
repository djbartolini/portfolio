import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/index';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Contact from './pages/Contact';

import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      </Router>
    </div>
  )
}

export default App;
