import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../images/planet.png';

const Header = () => (
  <nav className="header-wrapper">
    <img src={Logo} alt="logo" />
    <div className="logo">
      <NavLink to="/" className="brand">
        Space Traveller Hub
      </NavLink>
    </div>
    <div className="nav-wrapper">
      <div className="navigation">
        <NavLink to="/" activeClassName="activeClass">
          Rockets
        </NavLink>
        <NavLink to="/mission" activeClassName="activeClass">
          Mission
        </NavLink>
        <NavLink to="/profile" activeClassName="activeClass">
          Profile
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
