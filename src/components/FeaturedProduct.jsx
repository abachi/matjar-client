import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../actions/products';

const FeaturedProduct = ({ product, i }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`featured-gallery__product product-${i + 1}`}
      onClick={() => dispatch(setCurrentProduct(product))}>
      <img src={product.image} alt={product.name} />
      <div className="overlay"></div>
      <div className="content">
        <h2 className="product-name">{product.name}</h2>
        <h3 className="product-price">${product.price} USD</h3>
      </div>
    </button>
  )
};

export default FeaturedProduct;