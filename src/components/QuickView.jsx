import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../actions/cart';
import { increaseQuantity, decreaseQuantity, setCurrentProduct } from '../actions/products';

export const QuickView = () => {
  const currentProduct = useSelector(state => state.products.currentProduct);
  const showQuickView = !!currentProduct;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const hideQuickView = useCallback(() => {
    dispatch(setCurrentProduct(null));
  }, [dispatch]);

  const decreaseQuantityHandler = () => {
    dispatch(decreaseQuantity(currentProduct));
  }

  const increaseQuantityHandler = () => {
    dispatch(increaseQuantity(currentProduct));
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      hideQuickView();
    }
  }, [hideQuickView]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
  if (!showQuickView) {
    return null;
  }

  return (
    <div className='quick-view'>
      <div className="quick-view__content">
        <div className="overlay" onClick={hideQuickView}></div>
        <div className="product">
          <div className="product__image">
            <img src={currentProduct.image} alt={currentProduct.name} />
          </div>
          <div className="product__details">
            <h1 className="product__name">{currentProduct.name}</h1>
            <p className="product__price">{currentProduct.price}</p>
            {/* @TODO: add rating */}
            <p className="product__description">{currentProduct.description}</p>
            <div className="product__size">
              <label>SIZE</label>
              <div className="group-input">
                <div className="size-input">
                  <select name="" id="">
                    <option value="xs">xs - 36</option>
                    <option value="sm">sm - 38</option>
                    <option value="m">m - 40</option>
                    <option value="l">l - 42</option>
                    <option value="xl">xl - 44</option>
                    <option value="xxl">xxl - 46</option>
                  </select>
                </div>
                <div className="quantity-input">
                  <button className="decrease" onClick={decreaseQuantityHandler}>-</button>
                  <input type="text" value={currentProduct.selectedQuantity} readOnly />
                  <button className="increase" onClick={increaseQuantityHandler}>+</button>
                </div>
              </div>
            </div>
            <div className="product__action">
              <button className="add-to-cart" onClick={() => handleAddToCart(currentProduct)}>Add To Cart</button>
            </div>
            <div className="product__action">
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;