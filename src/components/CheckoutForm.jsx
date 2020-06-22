import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm({ products }) {
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!stripe || !elements) return;
    const response = await fetch('/stripe/checkout', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        products
      })
    });
    const { client_secret } = await response.json();
    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });
    if (result.error) {
      setLoading(false);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setShowSuccessMessage(true);
      }
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      {showSuccessMessage && <h2 className="checkout-form__success-message">Payment has been made successful</h2>}
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <p className="payment-hint">To test payment enter Card Number: 4242 4242 4242 4242 CVC: Any 3 digits Date: Any future date <a href="https://stripe.com/docs/testing">More</a></p>
      <button className="checkout-form__confirm-order" disabled={!stripe}>
        {loading ? 'Loading...' : 'Confirm order'}
      </button>
    </form>
  );
}