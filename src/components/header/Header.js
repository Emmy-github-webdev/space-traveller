import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/planet.png';

const Header = () => (
  <nav className="header-wrapper">
    <img src={Logo} alt="logo" />
    <div className="brand">
      <h1>
        Space Traveller Hub
      </h1>
    </div>
    <div className="nav-wrapper">
      <div className="navigation">
        <NavLink to="/" exact activeClassName="active">
          Rockets
        </NavLink>
        <NavLink to="/mission" exact activeClassName="active">
          Mission
        </NavLink>
        <NavLink to="/profile" exact activeClassName="active">
          Profile
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
