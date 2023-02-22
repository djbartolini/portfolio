import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/index'
import Portfolio from './pages/Portfolio/index'

import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </>
      </Router>
    </div>
  )
}

export default App;
