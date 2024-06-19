import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const Nav = ({ currentPage, pages }) => {


  return (
    <div id='nav'>
      <article className="nav-item">
        <NavLink 
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
      </article>
      <article className="nav-item">
        <NavLink 
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
        >
          About Me
        </NavLink>
      </article>
      <article className="nav-item">
        <NavLink 
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </article>
    </div>
  )
}

export default Nav;