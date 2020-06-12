import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../actions/cart';
import { setCurrentProduct } from '../actions/ui';

export const QuickView = () => {
  const showQuickView = !!useSelector(state => state.ui.currentProduct);
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();
  const product = useSelector(state => state.ui.currentProduct);

  const hideQuickView = useCallback(() => {
    dispatch(setCurrentProduct(null));
  });
  const decreaseQuantityHandler = () => {
    dispatch(decreaseQuantity());
  }
  const increaseQuantityHandler = () => {
    dispatch(increaseQuantity());
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
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product__details">
            <h1 className="product__name">{product.name}</h1>
            <p className="product__price">{product.price}</p>
            {/* @TODO: add rating */}
            <p className="product__description">{product.description}</p>
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
                  <input type="text" value={quantity} readOnly />
                  <button className="increase" onClick={increaseQuantityHandler}>+</button>
                </div>
              </div>
            </div>
            <div className="product__action">
              <button className="add-to-cart">Add To Cart</button>
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