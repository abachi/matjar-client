import getProductsBySearchText from '../selectors/getProductsBySearchText';
import getProductsWithTag from '../selectors/getProductsWithTag';
import getProductsInPrices from '../selectors/getProductsInPrices';

export const filterProducts = (products, { name, tag, maxPrice, minPrice, searchText }) => {
  let result = products;

  result = getProductsBySearchText(result, searchText);
  result = getProductsWithTag(result, tag);
  result = getProductsInPrices(result, minPrice, maxPrice);

  return result;
};


export default filterProducts;