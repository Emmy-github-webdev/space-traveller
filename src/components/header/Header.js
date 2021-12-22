import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <nav className="header-wrapper">
    <div className="logo">
      <NavLink to="/" className="brand">
        Hemant Website
      </NavLink>
    </div>
    <div className="nav-wrapper">
      <div className="navigation">
        <NavLink to="/about" activeClassName="activeClass">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="activeClass">
          Contact
        </NavLink>
        <NavLink to="/users" activeClassName="activeClass">
          Users
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
