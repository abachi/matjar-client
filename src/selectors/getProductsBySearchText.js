export default (products, searchText) => {
  if (searchText.length > 0) {
    const ps = products.filter(p => p.name.includes(searchText));
    console.log('ps: ', ps);
    return ps;
  }
  return products;
}