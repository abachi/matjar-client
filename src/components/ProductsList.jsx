import React from 'react';
import Product from './Product';

export const ProductsList = ({ products }) => {
  return (
    <div className="container">
      <div className="products-list">
        {products.map((product, i) => <Product key={i} product={product} />)}
      </div>
    </div>
  )
};

export default ProductsList;