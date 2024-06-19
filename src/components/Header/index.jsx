import React from "react";

import Nav from '../Nav/index'
import './style.css';

import favicon from '/assets/dev-favicon.svg';

const Header = () => {
 
  return (
    <header>
        <div className="nav-parent">
          <a href="/"><img src={favicon} alt="logo" className="logo" /></a>
          <div className="nav-text">
            <span className="style-nav-h1">
              <h1>Daniel Bartolini &nbsp;</h1>
              <p>Web Development</p>
            </span>
            <div className="nav-container">
              <Nav />
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header;