import {
  increaseQuantity,
  decreaseQuantity,
  setCurrentProduct
} from '../../actions/products';
import products from '../../data/products';

it("returns the correct quantity increase action", () => {
  expect(increaseQuantity(products[0])).toEqual({
    type: 'INCREASE_QUANTITY',
    product: products[0],
  })
});

it("returns the correct quantity decrease action", () => {
  expect(decreaseQuantity(products[0])).toEqual({
    type: 'DECREASE_QUANTITY',
    product: products[0],
  })
});

it("returns the correct set current product action", () => {
  expect(setCurrentProduct(products[0])).toEqual({
    type: 'SET_CURRENT_PRODUCT',
    product: products[0],
  })
});
