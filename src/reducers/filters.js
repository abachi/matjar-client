export default (state = {
  tag: 'all',
  minPrice: undefined,
  maxPrice: undefined,
  searchText: '',
}, action) => {

  switch (action.type) {
    case "SET_SEARCH_TEXT":
      const searchText = action.searchText;
      return { ...state, searchText };

    default:
      return state;
  }
}