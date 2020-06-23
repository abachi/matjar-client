import React from 'react';
import BestSaleProduct from './BestSaleProduct';
import bestSales from '../data/products';

export const BestSales = () => {
  return (
    <div className="best-sales">
      <h1 className="section-title">Best Sales</h1>
      <div className="container">
        <div className="best-sales__products">
          {bestSales.map((product, i) => <BestSaleProduct key={i} product={product} />)}
        </div>
        <div className="explore-all-wrapper">
          <button className="button explore-all">EXPLORE ALL</button>
        </div>
      </div>
    </div>
  )
};

export default BestSales;