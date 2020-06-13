
export default (state = {
  products: [],
}, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      let p = state.products.find(p => p.id === action.product.id);
      if (!!p) {
        if (p.selectedQuantity !== action.product.selectedQuantity) {
          const newProducts = [...state.products.map(p => {
            if (p.id === action.product.id) {
              p.selectedQuantity = action.product.selectedQuantity;
            }
            return p;
          })];
          return { ...state, products: newProducts };
        }
        return state;
      }
      const newProducts = [...state.products, action.product]
      return { ...state, products: newProducts };

    default:
      return state;
  }
};