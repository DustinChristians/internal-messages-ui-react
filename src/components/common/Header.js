import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/messages" activeStyle={activeStyle}>
        Messages
      </NavLink>
      {' | '}
      <NavLink to="/Login" activeStyle={activeStyle}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
