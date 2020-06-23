import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import { featured } from '../data/products';

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="section-title">Featured</h1>
      <div className="container">
        <div className="featured-gallery">
          {featured.map((product, i) => <FeaturedProduct key={i} i={i} product={product} />)}
        </div>
      </div>
    </div>
  )
};

export default Featured;