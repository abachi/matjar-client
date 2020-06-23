import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as StripeIcon } from '../icons/powered-by-stripe.svg';
import { menuItems as links, socialMediaItems } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyrights">
            <div className='logo-wrapper'>
              <Link to="/">
                <Logo title="Logo" width="50.715" height="50.707" fill="#fff" stroke="#1a202c" />
              </Link>
            </div>
            <div>
              <p>All images are for demo purposes and all the rights are reserved to their owners.</p>
              <p className="copyrights__bottom">&copy; 2020, Matjar</p>
              <StripeIcon />
            </div>
          </div>
          <div className="helpful-links">
            <h1>Helpful Links</h1>
            <ul>
              {links.map(({ to, text }, i) => (
                <li key={i}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="newsletter">
            <h1>Newsletter</h1>
            <form>
              <div className="input-group">
                <input type="email" placeholder="jhon.doe@ewample.com" />
                <button className="feedback">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17.201" height="17.2" viewBox="0 0 17.201 17.2">
                    <path id="direction" d="M18.06,1.941c-.586-.586-1.144-.033-3.041.879C9.944,5.259,1.1,10.216,1.1,10.216L8.7,11.3l1.085,7.6s4.958-8.843,7.4-13.916C18.092,3.085,18.645,2.527,18.06,1.941ZM16.236,3.9,10.717,14.143l-.561-4.655Z" transform="translate(-1.1 -1.699)" fill="#4a5568" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="social-media-links">
            <h1>Social Media</h1>
            <ul>
              {socialMediaItems.map(({ icon: Icon, url }, i) => (
                <li key={i}>
                  <Link to={url}>{<Icon />}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer; 