import React from 'react';
import ProductsList from './ProductsList';
import bestSales from '../data/products';

export const BestSales = () => {
  return (
    <div className="best-sales">
      <h1 className="section-title">Best Sales</h1>
      <ProductsList products={bestSales} />
      <div className="container">
        <div className="explore-all-wrapper">
          <button className="button explore-all">EXPLORE ALL</button>
        </div>
      </div>
    </div>
  )
};

export default BestSales;