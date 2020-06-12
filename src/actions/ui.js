import products from '../data/products';

export const setCurrentProduct = (product) => ({
  type: 'SET_CURRENT_PRODUCT',
  product
});