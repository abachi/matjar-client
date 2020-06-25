export default (products, searchText) => {
  if (searchText.trim().length > 0) {
    return products.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
  }
  return products;
}