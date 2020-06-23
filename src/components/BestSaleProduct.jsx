import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../actions/products';

const BestSaleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image, currency } = product;
  return (
    <button className="best-sales__product" onClick={() => dispatch(setCurrentProduct(product))}>
      <div className="image-wrapper">
        <img src={image} alt={name} />
        <div className="overlay"></div>
        <div className="overlay-content">
          <p>Quick View</p>
        </div>
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
        <h3 className="price">{currency}{price} USD</h3>
      </div>
    </button>
  );
}

export default BestSaleProduct;