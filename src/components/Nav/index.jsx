import React from "react";
import './style.css';


const Nav = () => {
  return (
    <div className="navbar" id='nav'>
      <article className='nav-item'>
        <a href='/' className='nav-link-active nav-text'>
          Portfolio
        </a>
      </article>
      <article className='nav-item'>
        <a href='/about' className='nav-link nav-text'>
          About
        </a>
      </article>
      <article className='nav-item'>
        <a href='/contact' className='nav-link nav-text'>
          Contact Me
        </a>
      </article>
    </div>
  )
}

export default Nav;