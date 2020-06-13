import cartReducer from '../../reducers/cart';
import products from '../../data/products';

it('should add the given product to the cart items', () => {
  const action = {
    type: 'ADD_PRODUCT_TO_CART',
    product: products[0]
  };
  const initState = {
    products: [],
  };

  const state = cartReducer(initState, action);
  expect(state.products.length).toEqual(1);
  expect(state.products).toEqual([
    products[0]
  ]);
});

it('should not duplicate the product and only change the quantity instead', () => {
  const action = {
    type: 'ADD_PRODUCT_TO_CART',
    product: { ...products[0], selectedQuantity: 5 }
  };
  const initState = {
    products: [
      products[0]
    ],
  };

  const state = cartReducer(initState, action);
  expect(state.products.length).toEqual(1);
  expect(state.products).toEqual([
    products[0]
  ]);
});