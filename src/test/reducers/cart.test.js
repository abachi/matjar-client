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

it('should remove an item from the cart', () => {
  const action = {
    type: 'REMOVE_ITEM_FROM_CART',
    item: products[0]
  };
  const initState = {
    products,
  };
  const len = products.length;

  const state = cartReducer(initState, action);
  expect(state.products.length).toEqual(len - 1);
  expect(state.products).toEqual(
    products.filter(p => p.id !== products[0].id)
  );
});