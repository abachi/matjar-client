import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import HeaderNavigation from '../components/HeaderNavigation';
import EmptyCollection from '../components/EmptyCollection';
import QuickView from '../components/QuickView';
import Footer from '../components/Footer';
import ProductsList from '../components/ProductsList';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as FilterIcon } from '../icons/filter.svg';
import getCollectionProducts from '../selectors/getCollectionProducts';
import filterProducts from '../selectors/filterProducts';

const Collection = () => {
  const [searchText, setSearchText] = useState('');
  const [tag, setTag] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { name } = useParams();
  const collection = useSelector(store => store.collections.find(c => c.name === name));
  let products = useSelector(store => getCollectionProducts(store.products.products, name));
  products = filterProducts(products, {
    name,
    searchText,
    tag,
    minPrice,
    maxPrice
  });
  const handleSearchTextChange = (e) => setSearchText(e.target.value);
  const handleOnSubmit = (e) => e.preventDefault();
  const clearActiveClass = () => {
    const selected = document.querySelector('.sub-collection__item button.active');
    if (selected) {
      selected.classList.remove('active');
    }
  }
  const clearFilters = (e) => {
    e.preventDefault();
    setTag('');
    setSearchText('');
    setMinPrice('');
    setMaxPrice('');
    clearActiveClass();
  }
  const handleMinPriceChange = (e) => {
    const price = parseFloat(e.target.value.trim());
    const id = e.target.id;
    if (!isNaN(price)) {
      setMinPrice(price);
      return;
    }
    setMinPrice('');
  }
  const handleMaxPriceChange = (e) => {
    const price = parseFloat(e.target.value.trim());
    const id = e.target.id;
    if (!isNaN(price)) {
      setMaxPrice(price);
      return;
    }
    setMaxPrice('');
  }
  return (
    <>
      <HeaderNavigation />
      {(!collection) ? <EmptyCollection name={name} /> :
        <div className="collection">
          <div className="collection__header">
            <img className="collection__header-background" src={collection.image} alt={collection.title} />
            <div className="overlay"></div>
            <h1 className="collection__name">{collection.name}</h1>
            <button className="collection_filter-show" onClick={() => {
              document.querySelector('.collection__filter-wrapper').classList.add('block');
              document.querySelector('.collection_filter-show').classList.add('hide');
            }}>
              <FilterIcon width="32" height="32" fill="#fff" />
            </button>
            <div className="container collection__filter-wrapper">
              <div className="collection__filter">
                <form onSubmit={handleOnSubmit}>
                  <div className="search-group">
                    <input type="text" placeholder="Search by name" onChange={handleSearchTextChange} value={searchText} />
                    <button className="feedback">
                      <SearchIcon width="18" height="18" fill="#4A5568" />
                    </button>
                  </div>
                  <ul className="sub-collections">
                    {collection.subCollections.map((item, i) => (
                      <li key={i} className="sub-collection__item">
                        <button onClick={(e) => {
                          clearActiveClass();
                          e.target.classList.add('active');
                          setTag(item.name);
                        }}>{item.name}</button>
                      </li>
                    ))}
                  </ul>
                  <div className="price">
                    <input id="min-price" type="text" value={minPrice} onChange={handleMinPriceChange} placeholder="min: e.g $10" />
                    <input id="max-price" type="text" value={maxPrice} onChange={handleMaxPriceChange} placeholder="max: e.g $1000" />
                  </div>
                  <button className="collection_filter-hide" onClick={(e) => {
                    document.querySelector('.collection__filter-wrapper').classList.remove('block');
                    document.querySelector('.collection_filter-show').classList.remove('hide');
                  }}>Close</button>
                  <button className="collection_filter-clear" onClick={clearFilters}>Clear</button>
                </form>
              </div>
            </div>
          </div>
          {products.length > 0 ? <ProductsList products={products} /> : <h2 className="empty-collection-message">No products</h2>}
        </div>}
      <QuickView />
      <Footer />
    </>
  )
};

export default Collection;