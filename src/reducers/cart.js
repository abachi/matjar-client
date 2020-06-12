
export default (state = {
  quantity: 0
}, action) => {
  let quantity = 0;
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      quantity = state.quantity + 1;
      return { ...state, quantity };
    case 'DECREASE_QUANTITY':
      quantity = state.quantity - 1;
      quantity = quantity < 0 ? 0 : quantity;
      return { ...state, quantity };
    default:
      return state;
  }
};