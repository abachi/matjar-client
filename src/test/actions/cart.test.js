import { addProductToCart, removeCartItem } from '../../actions/cart';
import products from '../../data/products';

it('returns the correct add product to cart action', () => {
  expect(addProductToCart(products[0])).toEqual({
    type: 'ADD_PRODUCT_TO_CART',
    product: products[0],
  })
});

it('returns the correct remove item from cart action', () => {
  expect(removeCartItem(products[0])).toEqual({
    type: 'REMOVE_ITEM_FROM_CART',
    item: products[0],
  })
});