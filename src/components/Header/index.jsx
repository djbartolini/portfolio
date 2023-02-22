import React from "react";

import Nav from '../Nav/index'
import './style.css';

import favicon from '../../assets/images/dev-favicon.svg';

const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={favicon} alt="logo" id="logo" /></a>
          <div>
            <h1>Daniel Bartolini</h1>
            <p>Web Development</p>
          </div>
          <div className="navbar">
            <Nav />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;