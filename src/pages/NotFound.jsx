import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="not-found">
        <div className="container">
          <h1>Not Found</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;