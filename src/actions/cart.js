
export const addProductToCart = (product) => ({
  type: 'ADD_PRODUCT_TO_CART',
  product
});

export const removeCartItem = (item) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  item
})