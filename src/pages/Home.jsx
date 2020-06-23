import React from 'react';
import Header from '../components/Header';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import BestSales from '../components/BestSales';
import QuickView from '../components/QuickView';
import Footer from '../components/Footer';

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