import React from "react";
import './style.css';


const Nav = () => {
  return (
    <div id='nav'>
      <article className='nav-item'>
        {document.location.pathname === '/' 
          ? <a href='/' className='nav-link-active'>Portfolio</a> 
          : <a href='/' className='nav-link'>Portfolio</a>}
      </article>
      <article className='nav-item'>
        {document.location.pathname === '/about' 
          ? <a href='/about' className='nav-link-active'>About Me</a> 
          : <a href='/about' className='nav-link'>About Me</a>}
      </article>
      <article className='nav-item'>
        {document.location.pathname === '/contact' 
          ? <a href='/contact' className='nav-link-active'>Contact</a> 
          : <a href='/contact' className='nav-link'>Contact</a>}
      </article>
    </div>
  )
}

export default Nav;