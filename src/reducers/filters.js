export default (state = {
  tag: 'all',
  minPrice: 0,
  maxPrice: 0,
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