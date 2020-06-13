import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../actions/products';
import bestSales from '../data/products';

export const BestSales = () => {
  const dispatch = useDispatch();
  return (
    <div className="best-sales">
      <h1 className="section-title">Best Sales</h1>
      <div className="container">
        <div className="best-sales__products">
          {bestSales.map((product, i) => (
            <button key={i} className="best-sales__product" onClick={() => dispatch(setCurrentProduct(product))}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="overlay"></div>
                <div className="overlay-content">
                  <p>Quick View</p>
                </div>
              </div>
              <div className="details">
                <h2 className="name">{product.name}</h2>
                <h3 className="price">{product.price}</h3>
              </div>
            </button>
          ))}
        </div>
        <div className="explore-all-wrapper">
          <button className="button explore-all">EXPLORE ALL</button>
        </div>
      </div>
    </div>
  )
};

export default BestSales;