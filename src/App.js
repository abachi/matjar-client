import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// import PublicRoute from './routers/PublicRoute';
// import PrivateRoute from './routers/PrivateRoute';
// import Login from './components/Login';
import Home from './components/Home';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
