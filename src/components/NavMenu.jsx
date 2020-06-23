import React from 'react';
import { Link } from 'react-router-dom';
import CloseMenu from './CloseMenu';
import { menuItems } from '../constants';

const NavMenu = () => {
  return (
    <ul className="header-menu" >
      <li><CloseMenu /></li>
      {menuItems.map(({ to, text }, i) => (
        <li key={i}>
          <Link to={to}>{text}</Link>
        </li>
      ))}
    </ul>
  )
};

export default NavMenu;