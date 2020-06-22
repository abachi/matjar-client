import allProducts from '../data/products';

const initialState = {
  products: allProducts,// @TODO: THIS ONLY FOR DEVELOPMENT
  currentProduct: null,
};

export default (state = initialState, action) => {
  let currentProduct;
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.product };

    case 'INCREASE_QUANTITY':
      currentProduct = { ...state.currentProduct };
      currentProduct.selectedQuantity += 1;
      return {
        ...state, products: [...state.products.map(p => {
          if (p.id === action.product.id) {
            p.selectedQuantity += 1;
          }
          return p;
        })],
        currentProduct
      }

    case 'DECREASE_QUANTITY':
      currentProduct = { ...state.currentProduct };
      currentProduct.selectedQuantity -= 1;
      if (currentProduct.selectedQuantity > 0) {

        return {
          ...state, products: [...state.products.map(p => {
            if (p.id === action.product.id) {
              p.selectedQuantity -= 1;
            }
            return p;
          })],
          currentProduct
        }
      }

    default:
      return state;
  }
}