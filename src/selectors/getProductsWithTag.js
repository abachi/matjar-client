export default (products, tag) => {
  if (tag.trim().length > 0) {
    return products.filter(p => p.tags && p.tags.includes(tag))
  };
  return products;
}