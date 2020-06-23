import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../icons/logo.svg';
import OpenMenu from './OpenMenu';
import CartItemsCounter from './CartItemsCounter';
import NavMenu from './NavMenu';

export const HeaderNavigation = () => {
  const cartProducts = useSelector(({ cart }) => cart.products);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollEvent = () => setIsScrolled(window.scrollY > 100);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollEvent();
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      }
    });
  })

  return (
    <header className={`header ${isScrolled ? 'header-fixed' : ''}`}>
      <div className="container">
        <nav>
          <div className='logo-wrapper'>
            <Link to="/">
              <Logo title="Logo" fill="#fff" stroke="#1a202c" />
            </Link>
          </div>
          <OpenMenu />
          <NavMenu />
          <div className="user-details">
            <Link to="/cart" className="cart">
              <CartItemsCounter items={cartProducts} />
            </Link>
          </div>
        </nav>
      </div>
    </header >
  )
};

export default HeaderNavigation;