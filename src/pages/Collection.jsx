import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import HeaderNavigation from '../components/HeaderNavigation';
import EmptyCollection from '../components/EmptyCollection';
import Product from '../components/Product';
import Footer from '../components/Footer';
import ProductsList from '../components/ProductsList';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as FilterIcon } from '../icons/filter.svg';

const Collection = () => {
  const { name } = useParams();
  const collection = useSelector(store => store.collections.find(c => c.name === name));
  const products = useSelector(store => store.products.products.filter(p => p.collection === name));

  return (
    <>
      <HeaderNavigation />
      {(!collection || products.length === 0) ? <EmptyCollection name={name} /> :
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
                <form>
                  <div className="search-group">
                    <input type="text" placeholder="Name, price..." />
                    <button className="feedback">
                      <SearchIcon width="18" height="18" fill="#4A5568" />
                    </button>
                  </div>
                  <ul className="sub-collections">
                    <li className="sub-collection__item">
                      <button className="active" onClick={() => console.log('All')}>All</button>
                    </li>
                    {collection.subCollections.map((item, i) => (
                      <li key={i} className="sub-collection__item">
                        <button onClick={() => console.log(item.name)}>{item.name}</button>
                      </li>
                    ))}
                  </ul>
                  <div className="price">
                    <input type="text" placeholder="min: $10" />
                    <input type="text" placeholder="min: $1000" />
                  </div>
                  <button className="collection_filter-hide" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('.collection__filter-wrapper').classList.remove('block');
                    document.querySelector('.collection_filter-show').classList.remove('hide');
                  }}>Close</button>
                </form>
              </div>
            </div>
          </div>
          <ProductsList products={products} />
        </div>}
      <Footer />
    </>
  )
};

export default Collection;