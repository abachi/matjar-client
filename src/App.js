import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from './pages/Home';
import Cart from './pages/Cart';
import FAQ from './pages/FAQ';
import Collection from './pages/Collection';
import NotFound from './pages/NotFound';

const stripePromise = loadStripe("pk_test_51GtsdCDZOgvDhP78eHla5TJvXhcVU2kXjNEyCl5pbDs1LKot0O60SbFIa6C2nwHAYJYWCxdp8fnXuiUGquTqvRDW00Da879ZrJ");

const CheckOut = () => {
  return (
    <Elements stripe={stripePromise}>
      <Cart />
    </Elements>
  );
}

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Home} exact />
        <Route path="/cart" component={CheckOut} exact />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/collection/:name" component={Collection} exact />
        <Route path='*' component={NotFound} exact />
      </Switch>
    </Router>
  );
}

export default App;
