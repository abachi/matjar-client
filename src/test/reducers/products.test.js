import productsReducer from '../../reducers/products';
import products from '../../data/products';

it('should set the current product with the given product', () => {
  const action = {
    type: 'SET_CURRENT_PRODUCT',
    product: products[0]
  };
  const initState = {
    products: products,
    currentProduct: null
  };
  const state = productsReducer(initState, action);

  expect(state.products).toEqual(products);
  expect(state.currentProduct).toBe(products[0]);
});

it('should increase the selected product quantity', () => {
  const action = {
    type: 'INCREASE_QUANTITY',
    product: products[2]
  };
  const initState = {
    products: products,
    currentProduct: products[2]
  };
  expect(products[2].selectedQuantity).toEqual(1);
  const state = productsReducer(initState, action);
  expect(state.products[2].selectedQuantity).toEqual(2);
});

it('should decrease the selected product quantity', () => {
  const action = {
    type: 'DECREASE_QUANTITY',
    product: products[3]
  };
  const initState = {
    products: products,
    currentProduct: products[3]
  };
  products[3] = { ...products[3], selectedQuantity: 2 };
  expect(products[3].selectedQuantity).toEqual(2);
  const state = productsReducer(initState, action);
  expect(state.products[3].selectedQuantity).toEqual(1);
});