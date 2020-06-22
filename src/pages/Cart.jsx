import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../actions/cart';
import CheckoutForm from '../components/CheckoutForm';
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  let total = 0;
  for (let p of cartItems) {
    total += p.price * p.selectedQuantity;
  }
  const removeItem = (item) => {
    // @TODO: remove from localStorage
    dispatch(removeCartItem(item));
  }
  return (
    <div className="cart-wrapper">
      <HeaderNavigation />
      <div className="container">
        <div className="cart-items">
          {cartItems.map((item, i) => {
            return (
              <div key={i} className="cart-item">
                <div className="cart-item__image">
                  <img src={item.image} alt={item.name} />
                </div>
                <h1 className="cart-item__name">{item.name}</h1>
                <p className="cart-item__quantity">{item.price} x {item.selectedQuantity}</p>
                <div>
                  <button className="cart-item__remove-btn" onClick={() => removeItem(item)}>X</button>
                </div>
              </div>
            );
          })}
          {total > 0 ? <div className="total-price">Total: {total} USD</div> : <p className="empty-cart-text">The cart is empty</p>}
          {cartItems.length > 0 && <CheckoutForm products={cartItems} />}
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Cart;