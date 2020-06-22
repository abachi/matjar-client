import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const HeaderNavigation = () => {
  const cartProducts = useSelector(({ cart }) => cart.products);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollEvent = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollEvent();
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      }
    });
  })

  return (
    <div className={`header ${isScrolled ? 'header-fixed' : ''}`} style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <nav>
          <div className='logo-wrapper'>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="34.007" height="34" viewBox="0 0 34.007 34">
                <path id="logo" d="M32.508,5.037C31.959,4.582,28.962,1.96,28.4,1.5a3.257,3.257,0,0,0-2.05-.5H8.447a3.263,3.263,0,0,0-2.05.5c-.56.462-3.557,3.086-4.106,3.54a2.216,2.216,0,0,0-.863,2.119c.147.98,3.516,24.286,3.6,24.841a1.228,1.228,0,0,0,1.206,1H28.562a1.228,1.228,0,0,0,1.206-1c.087-.553,3.457-23.861,3.605-24.841A2.22,2.22,0,0,0,32.508,5.037ZM17.4,20.508c-6.043,0-7.336-8.171-7.6-9.854h3.418c.513,2.455,1.682,6.656,4.186,6.656s3.674-4.2,4.186-6.656H25C24.735,12.337,23.442,20.508,17.4,20.508ZM4.693,6.344,8.1,2.778H26.7l3.4,3.566Z" transform="translate(-0.397)" fill="#fff" stroke="#1a202c" stroke-width="2" />
              </svg>
            </Link>
          </div>
          <button className="mobile-menu-icon" onClick={(e) => {
            document.querySelector('.header-menu').classList.add('flex');
            document.querySelector('.mobile-close-icon').classList.add('inline-block');
            document.querySelector('.mobile-menu-icon').classList.add('hide');
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" with="32" height="32" viewBox="0 0 20 20"><path fill="#1A202C" d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z" /></svg>
          </button>
          <ul className="header-menu" >
            <button className="mobile-close-icon" onClick={(e) => {
              document.querySelector('.header-menu').classList.remove('flex');
              document.querySelector('.mobile-menu-icon').classList.remove('hide');
              document.querySelector('.mobile-close-icon').classList.remove('inline-block');
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" with="32" height="32" viewBox="0 0 20 20"><path fill="#1A202C" d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z" /></svg>
            </button>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">bout</Link>
            </li>
            <li>
              <Link to="/faq"> FAQ</Link>
            </li>
          </ul>
          <div className="user-details">
            {/* <Link to="/user" className="user">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28.383" viewBox="0 0 26 28.383">
                <path id="user" d="M9.967,2.791A4.174,4.174,0,0,0,8.315,6.245c.085,1.039.3,2.391.3,2.391s-.417.227-.417,1.139c.145,2.289.911,1.3,1.068,2.305.379,2.419,1.244,1.988,1.244,3.308,0,2.2-.907,3.227-3.737,4.445S1,22.6,1,25.263V26.6H25V25.263c0-2.667-2.929-4.207-5.771-5.429s-3.735-2.245-3.735-4.445c0-1.32.863-.889,1.243-3.308.159-1,.923-.016,1.071-2.305,0-.912-.419-1.139-.419-1.139s.211-1.352.295-2.391a4.12,4.12,0,0,0-3.067-4.128c-.444-.453-.744-1.175.621-1.9C12.252.079,11.557,1.642,9.967,2.791Z" transform="translate(0 0.787)" fill="none" stroke="#1a202c" stroke-width="2" />
              </svg>
            </Link> */}
            <Link to="/cart" className="cart">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                  <path id="shopping-cart" d="M17.333,22.333A2.667,2.667,0,1,0,20,19.667,2.666,2.666,0,0,0,17.333,22.333ZM4,22.333a2.667,2.667,0,1,0,2.667-2.667A2.667,2.667,0,0,0,4,22.333ZM8.729,15.9,23.487,11.68A.752.752,0,0,0,24,11V3.667H5.333V1.533A.535.535,0,0,0,4.8,1H.532A.535.535,0,0,0,0,1.533V3.667H2.667L5.213,15.609l.12,1.257v2.2a.536.536,0,0,0,.533.533h17.6A.537.537,0,0,0,24,19.065V17H9C7.469,17,7.437,16.265,8.729,15.9Z" transform="translate(1)" fill="none" stroke="#1a202c" stroke-width="2" />
                </svg>
              </span>
              {cartProducts.length > 0 && <span className="items-quantity">{cartProducts.length}</span>}
            </Link>
          </div>
        </nav>
      </div>
    </div >
  )
};

export default HeaderNavigation;