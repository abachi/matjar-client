import React from 'react';
import Header from './Header';
import Featured from './Featured';
import Testimonials from './Testimonials';
import BestSales from './BestSales';
import QuickView from './QuickView';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Featured />
      <Testimonials />
      <BestSales />
      {/* @TODO: Add a map */}
      <Footer />
      <QuickView />
    </>
  );
};

export default Home;