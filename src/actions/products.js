export const increaseQuantity = (product) => ({
  type: 'INCREASE_QUANTITY',
  product,
});

export const decreaseQuantity = (product) => ({
  type: 'DECREASE_QUANTITY',
  product
});

export const setCurrentProduct = (product) => ({
  type: 'SET_CURRENT_PRODUCT',
  product
});