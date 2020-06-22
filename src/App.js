import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import PublicRoute from './routers/PublicRoute';
// import PrivateRoute from './routers/PrivateRoute';
// import Login from './components/Login';
import Home from './components/Home';
import Cart from './pages/Cart';
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
      </Switch>
    </Router>
  );
}

export default App;
