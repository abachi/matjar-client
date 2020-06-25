export default (products, minPrice, maxPrice) => {
  let result = products;
  if (minPrice && !isNaN(minPrice)) {
    result = result.filter(p => p.price >= minPrice);
  }
  if (maxPrice && !isNaN(maxPrice) && maxPrice > 0) {
    result = result.filter(p => p.price <= maxPrice);
  }
  return result;
};