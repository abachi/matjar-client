import React from 'react';
import { Link } from 'react-router-dom';
import CloseMenu from './CloseMenu';
import { menuItems } from '../constants';

const NavMenu = () => {
  return (
    <ul className="header-menu" >
      <li><CloseMenu /></li>
      {menuItems.map(({ to, text, collections }, i) => (
        <li key={i}>
          {collections ? (
            <>
              <Link to={to}>{text}</Link>
              <ul className="header-menu__collections">
                {collections.map((name, i) => (
                  <li key={i}>
                    <Link to={`/collection/${name}`}>{name}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : <Link to={to}>{text}</Link>}
        </li>
      ))}
    </ul>
  )
};

export default NavMenu;