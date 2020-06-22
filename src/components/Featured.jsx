import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../actions/products';
import { featured } from '../data/products';

const Featured = () => {
  const dispatch = useDispatch();
  return (
    <div className="featured">
      <h1 className="section-title">Featured</h1>
      <div className="container">
        <div className="featured-gallery">
          {featured.map((product, i) => {
            return (
              <button
                key={i}
                className={`featured-gallery__product product-${i + 1}`}
                onClick={() => dispatch(setCurrentProduct(product))}>
                <img src={product.image} alt={product.name} />
                <div className="overlay"></div>
                <div className="content">
                  <h2>{product.name}</h2>
                  <h3>${product.price} USD</h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  )
};

export default Featured;