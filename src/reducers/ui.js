export default (state = {
  currentProduct: null
}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.product };
    default:
      return state;
  }
};