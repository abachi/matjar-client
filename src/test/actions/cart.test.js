import { addProductToCart } from '../../actions/cart';
import products from '../../data/products';

it('returns the correct add product to cart action', () => {
  expect(addProductToCart(products[0])).toEqual({
    type: 'ADD_PRODUCT_TO_CART',
    product: products[0],
  })
});