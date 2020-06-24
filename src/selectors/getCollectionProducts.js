export default (products, name) => {
  return products.filter(p => p.collection === name);
}