import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart";
import uiReducer from "./reducers/ui";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      cart: cartReducer,
      ui: uiReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};