import React from 'react';
import { Link } from 'react-router-dom';


const NavbarMenu = (props) => {
  return (
    <ul className="header-menu" {...props}>
      <li>
        <Link to="/shop">
          Shop
      </Link>
      </li>
      <li>
        <Link to="/blog">
          Blog
      </Link>
      </li>
      <li>
        <Link to="/about">
          About
      </Link>
      </li>
      <li>
        <Link to="/faq">
          FAQ
      </Link>
      </li>
    </ul>
  )
}
export default NavbarMenu;